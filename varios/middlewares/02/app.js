const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('home');
})

app.get('/secret', isAuthorized, (req, res)=> {
    res.json({"message": "Hello world"})
})

app.get('/jwt', (req,res)=>{
    let privateKey = fs.readFileSync('./private.pem', 'utf8');
    // create the token
    let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: 'HS256'});
    res.send(token); // shows the token created
})

function isAuthorized (req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync('./private.pem', 'utf8');

        jwt.verify(token, privateKey, { algorithm: "HS256"}, (err, decoded) => {
            if (err) {
                res.status(500).json({ error: "Not Authorized"})
            }

            console.log(decoded);

            return next();
        })
    } else {
        res.status(500).json({ error: "Not Authorized"})
    }
}

app.listen(port, () => {
    console.log(`Started app on port: ${port}`);
})