const Sequelize = require('sequelize')
const db = require('../db')


const Chat = db.define('chat', {
    //I Might need to add UUIDs to define rooms for chats... will figure this out later.
    // id: {
    //     type: Sequelize.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     unique: true,
    // },
})


module.exports = Chat
