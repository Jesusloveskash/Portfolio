import {chromium} from 'playwright';
import {spawn} from 'node:child_process';
import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
const port=3210,base=`http://127.0.0.1:${port}`;
const server=spawn(process.execPath,['server.mjs'],{cwd:new URL('../',import.meta.url),env:{...process.env,PORT:String(port)},stdio:'ignore'});
let browser;
try{
 for(let i=0;i<50;i++){try{if((await fetch(base)).ok)break}catch{}await new Promise(r=>setTimeout(r,100))}
 browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox','--autoplay-policy=user-gesture-required']});
 const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base);await page.waitForTimeout(300);await page.getByRole('button',{name:'Hear from Kash',exact:false}).click();const app=page.locator('[data-app=voice]');let clip=app.locator('audio');assert.equal(await clip.getAttribute('autoplay'),null);assert(await clip.evaluate(e=>e.paused&&e.currentTime===0));assert((await app.innerText()).includes('AI-generated'));await app.locator('summary').click();assert((await app.locator('.narration-transcript').innerText()).includes('self-proclaimed D1 yapper'));await clip.evaluate(e=>e.play());await page.waitForTimeout(400);assert(await clip.evaluate(e=>!e.paused&&e.currentTime>0));await app.getByRole('button',{name:'Minimize Voice Guide',exact:true}).click();assert(await clip.evaluate(e=>e.paused));await page.locator('#dock [data-open=voice]').click();assert(await clip.evaluate(e=>e.paused));
 await clip.evaluate(e=>e.play());await page.locator('.music-mini').click();await page.locator('#music-play').click();assert(await clip.evaluate(e=>e.paused));await page.locator('[data-app=music] .close-control').click();await app.locator('.window-titlebar').click();await clip.evaluate(e=>e.play());assert.equal(await page.locator('.music-mini.is-playing').count(),0);const handle=await clip.elementHandle();await app.locator('.close-control').click();assert(await handle.evaluate(e=>e.paused));
 await mkdir('/tmp/kash-os-qa',{recursive:true});
 await page.waitForTimeout(3300);for(const width of [1440,390,320]){await page.setViewportSize({width,height:900});await page.getByRole('button',{name:'Hear from Kash',exact:false}).click();assert(!await page.locator('[data-app=voice] .window-body').evaluate(e=>e.scrollWidth>e.clientWidth+1));await page.screenshot({path:`/tmp/kash-os-qa/narration-${width}.png`});await page.locator('[data-app=voice] .close-control').click()}
 await page.route('**/public/assets/voice/**',route=>route.abort());await page.getByRole('button',{name:'Hear from Kash',exact:false}).click();clip=page.locator('#kash-intro-audio');await clip.evaluate(e=>{e.src+='?failure-test=1';e.load();return e.play().catch(()=>{})});await page.waitForFunction(()=>document.querySelector('#narration-status').textContent.includes('could not load'));assert(await page.locator('.narration-transcript').count());await page.locator('[data-guide=projects]').click();assert((await page.locator('#guide-answer-text').innerText()).includes('Farallon'));assert.deepEqual(errors,[]);
 const response=await fetch(base+'/public/assets/voice/kash-introduction.mp3');assert.equal(response.status,200);assert(response.headers.get('content-type').includes('audio/mpeg'));
 console.log('PASS AI disclosure/transcript, no autoplay, real playback, minimize/close pause, music coordination, desktop/mobile layout, media-failure fallback, scripted answers, audio MIME.');
}finally{await browser?.close();server.kill()}
