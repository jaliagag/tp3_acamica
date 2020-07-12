const fs = require('fs');
// require('os')

const path = 'ejemplo.txt'

// fs.writeFile(path, 'hola mundo', (err) => {
// 	if(!err)
// 		console.log('se creo con exito')
// });

// fs.mkdir('archivos', (err) => {
// 	if(!err)
// 		console.log('se creo con exito')
// });


// esto es SÍNCRONO
const data = fs.readFileSync(path, 'utf-8')
console.log(data)

// esto es ASÍNCRONO

// fs.readFile(path, 'utf-8', (err, data) => {
// 	if(!err)
// 		console.log(data)
// })

0:33:45