# CLASES DE LA PLATAFORMA

## Introducción Backend

Cliente y servidor se comunican en el mismo idioma, HTTP, payload, JSON. Las API sirven para interactuar con el servidor. La estructura de la API es muy importante, estructura REST - define la interacción cliente servidor. Usamos los métodos HTTP (GET, POST, PUT, PATCH, DELETE). Las APIs usan el formato JSON para enviar la información.

En una API REST, tenemos módulos de información; dentro de ellos encontramos propiedades (name, año...). Esto nos muestra las relaciones dentro de la API.

### Swagger/OpenAPI

Cómo documentar qué devuelve un endpoint, cómo funciona...

Swagger editor io

/películas
/películas/id

```yaml
info:
    title: "hola mundo"
    version: 1.0.0
paths:
    /peliculas:
        get:
            summary: "retorna listado de películas"
            responses:
                200
                    description: "exito"
                    content:
                        applicatoin/json:
                            schema:
                                type: array
                                items:
                                    $ref: "#/components/schemas/Pelicula"
                                    #properties:
                                        #id:
                                            #type: integer
                                        #nombre:
                                            #type: string
                                        #estreno:
                                            #type: number
    /peliculas/{id}:
        get:
            summary: "retorna una película"
            parameters:
                - in: path
                    name: id
                    required: true
                    schema:
                        type: integer
                        minimum: 1
                    description: "ID de la peli"
            responses:
                200:
                    description: "exito"
                    content:
                        application/json:
                            schema:
                                properties:
                                    $ref: "#/components/schemas/Pelicula" # points to the component down below
#                                    id:
#                                        type: integer
#                                    nombre:
#                                        type: string
#                                    estreno:
#                                        type: number
                404:
                    description: "no encontrado"

components:
    schemas:
        Pelicula:
            properties:
                id:
                    type: integer
                    description: "id unico de la peli"
                    example: 1
                nombre:
                    type: string
                    description: "nombre del a peli"
                    example: "interestelar"
                estreno:
                    type: number
                    description: "año de estreno"
                    example: "2016"
###########################################################
# INCOMPLETE
openapi: 3.0.0

info:
    title: "mega blog"
    version: 1.0.0
    description: "pruebita"
paths:
  /arts:
    get:
      summary: "estos son los artículos disponibles"
      responses:
        200:
          description: "estos son los artículos disponibles"
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Articulo"
        404:
          description: "no arrancamos a escribir"
    put:
    post:
    delete:
      summary: "eliminar artículo"
      parameters:
        - in: path
          required: true
          schema:
            type: integer
            minimum: 1
          description: "esto vamos a eliminar"
      responses:
        200:
          description: "encontrado"
          content:
            application/json:
              schema:
                properties:
                  $ref: "#/components/schemas/Articulo"
        400:
          description: "no encontramos ese artículo"
components:
  schemas:
    Articulo:
      properties:
        title:
          type: string
          description: "título"
          maxLength: 60
          example: "Creando mi primera API"
        content:
          type: string
          description: "contenido"
        publishedDate:
          type: number
          description: "fecha publicacion"
          example: "5/7/2020"
```

Esta herramienta es muy poderosa para definier cómo se va a comportar nuestr api antes de ponernos a programar.

### Postman

Cómo se comporta el servidor? explorar una API. Cliente HTTP para hacer request y ver qué responde. Probar una API sin tener que desarrollar nada.

## Servidor HTTP - NodeJS

Ejecutar código del lado del servidor > NodeJS. Salir de la consola de node: doble ctrl + c o `.exit`.

- Importar módulos: require("");
- Exportar: module.exports = xxxx;

### npm

Todo el código es open source. `npm install`. Nodemon: se fija si hay modificaciones y vuelve a correr el código cada vez que se guarda.

- package.json: archivo de config que tiene info de nuestro proyecto. es importante para publicar nuestro proyecto. localmente, es importante por una propiedad llamada `dependencies` - lista los packetes que se usan en el proyecto + código de versión (si actualizan algo y nosotros necesitábamos una versión específica, nuestro código sigue andando).
- Nodemodules: tiene carpetas con los códigos que usamos de manera local. NO SE COMPARTE, SE AGREGA A GITIGNORE
- package-lock.json:

## Servidor web con Express

Servidor HTTP sobre el que se construye nuestra API. ExpressJS es un framework que nos permite crear servidores web en node. Crear un servidor con Node.

1. crear una carpeta
2. cd carpeta nueva
3. npm init - aceptar las opciones predeterminadas
4. npm i express
5. código:

```js
const express = require("express");
const app = express(); // alojar la ejecución de express para poder configurar el servidor

app.listen(3000, () => { // método que pone nuestro servidor a la escucha - puerto y callback cuando se inicia correctamente
    console.log("Servidor iniciado!");
})
```

Rutas y métodos HTTP.
ruta, callback (req, res)

<https://jsonplaceholder.typicode.com/photos/1?size=600>

```js
app.get("/photos", (req, res) => {
    res.json([{
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952"
    } ,{
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796"
    }])
});
```

Para hacer dinámico y no _manual_ (como está arriba, que deberíamos crear cad auno de las rutas (?)) la creación de nuevos recursos/rutas, podemos usar **parámetros**: `/photos/:indiceFoto`.

```js
// nuestro Array con múltiples fotos
const fotos = [
    id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952"
    } ,{
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796"
    }
];

// definición de la ruta de express que retorna una foto específica
app.get("/photos/:indiceFoto", (req, res) => {
    const indiceFoto = req.params.indiceFoto;
    res.json(fotos[indiceFoto]);
})
```

En la url de ejemplo, de más arriba, vemos que hay un `qery string`, **?size=600**. Algo así sería cómo se hace para conseguir ese valor:

```js
app.get("/photos/:indiceFoto", (req, res) => {
    // obtenemos parametro de la foto
    const {indiceFoto} = req.params
    // req.query contiene todos los query stirngs enviados
    const {size} = req.query;
    foto.url.replace("/600", `/${size}`);
    res.json(foto);
})
```

El objeto **req** contiene toda la información que recibe el servidor sobre el request enviado al servidor. En los ejemplos anteriores vimos cómo recibir parámetros y query strings, pero también hay más contenido en ese objeto, como **req.path**, que retorna la ruta solicitada por el cliente. Documentación sobre el objeto req: <https://expressjs.com/es/api.html#req>

### Middlewares de Express

Agregar funcionalidad entre el requester y la ruta de express. Cuando un cliente hace un request, antes de que llegue a la ruta especificada del router de express, pasa por esta fucnión.

Vamos a hacer un log cada vez que el cliente hace un código en el servidor.

El contenido del cuerpo en una petición o _request_. Si tenemos un formulario de contacto, deberíamos tener endpoint `/contacto` que a través de un POST recibe el contenido del formulario que completó el cliente.

```js
{
    "nombre": "Sergio",
    "email": "sergio@dominio.com"
}
```

Para poder parsear, es de cir, analizar el contenido del body, es necesario procesar el contenido del body. La forma más sencilla de hacerlo en Express es agregando una librería como middleware que se va a encargar de parsearlo y dejar el contenido del body en `req.body`.

La librería que debemos instalar y utilizar es `body-parser`:

```js
const express = require("express");
// incluimos la libreria body-parser
const bodyParser = require("body-parser");

const app = express();
// agremos el middleware para hacer parsing del contenido JSON del body de la petición
app.use(bodyParser.json());

// Endpoint para probar
// este endpoint va a retornar la llamada con el contenido del body
app.post("/contacto", (req, res) => {
    res.json(req.body);
})

app.listen(3000, "0.0.0.0", () => {
    console.log(`Server iniciado en http://127.0.0.1:3000`);
});
```

Ahora podemos utilizar Postman o curl en la terminal para poder probar el endpoint. Es importante indicar el tipo de contenido que estamos enviando, en este caso `application/json`.

```sh
curl -X POST \
    http://localhost:3000/contacto \
    -H 'Content-Type: application/json' \
    -d '{
        "nombre": "Sergio",
        "email": "sergio@dominio.com"
    }'
```

Esto sería un servidor backend que es capaz de recibir contenido del cliente a través de un POST. Este middleware se puede utilizar en otros métodos como PUT y PATCH.

La librería `body-parse` permite parsear contenido JSON o de texto, per no permite recibir archivos, por ejemplo, si un usuario quiere subir una imagen.

Para recibir contenido _multi parte_ deben utilizar otra librería como middleware, ejemplo [multer](https://www.npmjs.com/package/multer).

Problema en algún lado; un error común podría ser el de un recurso no encontrado. Para retornar al usuario esta respuesta en express se utiliza `res.status(404`, el cual va a retornar dentro de los headers el código de estado _404_. También se puede enviar información a continuación del código de estado, por ejemplo `res.status(404).send("artículo no encontrado")`.

```js
const articulos = [
  {
    id: 1,
    titulo: 'Lorem ipsum',
  }, {
    id: 2,
    titulo: 'Donec tincidunt vestibulum magna',
  },
]

app.get('/articulo/:id', (req, res) => {
  const articulo = articulos.find(item => item.id === req.params.id);
  if (!articulo) {
    return res.status(404).send('Artículo no encontrado');
  }
  res.send(articulo);
 });
 ```

 Si el formulario de contacto enviado por el usuario está incompleto, el servidor retornará un error 400:

 ```js
app.post('/contacto', (req, res) => {
  const {
    nombre,
    email,
  } = req.body;

  if (!nombre || !email) {
    res.status(400);
    res.json({ error: 'Faltan datos obligatorios' });
    return;
  }
  
  // Continua ejecucion del codigo
 
});
 ```

Podemos utilizar un middleware para poder manejar los errores genéricos de express. El middleware debería estar definido al final de nuestras rutas de express para asegurar que sea el último en ser ejecutado. A diferencia de los middlewares que vimos anteriormente, este tiene 4 parámetros, en vez de 3:

```js
app.use(function(err, req, res, next) {
    if(!err) return next();
    console.log("Error, algo salió mal ", err);
    res.status(500).send("Error");
})
```

- [Documentación oficial de express](https://expressjs.com/en/guide/error-handling.html)
- [Listado de _status codes_ disponibles](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

Estado del servidor

```js
const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Menu");
});

let platos = [];

app.get("/platos", (req, res) => {
  res.json(platos);
})

app.post("/platos", (req, res) => {
  platos.push(req.body);
  console.log("Plato agregado al array");
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Servidor iniciado");
});
```

Con este servidor iniciado, lo que hacemos es iniciar Postman. Si hacemos un 'get' al endpoint /platos, nos devuelve un array vacío. Como agregamos un método post, podemos agregar información, en formato json, de los distintos platos con sus precios o cualquier cosa.

Para eso, en postman ponemos método post, body > raw > json y ponemos el texto y le decimos enviar.

Si volvemos a hacer get al endpoint /platos, tenemos nuestro plato recién agregado. Así podemos agregar tantos platos como querramos. Si hacemos una variación en el código del servidor, este se reiniciará _LO CUAL VA A HACER QUE SE BORRE LO QUE HABÍAMOS AGREGADO_: estamos usando una viarable que se guarda en memoria en node para guardar los platos; cada vez que reiniciamos el servidor, esta variable se vuelve a setear, no es persistente esta información.

Actividad

El objetivo de esta actividad es crear una API RESTful, donde debes crear los endpoints necesarios para interactuar con el recurso de ítems en una api de listado de que haceres o “ToDo List”.

Esta API va a tener un solo recurso, llamado ítems, que tienen la siguiente estructura.

```json
{
  "id": 1,
  "title": "Hacer Actividad API REST",
  "completed": false
}
```

A través de los endpoints de /items de GET y POST debes interactuar con el estado almacenado en un array en el servidor. Adicionalmente es necesario soportar una ruta como /items/:id con los métodos PUT y DELETE, para modificar un ítem creado.

## Express con autenticación y seguridad

JSON web token > estándar que define una forma segura de transmitir información entre el cliente y el servidor. Transmite con formato de JSON y son muy seguros.

El JWT se suele utilizar para la autorización de un cliente. Por ejemplo, una vez que el cliente envía su usuario y contraseña, el servidor lo autentifica y le retorna al cliente un texto. Este texto es una especie de firma digital, donde el servidor encripta un objeto JSON, con una clave segura, y se lo envía. Luego, en llamadas posteriores, el cliente utiliza este token para autorizar su llamada. El servidor puede validar el token, utilizando la misma clave segura con la que firmó originalmente.

El JWT está formado por tres partes de contenido, la cabecera, el payload o contenido, y la firma, todos estos separados por un punto (.).

```md
xxxxxxxx.yyyyyyyyyy.zzzzzzzzzzzzzzzz
cabecera.payload.firma
```

El contenido se almacena en Base64 y puede desencodear sin la necesidad de una clave, pero no puede ser verificado sin esa clave.

Para utilizar JWT en node, debemos instalar el paquete `jsonwebtoken`. Via npm es sencillamente `npm install jsonwebtoken`.

Para firmar un token, debemos indicar primero una firma o contraseña segura, posteriormente utilizar la función `sign` para generar el token.

```js
const jwt = require("jsonwebtoken");

const secreto = "AlgunSecret0";
const token = jwt.sign({
  nombre: "Sergio",
}, secreto);

// Imprimir token generado
console.log(token);
```

[Página oficial de JWT](https://jwt.io/)

Para poder decodificar el token enviado por el usuario, validarlo con nuestra firma y obtener el contenido, utilizamos la función `verify`.

```js
const jwt = require("jsonwebtocken");

const secreto = "AlgunSecret0";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJTZXJnaW8iLCJpYXQiOjE1NjQzNjI4MzZ9.7KlnZB8UqphUtqrRVaboRVLYPYGIByNWjQBeW3c97Bs";
const descodificado = jwt.verify(token, secreto)
console.log(descodificado);
```

```js
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Menu");
});

const usuarios = [
  {
    usuario: "Sergio",
    contrasena: "supersegura"
  }
]

function validarUsuarioContrasena(usuario, contrasena) {
  const [filtrarUsuario] = usuarios.filter(fila => fila.usuario === usuario && fila.contrasena === contrasena)
  if (!filtrarUsuario) {
    return false;
  }
  return filtrarUsuario;
}

app.post("/login", (req, res) => {
  const {usuario, contrasena} = req.body;
  const validado = validarUsuarioContrasena(usuario, contrasena);
  if (!validado) {
    res.json({error: "No existe el usuario o la contraseña es incorrecta"});
    return;
  }

  const token = jwt.sign({ // firmando el token
    usuario // payload
  }, "secretoJWT#ssh"); // clave segura que está en el servidor y no compartirla

  res.json({ token }); // se lo enviamos al cliente
})

app.listen(3000, () => {
  console.log("Servidor iniciado");
})
```

Obtener el token del cliente para autenticarlo y permitir que acceda a una ruta segura por medio de un middleware. Agregamos:

```js
const autenticarUsuario = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // obtiene el token
    const verificarToken = jwt.verify(token, "secretoJWT#ssh"); // verificar el toquen con jwt.verify - el secreto debe ser el mismo
    if (verificarToken) {
      req.usuario = verificarToken; // util para llamadas posteriores
      return next();
    }
  } catch(err) { // si no se pudo verificar, error
    res.json({ error: "Error al validar usuario"});
  }
}
// agregamos middleware autenticar usuario
app.get("/seguro", autenticarUsuario, (req,res) => {
  res.send(`Esta es una pagina autenticada. Hola ${req.usuario.usuario}!`)
})
```
