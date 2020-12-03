self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/a2hs/',
       '/a2hs/index.html',
       '/a2hs/index.js',
       '/a2hs/style.css',
       '/a2hs/images/fox1.jpg',
       '/a2hs/images/fox2.jpg',
       '/a2hs/images/fox3.jpg',
       '/a2hs/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
