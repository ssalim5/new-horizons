const router = require('express').Router()
const { models: { UserActivities }} = require('../db')
const jwt = require('jsonwebtoken')
module.exports = router

//POST: add a new activity to useractivities for user
router.post("/", async (req, res, next) => {
    try {
        const {id} = await jwt.verify(req.headers.authorization, process.env.JWT)
        if(await UserActivities.findOne({
            where:{
                userId:id,
                activityId: req.body.activityId
            }
        })){
            return res.status(403).send("this user/activity already exists")
        }else{
            res.status(201).send(await UserActivities.create({
                userId: id,
                activityId: req.body.activityId,
                score: req.body.score
            }));
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