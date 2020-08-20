const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

// middlewares

// routes

app.get('/', (req, res) => {
    res.json({
        body: 'home'
    })
});

app.get('/login', (req, res) => {
    res.json({
        body: 'login'
    })
});

app.get('/user', (req, res) => {
    res.json({
        body: 'user_home'
    })
});

app.get('/login/admin', (req, res) => {
    res.json({
        body: 'admin_login'
    })
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000')
})