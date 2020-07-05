/* const os = require("os");
//const server = require("server");
console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem()); */

////////////////////////////////////////////////
//const fs = require("fs");

// crear nuevo archivo

/* fs.writeFile("texto.txt", "amo a paula", function(err) {
    if (err) {
        console.log(err)
    }
    console.log("Archivo creado");
});

console.log("ultimo") */
/* 
fs.readFile("./texto.txt", function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
}) */

/////////////////////////////////////
const http = require("http");
const colors = require("colors");

const handleServer = function (req, res) {
    res.writeHead(200, {"content-type": "text/html"}) // respuesta que da el servidor
    res.write("<h1>Hola mundo desde NodeJS</h1>");
    res.end();
}

/*
http.createServer(function (req, res) {
    res.writeHead(200, {"content-type": "text/html"}) // respuesta que da el servidor
    res.write("<h1>Hola mundo desde NodeJS</h1>");
    res.end();
}).listen(3000);
 */

const server = http.createServer(handleServer);
//server.listen(3000); // listen en qué puerto
server.listen(3000, function (){
    console.log("servidor en puerto 3000".red)
}); // listen en qué puerto