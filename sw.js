// FIX #12: bump this version string whenever you deploy an update.
// The browser will detect a changed SW file, install the new worker,
// and the activate handler will delete stale caches automatically.
const CACHE_VERSION = 'v11';
const CACHE_NAME    = `rusookh-cache-${CACHE_VERSION}`;

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  // Add icon files once they exist locally (FIX #13)
  // './icon-192.png',
  // './icon-512.png',
];

// ── Install: pre-cache core assets ──────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting()) // Activate immediately after install
  );
});

// ── Activate: remove old caches ─────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('rusookh-cache-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim()) // Take control of open pages immediately
  );
});

// ── Fetch: network-first for API, cache-first for app files ─────────────────
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Always go to the network for Quran audio API — never cache audio
  if (url.includes('api.alquran.cloud')) return;

  // Cache-first strategy for all app assets
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Only cache successful same-origin responses
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
