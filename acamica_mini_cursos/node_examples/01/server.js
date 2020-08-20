var http = require('http'); // abre el puerto
var fs = require('fs')

var server = http.createServer(function (req, res) {
   console.log(req.url)
   if (req.url === "/") {
       fs.readFile('./public/index.html', function (err, data) {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.end(data);
       })
   } else if (req.url === '/assets/logo.png') {
        fs.readFile('./public/assets/logo.png', function (err, data) {
            res.writeHead(200, {"Content-Type": "image/png"});
            res.end(data);
        })
   } else {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end("Página no encontrada");
   }
})


server.listen(3000);

console.log('Servidor iniciado en el puerto 3000');