const Sequelize = require('sequelize')
const db = require('../db')


const Friend = db.define('friend', {
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
})


module.exports = Friend
