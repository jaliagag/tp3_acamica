
var http = require('http');
var url = require('url');

const productos = ['pc', 'tv', 'laptop'];

const server = http.createServer((req, res) => {
	
	const urlParse = url.parse(req.url);
	const method = req.method;

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', '*');

	switch(method){
		case 'GET':
			if(urlParse.pathname == '/prdouctos'){
				res.writeHead(200, {'Content-Type':'application/json'});
				res.write(JSON.stringify({productos}));
				res.end();
			}

			if(urlParse.pathname == '/'){
				res.writeHead(200, {'Content-Type':'application/json'});
				res.write(JSON.stringify({'info':'/productos - json -[...]'}));
				res.end();
			}
		break;
		case 'POST':
			if(urlParse.pathname == '/agregar'){
				productos.push(urlParse.query.split('=')[1]);
				res.writeHead(200, {'Content-Type':'application/json'});
				res.write(JSON.stringify({'agregar':'producto agregado'}));
				res.end();
			}
		break;
	}
})

server.listen(5000, ()=> {
	console.log('start server');
})