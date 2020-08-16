const express = require('express');
const router = express.Router();


// este pool hace referencia a la conexión a la base de datos
const pool = require('../database')

router.get('/add', (req, res) => {
    res.render('links/add');
})

module.exports = router;