const Sequelize = require('sequelize')
const db = require('../db')


const Catagory = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
})


module.exports = Catagory
