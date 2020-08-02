const express = require('express');
const server = express();

server.get('/', (req,res)=> {
    res.send('barra');
})

server.get('/home', (req,res)=> {
    res.send('home');
})

server.listen(3000, ()=> {
    console.log('Servidor iniciado');
})