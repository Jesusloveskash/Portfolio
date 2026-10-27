import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve,extname,sep} from 'node:path';
const root=fileURLToPath(new URL('.',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.pdf':'application/pdf','.webp':'image/webp','.png':'image/png','.ogg':'audio/ogg','.woff2':'font/woff2','.ttf':'font/ttf','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
const rootFiles=new Set(['index.html','style.css','script.js','resume.pdf','robots.txt','sitemap.xml']);
createServer(async(req,res)=>{try{
 const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 const path=resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
 const relative=path.slice(root.length);const ext=extname(path);
 const allowed=rootFiles.has(relative)||(relative.startsWith('content/')&&ext==='.js')||(relative.startsWith('blog/')&&['.html','.css'].includes(ext))||(relative.startsWith('public/assets/')&&['.webp','.png','.svg','.pdf','.ogg','.woff2','.ttf'].includes(ext));
 if(!path.startsWith(root.endsWith(sep)?root:root+sep)||!allowed){res.writeHead(404).end('Not found');return}
 const body=await readFile(path);
 const headers={'Content-Type':types[ext]||'application/octet-stream','Content-Length':body.length,'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; media-src 'self'; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; frame-ancestors 'self'"};
 if(ext==='.ogg'){
  headers['Accept-Ranges']='bytes';
  if(req.headers.range){
   const range=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);const size=body.length;
   const start=range?(range[1]?Number(range[1]):Math.max(0,size-Number(range[2]))):NaN;
   const end=range?(range[1]&&range[2]?Math.min(Number(range[2]),size-1):size-1):NaN;
   if(!range||(!range[1]&&!range[2])||!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start<0||start>=size||end<start){res.writeHead(416,{...headers,'Content-Length':0,'Content-Range':`bytes */${size}`}).end();return}
   const chunk=body.subarray(start,end+1);res.writeHead(206,{...headers,'Content-Length':chunk.length,'Content-Range':`bytes ${start}-${end}/${size}`});if(req.method==='HEAD')res.end();else res.end(chunk);return;
  }
 }
 res.writeHead(200,headers);
 if(req.method==='HEAD')res.end();else res.end(body);
 }catch{res.writeHead(404).end('Not found')}}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Kash OS ready on port '+(process.env.PORT||3000)));
