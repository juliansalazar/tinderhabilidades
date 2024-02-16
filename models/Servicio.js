const knex = require('../db/connection');

class Servicio {
  static async findAll() {
    return knex('servicios').select('*');
  }

  static async findById(id) {
    return knex('servicios').where('id', id).first();
  }
}

module.exports = Servicio;