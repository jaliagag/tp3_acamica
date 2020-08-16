const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

// middlewares

// routes

app.get('/delilah.resto.com.ar', (req, res) => {
    res.json({
        body: 'home'
    })
});

app.get('/delilah.resto.com.ar/login', (req, res) => {
    res.json({
        body: 'login'
    })
});

app.get('/delilah.resto.com.ar/:usr', (req, res) => {
    res.json({
        body: 'user_home'
    })
});

app.get('/delilah.resto.com.ar/admin', (req, res) => {
    res.json({
        body: 'admin_home'
    })
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000')
})