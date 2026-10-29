const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:'new', args:['--no-sandbox','--disable-dev-shm-usage']});
  const page = await browser.newPage();
  await page.setViewport({width:390,height:844});
  await page.goto('http://localhost:4173/',{waitUntil:'networkidle0'});
  for (let i=0;i<40;i++){ await page.evaluate(()=>window.scrollBy(0,500)); await new Promise(r=>setTimeout(r,120)); }
  await new Promise(r=>setTimeout(r,1500));
  console.log(await page.evaluate(async()=>{
    const imgs=[...document.images];
    await Promise.all(imgs.map(i=>i.decode().catch(e=>String(e))));
    return imgs.map(i=>({src:i.src.split('/').pop(), nw:i.naturalWidth, complete:i.complete, loading:i.loading}));
  }));
  await browser.close();
})();
