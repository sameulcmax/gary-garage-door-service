const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:'new', args:['--no-sandbox','--disable-dev-shm-usage']});
  const page = await browser.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.setViewport({width:390,height:844});
  await page.goto('http://localhost:4173/',{waitUntil:'networkidle0'});
  await page.click('button[aria-label="Open menu"]');
  await new Promise(r=>setTimeout(r,250));
  await page.click('#mobile-navigation summary');
  await new Promise(r=>setTimeout(r,200));
  await page.evaluate(()=>{
    const a=[...document.querySelectorAll('#mobile-navigation a')].find(x=>x.getAttribute('href')==='#/services/garage-door-repair');
    a.click();
  });
  await new Promise(r=>setTimeout(r,600));
  console.log('hash:', await page.evaluate(()=>location.hash));
  console.log('h1:', await page.evaluate(()=>document.querySelector('h1').innerText));
  console.log('menu:', !!(await page.$('#mobile-navigation')));
  console.log('scrolltop:', await page.evaluate(()=>window.scrollY));
  // phone links count / validity
  const links = await page.evaluate(()=>[...document.querySelectorAll('a[href^="tel:"]')].map(a=>a.getAttribute('href')));
  console.log('tel links:', [...new Set(links)]);
  console.log('errors:', errors);
  await browser.close();
})();
