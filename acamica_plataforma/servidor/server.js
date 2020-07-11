/* const express = require("express");
const app = express(); // alojar la ejecución de express para poder configurar el servidor

app.get("/", (req, res) => {
    res.send("Hola mundo");
})

app.get("/error", (req, res) => {
    res.status(500);
    res.json({error: "hubo un error"});
})

app.listen(3000, () => { // método que pone nuestro servidor a la escucha - puerto y callback cuando se inicia correctamente
    console.log("Servidor iniciado!");
}) */

/////////////////////////////////////////////////////////////////////////////////

/* const express = require("express");
const app = express();

function logRequest (req, res, next) {
    console.log(
        `Middleware logRequest: a las ${new Date()} usuario accedio a ${req.path}`
    );
    next(); // continue con el resto del enroutamiento
}

app.use(logRequest); // Como middleware para _todos_ los enpoints, usa esta función

// Crear una función middleware para un solo archivo

function interceptar (req, res, next) {
    res.send("You shall not pass!");
}

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.get("/gandalf", interceptar, (req, res) => {
    res.send("Gandalf"); // antes de llegar acá, pasó por interceptar y como esa función no tiene "next", no sigue y se queda ahí
});

app.listen(3000, () => {
    console.log("servidor iniciado");
}) */

/////////////////////////////////////////////////////////////////////////////////

const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Menu");
});

let platos = [];

app.get("/platos", (req, res) => {
  res.json(platos);
})

app.post("/platos", (req, res) => {
  platos.push(req.body);
  console.log("Plato agregado al array");
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Servidor iniciado");
});