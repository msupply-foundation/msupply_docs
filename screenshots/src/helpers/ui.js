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

// Runs a small script in the browser and returns an array of descriptors for
// every input/button on the page — what they are, how they're identified, and
// whether they're currently visible. Useful for figuring out why `findBy`
// couldn't locate an element.
export const describeFormElements = async (driver) => {
  return driver.executeScript(`
    const describe = (el) => {
      const r = el.getBoundingClientRect();
      const visible = r.width > 0 && r.height > 0 && el.offsetParent !== null;
      return {
        tag: el.tagName.toLowerCase(),
        type: el.getAttribute('type'),
        name: el.getAttribute('name'),
        id: el.id || null,
        placeholder: el.getAttribute('placeholder'),
        ariaLabel: el.getAttribute('aria-label'),
        className: el.className || null,
        text: (el.innerText || '').trim().slice(0, 80) || null,
        visible,
      };
    };
    const inputs = Array.from(document.querySelectorAll('input')).map(describe);
    const buttons = Array.from(document.querySelectorAll('button')).map(describe);
    return { url: location.href, title: document.title, inputs, buttons };
  `);
};
