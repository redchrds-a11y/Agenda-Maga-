const CACHE_NAME = "mi-agenda-v1";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js"
];


self.addEventListener(
  "install",
  event => {

    event.waitUntil(

      caches.open(CACHE_NAME)
        .then(
          cache =>
            cache.addAll(ARCHIVOS)
        )

    );

    self.skipWaiting();

  }
);


self.addEventListener(
  "activate",
  event => {

    event.waitUntil(

      caches.keys()
        .then(
          nombres =>

            Promise.all(

              nombres
                .filter(
                  nombre =>
                    nombre !== CACHE_NAME
                )
                .map(
                  nombre =>
                    caches.delete(nombre)
                )

            )

        )

    );

    self.clients.claim();

  }
);


self.addEventListener(
  "fetch",
  event => {

    event.respondWith(

      caches.match(event.request)
        .then(
          respuesta =>

            respuesta ||
            fetch(event.request)
              .catch(
                () =>
                  caches.match(
                    "./index.html"
                  )
              )

        )

    );

  }
);
