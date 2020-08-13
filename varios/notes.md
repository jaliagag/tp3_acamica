# Varios

## NodeJS Youtube

Fuente: <https://www.youtube.com/watch?v=BhvLIzVL8_o>

Node JS es un entorno de ejecución del lado del servidor.

Cuando creamos una app cada tarea debería estar contenida en un _módulo_. Parte de nuestra app que se pueden subdividir para mantenerla por separado.

Para llamar o importar un archivo o usar las funciones de otro archivo usamos uan palabra clave de nodeJS: `require()`.

Para exportar nuestras funciones para que sean usadas por otros archivos? en NodeJS usamos un objeto de JS. Usamos la palabra clave `exports`.

En el archivo donde tenemos las funciones, usamos `exports.<nombre con el que vamos a llamar a esta función desde otro archivo> = nombre de la función en este archivo`.

Para exportar todas las funciones de un un módulo usamos `module.exports = <objeto>`. Guardamos todas las funciones dentro de un objeto dentro del módulo y eso es lo exportamos. Se puede exportar solamente una función, variable...

### Crear un servidor

Módulos preconstruidos, naturales e incluidos en nodeJS. Para conocer sobre el OS que está corriendo usamos el módulo OS.

Módulo FS, para manejar archivos.

Crear archivo:

fs.writeFile("archivo a crearse", " texto que se le agrega", función por si ocurre algún error - callback, asíncrono).

Esto no es una tarea que haga nodeJS, si no que lo hace el OS.

Un ejemplo de esto es hacer una query a la base de datos:

```js
query("Select * FROM users", function (err, user){
    if (err){
        console.log(err);
    } else {

    }
    })
```

Leer archivo: fs.readFile.

Módulo HTTP: crear servidor. HTTP es un protocolo que recibe requests de los clientes y envía las respuestas que encuentra en el servidor.

```js
const http = require("http");

http.createServer(function (req, res) {
    res.write("<h1>Hola mundo desde </h1>");
    res.end();
}).listen(3000); 
```

Con esto si yo voy en mi navegador a localhost:3000, me muestra el mensaje que escribí.

### NPM

Administrador de paquetes o módulos de nodeJS. <https://www.npmjs.com>. `npm init` --> package.json. Dependencies - mi código depende de otro código.

### Express nodeJS

source <https://www.youtube.com/watch?v=8eg4w8v076w>

<https://www.youtube.com/watch?v=794Q71KVw1k>

```js
app.get("/", (req, res) => {
    res.send("Hola mundo");
    res.json({ // estoy enviando un objeto
        nombre: "Jose",
        lastname: "Aliaga"
    })
}) //cuando recibas un método get a la ruta inicial de mi applicación, quiero hacer algo

```

Routing:

## Json Web Token en Nodejs con Expressjs

<https://www.youtube.com/watch?v=XK-LhDTT4UQ>

jwt: estándar abierto creado por la RFC. 7519, basado en json para crear un token que sirva para enviar datos entre aplicaciones o servicios y garantizar que estos datos sean válidos y seguros.

Usos:

- Autenticar mis usuarios

<https://tutorialedge.net/nodejs/nodejs-jwt-authentication-tutorial/>

Structure of JWTs:

- **asdfjñlksajdfkajsdñfkjsad**._kdslkjdsañlkdsñlkdslkj_.kjalsdfldsañlkjfasdfj
  - **JWT header** : contains the metadata about the JWT suchas the type of token and the crypto algorithm used to secure it
  - _the Payload_: the set of claims contained within a JWT that is represented as a series of key/value pairs
  - the signature: this is used to validate that the JWT has not been tampered with and is generated using the header + payload + sign key or passphrase

## Express Middlewares

<https://www.youtube.com/watch?v=VOx3iON96ew>

Todos los middlewares de express son funciones. Cada petición del cliente pasa por aquí.

- módulo morgan: nos muestra por consola lo que piden las aplicaciones cliente.

<https://www.youtube.com/watch?v=MIr1oxQ3pao>

How express handles a sequence of functions. How express deals with sequences of requests, of _urls_.

Make a request go through a middleware every time:

```js
// le middleware
const sup = (req, res, next) => {
    console.log('sup');
    next()
}

app.use(sup);
```

