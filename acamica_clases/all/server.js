const express = require('express');
const server = express();

server.get('/', (req, res)=>{
	res.send('Primera');
})

server.get('/login', (req, res)=>{
	res.send('login');
})

server.get('/usuario', (req, res)=>{
	res.send('usuario');
})

server.get('/perfil', (req, res)=>{
	res.send('perfil');
})

server.get('/my/primer/server', (req, res)=>{
	res.send('hola mundo!');
})

server.listen(3000, ()=>{
	console.log('servidor iniciado...')
})