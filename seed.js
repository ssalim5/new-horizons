const { green, red } = require("chalk");
const { 
  db,
  models: {User, Activity, Category, ActivityCategory},
} = require("./server/db");

const users = [{
  name: "Ryan",
  email: "test1@gmail.com",
password: 'test'
},
{
 name: "Mason",
email: "test2@gmail.com",
password: 'test'
},
{
  name: 'Sakib',
  email: "test3@gmail.com",
password: 'test'
},
{
name: 'Mahdi',
email: "test4@gmail.com",
password: 'test'
}]

const activities = [
  {
    id: 1,
    name: "Basketball",
    description: 'fun activity'
  },{
    id:2,
    name: "Bowling",
    description: 'fun activity'
  },{
    id:3,
    name: "Chess",
    description: 'fun activity'
  },{
    id:4,
    name: "Movies",
    description: 'fun activity'
  },{
    id:5,
    name: "Cooking Class",
    description: 'fun activity'
  },
  {
    id:6,
    name: "Painting",
    description: 'fun activity'
  },
]

const categories = [
  {
    id: 1,
   name: "creative",
  },{
    id: 2,
   name: "athletic",
  },{
    id:3,
    name: "logical",
  },{
    id:4,
    name: "relaxing",
  },{
    id:5,
    name: "entertaining",
  },
]

const activitiesCategories = [
  {
    id:1,
    activityId:1,
    categoryId:1,
    score:2,
  },{
    id:2,
    activityId:1,
    categoryId:2,
    score:5,
  },{
    id:3,
    activityId:1,
    categoryId:3,
    score:2,
  },{
    id:4,
    activityId:1,
    categoryId:4,
    score:1,
  },{
    id:5,
    activityId:1,
    categoryId:5,
    score:1,
  },{
    id:6,
    activityId:2,
    categoryId:1,
    score:3,
  },{
    id:7,
    activityId:2,
    categoryId:2,
    score:3,
  },{
    id:8,
    activityId:2,
    categoryId:3,
    score:3,
  },{
    id:9,
    activityId:2,
    categoryId:4,
    score:3,
  },{
    id:10,
    activityId:2,
    categoryId:5,
    score:2,
  },{
    id:11,
    activityId:3,
    categoryId:1,
    score:2,
  },{
    id:12,
    activityId:3,
    categoryId:2,
    score:1,
  },{
    id:13,
    activityId:3,
    categoryId:3,
    score:5,
  },
  {
    id:14,
    activityId:3,
    categoryId:4,
    score:1,
  },{
    id:15,
    activityId:3,
    categoryId:5,
    score:1,
  },
  {
    id:16,
    activityId:4,
    categoryId:1,
    score:1,
  },{
    id:17,
    activityId:4,
    categoryId:2,
    score:1,
  },{
    id:18,
    activityId:4,
    categoryId:3,
    score:2,
  },
  {
    id:19,
    activityId:4,
    categoryId:4,
    score:4,
  },{
    id:20,
    activityId:4,
    categoryId:5,
    score:5,
  },{
    id:21,
    activityId:5,
    categoryId:1,
    score:2,
  },
  {
    id:22,
    activityId:5,
    categoryId:2,
    score:1,
  },{
    id:23,
    activityId:5,
    categoryId:3,
    score:3,
  },{
    id:24,
    activityId:5,
    categoryId:4,
    score:2,
  },{
    id:25,
    activityId:5,
    categoryId:5,
    score:2,
  },{
    id:26,
    activityId:6,
    categoryId:1,
    score:5,
  },{
    id:27,
    activityId:6,
    categoryId:2,
    score:1,
  },{
    id:28,
    activityId:6,
    categoryId:3,
    score:1,
  },{
    id:29,
    activityId:6,
    categoryId:4,
    score:5,
  },{
    id:30,
    activityId:6,
    categoryId:5,
    score:1,
  },
]

const userActivities = [
  {}
]


const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      users.map((user) => {
        return User.create(user)
      }),
      activities.map((user) => {
        return Activity.create(user)
      }),
      categories.map((category)=>{
        return Category.create(category)
      }),
      activitiesCategories.map((actCat)=>{
        return ActivityCategory.create(actCat)
      }),
    )

    console.log(green('Seeding success!'))
    db.close()

    // seed your database here!
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
