import browser from 'webextension-polyfill';

browser.browserAction.onClicked.addListener(async () => {
  await browser.runtime.openOptionsPage();
});

browser.runtime.onInstalled.addListener(async () => {
  console.debug('WebExtension Template has been installed!');

  if (import.meta.env.DEV) {
    await browser.runtime.openOptionsPage();
  }
});
