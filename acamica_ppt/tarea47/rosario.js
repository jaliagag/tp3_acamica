// https://acamica.zoom.us/rec/play/v8Z5dOmv_TI3G4ec5QSDC6QrW9W4fays2yIb-PsFmkvgBXVVYACkNbsbMeTNkmJU2-siFeFxWj0_CwsS?continueMode=true&_x_zm_rtaid=hkwfA9ycSBiDQPjYJPJf1w.1598582020106.8f9ebc8c9b46b6c2503be2b09cf0c845&_x_zm_rhtaid=724

const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const informacion = { usuario: 'jose'};
const firma = 'Hari_Seldon';
const token = jwt.sign(informacion, firma);
const decodificado = jwt.verify(token, firma);

console.log('token --> ', token);
console.log('decodificado --> ', decodificado);

const server = express();
server.use(bodyParser.json());

server.post('/login', (req, res)=> {
    const {usuario, contrasena } = req.body;
    let validado = true;

    if(!validado){
        res.json({ err: 'Usuario o contraseña incorrecta'})
        return;
    }
    const token = jwt.sign({
        usuario,
        contrasena
    }, firma);
    res.json({ token });
});

server.listen(3000, ()=> {
    console.log('Servidor iniciado')
})

// 15:42