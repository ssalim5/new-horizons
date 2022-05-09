const { green, red } = require("chalk");
const {
  db,
  models: {User, Activity, Category, ActivityCategory, UserActivities,UserCategories},
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
},
{name: "Al",
email: "test5@gmail.com",
password: 'test'
},
{
name: "Bill",
email: "test6@gmail.com",
password: 'test'
},
{
name: 'Bob',
email: "test7@gmail.com",
password: 'test'
},
{
name: 'Bryan',
email: "test8@gmail.com",
password: 'test'
},
{
  name: "Colin",
  email: "test9@gmail.com",
password: 'test'
},
{
 name: "Chris",
email: "test10@gmail.com",
password: 'test'
},
{
  name: 'Cristi',
  email: "test11@gmail.com",
password: 'test'
},
{
name: 'Carren',
email: "test12@gmail.com",
password: 'test'
},
{name: "Colby",
email: "test13@gmail.com",
password: 'test'
},
{
name: "David",
email: "test14@gmail.com",
password: 'test'
},
{
name: 'Diana',
email: "test15@gmail.com",
password: 'test'
},
{
name: 'Deb',
email: "test16@gmail.com",
password: 'test'
},
{
  name: "Derrick",
  email: "test17@gmail.com",
password: 'test'
},
{
 name: "Don",
email: "test18@gmail.com",
password: 'test'
},
{
  name: 'Eve',
  email: "test19@gmail.com",
password: 'test'
},
{
name: 'Evan',
email: "test20@gmail.com",
password: 'test'
},
{name: "Frank",
email: "test21@gmail.com",
password: 'test'
},
{
name: "Flora",
email: "test22@gmail.com",
password: 'test'
},
{
name: 'Flo',
email: "test23@gmail.com",
password: 'test'
},
{
name: 'Gretchen',
email: "test24@gmail.com",
password: 'test'
},
{
  name: "George",
  email: "test25@gmail.com",
password: 'test'
},
{
 name: "Harold",
email: "test26@gmail.com",
password: 'test'
},
{
  name: 'Heidi',
  email: "test27@gmail.com",
password: 'test'
},
{
name: 'Hogan',
email: "test28@gmail.com",
password: 'test'
},
{name: "Ian",
email: "test29@gmail.com",
password: 'test'
},
{
name: "Jess",
email: "test30@gmail.com",
password: 'test'
},
{
name: 'Joe',
email: "test31@gmail.com",
password: 'test'
},
{
name: 'Joanna',
email: "test32@gmail.com",
password: 'test'
},
{
  name: "Kyle",
  email: "test33@gmail.com",
password: 'test'
},
{
 name: "Krissy",
email: "test34@gmail.com",
password: 'test'
},
{
  name: 'Kevin',
  email: "test35@gmail.com",
password: 'test'
},
{
name: 'Kevon',
email: "test36@gmail.com",
password: 'test'
},
{name: "Jill",
email: "test37@gmail.com",
password: 'test'
},
{
name: "Jack",
email: "test38@gmail.com",
password: 'test'
},
{
name: 'Josh',
email: "test39@gmail.com",
password: 'test'
},
{
name: 'Justin',
email: "test40@gmail.com",
password: 'test'
},
{
  name: "Jamal",
  email: "test41@gmail.com",
password: 'test'
},
{
 name: "Jackie",
email: "test42@gmail.com",
password: 'test'
},
{
  name: 'Jaylen',
  email: "test43@gmail.com",
password: 'test'
},
{
name: 'Lebron',
email: "test44@gmail.com",
password: 'test'
},
{name: "Lisa",
email: "test45@gmail.com",
password: 'test'
},
{
name: "Leslie",
email: "test46@gmail.com",
password: 'test'
},
{
name: 'Lydia',
email: "test47@gmail.com",
password: 'test'
},
{
name: 'Mike',
email: "test48@gmail.com",
password: 'test'
},
{
  name: "Mark",
  email: "test49@gmail.com",
password: 'test'
},
{
 name: "Molly",
email: "test50@gmail.com",
password: 'test'
},
{
  name: 'Matt',
  email: "test51@gmail.com",
password: 'test'
},
{
name: 'Morgan',
email: "test52@gmail.com",
password: 'test'
},
{name: "Nick",
email: "test53@gmail.com",
password: 'test'
},
{
name: "Nikki",
email: "test54@gmail.com",
password: 'test'
},
{
name: 'OJ',
email: "test55@gmail.com",
password: 'test'
},
{
name: 'Paul',
email: "test56@gmail.com",
password: 'test'
},
{
  name: "Paula",
  email: "test57@gmail.com",
password: 'test'
},
{
 name: "Pam",
email: "test58@gmail.com",
password: 'test'
},
{
  name: 'Pamela',
  email: "test59@gmail.com",
password: 'test'
},
{
name: 'Russ',
email: "test60@gmail.com",
password: 'test'
},
{name: "Ross",
email: "test61@gmail.com",
password: 'test'
},
{
name: "Ryder",
email: "test62@gmail.com",
password: 'test'
},
{
name: 'Riley',
email: "test63@gmail.com",
password: 'test'
},
{
name: 'Scott',
email: "test64@gmail.com",
password: 'test'
},
{
  name: 'Steve',
  email: "test65@gmail.com",
  password: 'test'
  },
  {name: "Sarah",
  email: "test66@gmail.com",
  password: 'test'
  },
  {
  name: "Sylvia",
  email: "test67@gmail.com",
  password: 'test'
  },
  {
  name: 'Shaq',
  email: "test68@gmail.com",
  password: 'test'
  },
  {
  name: 'Samson',
  email: "test69@gmail.com",
  password: 'test'
  },
  {
    name: "Sully",
    email: "test70@gmail.com",
  password: 'test'
  },
  {
   name: "Smart",
  email: "test71@gmail.com",
  password: 'test'
  },
  {
    name: 'Susan',
    email: "test72@gmail.com",
  password: 'test'
  },
  {
  name: 'Tanya',
  email: "test73@gmail.com",
  password: 'test'
  },
  {name: "Tony",
  email: "test74@gmail.com",
  password: 'test'
  },
  {
  name: "Tim",
  email: "test75@gmail.com",
  password: 'test'
  },
  {
  name: 'Timmy',
  email: "test76@gmail.com",
  password: 'test'
  },
  {
  name: 'Tom',
  email: "test77@gmail.com",
  password: 'test'
  },
  {
    name: "Tommy",
    email: "test78@gmail.com",
  password: 'test'
  },
  {
   name: "Tara",
  email: "test79@gmail.com",
  password: 'test'
  },
  {
    name: 'Tyrone',
    email: "test80@gmail.com",
  password: 'test'
  },
  {
  name: 'Tina',
  email: "test81@gmail.com",
  password: 'test'
  },
  {name: "Veronica",
  email: "test82@gmail.com",
  password: 'test'
  },
  {
  name: "Vicki",
  email: "test83@gmail.com",
  password: 'test'
  },
  {
  name: 'Van',
  email: "test84@gmail.com",
  password: 'test'
  },
  {
  name: 'Waldo',
  email: "test85@gmail.com",
  password: 'test'
  },
  {
    name: "Walt",
    email: "test86@gmail.com",
  password: 'test'
  },
  {
   name: "Wes",
  email: "test87@gmail.com",
  password: 'test'
  },
  {
    name: 'Wesley',
    email: "test88@gmail.com",
  password: 'test'
  },
  {
  name: 'Will',
  email: "test89@gmail.com",
  password: 'test'
  },
  {name: "Willy",
  email: "test90@gmail.com",
  password: 'test'
  },
  {
  name: "William",
  email: "test91@gmail.com",
  password: 'test'
  },
  {
  name: 'Yolanda',
  email: "test92@gmail.com",
  password: 'test'
  },
  {
  name: 'Yes',
  email: "test93@gmail.com",
  password: 'test'
  },
  {
    name: 'Xander',
    email: "test94@gmail.com",
    password: 'test'
    },
    {name: "Xavier",
    email: "test95@gmail.com",
    password: 'test'
    },
    {
    name: "Javy",
    email: "test96@gmail.com",
    password: 'test'
    },
    {
    name: 'Zarmon',
    email: "test97@gmail.com",
    password: 'test'
    },
    {
    name: 'Semi',
    email: "test98@gmail.com",
    password: 'test'
    },
    {
    name: 'Brook',
    email: "test99@gmail.com",
    password: 'test'
    },
    {
    name: 'Robin',
    email: "test100@gmail.com",
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
    description: 'fun activity',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bowlerbowling.JPG'
  },{
    id:3,
    name: "Chess",
    description: 'fun activity',
    imageUrl: 'https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344_wide-cfdc4528733d810b7feb5e2a884f987a981920ff.jpg?s=1400'
  },{
    id:4,
    name: "Movies",
    description: 'fun activity',
    imageUrl: 'https://nofilmschool.com/sites/default/files/styles/facebook/public/movie_theater.png?itok=B2xAaSj-'
  },{
    id:5,
    name: "Cooking Class",
    description: 'fun activity',
    imageUrl: 'https://churchillmanor.com/wp-content/uploads/2016/10/Napa-Cooking-Classes.jpg'
  },
  {
    id:6,
    name: "Painting",
    description: 'fun activity',
    imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
  },
  {
  id: 7,
    name: "Archery",
    description: 'fun activity',
    imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
  },
  {
    id: 8,
      name: "Badminton",
      description: 'fun activity',
      imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
    },
    {
      id: 9,
        name: "Baseball",
        description: 'fun activity',
        imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
      },
      {
        id: 10,
          name: "Volleyball",
          description: 'fun activity',
          imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
        },
        {
          id: 11,
            name: "Beekeeping",
            description: 'fun activity',
            imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
          },
          {
            id: 12,
              name: "Birdwatching",
              description: 'fun activity',
              imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
            },
            {
              id: 13,
                name: "Bodyboarding",
                description: 'fun activity',
                imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
              },
              {
                id: 14,
                  name: "Camping",
                  description: 'fun activity',
                  imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                },
                {
                  id: 15,
                    name: "Canoeing",
                    description: 'fun activity',
                    imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                  },
                  {
                    id: 16,
                      name: "Capture the Flag",
                      description: 'fun activity',
                      imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                    },
                    {
                      id: 17,
                        name: "Cricket",
                        description: 'fun activity',
                        imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                      },
                      {
                        id: 18,
                          name: "Cross-country Skiing",
                          description: 'fun activity',
                          imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                        },
                        {
                          id: 19,
                            name: "Cycling",
                            description: 'fun activity',
                            imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                          },
                          {
                            id: 20,
                              name: "Diving",
                              description: 'fun activity',
                              imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                            },
                            {
                              id: 21,
                                name: "Dodgeball",
                                description: 'fun activity',
                                imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                              },
                              {
                                id: 22,
                                  name: "Dragon Boat Racing",
                                  description: 'fun activity',
                                  imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                },
                                {
                                  id: 23,
                                    name: "Fishing",
                                    description: 'fun activity',
                                    imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                  },
                                  {
                                    id: 24,
                                      name: "Frisbee",
                                      description: 'fun activity',
                                      imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                    },
                                    {
                                      id: 25,
                                        name: "Free Play",
                                        description: 'fun activity',
                                        imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                      },
                                      {
                                        id: 26,
                                          name: "Gardening",
                                          description: 'fun activity',
                                          imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                        },
                                        {
                                          id: 27,
                                            name: "Hacky Sack",
                                            description: 'fun activity',
                                            imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                          },
                                          {
                                            id: 28,
                                              name: "Hide and Seek",
                                              description: 'fun activity',
                                              imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                            },
                                            {
                                              id: 29,
                                                name: "Hiking",
                                                description: 'fun activity',
                                                imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                              },
                                              {
                                                id: 30,
                                                  name: "Hopscotch",
                                                  description: 'fun activity',
                                                  imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                },
                                                {
                                                  id: 31,
                                                    name: "Horseback Riding",
                                                    description: 'fun activity',
                                                    imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                  },
                                                  {
                                                    id: 32,
                                                      name: "Ice Skating",
                                                      description: 'fun activity',
                                                      imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                    },
                                                    {
                                                      id: 33,
                                                        name: "Inline Skating",
                                                        description: 'fun activity',
                                                        imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                      },
                                                      {
                                                        id: 34,
                                                          name: "Kayaking",
                                                          description: 'fun activity',
                                                          imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                        },
                                                        {
                                                          id: 35,
                                                            name: "Keep Away",
                                                            description: 'fun activity',
                                                            imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                          },
                                                          {
                                                            id: 36,
                                                              name: "Kite Flying",
                                                              description: 'fun activity',
                                                              imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                            },
                                                            {
                                                              id: 37,
                                                                name: "Landscape Painting",
                                                                description: 'fun activity',
                                                                imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                              },
                                                              {
                                                                id: 38,
                                                                  name: "Lawn Bowling",
                                                                  description: 'fun activity',
                                                                  imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                },
                                                                {
                                                                  id: 39,
                                                                    name: "Tag",
                                                                    description: 'fun activity',
                                                                    imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                  },
                                                                  {
                                                                    id: 40,
                                                                      name: "Surfing",
                                                                      description: 'fun activity',
                                                                      imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                    },
                                                                    {
                                                                      id: 41,
                                                                        name: "Photography",
                                                                        description: 'fun activity',
                                                                        imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                      },
                                                                      {
                                                                        id: 42,
                                                                          name: "Picnic",
                                                                          description: 'fun activity',
                                                                          imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                        },
                                                                        {
                                                                        id: 43,
                                                                          name: "Rock Climbing",
                                                                          description: 'fun activity',
                                                                          imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                        },
                                                                        {
                                                                          id: 44,
                                                                            name: "Rowing",
                                                                            description: 'fun activity',
                                                                            imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                          },
                                                                          {
                                                                            id: 45,
                                                                              name: "Running",
                                                                              description: 'fun activity',
                                                                              imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                            },
                                                                            {
                                                                              id: 46,
                                                                                name: "Sailing",
                                                                                description: 'fun activity',
                                                                                imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                              },
                                                                              {
                                                                                id: 47,
                                                                                  name: "Sightseeing",
                                                                                  description: 'fun activity',
                                                                                  imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                                },
                                                                                {
                                                                                  id: 48,
                                                                                    name: "Skateboarding",
                                                                                    description: 'fun activity',
                                                                                    imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                                  },
                                                                                  {
                                                                                    id: 49,
                                                                                      name: "Snorkelling",
                                                                                      description: 'fun activity',
                                                                                      imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
                                                                                    },
                                                                                    {
                                                                                      id: 50,
                                                                                        name: "Snowboarding",
                                                                                        description: 'fun activity',
                                                                                        imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg'
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
  {
    id:1,
    userId:1,
    activityId:1,
    score:5,
    visits:1
  },{
    id:2,
    userId:1,
    activityId:2,
    score:2,
    visits:5
  },
  {
    id:3,
    userId:1,
    activityId:3,
    score:1,
    visits:1
  },{
    id:4,
    userId:1,
    activityId:6,
    score:2,
    visits:2
  },{
    id:5,
    userId:2,
    activityId:1,
    score:1,
    visits:1
  },{
    id:6,
    userId:2,
    activityId:2,
    score:1,
    visits:1
  },{
    id:7,
    userId:2,
    activityId:3,
    score:1,
    visits:1
  },{
    id:8,
    userId:3,
    activityId:6,
    score:5,
    visits:4
  },{
    id:9,
    userId:3,
    activityId:4,
    score:5,
    visits:4
  }
]

const userCategories = [
  {
    id:1,
    userId: 1,
    categoryId: 1,
    score: 1
  },{
    id:2,
    userId: 1,
    categoryId: 2,
    score: 1
  },{
    id:3,
    userId: 1,
    categoryId: 3,
    score: 2
  },{
    id:4,
    userId: 1,
    categoryId: 4,
    score: 5
  },{
    id:5,
    userId: 1,
    categoryId: 5,
    score: 5
  },{
    id:6,
    userId:2,
    categoryId: 1,
    score: 5
  },{
    id:7,
    userId:2,
    categoryId: 2,
    score: 1
  },{
    id:8,
    userId:2,
    categoryId: 3,
    score: 1
  },{
    id:9,
    userId:2,
    categoryId: 4,
    score: 1
  },{
    id:10,
    userId:2,
    categoryId: 5,
    score: 3
  },{
    id:11,
    userId:3,
    categoryId: 1,
    score: 2
  },{
    id:12,
    userId:3,
    categoryId: 2,
    score: 2
  },{
    id:13,
    userId:3,
    categoryId: 3,
    score: 3
  },{
    id:14,
    userId:3,
    categoryId: 4,
    score: 3
  },{
    id:15,
    userId:3,
    categoryId: 5,
    score: 2
  },
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
    )
    /* run the association tables seeding separately due to any sequelize hooks in the non-association table models */
    await Promise.all(
      activitiesCategories.map((actCat)=>{
        return ActivityCategory.create(actCat)
      }),
      userActivities.map((useAct)=>{
        return UserActivities.create(useAct)
      }),
      userCategories.map((useCat)=>{
        return UserCategories.create(useCat)
      })
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
