const router = require('express').Router()
const { models: { UserActivities, User, Activity }} = require('../db')
module.exports = router

router.get("/", async (req,res,next)=>{
    const {id} = await jwt.verify(req.headers.authorization, process.env.JWT)
    const test = await User.findByPk(
        id,
        {include:{
            model: Activity,
            where: {
                id: req.body.activityId
            },
            // through: {attributes: ['score']}
        }
    })
    res.send(test.activities)
})
//POST: add a new activity to useractivities for user
router.post("/userActivity", async (req, res, next) => {
    try {
        //console.log("---HEADERS---",req.headers.authorization)
        const user = await User.findByToken(req.headers.authorization)
        console.log("---ID---",user.id)
        if(await UserActivities.findOne({
            where:{
                userId:user.id,
                activityId: req.body.activityId
            }
        })){
            return res.status(403).send("this user/activity already exists")
        }else{
            await UserActivities.create({
                userId:user.id,
                activityId: req.body.activityId,
                score: req.body.score
            });
            const createdUserActivity = await User.findByPk(
                user.id,
                {include:{
                    model: Activity,
                    where: {
                        id: req.body.activityId
                    },
                    // through: {attributes: ['score']}
                }
            })
            res.status(201).send(createdUserActivity.activities[0])
        }
    } catch (error) {
        next(error);
    }
});

//DELETE: delete a useractivity record
router.delete("/:id", async (req,res,next) => {
    try{
        const userAct = await UserActivities.findByPk(req.params.id)
        await userAct.destroy()
        res.send(userAct)
      } catch (error) {
        next(error)
      }
})

//PUT: update a useractivity record
router.put("/:id", async (req,res,next) => {
    try{
        const userAct = await UserActivities.findByPk(req.params.id)
        res.send(await userAct.update(req.body))
      }
      catch(error){
        next(error)
      }
})