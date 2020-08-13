# PPT Acámica

## Clase 37

## Clase 40

Métodos HTTP:

- obtener datos: **GET**
- actualizar datos: **PUT**
- crear un nuevo recurso: **POST**
- borrar el recurso: **DELETE**
- actualizar ciertos datos: **PATCH**

Postman: la herramienta va a hacer de cliente HTTP para nuestras apis. Escomo hacer el fetch desde js pero mediante una interfaz gráfica.

## Clase 41

Node.JS es un entorno multiplataforma que permite ejecutar código JS sin la necesidad de utilizar un navegador.

Para importar una librería o módulo se utiliza `require`. Se puede pasar por parámetro tanto un nombre (pre-cargado en NodeJs) como una ruta de un archivo JS:

```js
const fs = require('fs'); // librería para interactuar con archivos del sistema operativo
console.log(fs.readdirSync()); // método que muestra los archivos en la carpeta actual
```

Crear una librería o módulo:

- librería.js

```js
const suma = (valor1, valor2) => valor1 + valor2;
module.exports = {suma}; // module.exports se utiliza para exportar como módulo
```

- script.js

```js
const lib = require('/libreria'); // obtiene libreria.js como módulo y lo almacena en lib
const total = lib.suma(5,4); // utiliza la función suma de lib y lo almacena
console.log("Resultado de la suma: " + total)
```

- consola

```ps1
node script.js
Resultado de la suma: 9
```

Solemos crear librerías propias cuando:

- tenemos el mismo código que se utiliza en más de un proyecto
- queremos separar las responsabilidades o funcionalidades en distintos módulos (más común)

<https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach>
<https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219>

```js

//server.js
const express = require('express'),
      server = express();

server.set('port', process.env.PORT || 3000);

//Basic routes
server.get('/', (request,response)=>{
   response.send('Home page');
});

server.get('/about',(request,response)=>{
   response.send('About page');
});

//Express error handling middleware
server.use((request,response)=>{
   response.type('text/plain');
   response.status(505);
   response.send('Error page');
});

//Binding to a port
server.listen(3000, ()=>{
  console.log('Express server started at port 3000');
});
```

## Clase 42

```js
var moment = require('moment')
```

La variable moment va a obtener todas las propiedades y métodos que tiene la librería Moment.

Para desinstalar un paquete usamos **npm uninstall {paquete}**: npm uninstall moment, por ejemplo.

npm init > crea _package.json_, que es donde se van a almacenar los _metadatos_ del proyecto. Los paquetes que se instalan y se definen dentro del package.json son las **dependencias** de las cuales _depende_ nuestro proyecto para funcionar.

- Angular: framework para crear aplicaciones web
- Reactjs: librería para crear interfaces de usuario
- Vue.js: framework MVVM para crear interfaces de usuario
- Expressjs: framework para crear APIs fácilmente
- Lodash: set de utilidades JS para el manejo de objetos arrays, etc...

Cuando es necesario mover nuestra aplicación a otro entorno (stage o producción o a git) no vamos a subir la carpeta *node_modules* debedo a la gran cantidad de archivos y peso que tiene.

las mercedes
villegas

## Clase 43

- require: la instrucción `require` nos permite incluir módulos o librerías
  - const os = require('os')
  - const fs = require('fs')
- module.exports: se usa para exportar funcionalidades de nuestras propias librerías

```js
const suma = (a, b) => {
    return a + b;
}
module.exports = { suma }
```

- npm install: nos permite instalar nuevos módulos `npm i nodemon`
- package.json: archivo que contiene información de nuestro proyecto. La sección más importante es `dependencies`, que es donde se guardan todas las librerías que necesita nuestro proyecto para funcionar.
- ExpressJS es un framework que nos va a permitir construir un servidor web en NodeJS de una forma fácil y sencilla. Para ello:
  - mkdir server
  - cd server
  - npm init
  - npm i express

server.js:

```js
const express = require('express');
const server = express();

server.listen(3000, ()=>{
    console.log('Servidor iniciado...');
})
```

Las **RUTAS** son funciones que definen lo que puede responder nuestro servidor. Express tiene disponibles varias funciones para crear rutas, de hecho tenemos una función por verbo HTTP.

```js
server.get('/json', (req, res) => {
    const json = {
        nombre: 'Jhon',
        apellido: 'Doe'
    }
    res.json(json);
})
```

Status code: usamos la propiedad req.statusCode para indicar qué código devolver:

```js
server.get('/error', (req, res) => {
    res.statusCode = 500;
    res.json({error: 'Algo salió mal :('});
})
```

Los códigos de estado están organizados por rangos y hay 5 rangos:

- 1xx (100, 101, etc): informativos
- 2xx (200, 201, 204, etc): respuestas satisfactorias
  - 200: OK
  - 201: created
  - 204: no content
- 3xx (300, 302, etc): indican redireccionamiento
- 4xx (400, 401, 404, 409, etc): indican errores en el request que realizó el cliente
  - 400: bad request
  - 401: unauthorized
  - 404: not found
  - 409: conflict
- 5xx (500, 501, 503, etc): indican errores en el servidor
  - 500: internal server error

<https://developer.mozilla.org/es/docs/Web/HTTP/Status>

<http://miservidor.demo.com/photos/1?size=600>

| protocolo | dominio y subdominio | path | query string |
| ---- | ----- | ------ | ----- |
| http | miservidor.demo.com | photos/1 | size=600 |

El path identifica un recurso en el servidor:

```js
// http://miservidor.demo.com/photos/1

server.get('/photos/1', (req, res) => {
    res.json({
        id: 1,
        title: 'Example image',
        url: 'https://example.com/image/1'
    });
});

// http://miservidor.demo.com/photos

server.get('/photos', (req, res) => {
    res.json([
        {
            id: 1,
            title: 'Example image',
            url: 'https://example.com/image/1'
        },
        {
            id: 2,
            title: 'Another example image',
            url: 'https://example.com/image/2'
        }
    ]);
});
```

Path con parámetros: cuando definimos la ruta, podemos indicar que ciertas partes son parámetros con el caracter **:** (dos puntos). Después podemos acceder a dicho parámetro de la siguiente manera: `req.params.nombreParametro`

```js
// nuestro array con múltiples fotos

const fotos = [
    {
        id: 1,
        title: 'Example image',
        url: 'https://example.com/image/1'
    },
    {
        id: 2,
        title: 'Another example image',
        url: 'https://example.com/image/2'
    }
];

// definición de la ruta de express que retorna una foto específica

app.get('/photos/:indiceFoto', (req, res) => {
    const indiceFoto = req.params.indiceFoto;
    res.json(fotos[indiceFoto]);
})

```

QueryString: una serie de parámetros que se pueden incluir adicionalmente a nuestra ruta. Siempre comienza con un **?** y es una lista de **nombre y valor** separados por **&**. Mediante req.query vamos a poder obtener la lista de query strings:

```js
app.get('/photos', (req, res) => {
    // req.query contiene todos los query strings enviados
    const { size, author} = req.query;
    res.json({size, author});
})
```
