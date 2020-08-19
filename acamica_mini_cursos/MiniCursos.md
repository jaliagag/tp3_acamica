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