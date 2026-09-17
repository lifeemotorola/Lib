/* Offline shell for the installable Easy School Liberia platform. */
/* Bump on every release that changes index.html/scripts — old cached
   shells (including the pre-proxy build that contained a baked-in key)
   are flushed on activate. */
var CACHE_NAME = "easy-school-liberia-v12";
var APP_SHELL = [
  "./index.html",
  "./book.html",
  "./book.js",
  "./manifest.webmanifest",
  "./assets/icons/favicon-48.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-maskable-512.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      /* Cache every shell entry on its own. cache.addAll would be
         all-or-nothing: one flaky download (a weak connection, a device
         low on storage, a blocked asset) used to make the whole install
         fail, leaving that device with no offline copy at all and no
         explanation. This way the parts that arrived still work, the
         install always completes, and the next visit fills in whatever
         was missing. */
      return Promise.all(APP_SHELL.map(function (url) {
        return cache.add(url).catch(function () { /* keep going */ });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.map(function (name) {
        return name === CACHE_NAME ? null : caches.delete(name);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* The cache key for a page: its path on this origin, without the query
   string (the app reads ?subject=… itself — it is still the same page). */
function pageKey(url) {
  return new URL(url).pathname;
}

/* Pages are network-first while there is a connection so fixes reach
   devices, with a per-page offline fallback: the requested page if it
   was cached, then the app shell. Storing each page under its own key
   matters — an earlier build stored every navigation under
   "./index.html", so a device that had once opened the duplex book tool
   (or followed a redirect) could get the wrong page back offline. */
function navigate(request) {
  var key = pageKey(request.url);
  return fetch(request).then(function (response) {
    if (response.ok) {
      var copy = response.clone();
      caches.open(CACHE_NAME).then(function (cache) { cache.put(key, copy); });
    }
    return response;
  }).catch(function () {
    return caches.match(key).then(function (page) {
      if (page) return page;
      return caches.match("./index.html");
    });
  });
}

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(navigate(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      return cached || fetch(event.request).then(function (response) {
        if (response.ok) {
          var copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
        }
        return response;
      });
    })
  );
});
