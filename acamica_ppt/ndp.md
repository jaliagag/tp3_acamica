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