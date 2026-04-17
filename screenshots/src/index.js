import { Browser, Builder, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  loadDotEnv,
  requireEnv,
  processImage,
  dismissToast,
  switchLanguage,
  findBy,
  sleep,
} from './helpers/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

loadDotEnv(path.join(projectRoot, '.env'));

const configPath = path.join(projectRoot, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

if (process.env.MSUPPLY_BASE_URL) config.baseUrl = process.env.MSUPPLY_BASE_URL;

config.login.username = requireEnv('MSUPPLY_USERNAME');
config.login.password = requireEnv('MSUPPLY_PASSWORD');

const args = process.argv.slice(2);
const onlyIndex = args.indexOf('--only');
const onlyFilter = onlyIndex !== -1 ? args[onlyIndex + 1] : null;

const buildUrl = (url) => `${config.baseUrl}${url}`;

const saveScreenshot = async (driver, screenshot, language) => {
  const raw = await driver.takeScreenshot();
  const buffer = Buffer.from(raw, 'base64');
  const processed = await processImage(buffer, screenshot);

  const languages = config.languages ?? ['en'];
  const suffix = languages.length > 1 ? `.${language}` : '';
  const outputDir = path.resolve(projectRoot, config.outputRoot, screenshot.outputPath);
  fs.mkdirSync(outputDir, { recursive: true });
  const file = path.join(outputDir, `${screenshot.filename}${suffix}.png`);
  fs.writeFileSync(file, processed);
  console.log(`  Saved ${path.relative(projectRoot, file)}`);
};

const captureScreenshot = async (driver, screenshot) => {
  console.log(`Capturing ${screenshot.id} from ${screenshot.url}`);
  await driver.get(buildUrl(screenshot.url));
  await driver.wait(until.urlContains(screenshot.url.split('?')[0]), 5000);
  await sleep(screenshot.waitMs ?? 800);
  await dismissToast(driver);

  const languages = config.languages ?? ['en'];
  for (const language of languages) {
    if (languages.length > 1) {
      await switchLanguage(driver, language);
    }
    await saveScreenshot(driver, screenshot, language);
  }
};

const login = async (driver) => {
  const loginCfg = config.login;
  const selectors = loginCfg.selectors ?? {};
  await driver.get(buildUrl(loginCfg.url));
  await driver.manage().setTimeouts({ implicit: 1000 });

  const userInput = await findBy(
    driver,
    selectors.username ?? ['input[name="username"]', 'input[type="text"]']
  );
  await userInput.sendKeys(loginCfg.username);

  const passwordInput = await findBy(
    driver,
    selectors.password ?? ['input[name="password"]', 'input[type="password"]']
  );
  await passwordInput.sendKeys(loginCfg.password);

  const loginButton = await findBy(
    driver,
    selectors.submit ?? ['button.MuiButton-outlinedPrimary', 'button[type="submit"]', 'form button']
  );
  await loginButton.click();

  await driver.wait(until.urlMatches(/\/dashboard/), 15000);
  await sleep(800);
  await dismissToast(driver);
};

const flattenGroups = (groups) => {
  const entries = [];
  if (!groups) return entries;
  for (const [groupName, subgroups] of Object.entries(groups)) {
    for (const [subgroupName, subgroup] of Object.entries(subgroups)) {
      const defaultPath = path.posix.join(groupName, subgroupName, 'images');
      const outputPath = subgroup.outputPath ?? defaultPath;
      for (const screenshot of subgroup.screenshots ?? []) {
        entries.push({
          ...screenshot,
          group: groupName,
          subgroup: subgroupName,
          id: `${groupName}/${subgroupName}/${screenshot.filename}`,
          outputPath,
        });
      }
    }
  }
  return entries;
};

const matchOnly = (entries, filter) => {
  const exact = entries.filter((e) => e.id === filter);
  if (exact.length) return exact;
  const prefix = filter.endsWith('/') ? filter : `${filter}/`;
  return entries.filter((e) => e.id.startsWith(prefix));
};

const run = async () => {
  const viewport = config.viewport ?? { width: 1920, height: 1080 };
  const options = new Options()
    .addArguments('--headless=new')
    .addArguments(`--window-size=${viewport.width},${viewport.height}`);

  const driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();

  try {
    await driver.manage().window().setRect({ width: viewport.width, height: viewport.height });
    await login(driver);

    const allEntries = flattenGroups(config.groups);
    const targets = onlyFilter ? matchOnly(allEntries, onlyFilter) : allEntries;

    if (onlyFilter && targets.length === 0) {
      console.error(`No screenshots matched "${onlyFilter}". Available ids:`);
      for (const e of allEntries) console.error(`  ${e.id}`);
      process.exitCode = 1;
      return;
    }

    for (const screenshot of targets) {
      try {
        await captureScreenshot(driver, screenshot);
      } catch (e) {
        console.error(`  Failed ${screenshot.id}: ${e.message}`);
      }
    }
  } finally {
    await driver.quit();
  }
};

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
