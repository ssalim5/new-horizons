//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Activity = require('./models/Activity')
const Category = require('./models/Category')
const ActivityCategory = require('./models/Activity-Categories')
const UserActivities = require('./models/User-Activities')

/* Activity-Category many to many association through ActivityCategory table */
Activity.belongsToMany(Category, {through: ActivityCategory, foreignKey: "activityId", otherKey: "categoryId"})
Category.belongsToMany(Activity, {through: ActivityCategory, foreignKey: "categoryId", otherKey: "activityId"})

/* User-Activity many to many association through UserActivities table */
Activity.belongsToMany(User, {through: UserActivities, foreignKey: "activityId", otherKey: "userId"})
User.belongsToMany(Activity, {through: UserActivities, foreignKey: "userId", otherKey: "activityId"})


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
