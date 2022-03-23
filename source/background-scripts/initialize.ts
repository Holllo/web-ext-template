import browser from 'webextension-polyfill';

async function browserActionClicked() {
  await browser.runtime.openOptionsPage();
}

if (import.meta.env.VITE_BROWSER === 'chromium') {
  browser.action.onClicked.addListener(browserActionClicked);
} else {
  browser.browserAction.onClicked.addListener(browserActionClicked);
}

browser.runtime.onInstalled.addListener(async () => {
  console.debug('WebExtension Template has been installed!');

  if (import.meta.env.DEV) {
    await browser.runtime.openOptionsPage();
  }
});
