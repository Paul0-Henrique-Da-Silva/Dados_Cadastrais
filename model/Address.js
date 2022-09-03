const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = require('./User')

const Address = db.define('Address', {
  street: {
    type: DataTypes.STRING,
    require: true
  },
  number: {
    type: DataTypes.STRING,
    required: true
  },
  city: {
    type: DataTypes.STRING,
    required: true
  }
})

User.hasMany(Address)
Address.belongsTo(User) // endereço pertence a entidade usuario

module.exports = Address
