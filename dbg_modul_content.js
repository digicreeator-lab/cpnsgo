const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 390, height: 844 } });
  await p.goto('file://' + path.resolve('public/index.html'), { waitUntil: 'networkidle' });
  await p.click('nav a:has-text("Modul")');
  await p.waitForTimeout(1000);
  
  const content = await p.evaluate(() => {
    return {
      header: document.querySelector('header .truncate').innerText,
      progress: document.querySelectorAll('.glass-panel h2')[0].innerText,
      chips: Array.from(document.querySelectorAll('.overflow-x-auto button')).map(b => b.innerText),
      firstModule: document.querySelectorAll('article')[0]?.innerText.replace(/\n/g, ' ')
    };
  });
  console.log(content);
  await b.close();
})();