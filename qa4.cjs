const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:'new', args:['--no-sandbox','--disable-dev-shm-usage']});
  const page = await browser.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.setViewport({width:1440,height:900});
  await page.goto('http://localhost:4173/',{waitUntil:'networkidle0'});
  const hrefs = await page.evaluate(()=>[...new Set([...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')))]);
  console.log('internal targets:', hrefs);
  for (const h of hrefs) {
    await page.evaluate((hash)=>location.hash=hash, h.slice(1));
    await new Promise(r=>setTimeout(r,180));
    const res = await page.evaluate(()=>({h1:document.querySelector('h1')?.innerText||null, title:document.title, notFound:document.body.innerText.includes('Page Not Found')||document.body.innerText.includes('This page is not here')}));
    console.log(h, '->', JSON.stringify(res));
  }
  // footer screenshot via keyboard End
  await page.evaluate(()=>location.hash='#/about');
  await new Promise(r=>setTimeout(r,300));
  let prev=0;
  for (let i=0;i<40;i++){ await page.evaluate(()=>window.scrollBy(0,600)); await new Promise(r=>setTimeout(r,60)); }
  await new Promise(r=>setTimeout(r,400));
  await page.screenshot({path:'.qa/desktop-footer2.png'});
  await page.evaluate(()=>window.scrollTo(0,0));
  await new Promise(r=>setTimeout(r,250));
  await page.screenshot({path:'.qa/desktop-about.png'});
  await page.evaluate(()=>location.hash='#/faq');
  await new Promise(r=>setTimeout(r,450));
  await page.screenshot({path:'.qa/desktop-faq.png'});
  await page.setViewport({width:390,height:844});
  await page.evaluate(()=>location.hash='#/garage-doors');
  await new Promise(r=>setTimeout(r,450));
  for (let i=0;i<30;i++){ await page.evaluate(()=>window.scrollBy(0,500)); await new Promise(r=>setTimeout(r,50)); }
  await new Promise(r=>setTimeout(r,350));
  await page.screenshot({path:'.qa/mobile-footer2.png'});
  console.log('errors:', errors);
  await browser.close();
})();
