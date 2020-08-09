const fs = require('fs');

let textoX = "hola mundo";

fs.writeFile('sera.txt', textoX.toUpperCase(), (err)=>{
    if(!err){
        console.log('texto creado con éxito')
    }
})