const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:'new', args:['--no-sandbox','--disable-dev-shm-usage']});
  const page = await browser.newPage();
  const errors=[]; const failed=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  page.on('requestfailed',r=>failed.push(r.url()));
  page.on('response',r=>{ if(r.status()>=400) failed.push(r.status()+' '+r.url()); });
  for (const [w,h,label] of [[390,844,'mobile'],[320,700,'small'],[1440,900,'desktop']]) {
    await page.setViewport({width:w,height:h});
    await page.goto('http://localhost:4173/',{waitUntil:'networkidle0'});
    await new Promise(r=>setTimeout(r,400));
    const m = await page.evaluate(()=>{
      const imgs=[...document.images];
      return {sw:document.documentElement.scrollWidth, iw:innerWidth, brokenImgs:imgs.filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src), h1:getComputedStyle(document.querySelector('h1')).fontSize};
    });
    console.log(label, JSON.stringify(m));
    await page.screenshot({path:`.qa/final-${label}-hero.png`});
    if (label!=='desktop') await page.screenshot({path:`.qa/final-${label}-full.png`, fullPage:true});
  }
  await page.setViewport({width:1440,height:900});
  await page.goto('http://localhost:4173/',{waitUntil:'networkidle0'});
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  await new Promise(r=>setTimeout(r,250));
  console.log('after skip link hash:', JSON.stringify(await page.evaluate(()=>location.hash)), 'focus:', await page.evaluate(()=>document.activeElement?.id));
  await page.evaluate(()=>location.hash='#/faq');
  await new Promise(r=>setTimeout(r,400));
  console.log('faq tel links:', await page.evaluate(()=>document.querySelectorAll('a[href^="tel:"]').length));
  console.log('errors:', errors, 'failed:', failed);
  await browser.close();
})();
