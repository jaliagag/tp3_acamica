# NodeJS y Mysql, app completa

<https://www.youtube.com/watch?v=qJ5R9WTW0_E&t=1s>

- `npm init --yes`
- `npm i express express-handlebars express-session mysql express-mysql-session morgan bcryptjs passport passport-local timeago.js connect-flash express-validator`
- morgan muestra las peticiones http
- bcrypt encripta las contraseñas
- passport - autenticacion (usaría jwt)
- `npm i nodemon -D` ponemos -D para indicar que no es un módulo que va a necesitar mi proyecto, pero que vamos a usar para el desarrollo
- ``
- `touch index.js database.js keys.js` - database.js - tiene la conexión a la mysql; keys.js nos permitirá almacenar claves o secretos para usar los servicios (número de puerto, dirección de la base de datos)

32:15