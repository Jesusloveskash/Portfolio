import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import {spawn} from 'node:child_process';
import assert from 'node:assert/strict';
const base='http://127.0.0.1:3232';const server=spawn(process.execPath,['server.mjs'],{env:{...process.env,PORT:'3232'},stdio:'ignore'});let browser;
try{
 for(let i=0;i<40;i++){try{if((await fetch(base)).ok)break}catch{}await new Promise(r=>setTimeout(r,100))}
 browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 for(const width of [320,390,768,1440]){
  const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(base);await page.locator('#boot').waitFor({state:'hidden'});
  assert.equal(await page.locator('#app-grid .section-card').count(),5);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.locator('#app-grid [data-open=projects]').click();await page.locator('[data-app=projects]').waitFor();
  for(const target of ['experience','systems','proof','kash','faq','journey','achievements','notes','travel','contact','calendar','socials']){
   await page.locator('.section-navigation [data-section-target='+target+']').click();await page.locator('[data-app='+target+']').waitFor();assert.equal(await page.locator('.app-window').count(),1);
   const body=page.locator('[data-app='+target+'] .window-body');assert((await body.boundingBox()).height>100);assert(await page.locator('.app-window').evaluate(el=>el.getBoundingClientRect().right<=innerWidth));
   assert.equal(await page.locator('.section-subtabs [aria-current=page]').count(),1);
  }
  await page.locator('.section-tabs [data-section-target=projects]').focus();await page.keyboard.press('Enter');await page.locator('[data-app=projects]').waitFor();assert.equal(await page.locator('.project-card').count(),8);
  const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa']).analyze();assert.deepEqual(axe.violations,[]);
  assert.deepEqual(errors,[]);if(width===1440){await page.locator('[data-app=projects] .close-control').click();await page.screenshot({path:'review/organized-desktop.png',fullPage:true})}if(width===390)await page.screenshot({path:'review/organized-mobile.png',fullPage:true});await context.close();
 }
 console.log('PASS five entry points; all 13 grouped pages; keyboard navigation; one-window transitions; four viewports; WCAG A/AA; eight projects retained.');
}finally{await browser?.close();server.kill()}
