const CACHE_NAME = 'spesa-app-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon.png'
];

// Installa e metti in cache le risorse principali
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Attiva e pulisci le vecchie cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercetta le richieste di rete (Network first con caching dinamico per asset locali, Cache fallback per offline)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache dinamica per le icone locali SVG e i file JSON delle offerte/volantini
        const url = event.request.url;
        if (response.ok && (url.includes('/cibi-bevande/') || url.endsWith('.json') || url.includes('/volantini/'))) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

// Gestione Notifiche Push
self.addEventListener('push', (event) => {
  let title = 'Lista Aggiornata!';
  let body = 'Qualcuno ha modificato la lista della spesa.';
  
  if (event.data) {
    try {
      const data = event.data.json();
      if (data.title) title = data.title;
      if (data.body) body = data.body;
    } catch(e) {
      body = event.data.text();
    }
  }

  const options = {
    body: body,
    icon: 'icon.png',
    badge: 'icon.png',
    vibrate: [100, 50, 100],
    data: {
      url: '/'
    }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Click sulla notifica
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const action = event.action;
  const notificationData = event.notification.data || {};

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      let client = windowClients.length > 0 ? windowClients[0] : null;

      if (!client) {
        return clients.openWindow('/').then(newClient => {
          // Attendi che il client sia pronto per ricevere il messaggio
          if (newClient) {
            setTimeout(() => {
              newClient.postMessage({ type: 'NOTIFICATION_ACTION', action: action, data: notificationData });
            }, 1000);
          }
        });
      } else {
        client.focus();
        client.postMessage({ type: 'NOTIFICATION_ACTION', action: action, data: notificationData });
      }
    })
  );
});
