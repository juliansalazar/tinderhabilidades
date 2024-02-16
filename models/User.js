const knex = require('../knex');

const create = (bodyUser) => {
  return knex
    .insert(bodyUser)
    .into('users')
    .returning('user_id', 'name', 'email', 'password', 'created_at')
}

module.exports = { create }