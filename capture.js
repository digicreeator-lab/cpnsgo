const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Load local file
  const fileUrl = 'file://' + path.resolve('public/index.html');
  await page.goto(fileUrl, { waitUntil: 'networkidle' });

  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '.impeccable/review/mobile.png', fullPage: true });

  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '.impeccable/review/desktop.png', fullPage: true });

  await browser.close();
})();
