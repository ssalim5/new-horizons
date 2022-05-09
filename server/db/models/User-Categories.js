const Sequelize = require('sequelize')
const db = require('../db')

const UserCategories = db.define('usercategories', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    score: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5,
        },
    }
})

module.exports = UserActivities