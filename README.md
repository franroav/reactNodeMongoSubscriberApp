# currencyBird

EndPoints:
subscription:
GET /api/subscription -> Retorna toda la lista con todos los suscriptor en un array.
GET /api/subscription/:id -> Retorna objeto con un suscriptor
PUT /api/subscription/:id -> Actualiza un suscriptor.
POST /api/subscription -> Añade un suscriptor.
POST /api/subscription/register -> Retorna un link promocional con un codigo de subscripción.
DELETE /api/subscription/:id -> Elimina un suscriptor.

Test con Mocha y Chai
Luego de correr la aplicacion con 'npm start' abrir otra terminal y ejecutar el comando 'npm test'.
