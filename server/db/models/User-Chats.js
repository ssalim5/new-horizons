const Sequelize = require('sequelize')
const db = require('../db')

const UserChats = db.define('userchats', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
   
})


module.exports = UserChats
