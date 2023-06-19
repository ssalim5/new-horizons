const router = require('express').Router()
const { user } = require('pg/lib/defaults')
const { models: { User, Activity, Category }} = require('../db')
module.exports = router
const axios = require('axios')

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

router.get("/activities/rec",async(req,res,next)=>{
  try{
    let {id}= await User.findByToken(req.headers.authorization);
    // let data = require('../../calculated_tables/estimatedRatings.json')
    let {data} = await axios.get('/api/s3')
    let user_data = data[id-1]
    let allActivities = await Activity.findAll({order:[['id','ASC']]})
    const userActivities = await User.findByPk(
      id,
      {include:{
        model: Activity,
        through: {attributes: ['score']}
      }}
    )
    let indicesToSkip=userActivities.activities.map((element)=>{return element.id-1})
    let recommendedActivities = []
    for (let ind=0;ind<allActivities.length;ind++){
      if (!indicesToSkip.includes(ind)){
        recommendedActivities.push({...(allActivities[ind].dataValues),score:user_data[ind]})
      }
    }
    res.send(recommendedActivities)
  }
  catch(error){
    next(error)
  }
})

//GET: read single user
router.get('/:id', async (req, res, next) => {
  try {
    const singleUser = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'username', 'email', 'imageUrl'],
    });
    res.json(singleUser);
  } catch (err) {
    next(err)
  }
})


//GET: read users activities
router.get("/activities", async (req,res,next) => {
  try{
    const user = await User.findByToken(req.headers.authorization)
    const userActivities = await User.findByPk(
      user.id,
      {include:{
        model: Activity,
        through: {attributes: ['score']}
      }}
      )
    res.send(userActivities.activities)
  }
  catch(error){
    next(error)
  }
})
//GET: read users categories
router.get("/categories/:userId", async (req,res,next) => {
  try{
    console.log(req.params.userId)
    const userCategories = await User.findByPk(
      req.params.userId,
      {include:{
        model: Category,
        through: {attributes: ['score']}
      }}
      )
    res.send(userCategories.categories)
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
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'username', 'email', 'imageUrl'],
    });
    res.send(await user.update(req.body))
  }
  catch(error){
    next(error)
  }
})
