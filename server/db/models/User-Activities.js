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
    userId: {
        type: Sequelize.INTEGER,
        unique: false
    },
    activityId: {
        type: Sequelize.INTEGER,
        unique: false
    }
})


module.exports = UserActivities
