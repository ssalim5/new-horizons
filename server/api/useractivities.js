const router = require('express').Router()
const { models: { UserActivities }} = require('../db')
module.exports = router

router.get("/", async (req,res,next) => {
    try{
        const test= await UserActivities.findAll();
        res.json(test);
    }
    catch(error){
        next(error)
    }
})
//POST: add a new activity to useractivities for user
router.post("/", async (req, res, next) => {
    try {
        console.log(req.body)
        res.status(201).send(await UserActivities.create(req.body));
    } catch (error) {
        next(error);
    }
  });