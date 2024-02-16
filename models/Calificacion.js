const knex = require('../db/connection');

class Calificacion {
  static async leaveRating(servicioId, userId, calificacion, comentario) {
    return knex('calificaciones').insert({ servicio_id: servicioId, user_id: userId, calificacion, comentario });
  }
}

module.exports = Calificacion;