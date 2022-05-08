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
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
        defaultValue: 3,
    },
    visits: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        validate: {
            min:0
        }
    }

})


module.exports = UserActivities
