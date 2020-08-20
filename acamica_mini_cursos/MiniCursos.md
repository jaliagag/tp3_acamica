# MiniCursos Acámica

## Node.js, el comienzo

Node no es un framewor, no es un server y no es un lenguaje. Node es un contenedor de aplicaciones que ejecuta código de aplicaciones y me permite llevar ese código JS más allá del navegador.

Node está construido con un intérprete de JS que se llama V8.

```js
// index.js

var username = process.argv[2];

console.log("Hola: " + username)
// node index.js jose
// expected: Hola: jose
```

- npm list : list all installed packages
- npm uninstall `paquete`: eliminar un paquete
- `-g`: herramienta a nivel global
- npm list -g --depth=1: list depen

Módulos:

1. core: los propios de node. tienen niveles de estabilidad (2 inestable, 3 stable, 5 no se va a modificar)
   1. http
   2. crypto
   3. fs
2. comunidad: npm
3. propios

CommonJS: cada archivo es un módulo.

## Node como webserver

```js
var http = require('http'); // abre el puerto

var server = http.createServer(function (req, res) {
   res.writeHead(200, {"Content-Type": "text/html"});
   res.end("<h1>Hola Mundo!</h1>");
})

server.listen(3000);

console.log('Servidor iniciado en el puerto 3000');
```

## Contenido estático

```js
var http = require('http'); // abre el puerto
var fs = require('fs')

var server = http.createServer(function (req, res) {
   console.log(req.url)
   fs.readFile('./public/index.html', function (err, data) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data);
   })
})

server.listen(3000);

console.log('Servidor iniciado en el puerto 3000');
```

Node-inspector. Es un paquete global. Prepara una página web para usar la consola de debugging. Para arrancar node-inspector usamos `node-inspector`.

```bash
## para debuggear
node --debug server.js
## para que no arranque de pecho el servidor usamos breakpoints
node --debug-brk server.js
## Dentro de la consola de debuggeo de node-inspector hacemos click en la línea donde queremos que se detenga el código
```

Poner `debugger` en mitad del código detendrá la ejecución del código en ese punto.

Node es mejor para presentar contenido dinámico. Quién me está pidiendo la página? Esa respuesta está en la URL. 

```js
var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) { // Controlador, lo que dice es que cuando haya un pedido le voy a decir qué respuesta es la que se va a dar, es la que controla el flujo de nuestra app
   var query = url.parse(req.url, true).query;
   res.writeHead(200, ('Content-type': 'text/html'))
   res.end('<h1>Hola ' + query.nombre + '!</h1>'); //query.nombre es modelo; la lógica de negocios
   // toda la línea res.end representa la vista
})

server.listen(3000)
console.log('servidor iniciado en el puerto 3000');

// si yo corro http://localhost:3000/?nombre=Jose
```

## Express

