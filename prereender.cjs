const fs = require('fs');
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:'new', args:['--no-sandbox','--disable-dev-shm-usage']});
  const page = await browser.newPage();
  await page.setViewport({width:1440,height:900});
  await page.goto('http://localhost:4173/',{waitUntil:'networkidle0'});
  await new Promise(r=>setTimeout(r,600));
  const html = await page.evaluate(()=>document.getElementById('root').innerHTML);
  await browser.close();
  const file = 'dist/index.html';
  let doc = fs.readFileSync(file,'utf8');
  if (!doc.includes('<div id="root"></div>')) { console.error('root placeholder not found'); process.exit(1); }
  doc = doc.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  fs.writeFileSync(file, doc);
  console.log('prerendered homepage snapshot injected:', html.length, 'chars; dist size', (fs.statSync(file).size/1024).toFixed(1), 'kB');
})();
