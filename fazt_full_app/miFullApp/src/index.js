const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// settings para el servidor
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); // le dice a node que la carpeta de view está aquí
app.engine('.hbs', exphbs({
    // nombre de la plantilla, funciones....
    defaultLayout: 'main'
    ,layoutsDir: path.join(app.get('views'), 'layouts')
    ,partialsDir: path.join(app.get('views'), 'partials')
    ,extname: '.hbs'
    ,helpers: require('./lib/handlebars')
})) // < configuración del motor
app.set('view engine', '.hbs')

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})) // aceptar desde un formulario los datos que nos envíen los usuarios
app.use(express.json())

// variables globales
app.use((req, res, next) => {

    next();
})

// rutas o URLs
app.use(require('./routes'))
app.use(require('./routes/authentication'))
app.use('/links', require('./routes/links'))

// archivos púplicos
// CSS javascript
app.use(express.static(path.join(__dirname, 'public')))

// iniciar el servidor

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto: ', app.get('port'));
})