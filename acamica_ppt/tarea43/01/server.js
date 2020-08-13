const express = require('express');
const server = express();

const alumnos = [
    {
        id: 1,
        nombre: 'Jose',
        apellido: 'Aliaga'
    },
    {
        id: 2,
        nombre: 'Paula',
        apellido: '100 años'
    }
];

const fotos = [
    {
        id: 1,
        title: 'Example image',
        url: 'https://example.com/image/1'
    },
    {
        id: 2,
        title: 'Another example image',
        url: 'https://example.com/image/2'
    }
];

server.get('/photos', (req, res) => {
    res.json([
        {
            id: 1,
            title: 'Example image',
            url: 'https://example.com/image/1'
        },
        {
            id: 2,
            title: 'Another example image',
            url: 'https://example.com/image/2'
        }
    ]);
});

server.get('/acamica/dwfs/alumnos', (req, res) => {
    res.json(
        [
            {
                id: 1,
                nombre: 'Jose',
                apellido: 'Aliaga'
            },
            {
                id: 2,
                nombre: 'Paula',
                apellido: '100 años'
            }
        ]
    );
})

server.get('/acamica/dwfs/alumnos/:indiceAlumnos', (req, res) => {
    const indiceAlumnos = req.params.indiceAlumnos;
    res.json(alumnos[indiceAlumnos]);
})


// definición de la ruta de express que retorna una foto específica

server.get('/photos/:indiceFoto', (req, res) => {
    const indiceFoto = req.params.indiceFoto;
    res.json(fotos[indiceFoto]);
})

server.listen(5000, () => {
    console.log('Servidor iniciado...')
})