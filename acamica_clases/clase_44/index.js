let express = require('express')
let app = express()
let cors = require('cors')
//get data
const Data = require('./data')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get('/', (req, res) => {
    res.send('start server')
})

app.get('/usuarios', (req, res) => {
    let d = Data.info
    res.json(d)
})

app.get('/usuario', (req, res) => {
    let nombre = req.body.nombre
    let d = Data.info

    let v = d.filter(usuario => {
        if (usuario.nombre == nombre) {
            return usuario
        }
    })
    res.json({ 'usuario': v })
})

app.post('/usuario/agregar', (req, res) => {
    let Usuario = {
        id: Number(req.body.id),
        nombre: req.body.nombre,
        cargo: req.body.cargo
    }

    let d = Data.info
    d.push(Usuario)
    res.json(Data.info)
})

app.get('/usuarios/limit/:limit', (req, res) => {
    let d = Data.info
    let limit = req.params.limit
    let r = [];

    for (let x = 0; x < limit; x++) {
        r.push(d[x])
    }
    res.json({ 'limit': r })
})

app.delete('/usuario/eliminar/:id', (req, res) => {
    let d = Data.info
    let id = req.params.id

    let r = d.filter(usuario => {
        if (usuario.id != id) {
            return usuario
        }
    })
    res.json({ 'usuarios': r })
})

app.put('/usuario/modificar', (req, res) => {
    let d = Data.info
    let Usuario = {
        id: req.body.id,
        nombre: req.body.nombre,
        cargo: req.body.cargo
    }
    let r;

    for (let x = 0; x < d.length; x++) {
        if (d[x].id == Usuario.id) {
            d[x].nombre = Usuario.nombre
            d[x].cargo = Usuario.cargo
        }
    }
    r = [...d]
    res.json({'usuarios':r})
})

app.listen(5000, () => {
    console.log('start server')
})
