const knex = require('../db/connection');

class Transaccion {
  static async completeTransaction(id) {
    return knex('transacciones').where('id', id).update({ estado: 'completada' });
  }
}

module.exports = Transaccion;