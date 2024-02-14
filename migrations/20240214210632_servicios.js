/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('servicios', function(table) {
      table.increments('id').primary();
      table.string('nombre');
      table.text('descripcion');
      table.decimal('tarifa_por_hora', 10, 2);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('servicios');
  };