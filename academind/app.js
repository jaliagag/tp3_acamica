const express = require('express');
const app = express();

// middleware

app.use((req, res, next) => {
    res.statusCode(200).json({
        message: 'it works!'
    });
    next()
})

module.exports = app;