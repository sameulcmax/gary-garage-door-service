const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:'new', args:['--no-sandbox','--disable-dev-shm-usage']});
  const page = await browser.newPage();
  const errors=[];
  page.on('pageerror', e=>errors.push('PAGEERROR '+e.message));
  page.on('console', m=>{if(m.type()==='error')errors.push(m.text())});
  await page.setViewport({width:1440,height:900});
  await page.goto('http://localhost:4173/',{waitUntil:'networkidle0'});
  // services dropdown
  await page.click('button[aria-controls="desktop-services-panel"]');
  await new Promise(r=>setTimeout(r,250));
  const panel = await page.$('#desktop-services-panel');
  console.log('desktop dropdown visible:', !!panel);
  await page.screenshot({path:'.qa/desktop-dropdown.png'});
  await page.keyboard.press('Escape');
  await new Promise(r=>setTimeout(r,150));
  console.log('dropdown closed:', !(await page.$('#desktop-services-panel')));
  // navigate via services page
  await page.goto('http://localhost:4173/#/services',{waitUntil:'networkidle0'});
  await page.click('a[aria-label="Garage Door Repair — learn more"]');
  await new Promise(r=>setTimeout(r,400));
  console.log('service route:', await page.evaluate(()=>location.hash), '| h1:', await page.evaluate(()=>document.querySelector('h1').innerText));
  // scroll to footer
  await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
  await new Promise(r=>setTimeout(r,400));
  await page.screenshot({path:'.qa/desktop-footer.png'});
  // mobile menu
  await page.setViewport({width:390,height:844});
  await page.goto('http://localhost:4173/',{waitUntil:'networkidle0'});
  await page.click('button[aria-label="Open menu"]');
  await new Promise(r=>setTimeout(r,350));
  console.log('mobile menu open:', !!(await page.$('#mobile-navigation')));
  console.log('body overflow hidden:', await page.evaluate(()=>document.body.style.overflow));
  await page.screenshot({path:'.qa/mobile-menu.png'});
  await page.click('#mobile-navigation summary');
  await new Promise(r=>setTimeout(r,250));
  await page.screenshot({path:'.qa/mobile-menu-services.png'});
  await page.click('#mobile-navigation a[aria-label]'); // unlikely
  await page.evaluate(()=>{const links=[...document.querySelectorAll('#mobile-navigation a')]; const t=links.find(a=>a.textContent.trim()==='Garage Door Repair'); t && t.click();});
  await new Promise(r=>setTimeout(r,450));
  console.log('after menu link:', await page.evaluate(()=>location.hash), 'menu closed:', !(await page.$('#mobile-navigation')));
  // contact helper
  await page.goto('http://localhost:4173/#/contact',{waitUntil:'networkidle0'});
  await page.type('#contact-name','Test Homeowner');
  await page.type('#contact-phone','5551234567');
  await page.type('#contact-message','Door is noisy and stops halfway.');
  await page.click('form button[type="submit"]');
  await new Promise(r=>setTimeout(r,250));
  const summary = await page.$eval('#contact-summary', el=>el.value);
  console.log('summary built:\n'+summary);
  await page.evaluate(()=>document.getElementById('contact-summary').scrollIntoView());
  await new Promise(r=>setTimeout(r,250));
  await page.screenshot({path:'.qa/mobile-contact-summary.png'});
  // mobile full-page footer
  await page.goto('http://localhost:4173/',{waitUntil:'networkidle0'});
  await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
  await new Promise(r=>setTimeout(r,400));
  await page.screenshot({path:'.qa/mobile-footer.png'});
  console.log('ERRORS:', errors);
  await browser.close();
})();
