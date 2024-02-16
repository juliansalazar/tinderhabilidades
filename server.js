require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

/* Middlewares (opcional) */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */
app.use('/api/v1', userRoutes);


/* Poner el servidor a escuchar */
app.listen(3001,()=> {
    console.log('Server ON: 3001');
})