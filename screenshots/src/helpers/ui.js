import { By } from 'selenium-webdriver';

export const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export const dismissToast = async (driver) => {
  try {
    const snackbarButton = await driver.findElement(By.css('.notistack-Snackbar button'));
    await snackbarButton.click();
    await sleep(300);
  } catch (_e) {
    // no toast to dismiss
  }
};

export const switchLanguage = async (driver, language) => {
  try {
    const languageSelector = await driver.findElement(By.className('language-selector'));
    await languageSelector.click();
    await sleep(300);
    const languageButton = await driver.findElement(By.name(language));
    if (await languageButton.isEnabled()) {
      await languageButton.click();
      await sleep(500);
      await dismissToast(driver);
      return true;
    }
  } catch (e) {
    console.warn(`  Could not switch language to ${language}: ${e.message}`);
  }
  return false;
};

export const findBy = async (driver, selectors) => {
  for (const selector of selectors) {
    try {
      return await driver.findElement(By.css(selector));
    } catch (_e) {
      // try next
    }
  }
  throw new Error(`None of the selectors matched: ${selectors.join(', ')}`);
};
