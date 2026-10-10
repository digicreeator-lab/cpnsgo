const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    hasTouch: true
  });
  
  if (!fs.existsSync('screenshots/after')) {
    fs.mkdirSync('screenshots/after', { recursive: true });
  }

  const fileUrl = 'file://' + path.resolve('public/index.html');
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000); 

  // Output current auth state
  const user = await page.evaluate(() => {
    return window.vm.auth.user;
  });
  console.log('User auth object:', user);

  await browser.close();
})();
