// Fuente FatzTech

const express = require('express');
const app = express();
const morgan = require('morgan'); // muestra por consola las peticiones que van llegando
const multer = require('multer'); // procesar imágenes
const path = require('path')

app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
// new Date().getTime() --> genera un número aleatorio
// path.extname(file.originalname) --> solo la extensión del archivo
app.use(multer({storage}).single('image')); // single: solo subiremos una sola imagen
// 'image' viene del frontend
app.use(express.urlencoded({extended: false}))
// urlencoded: cuando tengamos un formulario del frontend, podremos interpretar los datos como si fuera un json
app.use(express.json())

app.listen(300, () => {
    console.log('Servidor iniciado');
})
