const endpoint_productos = "http://localhost:5000/productos";

fetch(endpoint_productos, {
	method: 'GET'
})
.then(res => res.json())
.then(data => {
	let elem = document.getElementById('productos'):
	elem.innerHTML = JSON.parse(JSON.stringify(data))['productos'];
})

fetch(endpoint_productos, {
	method: 'POST'
	//body
})
.then(res => res.json())
.then(data => {
	let elem = document.getElementById('productos'):
	elem.innerHTML = JSON.parse(JSON.stringify(data))['productos'];
})