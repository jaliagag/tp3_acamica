# Clases

Links:

- <https://www.apimatic.io>

## Clase 37

PPT 39

¿Qué va a contener nuestra API?

- Administración de usuarios
- Administración de pedidos
- Administración de productos
- Reglas de seguridad
- Documentación de API

Desafíos técnicos:

- Introducción a la programación:
    + resolución de problemas lógicos
    + presudocódigo
    + bueans prácticas
- JS
    + Fundamentos del lenguaje
    + Algoritmos y estructuras de datos
    + Asincronismo
    + Interacción de con Documentos HTML
- APIs
    + Fundamentos de HTTP
    + Comunicación con servidores
- GIT
    + Herramientas de versionado
    + Repositorios

API: Application Programming Interface

Conjunto de subrutinas, funciones y/o procedimientos que ofrece cierto servidor para ser utilizado por otro software. Para crearlas:

- Pensar cómo se va a estructurar
- crear el modelo de datos
- quiénes van a consumir nuestra API

API REST (Representational State Transfer)

Es un tipo de arquitectura de desarrollo web que se apoya totalmente en el estàndar HTTP. REST tiene una lista de reglas que se deben cumplir en el diseño de la arquitectura para una API. Hablaremos de servicios web **restful** si cumplen la arquitectura REST.

Funcionan a través de:

- REQUEST --> métodos: POST, GET, PUT, DELETE, PATCH
- RESPONSE --> códigos de estado: 200, 404, 500

Separación de cliente y servidor

- su unión es mediante la interfaz uniforme (API)
- los desarrollos en fronend y backend se hacen por separado, teniendo en cuenta la API
- mientras la interfaz no cambie, podremos cambiar el cliente o el servidor sin problemas
- sistema de capas:
    + el cliente puede estar conectado mediante la interfaz al servidor o a un intermediario, para él es relevante y desconocido
    + al cliente solo le preocupa que la API REST funcione como debe: no importa el CÓMO sino el QUÉ.
    + el uso de capas o servidores intermedios puede servir para aumentar la escalabilidad o implementar políticas de seguridad

### NodeJS

Motor de chrome V8 modificado.

[link](clase_37/app.js)

## Clase 38

PPT 40

## Clase 39

PPT 41

Importar una librería con _require_; guardamos la variable en una constante.

```js
const fs = require('fs')
//require('os')
const path='ejemplo.txt'

fs.writeFile(path, 'Hola mundo desde nodejs', (err)=>{ // crea un archivo
    if(!err)
        console.log(se creo con exito)
})

fs.readFile(path, 'utf-8', (err, data)=>{ // lee un archivo
    if(!err)
        console.log('asíncrono ', data)
})
fs.mkdir('archivos', (err)=>{ // crear una carpeta
    if(!err)
        console.log('se creo con exito')
})

//síncrono "se ejecuta antes que el asíncrono"

const data = fs.readFileSync(path, 'utf-8');
console.log("sincrono ", data);

fs.unlink(path, (err)=>{ //eliminar
    if(!err)
        console.log('eliminado')
}) 

let v = ["jugar", "películas", "series"];

v.forEach(item=>{
    console.log(item)
}) // me devuelve en la consola todos los elementos del array "v"
// misma forma de hacer lo mismo: v.map(item=>console.log(item))

fs.readdir('archivos', (err, files)=>{
    console.log(files,files.length)
})
```

Ejercicio calculadora

```js
// app.js

let v = require('./calc');
let fs = require('fs')

console.log(v.suma(10,20));
console.log(v.resta(110,20));
console.log(v.multi(10,20));
console.log(v.divi(20,10));

let fs = require('fs');

const ruta = './calculator.txt'
const msg = 'resultado de la suma '+v.suma(10,20);

// asíncrono

fs.writeFile('calculator.txt', msg, (err) => {
    if(!err)
        fs.readFile(ruta,'utf-8', (err,data){
            if(!err)
                console.log(data);
        })
});

// lo mismo pero síncrono

fs.writeFileSync(ruta, 'suma sync: ' + msg);
let data = fs.readFileSync(ruta, 'utf-8');
console.log(data);

// calc.js

exports.suma = function (valor1, valor){
    return valor1 + valor2;
}

exports.resta = function (valor1, valor){
    return valor1 - valor2;
}

exports.multi = function (valor1, valor){
    return valor1 * valor2;
}

exports.divi = function(valor1, valor){
    return valor1 / valor2;
}
```

## Clase 40

PPT 42

NPM - página de librerías. Node package manager. NPM es un gestor d epaquetes o librerías. Viene instalado junto con Node y se utiliza en la consola. `npm -i {nombre del paquete} -g`.

Nodemon: detecta automáticamente cambios en un script.

npm uninstall paquete

Hacer que un paquete sea solamente para el ambiente de desarrollo: npm install paquete --save-dev

Desde package.json, podemos ejecutar comandos puestos en la sección script (no lo veo muy útil):

```js
{
    "scripts":{
        "test": "echo desde npm",
        "mensaje":"node saludos.js"
    }
}

// tenemos un archivo saludos.js que tiene

console.log("hola desde el archivo saludos.js")

// corremos esto en la consola
npm run mensaje
```

## Clase 41

PPT 43





