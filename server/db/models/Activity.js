const Sequelize = require('sequelize')
const db = require('../db')


const Activity = db.define("activity", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  exertion: {
    type: Sequelize.DataTypes.ENUM("LOW", "MEDIUM", "HIGH"),
    defaultValue: "MEDIUM",
    allowNull: false,
  },
  // experienceNeeded: { type: Sequelize.STRING,
  //   defaultValue: "none",
  //   },
  //  numberOfPeople: {
  // type: Sequelize.STRING,
  // defaultValue: "1",
  // },
  outside: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  creative: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: "3",
    validate: {
      notEmpty: true,
      min: 0,
      max: 5,
    },
  },
  athletic: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: "3",
    validate: {
      notEmpty: true,
      min: 0,
      max: 5,
    },
  },
  relaxing: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: "3",
    validate: {
      notEmpty: true,
      min: 0,
      max: 5,
    },
  },
  adventurous: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: "3",
    validate: {
      notEmpty: true,
      min: 0,
      max: 5,
    },
  },
  social: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: "3",
    validate: {
      notEmpty: true,
      min: 0,
      max: 5,
    },
  },
  // time: {
  //   type: Sequelize.STRING,
  //   defaultValue: "one hour",
  //   },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.eatright.org/-/media/eatrightimages/fitness/exercise/benefitsofphysicalactivity/playingbasketball-1062855462.jpg",
  },
});


module.exports = Activity
