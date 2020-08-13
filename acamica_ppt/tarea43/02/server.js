const express = require('express');
const server = express();

const comisiones = [
    {
        id: 1,
        title: 'dwfs'
    },
    {
        id: 2,
        title: 'dwa'
    },
    {
        id: 3,
        title: 'bigdata'
    }
];


server.get('/acamica/:comision', (req,res) => {
    const comision = req.params.comision;
/*     console.log(comision);
    let even = comisiones.some(item => item.name == comision); */
    res.json(comisiones[comision]);
    
    if(err){
        res.statusCode = 404;
        res.json({
            error: 'No encontrado'
        })
    }
})


server.listen(3000, () => {
    console.log('Servidor iniciado...')
})

/* Crear ruta GET /acamica/comision/alumnos

comisión puede ser ‘dwfs’, ‘dwa’, ‘bigdata’

Reciba un query string parameter nombre que sirva para
filtrar los alumnos con ese nombre

Retorna una lista de alumnos correspondientes a la
comisión, si se incluyó nombre como query string solo
retornar los alumnos con ese nombre */