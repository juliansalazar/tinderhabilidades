/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('transacciones', function(table) {
      table.increments('id').primary();
      table.integer('servicio_id').unsigned().references('id').inTable('servicios').onDelete('CASCADE');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.dateTime('fecha_inicio').notNullable();
      table.integer('duracion').notNullable();
      table.string('estado');
      table.decimal('monto_total', 10, 2);
      table.decimal('monto_pagado', 10, 2);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('transacciones');
  };