const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req,res) => {
    res.send("Cosas que faltan");
});

app.get("/items", (req, res) => {

})

app.get("/items/:id", (req, res) => {
    
})

app.post("/items", (req, res) => {
    
})

app.listen(3000, () => {
    console.log("Servidor iniciado");
});