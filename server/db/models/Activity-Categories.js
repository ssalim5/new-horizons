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
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
        defaultValue: 1,
    }

})


module.exports = ActivityCategory
