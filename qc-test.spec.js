const { test, expect } = require('@playwright/test');
const path = require('path');

test('CPNS GO Ledger UI Interactive Test', async ({ page }) => {
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error(`Browser Error: ${msg.text()}`);
    } else {
      console.log(`Browser: ${msg.text()}`);
    }
  });
  
  page.on('pageerror', err => {
    console.error(`Page Error: ${err.message}`);
  });

  const filePath = `file://${path.resolve('public/index.html')}`;
  await page.goto(filePath);

  await expect(page).toHaveTitle(/CPNS GO/);
  await page.waitForTimeout(1000);

  const appLoc = page.locator('#app');
  const count = await appLoc.count();
  console.log(`Found #app element count: ${count}`);

  const dashboardCount = await page.locator('text=Vikram CPNS Aspirant').count();
  console.log(`Found dashboard elements: ${dashboardCount}`);
});