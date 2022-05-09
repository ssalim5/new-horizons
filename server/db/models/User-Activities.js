const Sequelize = require('sequelize')
const db = require('../db')


const UserActivities = db.define('useractivities', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    score: {
        type: Sequelize.FLOAT,
        defaultValue: -1,
    },
})


module.exports = UserActivities
