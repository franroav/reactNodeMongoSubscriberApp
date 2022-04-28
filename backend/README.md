# Aplicación NodeJS promotional Subscription

```
- Al clonar el repositorio hacer los siguientes pasos (se ejecutara en el puerto 5000, asegurece de que no tiene otras aplicaciones corriendo en ese puerto):
    cd backend
    npm install
    npm start

EndPoints:
    Subscription:
        GET /api/subscription -> Retorna toda la lista con todos los suscriptor en un array.
        GET /api/subscription/:id -> Retorna objeto con un suscriptor
        PUT /api/subscription/:id -> Actualiza un suscriptor.
        POST /api/subscription -> Añade un suscriptor.
        POST /api/subscription/register -> Retorna un link promocional con un codigo de subscripción.
        DELETE /api/subscription/:id -> Elimina un suscriptor.


    Consideraciones:
        La Collection de prueba en la colleción Subscriptions deben existir en la base de datos.
        existe un archivo(seed) .json con la collection que se necesita insertar en base de datos

Test con Mocha y Chai
    Luego de correr la aplicacion con 'npm start' abrir otra terminal y ejecutar el comando 'npm test'
    el test probara todas las Endpoint, creando registros y luego los eliminara.

```
