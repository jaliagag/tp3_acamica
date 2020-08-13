const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.get('/', (req, res)=>{
    res.json({
        text: 'api works!'
    });
});

app.post('/api/login', (req, res) => {
    // auth user
    const user = {id: 3}; // normalmente recibido a través de un formulario
    const token = jwt.sign({user}, 'my_secret_key'); // número único para el usuario para idetificar si el usuario ha logrado acceder a otras rutas protegidas de la applicación
    // acá hemos generado un token pero no lo hemos usado
    res.json({
        token
    });
});

// ruta protegida a la que solamente van a tener acceso las personas que han generado el token
// primero se tiene que generar el token y después tenemos que darle acceso a la ruta protegida
// - vamos a crear un middleware para que ANTES de que llegue a la ruta /api/protected y ejecute req, res, se ejecute otra función 

app.get('/api/protected', ensureToken, (req, res) => {
/*     res.json({
        text: 'protected'
    }) */
    // req.token = recibo el token
    // 
    jwt.verify(req.token, 'my_secret_key', (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                text: 'protected response!',
                data
            });
        }
    });
});

// El middleware se va a asegurar de que el usuario haya generado un token
// Cuando el navegador nos envíe información, lo hace a través de los headers

function ensureToken(req, res, next){
    // existe un header que se llame authorization? mi aplicación tiene que generar este header (?)
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" "); // separar por los espacios en blanco al header
        // BEARER.HASH
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.listen(3000, () => {
    console.log('Server started on port 3000...')
})