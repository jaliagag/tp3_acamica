/*
Cada ejecución del últimio script debe guardarse en un archivo llamado log.txt con este formato:
año/mes/día hora:minuto:segundo
url
url
url
*/
const coolImages = require('cool-images');
const fs = require('fs');
const moment = require('moment');

let images = coolImages.many(600, 800, 10);
let momento = moment().format('YYYY MM DD hh:mm:ss');

fs.appendFileSync('log.txt', momento + '\n')

images.forEach( (element) => {
    fs.appendFileSync('log.txt', 'Imagen ' + (Number(images.indexOf(element)) +1) + ' = ' + element + '\n', (err)=>{
        if(!err){
            //console.log('texto creado con éxito');
        }
    })
});
