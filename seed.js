const { green, red } = require("chalk");
const { db } = require("./server/db");
const Activity = require("./server/db/models/Activity");
const User = require("./server/db/models/User");



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



const activities = [{
 name: "Basketball",
 description: 'fun activity'
},
{
  name: "Football",
  description: 'fun activity'
 },
 {
  name: "Bowling",
  description: 'fun activity'
 }]


const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(users.map(user => {
      return User.create(user);
    }));
    await Promise.all(activities.map(activity => {
      return Activity.create(activity);
    }));

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
