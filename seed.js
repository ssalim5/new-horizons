const { green, red } = require("chalk");
const {
  db,
  models: {User, Activity, Category, ActivityCategory, UserActivities,UserCategories,Message,Chat,UserChats},
} = require("./server/db");

const createdUserActivities = require('./script/userActivitiesGenerator')


const users = [{
  username: "Guest",
  email: "guest@newhorizons.com",
password: 'guest'
},{
  username: "Ryan",
  email: "ryan@newhorizons.com",
password: 'test'
},
{
 username: "Mason",
email: "mason@newhorizons.com",
password: 'test'
},
{
  username: 'Sakib',
  email: "sakib@newhorizons.com",
password: 'test'
},
{
username: 'Mahdi',
email: "mahdi@newhorizons.com",
password: 'test'
},
{username: "Al",
email: "test5@gmail.com",
password: 'test'
},
{
username: "Bill",
email: "test6@gmail.com",
password: 'test'
},
{
username: 'Bob',
email: "test7@gmail.com",
password: 'test'
},
{
username: 'Bryan',
email: "test8@gmail.com",
password: 'test'
},
{
  username: "Colin",
  email: "test9@gmail.com",
password: 'test'
},
{
 username: "Chris",
email: "test10@gmail.com",
password: 'test'
},
{
  username: 'Cristi',
  email: "test11@gmail.com",
password: 'test'
},
{
username: 'Carren',
email: "test12@gmail.com",
password: 'test'
},
{username: "Colby",
email: "test13@gmail.com",
password: 'test'
},
{
username: "David",
email: "test14@gmail.com",
password: 'test'
},
{
username: 'Diana',
email: "test15@gmail.com",
password: 'test'
},
{
username: 'Deb',
email: "test16@gmail.com",
password: 'test'
},
{
  username: "Derrick",
  email: "test17@gmail.com",
password: 'test'
},
{
 username: "Don",
email: "test18@gmail.com",
password: 'test'
},
{
  username: 'Eve',
  email: "test19@gmail.com",
password: 'test'
},
{
username: 'Evan',
email: "test20@gmail.com",
password: 'test'
},
{username: "Frank",
email: "test21@gmail.com",
password: 'test'
},
{
username: "Flora",
email: "test22@gmail.com",
password: 'test'
},
{
username: 'Flo',
email: "test23@gmail.com",
password: 'test'
},
{
username: 'Gretchen',
email: "test24@gmail.com",
password: 'test'
},
{
  username: "George",
  email: "test25@gmail.com",
password: 'test'
},
{
 username: "Harold",
email: "test26@gmail.com",
password: 'test'
},
{
  username: 'Heidi',
  email: "test27@gmail.com",
password: 'test'
},
{
username: 'Hogan',
email: "test28@gmail.com",
password: 'test'
},
{username: "Ian",
email: "test29@gmail.com",
password: 'test'
},
{
username: "Jess",
email: "test30@gmail.com",
password: 'test'
},
{
username: 'Joe',
email: "test31@gmail.com",
password: 'test'
},
{
username: 'Joanna',
email: "test32@gmail.com",
password: 'test'
},
{
  username: "Kyle",
  email: "test33@gmail.com",
password: 'test'
},
{
 username: "Krissy",
email: "test34@gmail.com",
password: 'test'
},
{
  username: 'Kevin',
  email: "test35@gmail.com",
password: 'test'
},
{
username: 'Kevon',
email: "test36@gmail.com",
password: 'test'
},
{username: "Jill",
email: "test37@gmail.com",
password: 'test'
},
{
username: "Jack",
email: "test38@gmail.com",
password: 'test'
},
{
username: 'Josh',
email: "test39@gmail.com",
password: 'test'
},
{
username: 'Justin',
email: "test40@gmail.com",
password: 'test'
},
{
  username: "Jamal",
  email: "test41@gmail.com",
password: 'test'
},
{
 username: "Jackie",
email: "test42@gmail.com",
password: 'test'
},
{
  username: 'Jaylen',
  email: "test43@gmail.com",
password: 'test'
},
{
username: 'Lebron',
email: "test44@gmail.com",
password: 'test'
},
{username: "Lisa",
email: "test45@gmail.com",
password: 'test'
},
{
username: "Leslie",
email: "test46@gmail.com",
password: 'test'
},
{
username: 'Lydia',
email: "test47@gmail.com",
password: 'test'
},
{
username: 'Mike',
email: "test48@gmail.com",
password: 'test'
},
{
  username: "Mark",
  email: "test49@gmail.com",
password: 'test'
},
{
 username: "Molly",
email: "test50@gmail.com",
password: 'test'
},
{
  username: 'Matt',
  email: "test51@gmail.com",
password: 'test'
},
{
username: 'Morgan',
email: "test52@gmail.com",
password: 'test'
},
{username: "Nick",
email: "test53@gmail.com",
password: 'test'
},
{
username: "Nikki",
email: "test54@gmail.com",
password: 'test'
},
{
username: 'OJ',
email: "test55@gmail.com",
password: 'test'
},
{
username: 'Paul',
email: "test56@gmail.com",
password: 'test'
},
{
  username: "Paula",
  email: "test57@gmail.com",
password: 'test'
},
{
 username: "Pam",
email: "test58@gmail.com",
password: 'test'
},
{
  username: 'Pamela',
  email: "test59@gmail.com",
password: 'test'
},
{
username: 'Russ',
email: "test60@gmail.com",
password: 'test'
},
{username: "Ross",
email: "test61@gmail.com",
password: 'test'
},
{
username: "Ryder",
email: "test62@gmail.com",
password: 'test'
},
{
username: 'Riley',
email: "test63@gmail.com",
password: 'test'
},
{
username: 'Scott',
email: "test64@gmail.com",
password: 'test'
},
{
  username: 'Steve',
  email: "test65@gmail.com",
  password: 'test'
  },
  {username: "Sarah",
  email: "test66@gmail.com",
  password: 'test'
  },
  {
  username: "Sylvia",
  email: "test67@gmail.com",
  password: 'test'
  },
  {
  username: 'Shaq',
  email: "test68@gmail.com",
  password: 'test'
  },
  {
  username: 'Samson',
  email: "test69@gmail.com",
  password: 'test'
  },
  {
    username: "Sully",
    email: "test70@gmail.com",
  password: 'test'
  },
  {
   username: "Smart",
  email: "test71@gmail.com",
  password: 'test'
  },
  {
    username: 'Susan',
    email: "test72@gmail.com",
  password: 'test'
  },
  {
  username: 'Tanya',
  email: "test73@gmail.com",
  password: 'test'
  },
  {username: "Tony",
  email: "test74@gmail.com",
  password: 'test'
  },
  {
  username: "Tim",
  email: "test75@gmail.com",
  password: 'test'
  },
  {
  username: 'Timmy',
  email: "test76@gmail.com",
  password: 'test'
  },
  {
  username: 'Tom',
  email: "test77@gmail.com",
  password: 'test'
  },
  {
    username: "Tommy",
    email: "test78@gmail.com",
  password: 'test'
  },
  {
   username: "Tara",
  email: "test79@gmail.com",
  password: 'test'
  },
  {
    username: 'Tyrone',
    email: "test80@gmail.com",
  password: 'test'
  },
  {
  username: 'Tina',
  email: "test81@gmail.com",
  password: 'test'
  },
  {username: "Veronica",
  email: "test82@gmail.com",
  password: 'test'
  },
  {
  username: "Vicki",
  email: "test83@gmail.com",
  password: 'test'
  },
  {
  username: 'Van',
  email: "test84@gmail.com",
  password: 'test'
  },
  {
  username: 'Waldo',
  email: "test85@gmail.com",
  password: 'test'
  },
  {
    username: "Walt",
    email: "test86@gmail.com",
  password: 'test'
  },
  {
   username: "Wes",
  email: "test87@gmail.com",
  password: 'test'
  },
  {
    username: 'Wesley',
    email: "test88@gmail.com",
  password: 'test'
  },
  {
  username: 'Will',
  email: "test89@gmail.com",
  password: 'test'
  },
  {username: "Willy",
  email: "test90@gmail.com",
  password: 'test'
  },
  {
  username: "William",
  email: "test91@gmail.com",
  password: 'test'
  },
  {
  username: 'Yolanda',
  email: "test92@gmail.com",
  password: 'test'
  },
  {
  username: 'Yes',
  email: "test93@gmail.com",
  password: 'test'
  },
  {
    username: 'Xander',
    email: "test94@gmail.com",
    password: 'test'
    },
    {username: "Xavier",
    email: "test95@gmail.com",
    password: 'test'
    },
    {
    username: "Javy",
    email: "test96@gmail.com",
    password: 'test'
    },
    {
    username: 'Zarmon',
    email: "test97@gmail.com",
    password: 'test'
    },
    {
    username: 'Semi',
    email: "test98@gmail.com",
    password: 'test'
    },
    {
    username: 'Brook',
    email: "test99@gmail.com",
    password: 'test'
    },
    {
    username: 'Robin',
    email: "test100@gmail.com",
    password: 'test'
    }]

const activities = [
  {
    id: 1,
    name: "Basketball",
    description: "A game played between two teams of five players each, the object being to throw a ball through an elevated basket on the opponent's side of a rectangular court. Players may move the ball by dribbling or passing with the hands.",
    exertion: "HIGH",
    creative: '1',
    athletic: '5',
    adventurous: '1',
    relaxing: '1',
    social: '4'
  },{
    id:2,
    name: "Bowling",
    description: 'A game in which a heavy ball is rolled down a long, narrow lane toward a group of objects known as pins, the aim being to knock down more pins than an opponent',
    outside: false,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bowlerbowling.JPG',
    exertion: "LOW",
    creative: '1',
    athletic: '2',
    adventurous: '1',
    relaxing: '3',
    social: '5'
  },{
    id:3,
    name: "Chess",
    outside: false,
    description: "Chess is one of the oldest and most popular board games. It is played by two opponents on a checkered board with specially designed pieces of contrasting colours, commonly white and black. The objective of the game is to capture the opponent's king.",
    imageUrl: 'https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344_wide-cfdc4528733d810b7feb5e2a884f987a981920ff.jpg?s=1400',
    exertion: "LOW",
    creative: '5',
    athletic: '1',
    adventurous: '1',
    relaxing: '3',
    social: '3'
  },{
    id:4,
    name: "Movies",
    outside: false,
    description: 'A movie – also called a film, motion picture, moving picture, or photoplay – is a work of visual art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images.',
    exertion: "LOW",
    imageUrl: 'https://nofilmschool.com/sites/default/files/styles/facebook/public/movie_theater.png?itok=B2xAaSj-',
    creative: '1',
    athletic: '1',
    adventurous: '1',
    relaxing: '5',
    social: '5'
  },{
    id:5,
    name: "Cooking Class",
    exertion: "LOW",
    outside: false,
    description: 'These classes allow you to experience this delicious cuisine, including local cooking techniques and the lore of the region',
    imageUrl: 'https://churchillmanor.com/wp-content/uploads/2016/10/Napa-Cooking-Classes.jpg',
    creative: '5',
    athletic: '1',
    adventurous: '1',
    relaxing: '5',
    social: '5'
  },
  {
    id:6,
    name: "Painting",
    exertion: "LOW",
    outside: false,
    description: 'Painting is the practice of applying paint, pigment, color or other medium to a solid surface (called the "matrix" or "support"). The medium is commonly applied to the base with a brush, but other implements, such as knives, sponges, and airbrushes, can be used.',
    imageUrl: 'https://pensacolafruitwinery.com/wp-content/uploads/2018/02/Beyond-The-Grape-Onto-the-Canvas-Paint-and-Sip-Classes.jpg',
    creative: '5',
    athletic: '1',
    adventurous: '1',
    relaxing: '5',
    social: '4'
  },
  {
  id: 7,
    name: "Archery",
    description: 'Archery involves using a bow to shoot arrows at a stationary target.',
    imageUrl: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/9/2/1409653039272/learning-archery-south-do-011.jpg?width=700&quality=85&auto=format&fit=max&s=169c52ca49e84224d2c5a266af6e52b9',
    creative: '2',
    athletic: '3',
    adventurous: '4',
    relaxing: '3',
    social: '3'
  },
  {
    id: 8,
      name: "Badminton",
      description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
      imageUrl: 'https://images.news18.com/ibnlive/uploads/2017/08/badminton_AFP.jpg?impolicy=website&width=510&height=356',
      creative: '1',
    athletic: '5',
    adventurous: '1',
    relaxing: '3',
    social: '5'
    },
  {
  id: 9,
  name: "Baseball",
  description: 'Baseball is a bat-and-ball game played between two opposing teams, of nine players each, that take turns batting and fielding.',
  imageUrl: 'https://www.tompsc.com/ImageRepository/Document?documentId=38976',
  creative: '1',
    athletic: '5',
    adventurous: '1',
    relaxing: '1',
    social: '5'
  },
  {
  id: 10,
  name: "Volleyball",
  description: "Game played by two teams of six players each, in which an inflated ball is volleyed over a high net. Each team tries to make the ball touch the court within the opposing side's playing areas before it can be returned.",
  imageUrl: 'https://www.tutorialspoint.com/volleyball/images/ball_moves.jpg',
  exertion: "HIGH",
  creative: '1',
    athletic: '5',
    adventurous: '1',
    relaxing: '1',
    social: '5'
  },
  {
  id: 11,
  name: "Beekeeping",
  description: 'Beekeeping (or apiculture) is the maintenance of bee colonies, commonly in man-made hives, by humans.',
  imageUrl: 'https://beekeepingabc.com/wp-content/uploads/2019/08/beekeeping-guide.jpg',
  creative: '3',
    athletic: '1',
    adventurous: '5',
    relaxing: '4',
    social: '2'
  },
  {
  id: 12,
  name: "Birdwatching",
  exertion: "LOW",
  description: 'Birdwatching, or birding, is the observing of birds, either as a recreational activity or as a form of citizen science. A birdwatcher may observe by using their naked eye, by using a visual enhancement device like binoculars or a telescope, by listening for bird sounds, or by watching public webcams.',
  imageUrl: 'https://ontarionature.org/wp-content/uploads/2013/04/Annual-Gathering-Bird-Watching-Point-Petre-South-Shore-Safari-Mary-Gingritch-%C2%A9-John-Hassell_v2-4.jpg',
  creative: '4',
    athletic: '1',
    adventurous: '4',
    relaxing: '4',
    social: '4'
  },
  {
  id: 13,
  name: "Bodyboarding",
  description: 'Bodyboarding is a water sport in which the surfer rides a bodyboard on the crest, face, and curl of a wave which is carrying the surfer towards the shore.',
  imageUrl: 'https://media.istockphoto.com/photos/surf-picture-id171591741?k=20&m=171591741&s=612x612&w=0&h=7EGc_BigihKhe1xma3F0q1jxOT53MZzGG1hGTh4qBIE=',
  exertion: "HIGH",
  creative: '1',
  athletic: '4',
  adventurous: '4',
  relaxing: '4',
  social: '4'
  },
  {
  id: 14,
  name: "Camping",
  exertion: "LOW",
  description: 'Camping is an outdoor activity involving overnight stays away from home, either without shelter or using basic shelter such as a tent or a recreational vehicle.',
  imageUrl: 'https://pegsandpitches.co.uk/wild-boar-wood/wp-content/uploads/sites/4/2018/03/Friends-around-the-Campfire-1-776x517.jpg',
  creative: '4',
  athletic: '1',
  adventurous: '5',
  relaxing: '5',
  social: '5'
  },
  {
  id: 15,
  name: "Canoeing",
  description: 'Canoeing is a sport where one gets into a little boat made for the sport called a canoe and using a single-bladed paddle to steer the canoe, tries to travel down a stream of a river.',
  imageUrl: 'https://www.tutorialspoint.com/canoeing/images/paddle.jpg',
  exertion: "HIGH",
  creative: '1',
  athletic: '4',
  adventurous: '4',
  relaxing: '3',
  social: '2'
  },
  {
  id: 16,
  name: "Capture the Flag",
  description: "Capture the Flag is a classic team game played indoors or outdoors. Two teams each have their own color flag placed in their “home base.” The objective is to steal the other team's flag and take it to their own base. Players can tag or capture opposing players if they enter enemy territory.",
  imageUrl: 'https://scantechgraphics.com/wp-content/uploads/2019/07/capture-the-flag2.jpg',
  exertion: "HIGH",
  creative: '3',
  athletic: '4',
  adventurous: '4',
  relaxing: '1',
  social: '4'
  },
  {
  id: 17,
  name: "Cricket",
  description: 'Cricket is a bat-and-ball game played between two teams of eleven players each on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps.',
  imageUrl: 'https://media.newyorker.com/photos/5f2b2b45d4b98d588c5cdf22/16:9/w_2559,h_1439,c_limit/Caesar-Cricket.jpg',
  creative: '1',
  athletic: '5',
  adventurous: '1',
  relaxing: '1',
  social: '3'
  },
  {
  id: 18,
  name: "Cross-country Skiing",
  description: 'Cross-country skiing is a form of skiing where skiers rely on their own locomotion to move across snow-covered terrain, rather than using ski lifts or other forms of assistance.',
  imageUrl: 'https://www.salomon.com/sites/default/files/2021-03/XC-skis-landscape_0.jpg',
  exertion: "HIGH",
  creative: '1',
  athletic: '5',
  adventurous: '4',
  relaxing: '2',
  social: '2'
  },
  {
  id: 19,
  name: "Cycling",
  description: 'fun activity',
  imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/21/2021/05/How-to-improve-your-average-speed-4-ec96ab1.jpg?quality=90&resize=620,413',
  exertion: "HIGH",
  creative: '1',
  athletic: '5',
  adventurous: '3',
  relaxing: '2',
  social: '3'
  },
  {
  id: 20,
  name: "Diving",
  description: 'fun activity',
  imageUrl: 'https://media.istockphoto.com/photos/female-springboard-diver-jump-picture-id1090156570?k=20&m=1090156570&s=612x612&w=0&h=F22yY7pc204x1O8kpNVMFrdfm3JRul_nzpDP8d3-u3U=',
  creative: '4',
  athletic: '5',
  adventurous: '4',
  relaxing: '1',
  social: '2'
  },
  {
  id: 21,
  name: "Dodgeball",
  description: 'fun activity',
  imageUrl: 'https://www.gannett-cdn.com/presto/2019/06/09/USAT/efb48ebc-2c06-47c1-8588-d2e63b292c0a-AP_Dodgeball_Record.JPG?crop=4287,2393,x0,y112&width=3200&height=1787&format=pjpg&auto=webp',
  exertion: "HIGH",
  creative: '1',
  athletic: '5',
  adventurous: '3',
  relaxing: '1',
  social: '4'
  },
  {
  id: 22,
  name: "Dragon Boat Racing",
  description: 'fun activity',
  imageUrl: 'https://images.rove.me/w_1920,q_85/w6zo21y4qvvyk5tbofcu/singapore-dragon-boat-festival.jpg',
  exertion: "HIGH",
  creative: '1',
  athletic: '4',
  adventurous: '2',
  relaxing: '1',
  social: '4'
  },
  {
  id: 23,
  name: "Fishing",
  exertion: "LOW",
  description: 'fun activity',
  imageUrl: 'https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg',
  creative: '2',
  athletic: '1',
  adventurous: '3',
  relaxing: '5',
  social: '4'
  },
  {
  id: 24,
  name: "Frisbee",
  description: 'fun activity',
  imageUrl: 'https://centralca.cdn-anvilcms.net/media/images/2020/02/29/images/frisbee_1.max-1200x675.jpg',
  exertion: "HIGH",
  creative: '2',
  athletic: '4',
  adventurous: '2',
  relaxing: '1',
  social: '5'
  },
  {
  id: 25,
  name: "Free Play",
  description: 'fun activity',
  imageUrl: 'https://media.istockphoto.com/photos/businessman-upside-down-in-playground-picture-id489812735?k=20&m=489812735&s=612x612&w=0&h=WhKxioD52Ns4nkNuQY4mlZZuDpXylviOBDO9F_3ohYM=',
  creative: '5',
  athletic: '4',
  adventurous: '4',
  relaxing: '3',
  social: '4'
  },
  {
  id: 26,
  name: "Gardening",
  description: 'fun activity',
  imageUrl: 'https://assets.nrdc.org/sites/default/files/styles/full_content--retina/public/media-uploads/img_2085_2400.jpg?itok=jKO2lOJo',
  creative: '5',
  athletic: '1',
  adventurous: '3',
  relaxing: '4',
  social: '3'
  },
  {
  id: 27,
  name: "Hacky Sack",
  description: 'fun activity',
  imageUrl: 'https://wasatchmag.com/wp-content/uploads/2019/10/DSC_0032.jpg',
  creative: '4',
  athletic: '2',
  adventurous: '1',
  relaxing: '4',
  social: '5'
  },
  {
  id: 28,
  name: "Hide and Seek",
  description: 'fun activity',
  imageUrl: 'https://media.istockphoto.com/photos/group-of-children-playing-hide-and-seek-picture-id500491579?k=20&m=500491579&s=612x612&w=0&h=RsxZUfteCiH4uVmgpTo1L2RgtZKLkwCYXu-YRRwY5PI=',
  exertion: "HIGH",
  creative: '4',
  athletic: '3',
  adventurous: '4',
  relaxing: '2',
  social: '4'
  },
  {
  id: 29,
  name: "Hiking",
  description: 'fun activity',
  imageUrl: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155&h=1528',
  creative: '3',
  athletic: '4',
  adventurous: '4',
  relaxing: '3',
  social: '3'
  },
  {
  id: 30,
  name: "Hopscotch",
  description: 'fun activity',
  imageUrl: 'https://media.istockphoto.com/photos/group-of-people-playing-at-hopscotch-togther-in-the-street-on-the-picture-id1295880687?k=20&m=1295880687&s=612x612&w=0&h=S9FTByXwenERzltfNoidmWEmfuCAYXT3KfysxkSkNis=',
  creative: '3',
  athletic: '3',
  adventurous: '1',
  relaxing: '1',
  social: '3'
  },
  {
  id: 31,
  name: "Horseback Riding",
  description: 'fun activity',
  imageUrl: 'https://ogden_images.s3.amazonaws.com/www.7springs.com/images/2019/05/stables-1-800x500.jpg',
  creative: '1',
  athletic: '3',
  adventurous: '5',
  relaxing: '4',
  social: '3'
  },
  {
  id: 32,
  name: "Ice Skating",
  description: 'fun activity',
  imageUrl: 'https://cdn.vox-cdn.com/thumbor/b1X9CTHzqYkGgEAv6DfXg8JlIVM=/0x0:4928x3264/1200x900/filters:focal(2070x1238:2858x2026)/cdn.vox-cdn.com/uploads/chorus_image/image/61532005/shutterstock_193923629.1537870258.6.jpg',
  creative: '1',
  athletic: '5',
  adventurous: '3',
  relaxing: '2',
  social: '4'
  },
  {
  id: 33,
  name: "Inline Skating",
  description: 'fun activity',
  imageUrl: 'https://i0.heartyhosting.com/www.powder.com/wp-content/uploads/2020/04/Maxxum-Salt-Lake-City-by-Greg-Mirzoyan-L-7811-scaled.jpg?w=1600',
  creative: '1',
  athletic: '4',
  adventurous: '1',
  relaxing: '3',
  social: '4'
  },
  {
  id: 34,
  name: "Kayaking",
  description: 'fun activity',
  imageUrl: 'https://www.nps.gov/apis/planyourvisit/images/Paddlers-on-calm-water.JPG',
  exertion: "HIGH",
  creative: '1',
  athletic: '4',
  adventurous: '4',
  relaxing: '3',
  social: '4'
  },
  {
  id: 35,
  name: "Keep Away",
  description: 'fun activity',
  imageUrl: 'https://i.ytimg.com/vi/JzqqYsTfBVg/maxresdefault.jpg',
  exertion: "HIGH",
  creative: '4',
  athletic: '4',
  adventurous: '1',
  relaxing: '1',
  social: '5'
  },
  {
  id: 36,
  name: "Kite Flying",
  description: 'fun activity',
  imageUrl: 'https://menafn.com/updates/pr/2020-01/25/N_fb978466-0image_story.jpg',
  creative: '4',
  athletic: '2',
  adventurous: '3',
  relaxing: '4',
  social: '3'
  },
  {
  id: 37,
  name: "Landscape Painting",
  exertion: "LOW",
  description: 'fun activity',
  imageUrl: 'https://www.liveabout.com/thmb/JyBoiDXebwx7NqhWQwyyyYuHbzk=/1900x1069/smart/filters:no_upscale()/10188181-56a6e6d25f9b58b7d0e56963.jpg',
  creative: '5',
  athletic: '2',
  adventurous: '1',
  relaxing: '5',
  social: '3'
  },
  {
  id: 38,
  name: "Lawn Bowling",
  exertion: "LOW",
  description: 'fun activity',
  imageUrl: 'https://www.tutorialspoint.com/lawn_bowling/images/how_to_play.jpg',
  creative: '1',
  athletic: '2',
  adventurous: '1',
  relaxing: '3',
  social: '5'
  },
  {
  id: 39,
  name: "Tag",
  description: 'fun activity',
  imageUrl: 'https://icebreakerideas.com/wp-content/uploads/2020/04/Tag-Games-for-PE.png',
  exertion: "HIGH",
  creative: '2',
  athletic: '5',
  adventurous: '2',
  relaxing: '1',
  social: '5'
  },
  {
  id: 40,
  name: "Surfing",
  description: 'fun activity',
  imageUrl: 'https://www.sixsenses.com/media/1552/fiji-surfing_fiji2_r.jpg?anchor=center&mode=crop&rnd=132266537910000000',
  creative: '2',
  athletic: '5',
  adventurous: '5',
  relaxing: '3',
  social: '3'
  },
  {
  id: 41,
  name: "Photography",
  exertion: "LOW",
  description: 'fun activity',
  imageUrl: 'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg',
  creative: '5',
  athletic: '1',
  adventurous: '4',
  relaxing: '4',
  social: '3'
  },
  {
  id: 42,
  name: "Picnic",
  exertion: "LOW",
  description: 'fun activity',
  imageUrl: 'https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/istock_000017127089small.jpg?itok=GgWk_Uiz',
  creative: '4',
  athletic: '1',
  adventurous: '3',
  relaxing: '4',
  social: '5'
  },
  {
  id: 43,
  name: "Rock Climbing",
  description: 'fun activity',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWx7ssHJRUicihjRP3oGVUj_bLH4ufjTJMw&usqp=CAU',
  exertion: "HIGH",
  creative: '1',
  athletic: '5',
  adventurous: '5',
  relaxing: '1',
  social: '3'
  },
  {
  id: 44,
  name: "Rowing",
  description: 'fun activity',
  imageUrl: 'https://usrowing.org/images/2019/9/17/Sweep_vs_Sculling.jpg',
  exertion: "HIGH",
  creative: '1',
  athletic: '5',
  adventurous: '4',
  relaxing: '1',
  social: '3'
  },
  {
  id: 45,
  name: "Running",
  description: 'fun activity',
  imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/female-running-friends-royalty-free-image-1642534924.jpg?crop=0.668xw:1.00xh;0.233xw,0&resize=640:*',
  exertion: "HIGH",
  creative: '1',
  athletic: '5',
  adventurous: '2',
  relaxing: '3',
  social: '3'
  },
  {
  id: 46,
  name: "Sailing",
  description: 'fun activity',
  imageUrl: 'https://www.rssailing.com/wp-content/uploads/2021/05/RS-Feva-Sailing.jpg',
  creative: '2',
  athletic: '3',
  adventurous: '4',
  relaxing: '4',
  social: '4'
  },
{
 id: 47,
name: "Sightseeing",
exertion: "LOW",
 description: 'fun activity',
imageUrl: 'https://previews.123rf.com/images/grinvalds/grinvalds1507/grinvalds150700063/42099403-tourists-sightseeing-in-venice.jpg',
creative: '4',
  athletic: '2',
  adventurous: '4',
  relaxing: '4',
  social: '4'
},
 {
id: 48,
name: "Skateboarding",
 description: 'fun activity',
 imageUrl: 'http://cdn.cnn.com/cnnnext/dam/assets/210723002556-05-skate-culture-japan.jpg',
 creative: '4',
  athletic: '5',
  adventurous: '4',
  relaxing: '2',
  social: '3'
},
{
id: 49,
 name: "Snorkelling",
 description: 'fun activity',
imageUrl: 'https://www.sandals.com/blog/content/images/2019/04/3_islandroutes_38-Adv-Eco.jpg',
creative: '3',
  athletic: '3',
  adventurous: '4',
  relaxing: '4',
  social: '2'
},
  {
   id: 50,
    name: "Snowboarding",
    description: 'fun activity',
 imageUrl: 'https://media.istockphoto.com/photos/snowboard-jump-picture-id153551554?k=20&m=153551554&s=612x612&w=0&h=h6sy7MynUD_pFAIvWx6bBjfQwBxYNHKsNuOQgpZZ8dI=',
 creative: '4',
  athletic: '5',
  adventurous: '4',
  relaxing: '1',
  social: '3'
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
    // id:1,
    activityId:1,
    categoryId:1,
    score:2,
  },{
    // id:2,
    activityId:1,
    categoryId:2,
    score:5,
  },{
    // id:3,
    activityId:1,
    categoryId:3,
    score:2,
  },{
    // id:4,
    activityId:1,
    categoryId:4,
    score:1,
  },{
    // id:5,
    activityId:1,
    categoryId:5,
    score:1,
  },{
    // id:6,
    activityId:2,
    categoryId:1,
    score:3,
  },{
    // id:7,
    activityId:2,
    categoryId:2,
    score:3,
  },{
    // id:8,
    activityId:2,
    categoryId:3,
    score:3,
  },{
    // id:9,
    activityId:2,
    categoryId:4,
    score:3,
  },{
    // id:10,
    activityId:2,
    categoryId:5,
    score:2,
  },{
    // id:11,
    activityId:3,
    categoryId:1,
    score:2,
  },{
    // id:12,
    activityId:3,
    categoryId:2,
    score:1,
  },{
    // id:13,
    activityId:3,
    categoryId:3,
    score:5,
  },
  {
    // id:14,
    activityId:3,
    categoryId:4,
    score:1,
  },{
    // id:15,
    activityId:3,
    categoryId:5,
    score:1,
  },
  {
    // id:16,
    activityId:4,
    categoryId:1,
    score:1,
  },{
    // id:17,
    activityId:4,
    categoryId:2,
    score:1,
  },{
    // id:18,
    activityId:4,
    categoryId:3,
    score:2,
  },
  {
    // id:19,
    activityId:4,
    categoryId:4,
    score:4,
  },{
    // id:20,
    activityId:4,
    categoryId:5,
    score:5,
  },{
    // id:21,
    activityId:5,
    categoryId:1,
    score:2,
  },
  {
    // id:22,
    activityId:5,
    categoryId:2,
    score:1,
  },{
    // id:23,
    activityId:5,
    categoryId:3,
    score:3,
  },{
    // id:24,
    activityId:5,
    categoryId:4,
    score:2,
  },{
    // id:25,
    activityId:5,
    categoryId:5,
    score:2,
  },{
    // id:26,
    activityId:6,
    categoryId:1,
    score:5,
  },{
    // id:27,
    activityId:6,
    categoryId:2,
    score:1,
  },{
    // id:28,
    activityId:6,
    categoryId:3,
    score:1,
  },{
    // id:29,
    activityId:6,
    categoryId:4,
    score:5,
  },{
    // id:30,
    activityId:6,
    categoryId:5,
    score:1,
  },
]

const userActivities = [
  {
    // id:1,
    userId:1,
    activityId:1,
    score:5,
    visits:1
  },{
    // id:2,
    userId:1,
    activityId:2,
    score:2,
    visits:5
  },
  {
    // id:3,
    userId:1,
    activityId:3,
    score:1,
    visits:1
  },{
    // id:4,
    userId:1,
    activityId:6,
    score:2,
    visits:2
  },{
    // id:5,
    userId:2,
    activityId:1,
    score:1,
    visits:1
  },{
    // id:6,
    userId:2,
    activityId:2,
    score:1,
    visits:1
  },{
    // id:7,
    userId:2,
    activityId:3,
    score:1,
    visits:1
  },{
    // id:8,
    userId:3,
    activityId:6,
    score:5,
    visits:4
  },{
    // id:9,
    userId:3,
    activityId:4,
    score:5,
    visits:4
  }
]

const userCategories = [
  {
    // id:1,
    userId: 1,
    categoryId: 1,
    score: 1
  },
  {
    // id:2,
    userId: 1,
    categoryId: 2,
    score: 1
  },{
    // id:3,
    userId: 1,
    categoryId: 3,
    score: 2
  },{
    // id:4,
    userId: 1,
    categoryId: 4,
    score: 5
  },{
    // id:5,
    userId: 1,
    categoryId: 5,
    score: 5
  },{
    // id:6,
    userId:2,
    categoryId: 1,
    score: 5
  },{
    // id:7,
    userId:2,
    categoryId: 2,
    score: 1
  },{
    // id:8,
    userId:2,
    categoryId: 3,
    score: 1
  },{
    // id:9,
    userId:2,
    categoryId: 4,
    score: 1
  },{
    // id:10,
    userId:2,
    categoryId: 5,
    score: 3
  },{
    // id:11,
    userId:3,
    categoryId: 1,
    score: 2
  },{
    // id:12,
    userId:3,
    categoryId: 2,
    score: 2
  },{
    // id:13,
    userId:3,
    categoryId: 3,
    score: 3
  },{
    // id:14,
    userId:3,
    categoryId: 4,
    score: 3
  },{
    // id:15,
    userId:3,
    categoryId: 5,
    score: 2
  },
]
// const messages = [
//   {userId:1, chatId:1,
//   content:"hi"},
//   {userId:1, chatId:1,
//   content:"my name is ryan"},
//   {userId:2, chatId:1,
//   content:"HELLO"},
//   {userId:2, chatId:1,
//   content:"I'm mahdi"},
//   {userId:1, chatId:3,
//   content:"Message4"},
//   {userId:3, chatId:2,
//   content:"TESTING"},
//   {userId:4, chatId:3,
//     content:"Print"}
// ]
// const chats = [
//   {},
//   {},
//   {},
//   {},
// ]

// const userChats = [
//   {
//   userId:1,
//   chatId:1},
//   {
//   userId:2,
//   chatId:1},
//   {
//     userId:1,
//     chatId:2},
//   {
//     userId:4,
//     chatId:3},
//   {
//     userId:1,
//     chatId:3},
//   {
//     userId:3,
//     chatId:2},
// ]

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
  //     messages.map((message)=>{
  //       return Message.create(message)
  //   }),
  //   chats.map((chat)=>{
  //     return Chat.create({chat,include:[Message]})
  // })
    )

    // await Promise.all(
    //   chats.map((chat)=>{
    //     return Chat.create(chat)
    //   }))
    // await Promise.all(
    //   messages.map((message)=>{
    //     return Message.create(message)
    //   })
    // )

    // dbChats[0].addMessage(dbMessages[0])
    // dbChats[0].addMessage(dbMessages[1])
    // dbChats[1].addMessage(dbMessages[2])

    /* run the association tables seeding separately due to any sequelize hooks in the non-association table models */
    await Promise.all(
      activitiesCategories.map((actCat)=>{
        return ActivityCategory.create(actCat)
      }),
      createdUserActivities.map((useAct)=>{
        return UserActivities.create(useAct)
      }),
      userCategories.map((useCat)=>{
        return UserCategories.create(useCat)
      }),
      // userChats.map((userChat)=>{
      //   return UserChats.create(userChat)
      // })
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
