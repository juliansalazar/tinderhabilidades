const Calificacion = require('../models/Calificacion');
var mongoose = require('mongoose')

module.exports = {
  dejarCalificacion: async (req, res) => {
    try {
      const { servicioId, userId, calificacion, comentario } = req.body;
      await Calificacion.leaveRating(servicioId, userId, calificacion, comentario);
      res.status(201).json({ message: 'Calificación dejada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al dejar calificación' });
    }
  }
};