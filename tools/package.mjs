import {cp,mkdir,rm,writeFile,readdir,readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url),dist=new URL('../dist/',import.meta.url);
await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});
for(const file of ['index.html','style.css','script.js','robots.txt','sitemap.xml'])await cp(new URL(file,root),new URL(file,dist));
for(const dir of ['content','blog','public'])await cp(new URL(dir,root),new URL(dir,dist),{recursive:true});
await writeFile(new URL('.nojekyll',dist),'');
const tokens=['RajNet','UK Realty','Investors Propmart','Imperium Marketing','Someone just booked','BEGIN PRIVATE KEY'];
async function scan(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const url=new URL(entry.name+(entry.isDirectory()?'/':''),dir);if(entry.isDirectory())await scan(url);else if(/\.(html|css|js|xml|txt)$/.test(entry.name)){const text=await readFile(url,'utf8');for(const token of tokens)assert(!text.includes(token),'Reference identity in packaged output: '+token)}}}
await scan(dist);console.log('Packaged static site in dist/; source notes, tools, tests, Git metadata, and private attachments excluded.');
