
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



function create() {
  let newUserActivities = []
  const createUserActivities = () => {
    const userId = randomInt(1,100)
    const activityId = randomInt(1,50)
    const score = randomInt(-1,5)

    return newUserActivities.push({userId: userId, activityId: activityId, score: score})
  }
  for (var i = 0; i < 1000; i++) {
  createUserActivities()}
  return newUserActivities
}


const createdUserActivities = create()
module.exports = createdUserActivities

