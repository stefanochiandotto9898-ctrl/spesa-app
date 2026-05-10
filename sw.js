const CACHE_NAME = 'spesa-app-v2';
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

// Intercetta le richieste di rete (Network first per script e dati, Cache fallback)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request).catch(() => {
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
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      if (windowClients.length > 0) {
        let client = windowClients[0];
        client.focus();
      } else {
        clients.openWindow('/');
      }
    })
  );
});
