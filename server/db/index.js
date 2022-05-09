//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Activity = require('./models/Activity')
const Category = require('./models/Category')
const ActivityCategory = require('./models/Activity-Categories')
const UserActivities = require('./models/User-Activities')
const UserCategories = require('./models/User-Categories')

/* Activity-Category many to many association through ActivityCategory table */
Activity.belongsToMany(Category, {through: {model: ActivityCategory, foreignKey: "activityId", otherKey: "categoryId", unique: false}})
Category.belongsToMany(Activity, {through: {model: ActivityCategory, foreignKey: "categoryId", otherKey: "activityId", unique: false}})

/* User-Activity many to many association through UserActivities table */
Activity.belongsToMany(User, {through: {model: UserActivities, foreignKey: "activityId", otherKey: "userId", unique: false}})
User.belongsToMany(Activity, {through: {model: UserActivities, foreignKey: "userId", otherKey: "activityId", unique: false}})

Category.belongsToMany(User, {through: {model: UserCategories, foreignKey: "categoryId", otherKey: "userId", unique: false}})
User.belongsToMany(Category, {through: {model: UserCategories, foreignKey: "userId", otherKey: "categoryId", unique: false}})

module.exports = {
  db,
  models: {
    User,
    Activity,
    Category,
    ActivityCategory,
    UserActivities,
    UserCategories
  },
}
