const CACHE_NAME='mechanic-pwa-cache-v1';
const urlsToCache=['/','/index.html','/style.css','/manifest.json','/jobs.js','/qr.js'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{ e.waitUntil(self.clients.claim()); });

self.addEventListener('fetch',e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });