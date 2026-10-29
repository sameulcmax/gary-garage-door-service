const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: 'new', args:['--no-sandbox','--disable-dev-shm-usage']});
  const page = await browser.newPage();
  const errors = [];
  page.on('console', m => { if (m.type()==='error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push('PAGEERROR: '+e.message));
  const urlBase='http://localhost:4173/';
  const shots = [
    {name:'desktop-hero', w:1440, h:900, path:''},
    {name:'laptop-hero', w:1024, h:800, path:''},
    {name:'tablet-home', w:768, h:900, path:''},
    {name:'mobile-hero', w:390, h:844, path:''},
    {name:'mobile-small', w:320, h:700, path:''},
    {name:'desktop-home-full', w:1440, h:900, path:'', full:true},
    {name:'mobile-home-full', w:390, h:844, path:'', full:true},
    {name:'desktop-services', w:1440, h:900, path:'#/services', full:false},
    {name:'mobile-contact', w:390, h:844, path:'#/contact', full:false},
    {name:'desktop-service-detail', w:1440, h:900, path:'#/services/garage-door-repair', full:false},
    {name:'tablet-services', w:834, h:1000, path:'#/services', full:false},
  ];
  for (const s of shots) {
    await page.setViewport({width:s.w, height:s.h, deviceScaleFactor:1});
    await page.goto(urlBase+s.path, {waitUntil:'networkidle0'});
    await new Promise(r=>setTimeout(r,450));
    const metrics = await page.evaluate(()=>({
      sw: document.documentElement.scrollWidth,
      iw: window.innerWidth,
      bodyH: document.body.scrollHeight,
      h1: document.querySelector('h1')?.innerText,
      title: document.title,
      bar: !!document.querySelector('[aria-label="Quick contact actions"]'),
      headerH: document.querySelector('header')?.getBoundingClientRect().height,
    }));
    console.log(s.name, JSON.stringify(metrics));
    await page.screenshot({path:`/tmp/${s.name}.png`, fullPage: !!s.full});
  }
  console.log('ERRORS:', JSON.stringify(errors));
  await browser.close();
})();
