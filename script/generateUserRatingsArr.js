const { user } = require('pg/lib/defaults')
const { models: { UserActivities, User, Activity }} = require('../server/db')

async function generateUserRatingsArr(){
    //get the userActivties, a count of all users, and a count of all activities from db
    const useAct = await UserActivities.findAll()
    const userCount = await User.count()
    const activityCount = await Activity.count()

    //build a matrix the length of userCount and the width of activityCount (fill with -1)
    let arr = Array(userCount).fill(-1).map(()=>Array(activityCount).fill(-1))


    //go through useAct and place scores in the corresponding spots in arr matrix
    useAct.forEach((elem)=>{
        arr[elem.userId-1][elem.activityId-1]=elem.score
    })

   
    //module.exports = arr
    return arr
}

const userRatingArr = generateUserRatingsArr()
//console.log(userRatingArr)
//console.log(generateUserRatingsArr())
module.exports = generateUserRatingsArr
generateUserRatingsArr()

