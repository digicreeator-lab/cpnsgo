const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('pageerror', exception => {
    console.log(`Uncaught exception: "${exception}"`);
  });
  page.on('console', msg => console.log(msg.text()));
  await page.goto('file://' + __dirname + '/public/index.html');
  await browser.close();
})();
