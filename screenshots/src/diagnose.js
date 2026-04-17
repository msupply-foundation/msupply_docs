import { Browser, Builder } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { loadDotEnv, sleep, describeFormElements } from './helpers/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

loadDotEnv(path.join(projectRoot, '.env'));

const config = JSON.parse(fs.readFileSync(path.join(projectRoot, 'config.json'), 'utf8'));
if (process.env.MSUPPLY_BASE_URL) config.baseUrl = process.env.MSUPPLY_BASE_URL;

const args = process.argv.slice(2);
const headless = args.includes('--headless');
const waitArg = args.indexOf('--wait');
const waitMs = waitArg !== -1 ? Number(args[waitArg + 1]) : 2000;

const printRow = (el) => {
  const ident =
    [
      el.id && `#${el.id}`,
      el.name && `[name="${el.name}"]`,
      el.type && `[type="${el.type}"]`,
      el.placeholder && `[placeholder="${el.placeholder}"]`,
      el.ariaLabel && `[aria-label="${el.ariaLabel}"]`,
    ]
      .filter(Boolean)
      .join('') || '(no identifying attributes)';
  const cls = el.className ? ` .${String(el.className).split(/\s+/).join('.')}` : '';
  const text = el.text ? `  "${el.text}"` : '';
  const vis = el.visible ? '' : '  [hidden]';
  console.log(`  ${el.tag}${ident}${cls}${text}${vis}`);
};

const run = async () => {
  const viewport = config.viewport ?? { width: 1920, height: 1080 };
  const options = new Options().addArguments(`--window-size=${viewport.width},${viewport.height}`);
  if (headless) options.addArguments('--headless=new');

  const driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
  try {
    const url = `${config.baseUrl}${config.login.url}`;
    console.log(`Opening ${url}`);
    await driver.get(url);
    await sleep(waitMs);

    const info = await describeFormElements(driver);
    console.log(`\nPage: ${info.title}`);
    console.log(`URL:  ${info.url}\n`);

    console.log(`Inputs (${info.inputs.length}):`);
    info.inputs.forEach(printRow);

    console.log(`\nButtons (${info.buttons.length}):`);
    info.buttons.forEach(printRow);

    const raw = await driver.takeScreenshot();
    const outPath = path.join(projectRoot, 'diagnose-login.png');
    fs.writeFileSync(outPath, Buffer.from(raw, 'base64'));
    console.log(`\nScreenshot saved to ${path.relative(projectRoot, outPath)}`);

    const currentSelectors = config.login.selectors ?? {};
    console.log('\nSelectors currently configured:');
    for (const [field, list] of Object.entries(currentSelectors)) {
      console.log(`  ${field}: ${JSON.stringify(list)}`);
    }

    if (!headless) {
      console.log('\nBrowser will stay open for 20s so you can inspect the DOM…');
      await sleep(20000);
    }
  } finally {
    await driver.quit();
  }
};

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
