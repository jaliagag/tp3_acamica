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

function sumar (num1, num2) {
    return num1 + num2;
}

function saludar () {
  console.log('hola mundo')
}

module.exports = {
  sumar : sumar,
    saludar : saludar
}