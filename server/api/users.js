const router = require('express').Router()
const { models: { User, Activity }} = require('../db')
module.exports = router

//GET: read all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email', 'imageUrl']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//GET: read users activities
router.get("/activities/:userId", async (req,res,next) => {
  try{
    console.log(req.params.userId)
    const userActivities = await User.findByPk(
      req.params.userId,
      {include:Activity}
      )
    res.send(userActivities.activities)
  }
  catch(error){
    next(error)
  }
})

//POST: create a user
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await User.create(req.body));
  } catch (error) {
    next(error);
  }
});

//DELETE: delete a user
router.delete("/:id", async (req,res,next) => {
  try{
    const user = await User.findByPk(req.params.id)
    await user.destroy()
    res.send(user)
  } catch (error) {
    next(error)
  }
})

//PUT: update a user
router.put("/:id", async (req,res,next) => {
  try{
    const user = await User.findByPk(req.params.id)
    res.send(await user.update(req.body))
  }
  catch(error){
    next(error)
  }
})