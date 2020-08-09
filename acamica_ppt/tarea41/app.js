const op = require('./calculator');
const fs = require('fs');

//fs.writeFile('log.txt');


//let sumaT = op.suma(2, 3);
let multiT = op.rest(7, 8);
let divT = op.multi(15, 3);
let resT = op.div(10, 4);

let arrayazo = [multiT, divT, resT];

fs.appendFileSync('log.txt', arrayazo + '\n');