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
  - the signature: this is used to validate that the JWT has not been tampered with and is generated using the header + payload + sign key or passphrase.

User information is stored on the client machine, on the JWT.

<https://www.youtube.com/watch?v=7Q17ubqLfaM>

JWT is used for _authorization_, not authentication; with authentication, you are taking a username and password and making sure that they are correct, like looging in. Authorization is making sure that the user making requests to your server is the same user that logged in during the authentication process. It's authrozing that the user has access to a particular system.

This is typically donde by using _session_. In stead of using cookies, we use jsons when using JWT

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

When it comes to middlewares, order _matters_.

```js
// this is a global middleware, it will run everytime a call is made to the app
app.use(<middlewareName>);

app.get('/', <middleware>, (req, res) => {
    // this middleware is a "path specific middlware"
    // when a user attempts to reach this route, first the mw runs, and then the req, res
    res.send('<h1>Hello world!</h1>');
});
```

If there is not `next()` function, we will never reach the next step, the next callback.

```js
// error handling function/example
function errorHandler (err, req, res, next) {
    if (err) {
        res.send('alto fallo, loco');
    }
}
```

<https://www.youtube.com/watch?v=lY6icfhap2o>

Middleware: a function, software, or something that is going to run between the time that the server gets the request and the time that the server sends the request out to the client. Apparently, everything in Express is a middlware.

```js
const express = require('express');
const app = express();

// global middleware

app.use(logger)

app.get('/', (req, res){
    res.send('Home page');
})

app.get('/users', auth, (req, res){
    console.log(`User is admin = ${req.admin}`)
    res.send('Users Page');
})

function logger (req, res, next) {
    console.log('Log');
    console.log(req.originalUrl)
    next(); // the next piece of middleware is run after
}

function auth (req, res, next) {
    if (req.query.admin === 'true'){
        req.admin = true;
        next(); // https://localhost:3000/users?admin=true
    } else {
        res.send('No Auth');
    }
    console.log('Auth');
    next();
}

app.listen(3000, (req, res) => {
    console.log('Servidor iniciado');
})
```

## Understanding HTTP Request Verbs

<https://www.youtube.com/watch?v=Pm28JXFAu4Y>

- GET: read; read some data back; I only send a request to read.

```js
app.get('/api/channel', (req, res) => {
    // return the list of channels
    // respond with a 200
    res.json(data);
    console.log('GET', data.channels);
});

app.get('/api/channel/:id', (req, res) => {
    // return the list of channels
    // respond with a 200
    let obj = data.channels.find(item => item.id = parseInt(req.params.id));
    res.json(obj);
    console.log('GET', obj);
});
```

- POST: For CREATING. Sending a request AND something else from the client, some _DATA_. I'm creating something new. for instance, `req.body`

```js
let url = "http://localhost:3000/api/channel";

let h = new Headers();
h.append("Content-Type", "application/json");

let data = JSON.stringify({ name: 'Jose Aliaga' });

let req = new Request(url, {
    method: 'POST'
    ,headers: h,
    ,body: data
});

fetch(req)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('output').textContent = JSON.stringify()
    })

```

```js
app.post('/api/channel', (req, res) => {
    // add new channel then return new list
    // respond with a 201
    let { name } = req.body;
    console.log(req.body);
    let id =
        data.channels.reduce((prev, curr) => {
            retur prev < curr.id ? curr.id : prev;
        }, 0) + 1;
    let last_update = Date.now();
    let obj = { id, name, last_update};
    data.channels. push(obj);
    res.status(201),json(obj);
    console.log('POST', data.channels)
});
```

- PUT and PATCH: both have to do with updating. With PUT we can do and INSERT; if the record doesn't exist, we can create it. We _CANNOT_ do this with PATCH; PATCH is only for updating.

```js
app.put('/api/channel/:id', (req, res) => {
    // replace a channel based on id
    // respond with 200 or 204
    // 202 if the operation is async and still pending
    // Basically an UPDATE but we could also do an INSERT if the id is available
    // or we could choose to create a new id and do an INSERT if the id does not exist
    let id = parseInt(req.params.id);
    let name = req.body.name;
    let last_update = Date.now();
    let idx = data.channels.findIndex(item => item.id === id);
    data.channels[idx].name = name;
    data.channels[idx].last_update = last_update;
    res.status(200).json(data.channels[idx]);
    console.log('PUT', data.channels);
});

app.patch('/api/channel/:id', (req, res) => {
    // edit a channel
    // respond with 200 or 204
    // 202 if the operation is asynv and still pending
    let id = req.params.id;
    let name = req.body.name;
    let last_update = Date.now();
    let idx = data.channels.findIndex(item => item.id === id);
    data.channels[idx].name = name;
    data.channels[idx].last_update = last_update;
    res.status(200).json(obj);
    console.log('PATCH', data.channels);
})
```

- DELETE: deleting a channel

```js
app.delete('/api/channel/:id'. (req, res){
    // delete a channel
    // respond with 200 or 204
    // 202 if the operation is async and still pending
    let id = req.params.id;
    data.channels = data.channels.filter(item.id != id);
    res.status(200).end();
    console.log('DELETE', data.channels)
})
```

## NodeJS y Mysql, app completa

<https://www.youtube.com/watch?v=qJ5R9WTW0_E&t=1s>

