const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const key = require('./key');
const apiRouter = require('./routes');

const port = 3000;

// db connection

// middlewares

app.use(express.json())

app.use('/api/chirps', apiRouter)

// routes - delete?

app.get('/', (req, res) => {
    res.json({
        text: 'api works!'
    })
})

// get login page

app.get('/login', (req, res) => {
    const user = {id: 3}
    const token = jwt.sign({ user}, key);
    res.json({
        token
    })
})

app.post('/login', (req, res) => {
    const user = {id: 3}
    const token = jwt.sign({ user}, key);
    res.json({
        token
    })
})

// get register page

app.get('/register', (req, res) => {

})

// send registration form

app.put('/register', (req, res) => {

})

// view ALL orders

app.get('/admin/orders', ensureToken, (req,res)=>{
    jwt.verify(req.token, key, (err, data) => {
        if (err) {
            res.send('en el endpoint')
            res.sendStatus(403);
        } else {
            res.json({
                text: 'inicio de sesión seguro',
                data
            })
        }
    })
})

// modify order status

app.put('/admin/orders', ensureToken, (req,res)=>{
    jwt.verify(req.token, key, (err, data) => {
        if (err) {
            res.send('en el endpoint')
            res.sendStatus(403);
        } else {
            res.json({
                text: 'inicio de sesión seguro',
                data
            })
        }
    })
})

// place an order

app.put('/user/myorders', ensureToken, (req, res) => {
})

// get status of my orders

app.get('/user/myorders', ensureToken, (req, res)=>{

})

app.get

function ensureToken (req, res, next) {
    const bearerHeader = req.headers['authorization'];
    //console.log(bearerHeader);
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        // BEARER.HASH
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send('en la función')
        res.sendStatus(403);
    }
}

app.listen(port, ()=> {
    console.log('Servidor iniciado en puerto ' + port)
})