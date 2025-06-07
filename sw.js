const CACHE_NAME = 'firefighter-medic-v3-no-gif';

// Clear all existing caches on install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Intercept all fetch requests and prevent GIF/animation loading
self.addEventListener('fetch', event => {
  const url = event.request.url;
  
  // Block any GIF files or animation-related requests
  if (url.includes('.gif') || url.includes('flag') || url.includes('animation')) {
    event.respondWith(new Response('', { status: 204 }));
    return;
  }
  
  // Always fetch fresh from network, never serve cached content
  event.respondWith(
    fetch(event.request.clone(), {
      cache: 'no-cache',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    }).catch(() => {
      return new Response('Network error', { status: 503 });
    })
  );
});

// Force clear all caches on activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});