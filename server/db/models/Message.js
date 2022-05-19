const Sequelize = require('sequelize')
const db = require('../db')


const Message = db.define('message', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    userId: {
        type: Sequelize.INTEGER,
        unique: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
})


module.exports = Message
