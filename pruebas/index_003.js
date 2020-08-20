// var prueba = process.argv[2];

// console.log("Hola: " + prueba + "!");

// var fs = require('fs');

// // var resultado = fs.readFileSync('testFile');

// // console.log(resultado.toString())

// fs.readFile('testFile', (err, data) => {
//     if(err) throw err;
//     console.log('Imprimiendo resultado ');
//     console.log(data.toString())
// })

// archivo modulo.js

// module.exports = 'Hola mundo';

// // en otro archivo app.js

// var modulo = require('./modulo');

// console.log(modulo);

// function sumar (num1, num2) {
//     return num1 + num2;
// }

// function saludar () {
//   console.log('hola mundo')
// }

// module.exports = {
//   sumar : sumar,
//     saludar : saludar
// }

const fetch = require('node-fetch');

// para hacer que la función sea async, ponemos adelante `async`

async let getName = (username) {
  const url = `https://api.github.com/users/${username}`;
  const respuesta = await fetch(url) // retorna una promesa
  const json = await respuesta.json()
  console.log(json);
  
    // .then(respuesta => respuesta.json())
    // .then(json => {
    //   console.log(json.name)
    // })
}

getName('jaliagag')