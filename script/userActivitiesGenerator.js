
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



function create() {
  let newUserActivities = []
  // const createUserActivities = () => {
  //   const userId = randomInt(1,101)
  //   const activityId = randomInt(1,50)
  //   const score = randomInt(0,5)
  //   return newUserActivities.push({userId: userId, activityId: activityId, score: score})
  // }
  // for (var i = 0; i < 1000; i++) {
  // createUserActivities()}

  //  List of some activities and groupings for recommending rankings
  //  https://docs.google.com/document/d/14W4cYJI54yBkYSVxxFQJ_7s_i1gy6dQ6Df7jW3WHxG4/edit

  //first 3 are in the A set of highlighted activities in document
  newUserActivities.push({userId:1,activityId:1,score:5})
  
  newUserActivities.push({userId:2,activityId:3,score:5})
  newUserActivities.push({userId:2,activityId:5,score:5})
  // newUserActivities.push({userId:2,activityId:9,score:5})
  // newUserActivities.push({userId:2,activityId:10,score:5})
  // newUserActivities.push({userId:2,activityId:16,score:5})
  // newUserActivities.push({userId:2,activityId:17,score:5})
  // newUserActivities.push({userId:2,activityId:7,score:4})
  // newUserActivities.push({userId:2,activityId:24,score:4})
  // newUserActivities.push({userId:2,activityId:13,score:3})
  // newUserActivities.push({userId:2,activityId:15,score:3})
  // newUserActivities.push({userId:2,activityId:3,score:1})

  newUserActivities.push({userId:3,activityId:14,score:5})
  newUserActivities.push({userId:3,activityId:19,score:5})
  // newUserActivities.push({userId:3,activityId:10,score:5})
  // newUserActivities.push({userId:3,activityId:16,score:5})
  // newUserActivities.push({userId:3,activityId:17,score:5})
  // newUserActivities.push({userId:3,activityId:7,score:4})
  // newUserActivities.push({userId:3,activityId:24,score:4})
  // newUserActivities.push({userId:3,activityId:13,score:3})
  // newUserActivities.push({userId:3,activityId:15,score:3})
  // newUserActivities.push({userId:3,activityId:3,score:1})

  //Next two use B set from google doc
  newUserActivities.push({userId:4,activityId:11,score:5})
  newUserActivities.push({userId:4,activityId:12,score:5})
  // newUserActivities.push({userId:4,activityId:6,score:5})
  // newUserActivities.push({userId:4,activityId:7,score:4})
  // newUserActivities.push({userId:4,activityId:8,score:4})
  // newUserActivities.push({userId:4,activityId:12,score:4})
  // newUserActivities.push({userId:4,activityId:14,score:4})
  // newUserActivities.push({userId:4,activityId:4,score:3})
  // newUserActivities.push({userId:4,activityId:11,score:2})
  // newUserActivities.push({userId:4,activityId:1,score:1})

  newUserActivities.push({userId:5,activityId:15,score:5})
  newUserActivities.push({userId:5,activityId:20,score:5})
  // newUserActivities.push({userId:5,activityId:6,score:4})
  // newUserActivities.push({userId:5,activityId:1,score:4})
  // newUserActivities.push({userId:5,activityId:10,score:4})
  // newUserActivities.push({userId:5,activityId:17,score:3})
  // newUserActivities.push({userId:5,activityId:3,score:4})
  // newUserActivities.push({userId:5,activityId:4,score:3})
  // newUserActivities.push({userId:5,activityId:11,score:2})
  // newUserActivities.push({userId:5,activityId:15,score:2})

  // Next use C set which is short so mixes in B and G sets, 
  newUserActivities.push({userId:6,activityId:4,score:5})
  newUserActivities.push({userId:6,activityId:1,score:5})
  newUserActivities.push({userId:6,activityId:17,score:5})
  newUserActivities.push({userId:6,activityId:31,score:4})
  newUserActivities.push({userId:6,activityId:35,score:4})
  newUserActivities.push({userId:6,activityId:34,score:4})
  newUserActivities.push({userId:6,activityId:44,score:4})
  newUserActivities.push({userId:6,activityId:16,score:3})
  newUserActivities.push({userId:6,activityId:17,score:2})
  newUserActivities.push({userId:6,activityId:9,score:1})



  //ACTUALLY I'm gonna fill in a bunch of clearly incorrect but consistent values for tesing
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  //STARTING POINT FOR BAD DATA.. GO BACK HERE TO FIX IT UP
  // D
  newUserActivities.push({userId:7,activityId:7,score:5})
  newUserActivities.push({userId:7,activityId:8,score:5})
  newUserActivities.push({userId:7,activityId:2,score:5})
  newUserActivities.push({userId:7,activityId:21,score:5})
  newUserActivities.push({userId:7,activityId:24,score:5})
  newUserActivities.push({userId:7,activityId:27,score:5})
  newUserActivities.push({userId:7,activityId:43,score:5})
  newUserActivities.push({userId:7,activityId:9,score:3})
  newUserActivities.push({userId:7,activityId:11,score:3})
  newUserActivities.push({userId:7,activityId:23,score:3})
  newUserActivities.push({userId:7,activityId:3,score:2})
  newUserActivities.push({userId:7,activityId:5,score:2})
  newUserActivities.push({userId:7,activityId:15,score:2})
  newUserActivities.push({userId:7,activityId:9,score:1})
// E
  newUserActivities.push({userId:8,activityId:11,score:5})
  newUserActivities.push({userId:8,activityId:12,score:5})
  newUserActivities.push({userId:8,activityId:37,score:5})
  newUserActivities.push({userId:8,activityId:41,score:4})
  newUserActivities.push({userId:8,activityId:13,score:4})
  newUserActivities.push({userId:8,activityId:18,score:4})
  newUserActivities.push({userId:8,activityId:15,score:4})
  newUserActivities.push({userId:8,activityId:20,score:3})
  newUserActivities.push({userId:8,activityId:17,score:2})
  newUserActivities.push({userId:8,activityId:9,score:1})
  //F 
  newUserActivities.push({userId:9,activityId:13,score:5})
  newUserActivities.push({userId:9,activityId:18,score:5})
  newUserActivities.push({userId:9,activityId:32,score:5})
  newUserActivities.push({userId:9,activityId:33,score:4})
  newUserActivities.push({userId:9,activityId:40,score:4})
  newUserActivities.push({userId:9,activityId:48,score:4})
  newUserActivities.push({userId:9,activityId:50,score:4})
  newUserActivities.push({userId:9,activityId:22,score:3})
  newUserActivities.push({userId:9,activityId:27,score:2})
  newUserActivities.push({userId:9,activityId:4,score:1})
  //G
  newUserActivities.push({userId:10,activityId:14,score:5})
  newUserActivities.push({userId:10,activityId:19,score:5})
  newUserActivities.push({userId:10,activityId:23,score:5})
  newUserActivities.push({userId:10,activityId:26,score:5})
  newUserActivities.push({userId:10,activityId:29,score:5})
  newUserActivities.push({userId:10,activityId:31,score:5})
  newUserActivities.push({userId:10,activityId:36,score:5})
  newUserActivities.push({userId:10,activityId:42,score:5})
  newUserActivities.push({userId:10,activityId:6,score:2})
  newUserActivities.push({userId:10,activityId:18,score:1})
// H 
  newUserActivities.push({userId:11,activityId:15,score:5})
  newUserActivities.push({userId:11,activityId:20,score:5})
  newUserActivities.push({userId:11,activityId:22,score:5})
  newUserActivities.push({userId:11,activityId:34,score:5})
  newUserActivities.push({userId:11,activityId:44,score:5})
  newUserActivities.push({userId:11,activityId:46,score:5})
  newUserActivities.push({userId:11,activityId:49,score:5})
  newUserActivities.push({userId:11,activityId:42,score:5})
  newUserActivities.push({userId:11,activityId:2,score:2})
  newUserActivities.push({userId:11,activityId:41,score:1})


// 
// 
// 
// 
// 
  //first 3 are in the A set of highlighted activities in document
  newUserActivities.push({userId:12,activityId:1,score:5})
  newUserActivities.push({userId:12,activityId:9,score:5})
  newUserActivities.push({userId:12,activityId:10,score:5})
  newUserActivities.push({userId:12,activityId:16,score:5})
  newUserActivities.push({userId:12,activityId:17,score:5})
  newUserActivities.push({userId:12,activityId:7,score:4})
  newUserActivities.push({userId:12,activityId:24,score:4})
  newUserActivities.push({userId:12,activityId:13,score:3})
  newUserActivities.push({userId:12,activityId:15,score:3})
  newUserActivities.push({userId:12,activityId:3,score:1})
  
  //Next two use B set from google doc
  newUserActivities.push({userId:13,activityId:3,score:5})
  newUserActivities.push({userId:13,activityId:5,score:5})
  newUserActivities.push({userId:13,activityId:6,score:5})
  newUserActivities.push({userId:13,activityId:7,score:4})
  newUserActivities.push({userId:13,activityId:8,score:4})
  newUserActivities.push({userId:13,activityId:12,score:4})
  newUserActivities.push({userId:13,activityId:14,score:4})
  newUserActivities.push({userId:13,activityId:4,score:3})
  newUserActivities.push({userId:13,activityId:11,score:2})
  newUserActivities.push({userId:13,activityId:1,score:1})
  
  // Next use C set which is short so mixes in B and G sets, 
  newUserActivities.push({userId:14,activityId:4,score:5})
  newUserActivities.push({userId:14,activityId:3,score:2})
  newUserActivities.push({userId:14,activityId:5,score:2})
  newUserActivities.push({userId:14,activityId:9,score:5})
  newUserActivities.push({userId:14,activityId:31,score:5})
  newUserActivities.push({userId:14,activityId:35,score:4})
  newUserActivities.push({userId:14,activityId:34,score:4})
  newUserActivities.push({userId:14,activityId:44,score:4})
  newUserActivities.push({userId:14,activityId:16,score:3})
  newUserActivities.push({userId:14,activityId:17,score:2})
  newUserActivities.push({userId:14,activityId:9,score:1})


  // D
  newUserActivities.push({userId:15,activityId:7,score:5})
  newUserActivities.push({userId:15,activityId:8,score:5})
  newUserActivities.push({userId:15,activityId:2,score:5})
  newUserActivities.push({userId:15,activityId:21,score:5})
  newUserActivities.push({userId:15,activityId:24,score:5})
  newUserActivities.push({userId:15,activityId:27,score:5})
  newUserActivities.push({userId:15,activityId:43,score:5})
  newUserActivities.push({userId:15,activityId:9,score:3})
  newUserActivities.push({userId:7,activityId:11,score:3})
  newUserActivities.push({userId:7,activityId:23,score:3})
  newUserActivities.push({userId:15,activityId:3,score:2})
  newUserActivities.push({userId:15,activityId:5,score:2})
  newUserActivities.push({userId:15,activityId:15,score:2})
  newUserActivities.push({userId:15,activityId:9,score:1})
// E
  newUserActivities.push({userId:16,activityId:11,score:5})
  newUserActivities.push({userId:16,activityId:12,score:5})
  newUserActivities.push({userId:16,activityId:37,score:5})
  newUserActivities.push({userId:16,activityId:41,score:4})
  newUserActivities.push({userId:16,activityId:13,score:4})
  newUserActivities.push({userId:16,activityId:18,score:4})
  newUserActivities.push({userId:16,activityId:15,score:4})
  newUserActivities.push({userId:16,activityId:20,score:3})
  newUserActivities.push({userId:16,activityId:17,score:2})
  newUserActivities.push({userId:16,activityId:9,score:1})
  //F 
  newUserActivities.push({userId:17,activityId:13,score:5})
  newUserActivities.push({userId:17,activityId:18,score:5})
  newUserActivities.push({userId:17,activityId:32,score:5})
  newUserActivities.push({userId:17,activityId:33,score:4})
  newUserActivities.push({userId:17,activityId:40,score:4})
  newUserActivities.push({userId:17,activityId:48,score:4})
  newUserActivities.push({userId:17,activityId:50,score:4})
  newUserActivities.push({userId:17,activityId:22,score:3})
  newUserActivities.push({userId:17,activityId:27,score:2})
  newUserActivities.push({userId:17,activityId:4,score:1})
  //G
  newUserActivities.push({userId:18,activityId:14,score:5})
  newUserActivities.push({userId:18,activityId:19,score:5})
  newUserActivities.push({userId:18,activityId:23,score:5})
  newUserActivities.push({userId:18,activityId:26,score:5})
  newUserActivities.push({userId:18,activityId:29,score:5})
  newUserActivities.push({userId:18,activityId:31,score:5})
  newUserActivities.push({userId:18,activityId:36,score:5})
  newUserActivities.push({userId:18,activityId:42,score:5})
  newUserActivities.push({userId:18,activityId:6,score:2})
  newUserActivities.push({userId:18,activityId:18,score:1})
// H 
  newUserActivities.push({userId:19,activityId:15,score:5})
  newUserActivities.push({userId:19,activityId:20,score:5})
  newUserActivities.push({userId:19,activityId:22,score:5})
  newUserActivities.push({userId:19,activityId:34,score:5})
  newUserActivities.push({userId:19,activityId:44,score:5})
  newUserActivities.push({userId:19,activityId:46,score:5})
  newUserActivities.push({userId:19,activityId:49,score:5})
  newUserActivities.push({userId:19,activityId:42,score:5})
  newUserActivities.push({userId:19,activityId:2,score:2})
  newUserActivities.push({userId:19,activityId:41,score:1})

// Mix Activities LIKE ACEG  HATE BDFH
// Like
newUserActivities.push({userId:20,activityId:1,score:5})
newUserActivities.push({userId:20,activityId:4,score:4})
newUserActivities.push({userId:20,activityId:11,score:5})
newUserActivities.push({userId:20,activityId:12,score:4})
newUserActivities.push({userId:20,activityId:14,score:5})
newUserActivities.push({userId:20,activityId:29,score:5})
// Hate
newUserActivities.push({userId:20,activityId:3,score:1})
newUserActivities.push({userId:20,activityId:6,score:2})
newUserActivities.push({userId:20,activityId:7,score:2})
newUserActivities.push({userId:20,activityId:13,score:1})
newUserActivities.push({userId:20,activityId:32,score:1})
newUserActivities.push({userId:20,activityId:50,score:1})
newUserActivities.push({userId:20,activityId:44,score:3})
newUserActivities.push({userId:20,activityId:20,score:1})


// Mix Activities LIKE BDFH HATE ACEG
// Like
newUserActivities.push({userId:21,activityId:5,score:5})
newUserActivities.push({userId:21,activityId:6,score:5})
newUserActivities.push({userId:21,activityId:2,score:5})
newUserActivities.push({userId:21,activityId:32,score:5})
newUserActivities.push({userId:21,activityId:33,score:4})
newUserActivities.push({userId:21,activityId:20,score:5})
newUserActivities.push({userId:21,activityId:49,score:4})
// Hate
newUserActivities.push({userId:21,activityId:17,score:1})
newUserActivities.push({userId:21,activityId:4,score:2})
newUserActivities.push({userId:21,activityId:12,score:1})
newUserActivities.push({userId:21,activityId:37,score:2})
newUserActivities.push({userId:21,activityId:14,score:1})
newUserActivities.push({userId:21,activityId:23,score:2})
newUserActivities.push({userId:21,activityId:36,score:1})
newUserActivities.push({userId:21,activityId:45,score:2})

// 
// 
// 
// 
// 
// 
  //first 3 are in the A set of highlighted activities in document
  newUserActivities.push({userId:22,activityId:1,score:5})
  newUserActivities.push({userId:22,activityId:9,score:5})
  newUserActivities.push({userId:22,activityId:10,score:5})
  newUserActivities.push({userId:22,activityId:16,score:5})
  newUserActivities.push({userId:22,activityId:17,score:5})
  newUserActivities.push({userId:22,activityId:7,score:4})
  newUserActivities.push({userId:22,activityId:24,score:4})
  newUserActivities.push({userId:22,activityId:13,score:3})
  newUserActivities.push({userId:22,activityId:15,score:3})
  newUserActivities.push({userId:22,activityId:3,score:1})
  
  //Next two use B set from google doc
  newUserActivities.push({userId:23,activityId:3,score:5})
  newUserActivities.push({userId:23,activityId:5,score:5})
  newUserActivities.push({userId:23,activityId:6,score:5})
  newUserActivities.push({userId:23,activityId:7,score:4})
  newUserActivities.push({userId:23,activityId:8,score:4})
  newUserActivities.push({userId:23,activityId:12,score:4})
  newUserActivities.push({userId:23,activityId:14,score:4})
  newUserActivities.push({userId:23,activityId:4,score:3})
  newUserActivities.push({userId:23,activityId:11,score:2})
  newUserActivities.push({userId:23,activityId:1,score:1})
  
  // Next use C set which is short so mixes in B and G sets, 
  newUserActivities.push({userId:24,activityId:4,score:5})
  newUserActivities.push({userId:24,activityId:3,score:1})
  newUserActivities.push({userId:24,activityId:5,score:2})
  newUserActivities.push({userId:24,activityId:31,score:4})
  newUserActivities.push({userId:24,activityId:32,score:1})
  newUserActivities.push({userId:24,activityId:35,score:4})
  newUserActivities.push({userId:24,activityId:34,score:4})
  newUserActivities.push({userId:24,activityId:44,score:4})
  newUserActivities.push({userId:24,activityId:16,score:3})
  newUserActivities.push({userId:24,activityId:17,score:2})
  newUserActivities.push({userId:24,activityId:9,score:1})


  // D
  newUserActivities.push({userId:25,activityId:7,score:5})
  newUserActivities.push({userId:25,activityId:8,score:5})
  newUserActivities.push({userId:25,activityId:2,score:5})
  newUserActivities.push({userId:25,activityId:21,score:5})
  newUserActivities.push({userId:25,activityId:24,score:5})
  newUserActivities.push({userId:25,activityId:27,score:5})
  newUserActivities.push({userId:25,activityId:43,score:5})
  newUserActivities.push({userId:25,activityId:9,score:3})
  newUserActivities.push({userId:7,activityId:11,score:3})
  newUserActivities.push({userId:7,activityId:32,score:1})
  newUserActivities.push({userId:25,activityId:3,score:2})
  newUserActivities.push({userId:25,activityId:5,score:2})
  newUserActivities.push({userId:25,activityId:15,score:2})
  newUserActivities.push({userId:25,activityId:9,score:1})
// E
  newUserActivities.push({userId:26,activityId:11,score:5})
  newUserActivities.push({userId:26,activityId:12,score:5})
  newUserActivities.push({userId:26,activityId:37,score:5})
  newUserActivities.push({userId:26,activityId:41,score:4})
  newUserActivities.push({userId:26,activityId:13,score:4})
  newUserActivities.push({userId:26,activityId:18,score:4})
  newUserActivities.push({userId:26,activityId:15,score:4})
  newUserActivities.push({userId:26,activityId:20,score:3})
  newUserActivities.push({userId:26,activityId:17,score:2})
  newUserActivities.push({userId:26,activityId:9,score:1})
  //F 
  newUserActivities.push({userId:27,activityId:13,score:5})
  newUserActivities.push({userId:27,activityId:18,score:5})
  newUserActivities.push({userId:27,activityId:32,score:5})
  newUserActivities.push({userId:27,activityId:33,score:4})
  newUserActivities.push({userId:27,activityId:40,score:4})
  newUserActivities.push({userId:27,activityId:48,score:4})
  newUserActivities.push({userId:27,activityId:50,score:4})
  newUserActivities.push({userId:27,activityId:22,score:3})
  newUserActivities.push({userId:27,activityId:27,score:2})
  newUserActivities.push({userId:27,activityId:4,score:1})
  //G
  newUserActivities.push({userId:28,activityId:14,score:5})
  newUserActivities.push({userId:28,activityId:19,score:5})
  newUserActivities.push({userId:28,activityId:23,score:5})
  newUserActivities.push({userId:28,activityId:26,score:5})
  newUserActivities.push({userId:28,activityId:29,score:5})
  newUserActivities.push({userId:28,activityId:31,score:5})
  newUserActivities.push({userId:28,activityId:36,score:5})
  newUserActivities.push({userId:28,activityId:42,score:5})
  newUserActivities.push({userId:28,activityId:6,score:2})
  newUserActivities.push({userId:28,activityId:18,score:1})
// H 
  newUserActivities.push({userId:29,activityId:15,score:5})
  newUserActivities.push({userId:29,activityId:20,score:5})
  newUserActivities.push({userId:29,activityId:22,score:5})
  newUserActivities.push({userId:29,activityId:34,score:5})
  newUserActivities.push({userId:29,activityId:44,score:5})
  newUserActivities.push({userId:29,activityId:46,score:5})
  newUserActivities.push({userId:29,activityId:49,score:5})
  newUserActivities.push({userId:29,activityId:42,score:5})
  newUserActivities.push({userId:29,activityId:2,score:2})
  newUserActivities.push({userId:29,activityId:41,score:1})

  // Mix Activities LIKE ACEG  HATE BDFH
  // Like
  newUserActivities.push({userId:30,activityId:1,score:5})
  newUserActivities.push({userId:30,activityId:4,score:4})
  newUserActivities.push({userId:30,activityId:11,score:5})
  newUserActivities.push({userId:30,activityId:12,score:4})
  newUserActivities.push({userId:30,activityId:14,score:5})
  newUserActivities.push({userId:30,activityId:29,score:5})
  // Hate
  newUserActivities.push({userId:30,activityId:3,score:1})
  newUserActivities.push({userId:30,activityId:6,score:2})
  newUserActivities.push({userId:30,activityId:7,score:2})
  newUserActivities.push({userId:30,activityId:13,score:1})
  newUserActivities.push({userId:30,activityId:50,score:1})
  newUserActivities.push({userId:30,activityId:44,score:3})
  newUserActivities.push({userId:30,activityId:20,score:1})


  // Mix Activities LIKE BDFH HATE ACEG
  // Like
  newUserActivities.push({userId:31,activityId:5,score:5})
  newUserActivities.push({userId:31,activityId:6,score:5})
  newUserActivities.push({userId:31,activityId:2,score:5})
  newUserActivities.push({userId:31,activityId:32,score:5})
  newUserActivities.push({userId:31,activityId:33,score:4})
  newUserActivities.push({userId:31,activityId:20,score:5})
  newUserActivities.push({userId:31,activityId:49,score:4})
  // Hate
  newUserActivities.push({userId:31,activityId:17,score:1})
  newUserActivities.push({userId:31,activityId:4,score:2})
  newUserActivities.push({userId:31,activityId:12,score:1})
  newUserActivities.push({userId:31,activityId:37,score:2})
  newUserActivities.push({userId:31,activityId:14,score:1})
  newUserActivities.push({userId:31,activityId:23,score:2})
  newUserActivities.push({userId:31,activityId:36,score:1})
  newUserActivities.push({userId:31,activityId:45,score:2})




// 
// 
// 
// 
// 
// 
  //first 3 are in the A set of highlighted activities in document
  newUserActivities.push({userId:32,activityId:1,score:5})
  newUserActivities.push({userId:32,activityId:9,score:5})
  newUserActivities.push({userId:32,activityId:10,score:5})
  newUserActivities.push({userId:32,activityId:16,score:5})
  newUserActivities.push({userId:32,activityId:17,score:5})
  newUserActivities.push({userId:32,activityId:7,score:4})
  newUserActivities.push({userId:32,activityId:24,score:4})
  newUserActivities.push({userId:32,activityId:13,score:2})
  newUserActivities.push({userId:32,activityId:18,score:1})
  newUserActivities.push({userId:32,activityId:40,score:2})
  newUserActivities.push({userId:32,activityId:15,score:3})
  newUserActivities.push({userId:32,activityId:3,score:1})
  
  //Next two use B set from google doc
  newUserActivities.push({userId:33,activityId:3,score:5})
  newUserActivities.push({userId:33,activityId:5,score:5})
  newUserActivities.push({userId:33,activityId:6,score:5})
  newUserActivities.push({userId:33,activityId:7,score:4})
  newUserActivities.push({userId:33,activityId:8,score:4})
  newUserActivities.push({userId:33,activityId:12,score:4})
  newUserActivities.push({userId:33,activityId:14,score:2})
  newUserActivities.push({userId:33,activityId:4,score:3})
  newUserActivities.push({userId:33,activityId:11,score:2})
  newUserActivities.push({userId:33,activityId:1,score:1})
  
  // Next use C set which is short so mixes in B and G sets, 
  newUserActivities.push({userId:34,activityId:4,score:5})
  newUserActivities.push({userId:34,activityId:3,score:1})
  newUserActivities.push({userId:34,activityId:14,score:5})
  newUserActivities.push({userId:34,activityId:31,score:3})
  newUserActivities.push({userId:34,activityId:35,score:4})
  newUserActivities.push({userId:34,activityId:34,score:4})
  newUserActivities.push({userId:34,activityId:44,score:2})
  newUserActivities.push({userId:34,activityId:16,score:3})
  newUserActivities.push({userId:34,activityId:17,score:2})
  newUserActivities.push({userId:34,activityId:9,score:1})


  // D
  newUserActivities.push({userId:35,activityId:7,score:5})
  newUserActivities.push({userId:35,activityId:8,score:5})
  newUserActivities.push({userId:35,activityId:2,score:5})
  newUserActivities.push({userId:35,activityId:21,score:5})
  newUserActivities.push({userId:35,activityId:24,score:5})
  newUserActivities.push({userId:35,activityId:27,score:5})
  newUserActivities.push({userId:35,activityId:43,score:5})
  newUserActivities.push({userId:35,activityId:9,score:3})
  newUserActivities.push({userId:7,activityId:4,score:3})
  newUserActivities.push({userId:7,activityId:19,score:3})
  newUserActivities.push({userId:35,activityId:3,score:2})
  newUserActivities.push({userId:35,activityId:5,score:2})
  newUserActivities.push({userId:35,activityId:15,score:2})
  newUserActivities.push({userId:35,activityId:9,score:1})
// E
  newUserActivities.push({userId:36,activityId:11,score:5})
  newUserActivities.push({userId:36,activityId:12,score:5})
  newUserActivities.push({userId:36,activityId:37,score:5})
  newUserActivities.push({userId:36,activityId:41,score:4})
  newUserActivities.push({userId:36,activityId:13,score:4})
  newUserActivities.push({userId:36,activityId:18,score:4})
  newUserActivities.push({userId:36,activityId:15,score:4})
  newUserActivities.push({userId:36,activityId:20,score:3})
  newUserActivities.push({userId:36,activityId:17,score:2})
  newUserActivities.push({userId:36,activityId:9,score:1})
  //F 
  newUserActivities.push({userId:37,activityId:13,score:5})
  newUserActivities.push({userId:37,activityId:18,score:5})
  newUserActivities.push({userId:37,activityId:33,score:4})
  newUserActivities.push({userId:37,activityId:40,score:4})
  newUserActivities.push({userId:37,activityId:48,score:4})
  newUserActivities.push({userId:37,activityId:50,score:4})
  newUserActivities.push({userId:37,activityId:22,score:3})
  newUserActivities.push({userId:37,activityId:27,score:2})
  newUserActivities.push({userId:37,activityId:4,score:1})
  //G
  newUserActivities.push({userId:38,activityId:14,score:5})
  newUserActivities.push({userId:38,activityId:19,score:5})
  newUserActivities.push({userId:38,activityId:23,score:5})
  newUserActivities.push({userId:38,activityId:26,score:5})
  newUserActivities.push({userId:38,activityId:29,score:5})
  newUserActivities.push({userId:38,activityId:31,score:5})
  newUserActivities.push({userId:38,activityId:36,score:5})
  newUserActivities.push({userId:38,activityId:42,score:5})
  newUserActivities.push({userId:38,activityId:6,score:2})
  newUserActivities.push({userId:38,activityId:18,score:1})
// H 
  newUserActivities.push({userId:39,activityId:15,score:5})
  newUserActivities.push({userId:39,activityId:20,score:5})
  newUserActivities.push({userId:39,activityId:22,score:5})
  newUserActivities.push({userId:39,activityId:34,score:5})
  newUserActivities.push({userId:39,activityId:44,score:5})
  newUserActivities.push({userId:39,activityId:46,score:5})
  newUserActivities.push({userId:39,activityId:49,score:5})
  newUserActivities.push({userId:39,activityId:42,score:5})
  newUserActivities.push({userId:39,activityId:2,score:2})
  newUserActivities.push({userId:39,activityId:41,score:1})

  // Mix Activities LIKE ACEG  HATE BDFH
  // Like
  newUserActivities.push({userId:40,activityId:1,score:5})
  newUserActivities.push({userId:40,activityId:4,score:4})
  newUserActivities.push({userId:40,activityId:11,score:5})
  newUserActivities.push({userId:40,activityId:12,score:4})
  newUserActivities.push({userId:40,activityId:14,score:5})
  newUserActivities.push({userId:40,activityId:29,score:5})
  // Hate
  newUserActivities.push({userId:40,activityId:3,score:1})
  newUserActivities.push({userId:40,activityId:6,score:2})
  newUserActivities.push({userId:40,activityId:7,score:2})
  newUserActivities.push({userId:40,activityId:13,score:1})
  newUserActivities.push({userId:40,activityId:50,score:1})
  newUserActivities.push({userId:40,activityId:44,score:3})
  newUserActivities.push({userId:40,activityId:20,score:1})


  // Mix Activities LIKE BDFH HATE ACEG
  // Like
  newUserActivities.push({userId:41,activityId:5,score:5})
  newUserActivities.push({userId:41,activityId:6,score:5})
  newUserActivities.push({userId:41,activityId:2,score:5})
  newUserActivities.push({userId:41,activityId:32,score:5})
  newUserActivities.push({userId:41,activityId:33,score:4})
  newUserActivities.push({userId:41,activityId:20,score:5})
  newUserActivities.push({userId:41,activityId:49,score:4})
  // Hate
  newUserActivities.push({userId:41,activityId:17,score:1})
  newUserActivities.push({userId:41,activityId:4,score:2})
  newUserActivities.push({userId:41,activityId:12,score:1})
  newUserActivities.push({userId:41,activityId:37,score:2})
  newUserActivities.push({userId:41,activityId:14,score:1})
  newUserActivities.push({userId:41,activityId:23,score:2})
  newUserActivities.push({userId:41,activityId:36,score:1})
  newUserActivities.push({userId:41,activityId:45,score:2})



// 
// 
// 
// 
// 
// 
  //first 3 are in the A set of highlighted activities in document
  newUserActivities.push({userId:42,activityId:1,score:5})
  newUserActivities.push({userId:42,activityId:9,score:5})
  newUserActivities.push({userId:42,activityId:10,score:5})
  newUserActivities.push({userId:42,activityId:16,score:5})
  newUserActivities.push({userId:42,activityId:17,score:5})
  newUserActivities.push({userId:42,activityId:7,score:4})
  newUserActivities.push({userId:42,activityId:24,score:4})
  newUserActivities.push({userId:42,activityId:13,score:3})
  newUserActivities.push({userId:42,activityId:15,score:3})
  newUserActivities.push({userId:42,activityId:3,score:1})
  
  //Next two use B set from google doc
  newUserActivities.push({userId:43,activityId:3,score:5})
  newUserActivities.push({userId:43,activityId:5,score:5})
  newUserActivities.push({userId:43,activityId:6,score:5})
  newUserActivities.push({userId:43,activityId:7,score:4})
  newUserActivities.push({userId:43,activityId:8,score:4})
  newUserActivities.push({userId:43,activityId:12,score:4})
  newUserActivities.push({userId:43,activityId:14,score:4})
  newUserActivities.push({userId:43,activityId:4,score:3})
  newUserActivities.push({userId:43,activityId:11,score:2})
  newUserActivities.push({userId:43,activityId:1,score:1})
  
  // Next use C set which is short so mixes in B and G sets, 
  newUserActivities.push({userId:44,activityId:4,score:5})
  newUserActivities.push({userId:44,activityId:2,score:1})
  newUserActivities.push({userId:44,activityId:27,score:2})
  newUserActivities.push({userId:44,activityId:21,score:2})
  newUserActivities.push({userId:44,activityId:31,score:4})
  newUserActivities.push({userId:44,activityId:35,score:4})
  newUserActivities.push({userId:44,activityId:34,score:4})
  newUserActivities.push({userId:44,activityId:44,score:4})
  newUserActivities.push({userId:44,activityId:16,score:3})
  newUserActivities.push({userId:44,activityId:17,score:2})
  newUserActivities.push({userId:44,activityId:9,score:1})


  // D
  newUserActivities.push({userId:45,activityId:7,score:5})
  newUserActivities.push({userId:45,activityId:8,score:5})
  newUserActivities.push({userId:45,activityId:2,score:5})
  newUserActivities.push({userId:45,activityId:21,score:5})
  newUserActivities.push({userId:45,activityId:24,score:5})
  newUserActivities.push({userId:45,activityId:27,score:5})
  newUserActivities.push({userId:45,activityId:43,score:5})
  newUserActivities.push({userId:45,activityId:9,score:3})
  newUserActivities.push({userId:7,activityId:12,score:3})
  newUserActivities.push({userId:7,activityId:19,score:3})
  newUserActivities.push({userId:45,activityId:3,score:2})
  newUserActivities.push({userId:45,activityId:5,score:2})
  newUserActivities.push({userId:45,activityId:15,score:2})
  newUserActivities.push({userId:45,activityId:9,score:1})
// E
  newUserActivities.push({userId:46,activityId:11,score:5})
  newUserActivities.push({userId:46,activityId:12,score:5})
  newUserActivities.push({userId:46,activityId:37,score:5})
  newUserActivities.push({userId:46,activityId:41,score:4})
  newUserActivities.push({userId:46,activityId:13,score:4})
  newUserActivities.push({userId:46,activityId:18,score:4})
  newUserActivities.push({userId:46,activityId:15,score:4})
  newUserActivities.push({userId:46,activityId:20,score:3})
  newUserActivities.push({userId:46,activityId:17,score:2})
  newUserActivities.push({userId:46,activityId:9,score:1})
  //F 
  newUserActivities.push({userId:47,activityId:13,score:5})
  newUserActivities.push({userId:47,activityId:18,score:5})
  newUserActivities.push({userId:47,activityId:32,score:5})
  newUserActivities.push({userId:47,activityId:33,score:4})
  newUserActivities.push({userId:47,activityId:40,score:4})
  newUserActivities.push({userId:47,activityId:48,score:4})
  newUserActivities.push({userId:47,activityId:50,score:4})
  newUserActivities.push({userId:47,activityId:22,score:3})
  newUserActivities.push({userId:47,activityId:27,score:2})
  newUserActivities.push({userId:47,activityId:4,score:1})
  //G
  newUserActivities.push({userId:48,activityId:14,score:5})
  newUserActivities.push({userId:48,activityId:19,score:5})
  newUserActivities.push({userId:48,activityId:23,score:5})
  newUserActivities.push({userId:48,activityId:26,score:5})
  newUserActivities.push({userId:48,activityId:29,score:5})
  newUserActivities.push({userId:48,activityId:31,score:5})
  newUserActivities.push({userId:48,activityId:36,score:5})
  newUserActivities.push({userId:48,activityId:42,score:5})
  newUserActivities.push({userId:48,activityId:6,score:2})
  newUserActivities.push({userId:48,activityId:18,score:1})
// H 
  newUserActivities.push({userId:49,activityId:15,score:5})
  newUserActivities.push({userId:49,activityId:20,score:5})
  newUserActivities.push({userId:49,activityId:22,score:5})
  newUserActivities.push({userId:49,activityId:34,score:5})
  newUserActivities.push({userId:49,activityId:44,score:5})
  newUserActivities.push({userId:49,activityId:46,score:5})
  newUserActivities.push({userId:49,activityId:49,score:5})
  newUserActivities.push({userId:49,activityId:42,score:5})
  newUserActivities.push({userId:49,activityId:2,score:2})
  newUserActivities.push({userId:49,activityId:41,score:1})

  // Mix Activities LIKE ACEG  HATE BDFH
  // Like
  newUserActivities.push({userId:50,activityId:1,score:5})
  newUserActivities.push({userId:50,activityId:4,score:4})
  newUserActivities.push({userId:50,activityId:11,score:5})
  newUserActivities.push({userId:50,activityId:12,score:4})
  newUserActivities.push({userId:50,activityId:14,score:5})
  newUserActivities.push({userId:50,activityId:29,score:5})
  // Hate
  newUserActivities.push({userId:50,activityId:3,score:1})
  newUserActivities.push({userId:50,activityId:6,score:2})
  newUserActivities.push({userId:50,activityId:7,score:2})
  newUserActivities.push({userId:50,activityId:13,score:1})
  newUserActivities.push({userId:50,activityId:32,score:1})
  newUserActivities.push({userId:50,activityId:50,score:1})
  newUserActivities.push({userId:50,activityId:44,score:3})
  newUserActivities.push({userId:50,activityId:20,score:1})


  // Mix Activities LIKE BDFH HATE ACEG
  // Like
  newUserActivities.push({userId:51,activityId:5,score:5})
  newUserActivities.push({userId:51,activityId:6,score:5})
  newUserActivities.push({userId:51,activityId:2,score:5})
  newUserActivities.push({userId:51,activityId:32,score:5})
  newUserActivities.push({userId:51,activityId:33,score:4})
  newUserActivities.push({userId:51,activityId:20,score:5})
  newUserActivities.push({userId:51,activityId:49,score:4})
  // Hate
  newUserActivities.push({userId:51,activityId:17,score:1})
  newUserActivities.push({userId:51,activityId:4,score:2})
  newUserActivities.push({userId:51,activityId:12,score:1})
  newUserActivities.push({userId:51,activityId:37,score:2})
  newUserActivities.push({userId:51,activityId:31,score:2})
  newUserActivities.push({userId:51,activityId:14,score:1})
  newUserActivities.push({userId:51,activityId:23,score:2})
  newUserActivities.push({userId:51,activityId:36,score:1})
  newUserActivities.push({userId:51,activityId:45,score:2})




// 
// 
// 
// 
// 
// 
  //first 3 are in the A set of highlighted activities in document
  newUserActivities.push({userId:52,activityId:1,score:5})
  newUserActivities.push({userId:52,activityId:9,score:5})
  newUserActivities.push({userId:52,activityId:10,score:5})
  newUserActivities.push({userId:52,activityId:16,score:5})
  newUserActivities.push({userId:52,activityId:17,score:5})
  newUserActivities.push({userId:52,activityId:7,score:4})
  newUserActivities.push({userId:52,activityId:24,score:4})
  newUserActivities.push({userId:52,activityId:13,score:3})
  newUserActivities.push({userId:52,activityId:15,score:3})
  newUserActivities.push({userId:52,activityId:3,score:1})
  
  //Next two use B set from google doc
  newUserActivities.push({userId:53,activityId:3,score:5})
  newUserActivities.push({userId:53,activityId:5,score:5})
  newUserActivities.push({userId:53,activityId:6,score:5})
  newUserActivities.push({userId:53,activityId:7,score:4})
  newUserActivities.push({userId:53,activityId:8,score:4})
  newUserActivities.push({userId:53,activityId:12,score:4})
  newUserActivities.push({userId:53,activityId:14,score:4})
  newUserActivities.push({userId:53,activityId:4,score:3})
  newUserActivities.push({userId:53,activityId:11,score:2})
  newUserActivities.push({userId:53,activityId:1,score:1})
  
  // Next use C set which is short so mixes in B and G sets, 
  newUserActivities.push({userId:54,activityId:4,score:5})
  newUserActivities.push({userId:54,activityId:22,score:1})
  newUserActivities.push({userId:54,activityId:26,score:2})
  newUserActivities.push({userId:54,activityId:1,score:4})
  newUserActivities.push({userId:54,activityId:35,score:4})
  newUserActivities.push({userId:54,activityId:34,score:4})
  newUserActivities.push({userId:54,activityId:44,score:4})
  newUserActivities.push({userId:54,activityId:16,score:3})
  newUserActivities.push({userId:54,activityId:17,score:2})
  newUserActivities.push({userId:54,activityId:9,score:1})


  // D
  newUserActivities.push({userId:55,activityId:7,score:5})
  newUserActivities.push({userId:55,activityId:8,score:5})
  newUserActivities.push({userId:55,activityId:2,score:5})
  newUserActivities.push({userId:55,activityId:21,score:5})
  newUserActivities.push({userId:55,activityId:24,score:5})
  newUserActivities.push({userId:55,activityId:27,score:5})
  newUserActivities.push({userId:55,activityId:43,score:5})
  newUserActivities.push({userId:55,activityId:9,score:3})
  newUserActivities.push({userId:7,activityId:11,score:3})
  newUserActivities.push({userId:7,activityId:19,score:3})
  newUserActivities.push({userId:55,activityId:3,score:2})
  newUserActivities.push({userId:55,activityId:5,score:2})
  newUserActivities.push({userId:55,activityId:15,score:2})
  newUserActivities.push({userId:55,activityId:9,score:1})
// E
  newUserActivities.push({userId:56,activityId:11,score:5})
  newUserActivities.push({userId:56,activityId:12,score:5})
  newUserActivities.push({userId:56,activityId:37,score:5})
  newUserActivities.push({userId:56,activityId:41,score:4})
  newUserActivities.push({userId:56,activityId:13,score:4})
  newUserActivities.push({userId:56,activityId:18,score:4})
  newUserActivities.push({userId:56,activityId:15,score:4})
  newUserActivities.push({userId:56,activityId:20,score:3})
  newUserActivities.push({userId:56,activityId:17,score:2})
  newUserActivities.push({userId:56,activityId:9,score:1})
  //F 
  newUserActivities.push({userId:57,activityId:13,score:5})
  newUserActivities.push({userId:57,activityId:18,score:5})
  newUserActivities.push({userId:57,activityId:32,score:5})
  newUserActivities.push({userId:57,activityId:33,score:4})
  newUserActivities.push({userId:57,activityId:40,score:4})
  newUserActivities.push({userId:57,activityId:48,score:4})
  newUserActivities.push({userId:57,activityId:50,score:4})
  newUserActivities.push({userId:57,activityId:22,score:3})
  newUserActivities.push({userId:57,activityId:27,score:2})
  newUserActivities.push({userId:57,activityId:4,score:1})
  //G
  newUserActivities.push({userId:58,activityId:14,score:5})
  newUserActivities.push({userId:58,activityId:19,score:5})
  newUserActivities.push({userId:58,activityId:23,score:5})
  newUserActivities.push({userId:58,activityId:26,score:5})
  newUserActivities.push({userId:58,activityId:29,score:5})
  newUserActivities.push({userId:58,activityId:31,score:5})
  newUserActivities.push({userId:58,activityId:36,score:5})
  newUserActivities.push({userId:58,activityId:42,score:5})
  newUserActivities.push({userId:58,activityId:6,score:2})
  newUserActivities.push({userId:58,activityId:18,score:1})
// H 
  newUserActivities.push({userId:59,activityId:15,score:5})
  newUserActivities.push({userId:59,activityId:20,score:5})
  newUserActivities.push({userId:59,activityId:22,score:5})
  newUserActivities.push({userId:59,activityId:34,score:5})
  newUserActivities.push({userId:59,activityId:44,score:5})
  newUserActivities.push({userId:59,activityId:46,score:5})
  newUserActivities.push({userId:59,activityId:49,score:5})
  newUserActivities.push({userId:59,activityId:42,score:5})
  newUserActivities.push({userId:59,activityId:2,score:2})
  newUserActivities.push({userId:59,activityId:41,score:1})

  // Mix Activities LIKE ACEG  HATE BDFH
  // Like
  newUserActivities.push({userId:60,activityId:1,score:5})
  newUserActivities.push({userId:60,activityId:4,score:4})
  newUserActivities.push({userId:60,activityId:11,score:5})
  newUserActivities.push({userId:60,activityId:12,score:4})
  newUserActivities.push({userId:60,activityId:14,score:5})
  newUserActivities.push({userId:60,activityId:29,score:5})
  // Hate
  newUserActivities.push({userId:60,activityId:3,score:1})
  newUserActivities.push({userId:60,activityId:6,score:2})
  newUserActivities.push({userId:60,activityId:7,score:2})
  newUserActivities.push({userId:60,activityId:13,score:1})
  newUserActivities.push({userId:60,activityId:32,score:1})
  newUserActivities.push({userId:60,activityId:50,score:1})
  newUserActivities.push({userId:60,activityId:44,score:3})
  newUserActivities.push({userId:60,activityId:20,score:1})


  // Mix Activities LIKE BDFH HATE ACEG
  // Like
  newUserActivities.push({userId:61,activityId:5,score:5})
  newUserActivities.push({userId:61,activityId:6,score:5})
  newUserActivities.push({userId:61,activityId:2,score:5})
  newUserActivities.push({userId:61,activityId:32,score:5})
  newUserActivities.push({userId:61,activityId:33,score:4})
  newUserActivities.push({userId:61,activityId:20,score:5})
  newUserActivities.push({userId:61,activityId:49,score:4})
  // Hate
  newUserActivities.push({userId:61,activityId:17,score:1})
  newUserActivities.push({userId:61,activityId:4,score:2})
  newUserActivities.push({userId:61,activityId:12,score:1})
  newUserActivities.push({userId:61,activityId:37,score:2})
  newUserActivities.push({userId:61,activityId:14,score:1})
  newUserActivities.push({userId:61,activityId:23,score:2})
  newUserActivities.push({userId:61,activityId:36,score:1})
  newUserActivities.push({userId:61,activityId:45,score:2})

// 
// 
// 
// 
// 
// 
  //first 3 are in the A set of highlighted activities in document
  newUserActivities.push({userId:62,activityId:1,score:5})
  newUserActivities.push({userId:62,activityId:9,score:5})
  newUserActivities.push({userId:62,activityId:10,score:5})
  newUserActivities.push({userId:62,activityId:16,score:5})
  newUserActivities.push({userId:62,activityId:17,score:5})
  newUserActivities.push({userId:62,activityId:7,score:4})
  newUserActivities.push({userId:62,activityId:24,score:4})
  newUserActivities.push({userId:62,activityId:13,score:3})
  newUserActivities.push({userId:62,activityId:15,score:3})
  newUserActivities.push({userId:62,activityId:3,score:1})
  
  //Next two use B set from google doc
  newUserActivities.push({userId:63,activityId:3,score:5})
  newUserActivities.push({userId:63,activityId:5,score:5})
  newUserActivities.push({userId:63,activityId:6,score:5})
  newUserActivities.push({userId:63,activityId:7,score:4})
  newUserActivities.push({userId:63,activityId:8,score:4})
  newUserActivities.push({userId:63,activityId:12,score:4})
  newUserActivities.push({userId:63,activityId:14,score:4})
  newUserActivities.push({userId:63,activityId:4,score:3})
  newUserActivities.push({userId:63,activityId:11,score:2})
  newUserActivities.push({userId:63,activityId:1,score:1})
  
  // Next use C set which is short so mixes in B and G sets, 
  newUserActivities.push({userId:64,activityId:4,score:5})
  newUserActivities.push({userId:64,activityId:42,score:2})
  newUserActivities.push({userId:64,activityId:8,score:2})
  newUserActivities.push({userId:64,activityId:32,score:4})
  newUserActivities.push({userId:64,activityId:35,score:4})
  newUserActivities.push({userId:64,activityId:34,score:4})
  newUserActivities.push({userId:64,activityId:44,score:4})
  newUserActivities.push({userId:64,activityId:16,score:3})
  newUserActivities.push({userId:64,activityId:17,score:2})
  newUserActivities.push({userId:64,activityId:9,score:1})


  // D
  newUserActivities.push({userId:65,activityId:7,score:5})
  newUserActivities.push({userId:65,activityId:8,score:5})
  newUserActivities.push({userId:65,activityId:2,score:5})
  newUserActivities.push({userId:65,activityId:21,score:5})
  newUserActivities.push({userId:65,activityId:24,score:5})
  newUserActivities.push({userId:65,activityId:27,score:5})
  newUserActivities.push({userId:65,activityId:43,score:5})
  newUserActivities.push({userId:65,activityId:9,score:3})
  newUserActivities.push({userId:65,activityId:3,score:2})
  newUserActivities.push({userId:65,activityId:5,score:2})
  newUserActivities.push({userId:65,activityId:15,score:2})
  newUserActivities.push({userId:65,activityId:9,score:1})
// E
  newUserActivities.push({userId:66,activityId:11,score:5})
  newUserActivities.push({userId:66,activityId:12,score:5})
  newUserActivities.push({userId:66,activityId:37,score:5})
  newUserActivities.push({userId:66,activityId:41,score:4})
  newUserActivities.push({userId:66,activityId:13,score:4})
  newUserActivities.push({userId:66,activityId:18,score:4})
  newUserActivities.push({userId:66,activityId:15,score:4})
  newUserActivities.push({userId:66,activityId:20,score:3})
  newUserActivities.push({userId:66,activityId:17,score:2})
  newUserActivities.push({userId:66,activityId:9,score:1})
  //F 
  newUserActivities.push({userId:67,activityId:13,score:5})
  newUserActivities.push({userId:67,activityId:18,score:5})
  newUserActivities.push({userId:67,activityId:32,score:5})
  newUserActivities.push({userId:67,activityId:33,score:4})
  newUserActivities.push({userId:67,activityId:40,score:4})
  newUserActivities.push({userId:67,activityId:48,score:4})
  newUserActivities.push({userId:67,activityId:50,score:4})
  newUserActivities.push({userId:67,activityId:22,score:3})
  newUserActivities.push({userId:67,activityId:27,score:2})
  newUserActivities.push({userId:67,activityId:4,score:1})
  //G
  newUserActivities.push({userId:68,activityId:14,score:5})
  newUserActivities.push({userId:68,activityId:19,score:5})
  newUserActivities.push({userId:68,activityId:23,score:5})
  newUserActivities.push({userId:68,activityId:26,score:5})
  newUserActivities.push({userId:68,activityId:29,score:5})
  newUserActivities.push({userId:68,activityId:31,score:5})
  newUserActivities.push({userId:68,activityId:36,score:5})
  newUserActivities.push({userId:68,activityId:42,score:5})
  newUserActivities.push({userId:68,activityId:6,score:2})
  newUserActivities.push({userId:68,activityId:18,score:1})
// H 
  newUserActivities.push({userId:69,activityId:15,score:5})
  newUserActivities.push({userId:69,activityId:20,score:5})
  newUserActivities.push({userId:69,activityId:22,score:5})
  newUserActivities.push({userId:69,activityId:34,score:5})
  newUserActivities.push({userId:69,activityId:44,score:5})
  newUserActivities.push({userId:69,activityId:46,score:5})
  newUserActivities.push({userId:69,activityId:49,score:5})
  newUserActivities.push({userId:69,activityId:42,score:5})
  newUserActivities.push({userId:69,activityId:2,score:2})
  newUserActivities.push({userId:69,activityId:41,score:1})

  // Mix Activities LIKE ACEG  HATE BDFH
  // Like
  newUserActivities.push({userId:70,activityId:1,score:5})
  newUserActivities.push({userId:70,activityId:4,score:4})
  newUserActivities.push({userId:70,activityId:11,score:5})
  newUserActivities.push({userId:70,activityId:12,score:4})
  newUserActivities.push({userId:70,activityId:14,score:5})
  newUserActivities.push({userId:70,activityId:29,score:5})
  // Hate
  newUserActivities.push({userId:70,activityId:3,score:1})
  newUserActivities.push({userId:70,activityId:6,score:2})
  newUserActivities.push({userId:70,activityId:7,score:2})
  newUserActivities.push({userId:70,activityId:13,score:1})
  newUserActivities.push({userId:70,activityId:32,score:1})
  newUserActivities.push({userId:70,activityId:50,score:1})
  newUserActivities.push({userId:70,activityId:44,score:3})
  newUserActivities.push({userId:70,activityId:20,score:1})


  // Mix Activities LIKE BDFH HATE ACEG
  // Like
  newUserActivities.push({userId:71,activityId:5,score:5})
  newUserActivities.push({userId:71,activityId:6,score:5})
  newUserActivities.push({userId:71,activityId:2,score:5})
  newUserActivities.push({userId:71,activityId:32,score:5})
  newUserActivities.push({userId:71,activityId:33,score:4})
  newUserActivities.push({userId:71,activityId:20,score:5})
  newUserActivities.push({userId:71,activityId:49,score:4})
  // Hate
  newUserActivities.push({userId:71,activityId:17,score:1})
  newUserActivities.push({userId:71,activityId:4,score:2})
  newUserActivities.push({userId:71,activityId:12,score:1})
  newUserActivities.push({userId:71,activityId:37,score:2})
  newUserActivities.push({userId:71,activityId:14,score:1})
  newUserActivities.push({userId:71,activityId:23,score:2})
  newUserActivities.push({userId:71,activityId:36,score:1})
  newUserActivities.push({userId:71,activityId:45,score:2})



// 
// 
// 
// 
// 
// 
  //first 3 are in the A set of highlighted activities in document
  newUserActivities.push({userId:72,activityId:1,score:5})
  newUserActivities.push({userId:72,activityId:9,score:5})
  newUserActivities.push({userId:72,activityId:10,score:5})
  newUserActivities.push({userId:72,activityId:16,score:5})
  newUserActivities.push({userId:72,activityId:17,score:5})
  newUserActivities.push({userId:72,activityId:7,score:4})
  newUserActivities.push({userId:72,activityId:24,score:4})
  newUserActivities.push({userId:72,activityId:13,score:3})
  newUserActivities.push({userId:72,activityId:15,score:3})
  newUserActivities.push({userId:72,activityId:3,score:1})
  
  //Next two use B set from google doc
  newUserActivities.push({userId:73,activityId:3,score:5})
  newUserActivities.push({userId:73,activityId:5,score:5})
  newUserActivities.push({userId:73,activityId:6,score:5})
  newUserActivities.push({userId:73,activityId:7,score:4})
  newUserActivities.push({userId:73,activityId:8,score:4})
  newUserActivities.push({userId:73,activityId:12,score:4})
  newUserActivities.push({userId:73,activityId:14,score:4})
  newUserActivities.push({userId:73,activityId:4,score:3})
  newUserActivities.push({userId:73,activityId:11,score:2})
  newUserActivities.push({userId:73,activityId:1,score:1})
  
  // Next use C set which is short so mixes in B and G sets, 
  newUserActivities.push({userId:74,activityId:4,score:5})
  newUserActivities.push({userId:74,activityId:37,score:5})
  newUserActivities.push({userId:74,activityId:45,score:5})
  newUserActivities.push({userId:74,activityId:35,score:4})
  newUserActivities.push({userId:74,activityId:34,score:4})
  newUserActivities.push({userId:74,activityId:44,score:4})
  newUserActivities.push({userId:74,activityId:16,score:3})
  newUserActivities.push({userId:74,activityId:17,score:2})
  newUserActivities.push({userId:74,activityId:9,score:1})


  // D
  newUserActivities.push({userId:75,activityId:7,score:5})
  newUserActivities.push({userId:75,activityId:8,score:5})
  newUserActivities.push({userId:75,activityId:2,score:5})
  newUserActivities.push({userId:75,activityId:21,score:5})
  newUserActivities.push({userId:75,activityId:24,score:5})
  newUserActivities.push({userId:75,activityId:27,score:5})
  newUserActivities.push({userId:75,activityId:43,score:5})
  newUserActivities.push({userId:75,activityId:9,score:3})
  newUserActivities.push({userId:75,activityId:3,score:2})
  newUserActivities.push({userId:75,activityId:5,score:2})
  newUserActivities.push({userId:75,activityId:15,score:2})
  newUserActivities.push({userId:75,activityId:9,score:1})
// E
  newUserActivities.push({userId:76,activityId:11,score:5})
  newUserActivities.push({userId:76,activityId:12,score:5})
  newUserActivities.push({userId:76,activityId:37,score:5})
  newUserActivities.push({userId:76,activityId:41,score:4})
  newUserActivities.push({userId:76,activityId:13,score:4})
  newUserActivities.push({userId:76,activityId:18,score:4})
  newUserActivities.push({userId:76,activityId:15,score:4})
  newUserActivities.push({userId:76,activityId:20,score:3})
  newUserActivities.push({userId:76,activityId:17,score:2})
  newUserActivities.push({userId:76,activityId:9,score:1})
  //F 
  newUserActivities.push({userId:77,activityId:13,score:5})
  newUserActivities.push({userId:77,activityId:18,score:5})
  newUserActivities.push({userId:77,activityId:32,score:5})
  newUserActivities.push({userId:77,activityId:33,score:4})
  newUserActivities.push({userId:77,activityId:40,score:4})
  newUserActivities.push({userId:77,activityId:48,score:4})
  newUserActivities.push({userId:77,activityId:50,score:4})
  newUserActivities.push({userId:77,activityId:22,score:3})
  newUserActivities.push({userId:77,activityId:27,score:2})
  newUserActivities.push({userId:77,activityId:4,score:1})
  //G
  newUserActivities.push({userId:78,activityId:14,score:5})
  newUserActivities.push({userId:78,activityId:19,score:5})
  newUserActivities.push({userId:78,activityId:23,score:5})
  newUserActivities.push({userId:78,activityId:26,score:5})
  newUserActivities.push({userId:78,activityId:29,score:5})
  newUserActivities.push({userId:78,activityId:31,score:5})
  newUserActivities.push({userId:78,activityId:36,score:5})
  newUserActivities.push({userId:78,activityId:42,score:5})
  newUserActivities.push({userId:78,activityId:6,score:2})
  newUserActivities.push({userId:78,activityId:18,score:1})
// H 
  newUserActivities.push({userId:79,activityId:15,score:5})
  newUserActivities.push({userId:79,activityId:20,score:5})
  newUserActivities.push({userId:79,activityId:22,score:5})
  newUserActivities.push({userId:79,activityId:34,score:5})
  newUserActivities.push({userId:79,activityId:44,score:5})
  newUserActivities.push({userId:79,activityId:46,score:5})
  newUserActivities.push({userId:79,activityId:49,score:5})
  newUserActivities.push({userId:79,activityId:42,score:5})
  newUserActivities.push({userId:79,activityId:2,score:2})
  newUserActivities.push({userId:79,activityId:41,score:1})

  // Mix Activities LIKE ACEG  HATE BDFH
  // Like
  newUserActivities.push({userId:80,activityId:1,score:5})
  newUserActivities.push({userId:80,activityId:4,score:4})
  newUserActivities.push({userId:80,activityId:11,score:5})
  newUserActivities.push({userId:80,activityId:12,score:4})
  newUserActivities.push({userId:80,activityId:14,score:5})
  newUserActivities.push({userId:80,activityId:29,score:5})
  // Hate
  newUserActivities.push({userId:80,activityId:3,score:1})
  newUserActivities.push({userId:80,activityId:6,score:2})
  newUserActivities.push({userId:80,activityId:7,score:2})
  newUserActivities.push({userId:80,activityId:13,score:1})
  newUserActivities.push({userId:80,activityId:32,score:1})
  newUserActivities.push({userId:80,activityId:50,score:1})
  newUserActivities.push({userId:80,activityId:44,score:3})
  newUserActivities.push({userId:80,activityId:20,score:1})


  // Mix Activities LIKE BDFH HATE ACEG
  // Like
  newUserActivities.push({userId:81,activityId:5,score:5})
  newUserActivities.push({userId:81,activityId:6,score:5})
  newUserActivities.push({userId:81,activityId:2,score:5})
  newUserActivities.push({userId:81,activityId:32,score:5})
  newUserActivities.push({userId:81,activityId:33,score:4})
  newUserActivities.push({userId:81,activityId:20,score:5})
  newUserActivities.push({userId:81,activityId:49,score:4})
  // Hate
  newUserActivities.push({userId:81,activityId:17,score:1})
  newUserActivities.push({userId:81,activityId:4,score:2})
  newUserActivities.push({userId:81,activityId:12,score:1})
  newUserActivities.push({userId:81,activityId:37,score:2})
  newUserActivities.push({userId:81,activityId:14,score:1})
  newUserActivities.push({userId:81,activityId:23,score:2})
  newUserActivities.push({userId:81,activityId:36,score:1})
  newUserActivities.push({userId:81,activityId:45,score:2})



// 
// 
// 
// 
// 
// 
  //first 3 are in the A set of highlighted activities in document
  newUserActivities.push({userId:72,activityId:1,score:5})
  newUserActivities.push({userId:72,activityId:9,score:5})
  newUserActivities.push({userId:72,activityId:10,score:5})
  newUserActivities.push({userId:72,activityId:16,score:5})
  newUserActivities.push({userId:72,activityId:17,score:5})
  newUserActivities.push({userId:72,activityId:7,score:4})
  newUserActivities.push({userId:72,activityId:24,score:4})
  newUserActivities.push({userId:72,activityId:13,score:3})
  newUserActivities.push({userId:72,activityId:15,score:3})
  newUserActivities.push({userId:72,activityId:3,score:1})
  
  //Next two use B set from google doc
  newUserActivities.push({userId:73,activityId:3,score:5})
  newUserActivities.push({userId:73,activityId:5,score:5})
  newUserActivities.push({userId:73,activityId:6,score:5})
  newUserActivities.push({userId:73,activityId:7,score:4})
  newUserActivities.push({userId:73,activityId:8,score:4})
  newUserActivities.push({userId:73,activityId:12,score:4})
  newUserActivities.push({userId:73,activityId:14,score:4})
  newUserActivities.push({userId:73,activityId:4,score:3})
  newUserActivities.push({userId:73,activityId:11,score:2})
  newUserActivities.push({userId:73,activityId:1,score:1})
  
  // Next use C set which is short so mixes in B and G sets, 
  newUserActivities.push({userId:74,activityId:4,score:5})
  newUserActivities.push({userId:74,activityId:5,score:4})
  newUserActivities.push({userId:74,activityId:42,score:4})
  newUserActivities.push({userId:74,activityId:32,score:4})
  newUserActivities.push({userId:74,activityId:35,score:4})
  newUserActivities.push({userId:74,activityId:34,score:4})
  newUserActivities.push({userId:74,activityId:44,score:4})
  newUserActivities.push({userId:74,activityId:16,score:3})
  newUserActivities.push({userId:74,activityId:17,score:2})
  newUserActivities.push({userId:74,activityId:9,score:1})


  // D
  newUserActivities.push({userId:75,activityId:7,score:5})
  newUserActivities.push({userId:75,activityId:8,score:5})
  newUserActivities.push({userId:75,activityId:2,score:5})
  newUserActivities.push({userId:75,activityId:21,score:5})
  newUserActivities.push({userId:75,activityId:24,score:5})
  newUserActivities.push({userId:75,activityId:27,score:5})
  newUserActivities.push({userId:75,activityId:43,score:5})
  newUserActivities.push({userId:75,activityId:9,score:3})
  newUserActivities.push({userId:75,activityId:3,score:2})
  newUserActivities.push({userId:75,activityId:5,score:2})
  newUserActivities.push({userId:75,activityId:15,score:2})
  newUserActivities.push({userId:75,activityId:9,score:1})
// E
  newUserActivities.push({userId:76,activityId:11,score:5})
  newUserActivities.push({userId:76,activityId:12,score:5})
  newUserActivities.push({userId:76,activityId:37,score:5})
  newUserActivities.push({userId:76,activityId:41,score:4})
  newUserActivities.push({userId:76,activityId:13,score:4})
  newUserActivities.push({userId:76,activityId:18,score:4})
  newUserActivities.push({userId:76,activityId:15,score:4})
  newUserActivities.push({userId:76,activityId:20,score:3})
  newUserActivities.push({userId:76,activityId:17,score:2})
  newUserActivities.push({userId:76,activityId:9,score:1})
  //F 
  newUserActivities.push({userId:77,activityId:13,score:5})
  newUserActivities.push({userId:77,activityId:18,score:5})
  newUserActivities.push({userId:77,activityId:32,score:5})
  newUserActivities.push({userId:77,activityId:33,score:4})
  newUserActivities.push({userId:77,activityId:40,score:4})
  newUserActivities.push({userId:77,activityId:48,score:4})
  newUserActivities.push({userId:77,activityId:50,score:4})
  newUserActivities.push({userId:77,activityId:22,score:3})
  newUserActivities.push({userId:77,activityId:27,score:2})
  newUserActivities.push({userId:77,activityId:4,score:1})
  //G
  newUserActivities.push({userId:78,activityId:14,score:5})
  newUserActivities.push({userId:78,activityId:19,score:5})
  newUserActivities.push({userId:78,activityId:23,score:5})
  newUserActivities.push({userId:78,activityId:26,score:4})
  newUserActivities.push({userId:78,activityId:29,score:5})
  newUserActivities.push({userId:78,activityId:31,score:4})
  newUserActivities.push({userId:78,activityId:36,score:5})
  newUserActivities.push({userId:78,activityId:42,score:5})
  newUserActivities.push({userId:78,activityId:6,score:2})
  newUserActivities.push({userId:78,activityId:18,score:1})
// H 
  newUserActivities.push({userId:79,activityId:15,score:5})
  newUserActivities.push({userId:79,activityId:20,score:5})
  newUserActivities.push({userId:79,activityId:22,score:5})
  newUserActivities.push({userId:79,activityId:34,score:5})
  newUserActivities.push({userId:79,activityId:44,score:5})
  newUserActivities.push({userId:79,activityId:46,score:5})
  newUserActivities.push({userId:79,activityId:49,score:5})
  newUserActivities.push({userId:79,activityId:42,score:5})
  newUserActivities.push({userId:79,activityId:2,score:2})
  newUserActivities.push({userId:79,activityId:41,score:1})

  // Mix Activities LIKE ACEG  HATE BDFH
  // Like
  newUserActivities.push({userId:80,activityId:1,score:5})
  newUserActivities.push({userId:80,activityId:4,score:4})
  newUserActivities.push({userId:80,activityId:11,score:5})
  newUserActivities.push({userId:80,activityId:12,score:4})
  newUserActivities.push({userId:80,activityId:14,score:5})
  newUserActivities.push({userId:80,activityId:29,score:5})
  // Hate
  newUserActivities.push({userId:80,activityId:3,score:1})
  newUserActivities.push({userId:80,activityId:6,score:2})
  newUserActivities.push({userId:80,activityId:7,score:2})
  newUserActivities.push({userId:80,activityId:13,score:1})
  newUserActivities.push({userId:80,activityId:32,score:1})
  newUserActivities.push({userId:80,activityId:50,score:1})
  newUserActivities.push({userId:80,activityId:44,score:3})
  newUserActivities.push({userId:80,activityId:20,score:1})


  // Mix Activities LIKE BDFH HATE ACEG
  // Like
  newUserActivities.push({userId:81,activityId:5,score:5})
  newUserActivities.push({userId:81,activityId:6,score:5})
  newUserActivities.push({userId:81,activityId:2,score:5})
  newUserActivities.push({userId:81,activityId:32,score:4})
  newUserActivities.push({userId:81,activityId:33,score:4})
  newUserActivities.push({userId:81,activityId:20,score:5})
  newUserActivities.push({userId:81,activityId:49,score:4})
  // Hate
  newUserActivities.push({userId:81,activityId:17,score:1})
  newUserActivities.push({userId:81,activityId:4,score:2})
  newUserActivities.push({userId:81,activityId:12,score:1})
  newUserActivities.push({userId:81,activityId:37,score:2})
  newUserActivities.push({userId:81,activityId:14,score:1})
  newUserActivities.push({userId:81,activityId:23,score:2})
  newUserActivities.push({userId:81,activityId:36,score:1})
  newUserActivities.push({userId:81,activityId:45,score:2})



// 
// 
// 
// 
// 
// 
  //first 3 are in the A set of highlighted activities in document
  newUserActivities.push({userId:82,activityId:1,score:5})
  newUserActivities.push({userId:82,activityId:9,score:5})
  newUserActivities.push({userId:82,activityId:10,score:5})
  newUserActivities.push({userId:82,activityId:16,score:5})
  newUserActivities.push({userId:82,activityId:17,score:5})
  newUserActivities.push({userId:82,activityId:7,score:4})
  newUserActivities.push({userId:82,activityId:24,score:4})
  newUserActivities.push({userId:82,activityId:13,score:3})
  newUserActivities.push({userId:82,activityId:15,score:3})
  newUserActivities.push({userId:82,activityId:3,score:1})
  
  //Next two use B set from google doc
  newUserActivities.push({userId:83,activityId:3,score:5})
  newUserActivities.push({userId:83,activityId:5,score:5})
  newUserActivities.push({userId:83,activityId:6,score:5})
  newUserActivities.push({userId:83,activityId:7,score:4})
  newUserActivities.push({userId:83,activityId:8,score:4})
  newUserActivities.push({userId:83,activityId:12,score:4})
  newUserActivities.push({userId:83,activityId:14,score:4})
  newUserActivities.push({userId:83,activityId:4,score:3})
  newUserActivities.push({userId:83,activityId:11,score:2})
  newUserActivities.push({userId:83,activityId:1,score:1})
  
  // Next use C set which is short so mixes in B and G sets, 
  newUserActivities.push({userId:84,activityId:4,score:5})
  newUserActivities.push({userId:84,activityId:11,score:3})
  newUserActivities.push({userId:84,activityId:41,score:5})
  newUserActivities.push({userId:84,activityId:35,score:4})
  newUserActivities.push({userId:84,activityId:34,score:4})
  newUserActivities.push({userId:84,activityId:44,score:4})
  newUserActivities.push({userId:84,activityId:16,score:3})
  newUserActivities.push({userId:84,activityId:17,score:2})
  newUserActivities.push({userId:84,activityId:9,score:1})


  // D
  newUserActivities.push({userId:85,activityId:7,score:5})
  newUserActivities.push({userId:85,activityId:8,score:5})
  newUserActivities.push({userId:85,activityId:2,score:5})
  newUserActivities.push({userId:85,activityId:21,score:5})
  newUserActivities.push({userId:85,activityId:24,score:5})
  newUserActivities.push({userId:85,activityId:27,score:5})
  newUserActivities.push({userId:85,activityId:43,score:5})
  newUserActivities.push({userId:85,activityId:9,score:3})
  newUserActivities.push({userId:85,activityId:3,score:2})
  newUserActivities.push({userId:85,activityId:5,score:2})
  newUserActivities.push({userId:85,activityId:15,score:2})
  newUserActivities.push({userId:85,activityId:9,score:1})
// E
  newUserActivities.push({userId:86,activityId:11,score:5})
  newUserActivities.push({userId:86,activityId:12,score:5})
  newUserActivities.push({userId:86,activityId:37,score:5})
  newUserActivities.push({userId:86,activityId:41,score:4})
  newUserActivities.push({userId:86,activityId:13,score:4})
  newUserActivities.push({userId:86,activityId:18,score:4})
  newUserActivities.push({userId:86,activityId:15,score:4})
  newUserActivities.push({userId:86,activityId:20,score:3})
  newUserActivities.push({userId:86,activityId:17,score:2})
  newUserActivities.push({userId:86,activityId:9,score:1})
  //F 
  newUserActivities.push({userId:87,activityId:13,score:5})
  newUserActivities.push({userId:87,activityId:18,score:5})
  newUserActivities.push({userId:87,activityId:32,score:5})
  newUserActivities.push({userId:87,activityId:33,score:4})
  newUserActivities.push({userId:87,activityId:40,score:4})
  newUserActivities.push({userId:87,activityId:48,score:4})
  newUserActivities.push({userId:87,activityId:50,score:4})
  newUserActivities.push({userId:87,activityId:22,score:3})
  newUserActivities.push({userId:87,activityId:27,score:2})
  newUserActivities.push({userId:87,activityId:4,score:1})
  //G
  newUserActivities.push({userId:88,activityId:14,score:5})
  newUserActivities.push({userId:88,activityId:19,score:5})
  newUserActivities.push({userId:88,activityId:23,score:5})
  newUserActivities.push({userId:88,activityId:26,score:5})
  newUserActivities.push({userId:88,activityId:29,score:5})
  newUserActivities.push({userId:88,activityId:31,score:5})
  newUserActivities.push({userId:88,activityId:36,score:5})
  newUserActivities.push({userId:88,activityId:42,score:5})
  newUserActivities.push({userId:88,activityId:6,score:2})
  newUserActivities.push({userId:88,activityId:18,score:1})
// H 
  newUserActivities.push({userId:89,activityId:15,score:5})
  newUserActivities.push({userId:89,activityId:20,score:5})
  newUserActivities.push({userId:89,activityId:22,score:5})
  newUserActivities.push({userId:89,activityId:34,score:5})
  newUserActivities.push({userId:89,activityId:44,score:5})
  newUserActivities.push({userId:89,activityId:46,score:5})
  newUserActivities.push({userId:89,activityId:49,score:5})
  newUserActivities.push({userId:89,activityId:42,score:5})
  newUserActivities.push({userId:89,activityId:2,score:2})
  newUserActivities.push({userId:89,activityId:41,score:1})

  // Mix Activities LIKE ACEG  HATE BDFH
  // Like
  newUserActivities.push({userId:90,activityId:1,score:5})
  newUserActivities.push({userId:90,activityId:4,score:4})
  newUserActivities.push({userId:90,activityId:11,score:5})
  newUserActivities.push({userId:90,activityId:12,score:4})
  newUserActivities.push({userId:90,activityId:14,score:5})
  newUserActivities.push({userId:90,activityId:29,score:5})
  // Hate
  newUserActivities.push({userId:90,activityId:3,score:1})
  newUserActivities.push({userId:90,activityId:6,score:2})
  newUserActivities.push({userId:90,activityId:7,score:2})
  newUserActivities.push({userId:90,activityId:13,score:1})
  newUserActivities.push({userId:90,activityId:32,score:1})
  newUserActivities.push({userId:90,activityId:50,score:2})
  newUserActivities.push({userId:90,activityId:44,score:3})
  newUserActivities.push({userId:90,activityId:20,score:1})


  // Mix Activities LIKE BDFH HATE ACEG
  // Like
  newUserActivities.push({userId:91,activityId:5,score:5})
  newUserActivities.push({userId:91,activityId:6,score:5})
  newUserActivities.push({userId:91,activityId:2,score:5})
  newUserActivities.push({userId:91,activityId:32,score:5})
  newUserActivities.push({userId:91,activityId:33,score:4})
  newUserActivities.push({userId:91,activityId:20,score:5})
  newUserActivities.push({userId:91,activityId:49,score:4})
  // Hate
  newUserActivities.push({userId:91,activityId:17,score:1})
  newUserActivities.push({userId:91,activityId:4,score:2})
  newUserActivities.push({userId:91,activityId:12,score:1})
  newUserActivities.push({userId:91,activityId:37,score:2})
  newUserActivities.push({userId:91,activityId:14,score:1})
  newUserActivities.push({userId:91,activityId:23,score:2})
  newUserActivities.push({userId:91,activityId:36,score:1})
  newUserActivities.push({userId:91,activityId:45,score:2})



// 
// 
// 
// 
// 
// 
  //first 3 are in the A set of highlighted activities in document
  newUserActivities.push({userId:92,activityId:1,score:5})
  newUserActivities.push({userId:92,activityId:9,score:5})
  newUserActivities.push({userId:92,activityId:10,score:5})
  newUserActivities.push({userId:92,activityId:16,score:5})
  newUserActivities.push({userId:92,activityId:17,score:5})
  newUserActivities.push({userId:92,activityId:7,score:4})
  newUserActivities.push({userId:92,activityId:24,score:4})
  newUserActivities.push({userId:92,activityId:13,score:3})
  newUserActivities.push({userId:92,activityId:15,score:3})
  newUserActivities.push({userId:92,activityId:3,score:1})
  
  //Next two use B set from google doc
  // newUserActivities.push({userId:93,activityId:3,score:5})
  // newUserActivities.push({userId:93,activityId:5,score:5})
  // newUserActivities.push({userId:93,activityId:6,score:5})
  // newUserActivities.push({userId:93,activityId:7,score:4})
  // newUserActivities.push({userId:93,activityId:8,score:4})
  // newUserActivities.push({userId:93,activityId:12,score:4})
  // newUserActivities.push({userId:93,activityId:14,score:4})
  // newUserActivities.push({userId:93,activityId:4,score:3})
  // newUserActivities.push({userId:93,activityId:11,score:2})
  // newUserActivities.push({userId:93,activityId:1,score:1})
  
  // Next use C set which is short so mixes in B and G sets, 
  // newUserActivities.push({userId:94,activityId:4,score:5})
  // newUserActivities.push({userId:94,activityId:3,score:5})
  // newUserActivities.push({userId:94,activityId:5,score:5})
  // newUserActivities.push({userId:94,activityId:32,score:4})
  // newUserActivities.push({userId:94,activityId:35,score:4})
  // newUserActivities.push({userId:94,activityId:34,score:4})
  // newUserActivities.push({userId:94,activityId:44,score:4})
  // newUserActivities.push({userId:94,activityId:16,score:3})
  // newUserActivities.push({userId:94,activityId:17,score:2})
  // newUserActivities.push({userId:94,activityId:9,score:1})


  // // D
  // newUserActivities.push({userId:95,activityId:7,score:5})
  // newUserActivities.push({userId:95,activityId:8,score:5})
  // newUserActivities.push({userId:95,activityId:2,score:5})
  // newUserActivities.push({userId:95,activityId:21,score:5})
  // newUserActivities.push({userId:95,activityId:24,score:5})
  // newUserActivities.push({userId:95,activityId:27,score:5})
  // newUserActivities.push({userId:95,activityId:43,score:5})
  // newUserActivities.push({userId:95,activityId:9,score:3})
  // newUserActivities.push({userId:95,activityId:3,score:2})
  // newUserActivities.push({userId:95,activityId:5,score:2})
  // newUserActivities.push({userId:95,activityId:15,score:2})
  // newUserActivities.push({userId:95,activityId:9,score:1})
// E
  // newUserActivities.push({userId:96,activityId:11,score:5})
  // newUserActivities.push({userId:96,activityId:12,score:5})
  // newUserActivities.push({userId:96,activityId:37,score:5})
  // newUserActivities.push({userId:96,activityId:41,score:4})
  // newUserActivities.push({userId:96,activityId:13,score:4})
  // newUserActivities.push({userId:96,activityId:18,score:4})
  // newUserActivities.push({userId:96,activityId:15,score:4})
  // newUserActivities.push({userId:96,activityId:20,score:3})
  // newUserActivities.push({userId:96,activityId:17,score:2})
  // newUserActivities.push({userId:96,activityId:9,score:1})
  //F 
  // newUserActivities.push({userId:97,activityId:13,score:5})
  // newUserActivities.push({userId:97,activityId:18,score:5})
  // newUserActivities.push({userId:97,activityId:32,score:5})
  // newUserActivities.push({userId:97,activityId:33,score:4})
  // newUserActivities.push({userId:97,activityId:40,score:4})
  // newUserActivities.push({userId:97,activityId:48,score:4})
  // newUserActivities.push({userId:97,activityId:50,score:4})
  // newUserActivities.push({userId:97,activityId:22,score:3})
  // newUserActivities.push({userId:97,activityId:27,score:2})
  // newUserActivities.push({userId:97,activityId:4,score:1})
  //G
  // newUserActivities.push({userId:98,activityId:14,score:5})
  // newUserActivities.push({userId:98,activityId:19,score:5})
  // newUserActivities.push({userId:98,activityId:23,score:5})
  // newUserActivities.push({userId:98,activityId:26,score:5})
  // newUserActivities.push({userId:98,activityId:29,score:5})
  // newUserActivities.push({userId:98,activityId:31,score:5})
  // newUserActivities.push({userId:98,activityId:36,score:5})
  // newUserActivities.push({userId:98,activityId:42,score:5})
  // newUserActivities.push({userId:98,activityId:6,score:2})
  // newUserActivities.push({userId:98,activityId:18,score:1})
// H 
  // newUserActivities.push({userId:99,activityId:15,score:5})
  // newUserActivities.push({userId:99,activityId:20,score:5})
  // newUserActivities.push({userId:99,activityId:22,score:5})
  // newUserActivities.push({userId:99,activityId:34,score:5})
  // newUserActivities.push({userId:99,activityId:44,score:5})
  // newUserActivities.push({userId:99,activityId:46,score:5})
  // newUserActivities.push({userId:99,activityId:49,score:5})
  // newUserActivities.push({userId:99,activityId:42,score:5})
  // newUserActivities.push({userId:99,activityId:2,score:2})
  // newUserActivities.push({userId:99,activityId:41,score:1})

//MAKING A USER HATE THE ACTIVITIES I'M NOT USING
newUserActivities.push({userId:93,activityId:25,score:1})
newUserActivities.push({userId:93,activityId:28,score:1})
newUserActivities.push({userId:93,activityId:30,score:1})
newUserActivities.push({userId:93,activityId:35,score:1})
newUserActivities.push({userId:93,activityId:38,score:1})
newUserActivities.push({userId:93,activityId:39,score:1})
newUserActivities.push({userId:93,activityId:47,score:1})
newUserActivities.push({userId:93,activityId:1,score:5})

//MAKING A USER HATE THE ACTIVITIES I'M NOT USING
newUserActivities.push({userId:94,activityId:25,score:1})
newUserActivities.push({userId:94,activityId:28,score:1})
newUserActivities.push({userId:94,activityId:30,score:1})
newUserActivities.push({userId:94,activityId:35,score:1})
newUserActivities.push({userId:94,activityId:38,score:1})
newUserActivities.push({userId:94,activityId:39,score:1})
newUserActivities.push({userId:94,activityId:47,score:1})
newUserActivities.push({userId:94,activityId:3,score:5})
newUserActivities.push({userId:94,activityId:7,score:5})
newUserActivities.push({userId:94,activityId:32,score:2})

  //MAKING A USER HATE THE ACTIVITIES I'M NOT USING
  newUserActivities.push({userId:95,activityId:25,score:1})
  newUserActivities.push({userId:95,activityId:28,score:1})
  newUserActivities.push({userId:95,activityId:30,score:1})
  newUserActivities.push({userId:95,activityId:35,score:1})
  newUserActivities.push({userId:95,activityId:38,score:1})
  newUserActivities.push({userId:95,activityId:39,score:1})
  newUserActivities.push({userId:95,activityId:47,score:1})
  newUserActivities.push({userId:95,activityId:4,score:5})

//MAKING A USER HATE THE ACTIVITIES I'M NOT USING
newUserActivities.push({userId:96,activityId:25,score:1})
newUserActivities.push({userId:96,activityId:28,score:1})
newUserActivities.push({userId:96,activityId:30,score:1})
newUserActivities.push({userId:96,activityId:35,score:1})
newUserActivities.push({userId:96,activityId:38,score:1})
newUserActivities.push({userId:96,activityId:39,score:1})
newUserActivities.push({userId:96,activityId:47,score:1})
newUserActivities.push({userId:96,activityId:7,score:5})
newUserActivities.push({userId:96,activityId:20,score:4})
newUserActivities.push({userId:95,activityId:32,score:2})

//MAKING A USER HATE THE ACTIVITIES I'M NOT USING
  newUserActivities.push({userId:97,activityId:25,score:1})
  newUserActivities.push({userId:97,activityId:28,score:1})
  newUserActivities.push({userId:97,activityId:30,score:1})
  newUserActivities.push({userId:97,activityId:35,score:1})
  newUserActivities.push({userId:97,activityId:38,score:1})
  newUserActivities.push({userId:97,activityId:39,score:1})
  newUserActivities.push({userId:97,activityId:47,score:1})
  newUserActivities.push({userId:97,activityId:11,score:5})
  //MAKING A USER HATE THE ACTIVITIES I'M NOT USING
    newUserActivities.push({userId:98,activityId:25,score:1})
    newUserActivities.push({userId:98,activityId:28,score:1})
    newUserActivities.push({userId:98,activityId:30,score:1})
    newUserActivities.push({userId:98,activityId:35,score:1})
    newUserActivities.push({userId:98,activityId:38,score:1})
    newUserActivities.push({userId:98,activityId:39,score:1})
    newUserActivities.push({userId:98,activityId:13,score:5})
    newUserActivities.push({userId:98,activityId:32,score:1})
    newUserActivities.push({userId:98,activityId:40,score:2})


//MAKING A USER HATE THE ACTIVITIES I'M NOT USING
newUserActivities.push({userId:99,activityId:25,score:1})
newUserActivities.push({userId:99,activityId:28,score:1})
newUserActivities.push({userId:99,activityId:30,score:1})
newUserActivities.push({userId:99,activityId:35,score:1})
newUserActivities.push({userId:99,activityId:38,score:1})
newUserActivities.push({userId:99,activityId:39,score:1})
newUserActivities.push({userId:99,activityId:14,score:5})

//MAKING A USER HATE THE ACTIVITIES I'M NOT USING
  newUserActivities.push({userId:100,activityId:25,score:1})
  newUserActivities.push({userId:100,activityId:28,score:1})
  newUserActivities.push({userId:100,activityId:30,score:1})
  newUserActivities.push({userId:100,activityId:35,score:1})
  newUserActivities.push({userId:100,activityId:38,score:1})
  newUserActivities.push({userId:100,activityId:39,score:1})
  newUserActivities.push({userId:100,activityId:15,score:5})


  return newUserActivities
}


const createdUserActivities = create()
module.exports = createdUserActivities

