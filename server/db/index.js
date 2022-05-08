//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Activity = require('./models/Activity')
const Category = require('./models/Category')
const ActivityCategory = require('./models/Activity-Categories')
const UserActivities = require('./models/User-Activities')

/* Activity-Category many to many association through ActivityCategory table */
Activity.belongsToMany(Category, {through: {model: ActivityCategory, unique: false}})
Category.belongsToMany(Activity, {through: {model: ActivityCategory, unique: false}})

/* User-Activity many to many association through UserActivities table */
Activity.belongsToMany(User, {through: {model: UserActivities, unique: false}})
User.belongsToMany(Activity, {through: {model: UserActivities, unique: false}})

module.exports = {
  db,
  models: {
    User,
    Activity,
    Category,
    ActivityCategory,
    UserActivities
  },
}
