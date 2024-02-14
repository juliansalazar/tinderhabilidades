/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('calificaciones', function(table) {
      table.increments('id').primary();
      table.integer('servicio_id').unsigned().references('id').inTable('servicios').onDelete('CASCADE');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.integer('calificacion').notNullable();
      table.text('comentario');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('calificaciones');
  };
