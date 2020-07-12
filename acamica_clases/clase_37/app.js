//console.log('hola estoy en nodejs')

// crear un servidor web muy rápido a través de módulos

var http = require('http') // módulo por defecto de node

/*
http.createServer((req, res)=>{ // cuando mandamos una request entra por req, y cuando enviamos una respuesta sale por res
	res.writeHead(200, {'Content-type':'text/html'}) // formato
	res.write('este mensaje viene desde nodejs server') // mensaje
	res.end() // terminar la comunicación
}).listen(3000) // escucha(puerto)
*/

// para correr esto usamos `node app.js` - no se va a mostrar nada, simplemente se inicia el servidor
// vamos a localhost:3000 y vemos el mensaje que se generó

const server = http.createServer((req, res)=>{ // cuando mandamos una request entra por req, y cuando enviamos una respuesta sale por res
	res.writeHead(200, {'Content-type':'text/html'}) // formato
	res.write('este mensaje viene desde nodejs server') // mensaje
	res.end() // terminar la comunicación
})

server.listen(3000, () => {
	console.log('start server');
}) // escuchar(puerto)