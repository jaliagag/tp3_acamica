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

NPM - página de librerías. Node package manager. NPM es un gestor d epaquetes o librerías. Viene instalado junto con Node y se utiliza en la consola. `npm -i {nombre del paquete} -g`. `-g` lo instala de manera global

Nodemon: detecta automáticamente cambios en un script.

`npm uninstall paquete`

Hacer que un paquete sea solamente para el ambiente de desarrollo: `npm install paquete --save-dev`

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

`require`: nos permite importar un módulo o librería. Módulo propio: `module.exports`

```js
const usma = (a,b){
    return a + b;
}

module.exports = {suma}

// en server.js

const suma = require('suma');
```

package.json es un archivo que contiene información de nuestro proyecto. La sección que realmente nos intersa es `dependencias`, que es donde se guardan todas la librerías que nuestro proyecto necesita para funcionar.

package-lock.json: las dependencias descargadas. Lo que se instaló --> agregar al gitignore.

ExpressJS: framework que nos permite construir un servidor web en nodeJS de una forma muy fácil y sencilla.

Framework no es lo mismo que librería; los frameworks te encapsulan a trabajar según un estándar de programación.

```js
// parado en la carpeta
npm init
npm i express

// en el archivo server.js o app.js

const express = require('express');
const server = express();

server.listen(3000, ()=> {
    console.log('Servidor iniciado');
})
```

PM2 --> modulo de nodejs.

app.use --> estamos haciendo uso de los middlewares

## clase 42

PPT 44

Un middleare es una forma de agregar código entre nuestra ruta y el servidor de express; de esta forma podemos encadenar la ejecución de diferentes funciones previo a la ejecución de nuestras rutas. Una de las utilidades más comunes es la de **validar si un usuario está autenticado o si tiene acceso a determinado conjunto de recursos**.

Para agregar un middleware utilizamos la función `use`, que recibe un callback con 3 parámetros: 

- req: el request original
- res: el response original
- next: función para ejecutar el resto de los middlewares

```js
// agregar un middleware
function agregarLog(req, res, next){
    console.log('Ruta accedida: ' + req.path);
    next();
}
```

Para cortar la ejecución:

```js
function agregarLog(req, res, next){
    if(req.query.usuario !== 'usuario'){
        res.json('usuario inválido');
    } else {
        next();
    }
}

server.use(validarUsuario);
```

Middlewares de parseo de body: una de las funcionalidades más utilizadas dentro del mundo de backend es utilizar rutas del tipo POST que reciben en el body un JSON. Por ejemplo, podemos tener una ruta /contacto que recibe un body como el siguiente: 

```js
{
    "nombre": "pedro",
    "email", "asdf@dominio.com"
}
```

¡¡¡_ES IMPORTANTE EL ORDEN DE LOS MIDDLEWARES; PARA QUE SE EJECUTEN HAY QUE PONERLOS ANTES DE LOS ENDPOINTS_!!!

Middleware global: no tiene ruta asignada, se ejecuta antes que el endpoint.

```js
// middleware SIN ruta
server.use(req, res, next){
    console.log('no tengo ruta, soy global');
    next();
}

server.use('/home', (req, res, next){
    console.log('primero paso el middleware');
    next();
});

server.get('/home', (req, res) => {
    console.log('estoy en home');
})
```

- Endpoints en un archivo separado

```js
// supuestamente en un archivo aparte

const endpoint = {
    bienvenida:'/bienvenida/:saludo', // <-- parámetros
    hola:'/hola',
    salida:'/salida'
}

server.get(endpoint.bienvenida,(req,res)=>{
    let saludo = req.params.saludo;
    console.log("Hola soy un " + saludo);
})
```

- req.body: formulario
- req.query: 
- req.param: 

## Clase 43

## Clase 44

- Model View Controller
- cors: peticiones de origen cruzado, para que te puedan llamar la api desde cualquier dominio

Si voy a interactuar entre el body y el servidor, necesito tener middlewares.

## Clase 45

## Clase 46

Vistas: se usan para generar los mismos datos repetitivamente. Hacer una consulta repetitiva que trae muchos datos. Se setea la consulta;

Almacenamientos = datos.

Clave primaria: no se debería repetir.

Normalización de la base de datos - identificar la cantidad de veces que se repite un dato y tratar de evitar que se repitan.

Tabla de pedidos, tabla de ingredientes.

Para crear una tabla por consola, se recomienda crearla por consola; primero se le pone el nombre de la columna, el tipo de dato...

```sql
CREATE TABLE persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    apellido VARCHAR (60),
    nombre VARCHAR (60) NOT NULL,
    dni INT UNSIGNED NOT NULL
)
```

- SELECT --> traeme
- WHERE --> donde
- %x% --> todo lo que contenta antes o después x
- para las fechas, siempre usamos BETWEEN y ponemos dos fechas
- INSERT --> insertar en nuestra base de datos

## Clase 47

- Autenticación: identificar al usuario para poder darle los permisos que requiera; validar que usuario y contraseña sean correctos; usamos **JWT**.
- Autorización: permiso para acceder al recurso que queremos acceder. Autorización para ver recursos.

JSON web token. Un tocken es un algoritmo cifrado; es un objeto con propiedades. Mientras los dos sean iguales, vamos a poder continuar.

`npm install jwt`

JWT se verifica en el backend.

```js
const jwt = require('jsonwebtoken');
const informacion = {nombre: 'Joe'};
const firma = 'Mi_password_secreto'
const token = jwt.sign(informacion, firma); // codificación
const decodificado = jwt.verify(token, firma);
console.log(token);
console.log(decodificado);
```

Los tokens son unidireccionales.

```js
app.post('/login', (req, res)=>{
    const {usuario, clave} = req.body;
    const validado = validarUsuarioClave(usuario, clave);

    if (!validado) {
        res.json({error: 'Usuario o contraseña incorrecta'});
        return;
    }
    const token = jwt.sign({
        usuario
    }, firmaSeguraJWT);

    res.json({token});
})
```

```js
app.post('/seguro', autenticarUsuario, (req, res)=>{
    res.send(`Esta es una página autenticada. Hola ${req.usuario.usuario}`);
});

const autenticarUsuario = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
            const verificarToken = jwt.verify(token, jwtSign);
            if (verificartoken) {
                req.usuario = verificarToken;
                return next();
            }
    } catach(err) {
        res.json({error: 'Error al validar usuario'});
    }
}
```

```js
// CHECK RESULTADO FINAL

const express = require('express');
const server = express();
server.use(express.json());
server.use(express.urlencoded({extended:true})) // body-parse

const jwt = require('jsonwebtoken');
/* const informacion = {nombre: 'rordirgo'};
const firma = 'Mi_pwd_secreto';
const token = jwt.sign(informacion,firma); */

function validarUsuarioclave(usuario, clave){
    console.log(usuario);
    if (usuario == 'rodrigo' && clave =='1234'){
        return true;
    } else{
        return false;
    }
}

let usuarios = [{
    username: "rodirgo",
    password: "1234",
    mail: "rodrigo@test",
    loged: false
},{
    username: "test",
    password: "test",
    mail: "test@test.com",
    loged: false
}]

server.get('/login/:usuario/:clave', (req, res)=> {
    const {usuario, clave} = req.body;
    const validado = validarUsuarioClave(usuario,clave);

    if (!validado){
        res.json({erro: "usuario o clave incorrecta"});
        //return;
    } else {
        res.json({error: "usuario o clave incorrecta"})
    }
/*     const token = jwt.sign({
        usuario
    }, firmaSeguraJWT); */

    //res.json({token});
})
```

Guardar el item en local storage. Mientras sea válido, todo bien; cuando no existe o no es válido, vas al login.

## Clase 48

Conexión desde NODE - necesitamos tener sequelize y mysql2

```js
// npm i sequelize
// npm i mysql2

const express = require('express');
const server = express();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root: @127.0.0.1:3306/<db_name>')

// new Sequelize('mysql://user:password@host:port/dbname)

// sentencia 

sequelize.query('SELECT * FROM razas',
    {type: sequelize.QueryTypes.SELECT}
).then((resultados)=>{
    console.log(resultados)
})

server.listen(3000, ()=> {
    console.log('servidor iniciado');
})
```

```js
const express = require('express');
const server = express();
const Sequelize = require('sequelize');
const conectarse = new Sequelize('mysql://rodrigo:1234@127.0.0.1:3306/acamica');
//console.log(conectarse);
/*conectarse.query('SELECT * FROM `usuarios`',{ type: conectarse.QueryTypes.SELECT })
.then(function(resultados){
    console.log(resultados);
});*/
conectarse.query('SELECT * FROM `usuarios` WHERE estado = ?',
{ replacements: ['activo'], type: conectarse.QueryTypes.SELECT })
.then(function(resultados){
    console.log(resultados);
});
/*conectarse.query('SELECT * FROM `usuarios` WHERE estado = :estado',
{ replacements: {estado:'activo'} , type: conectarse.QueryTypes.SELECT })
.then(function(resultados){
    console.log(resultados);
});*/
/*
conectarse.query('UPDATE `usuarios` SET `nombres`="juan" WHERE id = ?',
{ replacements: ['1']})
.then(function(resultados){
    console.log(resultados);
});*/
/*
conectarse.query('delete from `usuarios` WHERE id = ?',
{ replacements: ['1']})
.then(function(resultados){
    console.log(resultados);
});*/
/*conectarse.query('INSERT INTO `usuarios`( `nombres`, `apellidos`, `fecha_nac`, `estado`) VALUES (?,?,?,?])',
{ replacements: ['arnold','schwarzenegger','1969-05-11','activo']})
.then(function(resultados){
    console.log(resultados);
});*/
server.listen(3000, ()=>{ 
    console.log('Server iniciado');
});
```

## Clase 49

```js
const express = require('express');
const app = express();
const JWT = require('jsonwebtoken');
// Secret
const SECRET = 'alkjfakjdf23j1k31ñk'

// JWT JSON + TOKEN {}
// /login (email and pass) MATCH -> token -> client
// /verify req (token and correct) -> {mensaje valido o invalido}
// need
// jsonwebtoken
// secret -> acamica -> hash (secreto)
// payload -> Obj -> {propiedades} -> propiedades propias de jwt | sub:(alias/email)
//                                                               iat: (fecha de inicio)
//                                                              exp: (fecha de expiración )
//                                                              role: ['admin', read, ]
// payload = {sub:alias, iat:date, exp:date, role[]} <- validar si el token tiene una duración de XXX minutos

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/login', ()=>{
    let email = req.body.email;
    let password = req.body.password; // buscar email y password
    let payload = { // ejemplo para un programador o para mí mismo de la información que voy a incluir acá
        sub: null,
        name: '',
        role:[]
    }
    let r = {
        invalido: {
            err: true,
            msg: 'password invalido'
        }
    }
    let token
    let dataPayload

    if(email == 'asdf@asdf.com')
        if(password == '1234'){
            dataPayload = Object.assign({}, payload, { // object assign clona el objeto O le agrega un elemento al objeto | en este caso le clona el objeto 
                sub: 'asdf@asdf.com',
                name: 'joe',
                role: ['admin']
                });
            let token = JWT.sign(dataPayload, SECRET) // JWT una la data y el secreto y genera un hash, que es una cosa extremadamente larga
            // JWT.sign crea el token
            res.json(token) //"lo envía"
        }

    res.json(r.invalido)
})

app.get('/verify', (req, res) => {
    console.log('token bearer: ', req.headers.authorization)
    let token = req.headers.authorization.split(' ')[1] // headers.authorization le hace la captura de los token
    let r = {
        valido: {
            err: null,
            token: null
        },
        invalido: {
            err: true,
            msg: 'token invalido'
        }
    }

    let msgOk

    if(token){
        JWT.verify(token, SECRET, (err, token)=>{ // JWT.verify verifica el token y necesita el token y el secreto
            if(!err){
                msgOk = Object.assign({}, r.valid, {token: token})
                res.json(msgOk)
            } else{
                res.json(r.invalido)
            }
        })
    }
})

app.listen(5000, ()=>{
    console.log('servidor iniciado'.toUpperCase())
})
```

- <https://codahale.com/how-to-safely-store-a-password/>

## Clase 50

Entrevistas: triángulo de pascal.

Relaciones de las bases de datos:

1. uno a uno - no se suele usar
2. uno a muchos - una persona muchos teléfonos. La más usada. Por cada registro en la tabla principal (tabla de la clave principal) pueden existir muchos registros en la tabla relacionada (tabla de la clave externa)
3. muchos a muchos - que un registro exista muchas veces en otras tablas

SQL Join nos permite **unir** dos tablas.

| id | apellido | nombre | pasaporte | país |
| ---- | ----- |---- |----- |----|
| 1 | Einstein | Albert | 123456 | Alemania |
| 2 | Turing | Alan Mathison | 23466 | Inglaterra |
| 3 | Lovelave | ada | 81923 | Inglaterra |

Separamos la tabla en dos. Creamos una tabla nueva:

| cod_pais | pais |
| --- | ---- |
| 1 | alemania |
| 2 | inglaterra |
| 3 | Zambia |
| 4 | Argentina |

Y usamos los datos de la tabla nueva para poblar los datos de la tabla principal. Ejecutamos una query para traer todas las personas de nuestra tabla: `SELECT * FROM personas`. Ahora nuestro objetivo es agregar el nombre del país par aque sea legible. Aquí es donde JOIN unirá las dos tablas:

```sql
SELECT personas.*, paises.pais FROM personas
    JOIN paises ON personas.cod_pais = pais.cod_pais
```

1:37:28 - demostración práctica.

ORDER: ordenar de manera ascendente o descen; **ASC**endente o **DESC**endente.

`SELECT * FROM personas ORDER BY nombre ASC`

- <https://studio3t.com/>
- <https://www.apachefriends.org/es/index.html>

Desde el endpoint hacemos la consulta y hacemos un `fetch`

## Clase 51

Bases de datos No SQL - archivo plano con un conjunto de datos. MongoDB usa colecciones para agrupar información y dentro de ellas almacena documentos.

`npm install mongoose`

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mi_base');
```

1:21_50