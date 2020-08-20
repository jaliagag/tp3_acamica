const express = require('express')
const app = express()
// db-connect
const {DB} = require('./db_connection')


DB.sequelize.sync({force:false}).then(()=>{
    console.log('sequelize sync connect')
})

//endpoint
DB.User.create({
    name:'juan',
    email:'jc@gmail.com',
    password:'1234'
}).then((user)=>{
    console.log('create: ', user)
})

//endpoint
DB.User.findAll().then((users)=>{
    console.log('Users: ', users)
})


app.set('port', 3000)


app.listen(app.get('port'), ()=>{
    console.log('start server')
})
