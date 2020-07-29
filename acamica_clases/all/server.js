const express = require('express');
const fs = require('fs');
const server = express();



// server.get('/', (req, res)=>{

// 	res.send('Primera');
// })

// server.get('/api', (req, res)=>{
// 	//res.send('Primera');
// 	let path='ejemplo.txt';

// 	fs.readFile(path, 'utf-8', (err, data)=>{ // lee un archivo
//     if(!err)
//         //console.log('asíncrono ', data)
//     	res.send(data);
// 	})
// })

// server.post('/apiv', (req, res)=>{
// 	//res.send('Primera');
// 	let path=este es el path que recibo con el post

// 	fs.readFile(path, 'utf-8', (err, data)=>{ // lee un archivo
//     if(!err)
//         //console.log('asíncrono ', data)
//     	res.send(data);
// 	})
// })

// server.get('/home', (req, res)=>{
// 	res.send('login');
// })


// server.get('/', (req, res)=>{
// 	res.send('estoy en barra');
// })


// // server.get('/home', (req, res) => {
// //     console.log('estoy en home');
// // })

// server.get('/login', (req, res)=>{
// 	res.send('login');
// })

// server.get('/usuario', (req, res)=>{
// 	res.send('usuario');
// })

// server.get('/perfil', (req, res)=>{
// 	res.send('perfil');
// })

// server.get('/my/primer/server', (req, res)=>{
// 	res.send('hola mundo!');
// })

// // Middlewares

// server.use((req, res, next)=>{
//     console.log('no tengo ruta, soy global');
//     next();
// })

// server.use('/', (req, res, next)=>{
//     console.log('primero paso el middleware de barra');
//     next();
// })

// server.use('/home', (req, res, next)=>{
//     console.log('primero paso el middleware de home');
//     next();
// });

server.get('/contacto',(req,res)=>{
	console.log('contacto agregado')
});

server.get('/demo',(req,res)=>{
	console.log('holissssssssssssss')
});

server.use((req,res,next)=>{
	console.log('middleware global');
	next();
});

server.use('/demo',(req,res,next)=>{
	console.log('voy a demo');
	next();
});


// puerto

server.listen(5000, ()=>{
	console.log('servidor iniciado...')
})