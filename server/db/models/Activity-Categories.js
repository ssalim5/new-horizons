const Sequelize = require('sequelize')
const db = require('../db')


const ActivityCategory = db.define('activitycategories', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    score: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: -1,
    }
})


module.exports = ActivityCategory
