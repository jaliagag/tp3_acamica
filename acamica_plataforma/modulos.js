const os = require("os"); // importar módulos
const fs = require("fs");
const lib = require("./libreria");

//console.log(os.cpus()); // ver núcleos
//console.log(fs.readdirSync("./")); // archivos en la carpeta actual

//console.log(lib);
//console.log(lib.a);
//console.log(lib.suma(10,15));

const faker = require("faker");

const randomName = faker.name.findName()
const randomEmail = faker.internet.email();
const randomCard = faker.helpers.createCard();

console.log(randomName, randomEmail, randomCard);