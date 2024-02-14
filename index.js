// 1- Importar Express
const express = require('express');
const userRouter = require('../Proyecto_Kata_Backend-TinderHabilidades/api/v1/users.js');

// 2- Crear el servidor
const app = express();

// 3- Configurar app express
app.use(express.json()); // Sirve para recibir los json que envie el servidor
app.use(express.urlencoded({ extended: true })); // Sirve para enviar los formularios

// 4- Crear rutas
app.get('/', (req, res) => {
    res.send('Hola Mundo');
})

// 6- Importar las rutas
app.use(userRouter);

// 5- Levantar el servidor
app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001');
});