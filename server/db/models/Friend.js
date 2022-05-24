const Sequelize = require('sequelize')
const db = require('../db')


const Friend = db.define('friend', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        unique: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
          notEmpty: true
        }
      },
})


module.exports = Friend
