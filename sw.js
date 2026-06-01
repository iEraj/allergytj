var CACHE_VERSION = 'allergytj-v11';

var PRECACHE_URLS = [
  '/',
  '/index.html',
  '/lang/en.json',
  '/lang/ru.json',
  '/lang/tj.json',
  '/manifest.json',
  '/og-image.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

var API_HOSTS = [
  'api.open-meteo.com',
  'air-quality-api.open-meteo.com',
  'wttr.in'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return cache.addAll(PRECACHE_URLS);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) { return n !== CACHE_VERSION; })
             .map(function(n) { return caches.delete(n); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // Never intercept cross-origin API requests
  if (API_HOSTS.indexOf(url.hostname) !== -1) return;

  // Never intercept Vercel analytics
  if (url.pathname.indexOf('/_vercel/') === 0) return;

  // Never cache bot-only files
  if (url.pathname === '/robots.txt' || url.pathname === '/sitemap.xml') return;

  // Navigation requests (HTML): network-first, cache fallback
  if (event.request.mode === 'navigate' || url.pathname === '/' || url.pathname === '/index.html' || /^\/(en|ru|tj)(\/|$)/.test(url.pathname)) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_VERSION).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function() {
        return caches.match('/index.html').then(function(cached) {
          return cached || new Response('<!DOCTYPE html><html><body><h1>Offline</h1><p>Please connect to the internet.</p></body></html>',
            { headers: { 'Content-Type': 'text/html' } });
        });
      })
    );
    return;
  }

  // Language files: stale-while-revalidate
  if (url.pathname.indexOf('/lang/') === 0) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        var fetchPromise = fetch(event.request).then(function(response) {
          if (response && response.status === 200) {
            var clone = response.clone();
            caches.open(CACHE_VERSION).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        }).catch(function() {});
        return cached || fetchPromise;
      })
    );
    return;
  }

  // Everything else (icons, manifest, og-image): cache-first
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_VERSION).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      });
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        if (clientList[i].url.indexOf('/') !== -1 && 'focus' in clientList[i]) {
          return clientList[i].focus();
        }
      }
      return clients.openWindow('/');
    })
  );
});

self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
