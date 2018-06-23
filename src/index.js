'use strict'
const path = require('path')
const express = require('express');
const app = express();
const socketIO = require('socket.io')


app.get('/', function(req, res){
    res.status(200).send({message:"Se ha iniciado correctamente 1"})
})


const server = app.listen(8080, function(){
    console.log("Se ha iniciado")
})

const io = socketIO(server)

io.on('connection', (socket)=>{
    console.log("NUEVA CONEXION", socket.id)

    socket.on('newMessage', (message)=>{        
        io.emit('newMessage', message)
    });

})