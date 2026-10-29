const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:'new', args:['--no-sandbox','--disable-dev-shm-usage']});
  const page = await browser.newPage();
  await page.setViewport({width:390,height:844});
  await page.goto('http://localhost:4173/',{waitUntil:'networkidle0'});
  for (let i=0;i<30;i++){ await page.evaluate(()=>window.scrollBy(0,600)); await new Promise(r=>setTimeout(r,80)); }
  await new Promise(r=>setTimeout(r,800));
  console.log(await page.evaluate(()=>({
    broken:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),
    total:document.images.length,
    loaded:[...document.images].filter(i=>i.naturalWidth>0).length
  })));
  await page.evaluate(()=>window.scrollTo(0,0));
  await new Promise(r=>setTimeout(r,300));
  await page.screenshot({path:'.qa/final-mobile-hero.png'});
  await browser.close();
})();
