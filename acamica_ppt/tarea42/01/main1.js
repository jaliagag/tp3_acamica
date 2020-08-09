const moment = require('moment');

let fecha = new moment('31/12/2019', 'DD/MM/YYYY');
let formateada = fecha.format('MM/DD/YY');

console.log(formateada);