var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './sidepage.html',

        './assets/css/main.css',

        './assets/images/AppIcons/16.png',
        './assets/images/AppIcons/20.png',
        './assets/images/AppIcons/29.png',
        './assets/images/AppIcons/32.png',
        './assets/images/AppIcons/40.png',
        './assets/images/AppIcons/60.png',
        './assets/images/AppIcons/128.png',
        './assets/images/AppIcons/144.png',
        './assets/images/AppIcons/152.png',
        './assets/images/AppIcons/167.png',
        './assets/images/AppIcons/180.png',
        './assets/images/AppIcons/256.png',
        './assets/images/AppIcons/512.png',
        './assets/images/AppIcons/1024.png',
        './assets/images/AppIcons/appstore.png',
        './assets/images/AppIcons/playstore.png',

        './assets/images/pic01.jpg',
        './assets/images/pic02.jpg',
        './assets/images/pic03.jpg',
        './assets/images/pic04.jpg',
        './assets/images/pic05.jpg',
        './assets/images/pic06.jpg',
        './assets/images/pic07.jpg',
        './assets/images/pic08.jpg',
        './assets/images/pic09.jpg',
        './assets/images/pic10.jpg',
        './assets/images/pic11.jpg',
        './assets/images/pic12.jpg',
        './assets/images/pic13.png',

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});