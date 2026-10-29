const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:'new', args:['--no-sandbox','--disable-dev-shm-usage']});
  const page = await browser.newPage();
  await page.setViewport({width:320,height:700});
  await page.goto('http://localhost:4173/',{waitUntil:'networkidle0'});
  await new Promise(r=>setTimeout(r,400));
  const bar = await page.$$eval('[aria-label="Quick contact actions"] a', els=>els.map(e=>({t:e.textContent.trim(), h:e.getBoundingClientRect().height, w:e.getBoundingClientRect().width})));
  console.log('bar', bar);
  await browser.close();
})();
