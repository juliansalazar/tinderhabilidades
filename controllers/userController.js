const { create } = require('../models/User')

const createUser = (bodyUser) => {
  create(bodyUser)
      .then((user) => {return user})
      .catch((err) => {return err})
}

module.exports = { createUser }