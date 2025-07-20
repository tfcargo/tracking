const CACHE_NAME = 'tfcargo-cache-v1';
const urlsToCache = [
  '/',
  '/trackingorder/',
  '/trackingorder/index.html',
  '/trackingorder/manifest.json',
  '/trackingorder/icon-192.png',
  '/trackingorder/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});