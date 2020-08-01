const elemData = document.getElementById('data');

fetch('http://localhost:5000/usuarios')
.then(res=>res.json())
.then(res=>{
	//elementData.innerHTML = res.lenght
	elemData.innerHTML = JSON.stringify(res)
})
.catch(err=>{
	console.log(err);
})