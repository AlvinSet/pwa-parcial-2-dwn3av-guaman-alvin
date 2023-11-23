
const urlsToCache = [
    
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",

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

    const networkResponse = fetch(request)
        .then((networkResponse) => {

            if (networkResponse.ok) {

                console.log("Guardando en la caché:", request.url);

                const clonedResponse = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {

                    cache.put(request, clonedResponse);

                });

            }
            return networkResponse;
        })
        .catch((error) => {
            console.error("Error en la solicitud porque no hay internet y se usara el cache:");
            return caches.match(request);
        });

    event.respondWith(networkResponse);
});