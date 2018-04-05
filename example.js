// --- Sample code from https://github.com/GoogleChrome/puppeteer
//     const and async and await are all advanced Node functions

const puppeteer = require('puppeteer');

(async () => {
  // --- open a browser object, wait until it's open before next statement  
  const browser = await puppeteer.launch();
  console.log("-- browser object created.");
  // --- open a new blank browser page, you don't actually see a page. wait tills its open  
  //     before proceeding
  const page = await browser.newPage();
  console.log("-- Open a new blank page")
  // --- Open up the GeekMustHave web page, await until it's loaded before next command
  //     again you will not see any actual page, just imagine it's there
  await page.goto('https://GeekMustHave.com');
  console.log("-- Load example.com");
  //  --- Now do a screen shot of the imagined page
  await page.screenshot({path: 'example.png'});
  console.log("-- Snap a PNG of the web page");
  await browser.close();
  console.log("-- Close the browser out")
})();


