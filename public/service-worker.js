
const urlsToCache = [
    "/",
    "/index.html",
    "/js/app.js",
    "/js/chunk-vendors.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
    "https://rickandmortyapi.com/api/character?page=1",

];

const CACHE_NAME = "my-cache";


self.addEventListener("install", (event) => {

    const cache = caches.open(CACHE_NAME).then((cache) => {
        try{cache.addAll(urlsToCache);}
        catch(error){'Error al agregar recursos a la caché:', error}
        
    });
    event.waitUntil(cache);

});


self.addEventListener("fetch", (event) => {

    const request = event.request;

    event.respondWith(
        fetch(request)
        .then((networkResponse) => {

            if (networkResponse.ok) {

                console.log("Guardando en la caché:", request.url);

                const clonedResponse = networkResponse.clone();
                return caches.open(CACHE_NAME)
                        .then((cache) => {

                            cache.put(request, clonedResponse);
                            return networkResponse;
                        });

            }
            return networkResponse;
        })
        .catch((error) => {
            console.error("Error en la solicitud porque no hay internet y se usara el cache:");
            return caches.match(request);
        })
    );
});