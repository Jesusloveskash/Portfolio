import {readFile,stat,readdir} from 'node:fs/promises';
import {ownerProfile} from '../content/owner-profile.js';
import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url);
const source=['index.html','style.css','script.js','content/owner-profile.js','content/apps.js',...(await readdir(new URL('blog/',root))).map(n=>'blog/'+n)];
const prohibited=['RajNet','UK Realty','Investors Propmart','Imperium Marketing','Someone just booked','GITHUB_TOKEN=','BEGIN PRIVATE KEY','student ID'];
let scanned=0;
for(const file of source){const text=await readFile(new URL(file,root),'utf8');for(const token of prohibited)assert(!text.toLowerCase().includes(token.toLowerCase()),`Unapproved reference/secret token: ${token} in ${file}`);scanned++;}
assert.equal(ownerProfile.identity.fullName,'Kash Vinayak');assert.equal(ownerProfile.socials.length,2);assert.equal(ownerProfile.projects.length,7);
for(const project of ownerProfile.projects){assert(project.source&&project.outcome&&project.status);assert(!project.url||project.url.startsWith('https://'));}
for(const metric of ownerProfile.metrics){assert(['verified','client-reported','founder-reported','estimated','illustrative','private'].includes(metric.status));assert(metric.source&&metric.disclaimer);}
for(const asset of ['public/assets/illustrations/wallpaper.webp','public/assets/illustrations/kash-portrait.webp','public/assets/illustrations/pip-states.webp','public/assets/icons/apps.webp','public/assets/projects/cases.webp','public/assets/music/a-good-conversation.ogg','public/assets/music/the-scenic-route.ogg',ownerProfile.narration.src,ownerProfile.conversion.resume])assert((await stat(new URL(asset,root))).size>0,asset+' missing');
const html=await readFile(new URL('index.html',root),'utf8');assert(!html.includes('iframe'));assert(html.includes('rel="canonical"'));assert(!html.includes('analytics'));assert(html.includes('Kash Vinayak'));
console.log(`PASS content/identity/privacy audit: ${scanned} source/static files, 7 projects, 3 attributed metrics, 9 assets.`);
