const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 390, height: 844 } });
  await p.goto('file://' + path.resolve('public/index.html'), { waitUntil: 'networkidle' });
  await p.waitForTimeout(1200);

  // Take a screenshot of the dashboard before clicking
  await p.screenshot({ path: 'screenshots/before-click-modul.png', fullPage: true });

  // Find the exact bottom nav Modul element and click it
  const modulNavs = await p.$$('nav a:has-text("Modul")');
  console.log("Found Modul nav buttons: " + modulNavs.length);
  await modulNavs[0].click();
  
  await p.waitForTimeout(1000);
  
  const state = await p.evaluate(() => {
    const app = document.querySelector('#app').__vue_app__._instance.proxy;
    return {
      currentView: app.currentView,
      activeCategoryCode: app.activeCategoryCode
    };
  });
  console.log("State after click:", state);
  await p.screenshot({ path: 'screenshots/after-click-modul.png', fullPage: true });

  await b.close();
})();