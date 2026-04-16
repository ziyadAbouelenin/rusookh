const CACHE_NAME = 'rusookh-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // We don't cache the external audio API requests, only the app files
  if (!event.request.url.includes('api.alquran.cloud')) {
      event.respondWith(
        caches.match(event.request)
          .then(response => response || fetch(event.request))
      );
  }
});