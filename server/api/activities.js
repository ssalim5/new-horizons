const router = require("express").Router();
const { re } = require("mathjs");
const {models: { Activity,User,UserActivities, ActivityCategory }} = require("../db");
module.exports = router;

const requireToken = async (req, res, next) => {
  try {
    const userData = await User.findByToken(req.headers.authorization);
    req.user = userData;
    next();
  } catch (error) {
    next(error);
  }
};

//GET: read all activities (logged in)
router.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    const activity= await Activity.findAll({
      include:{
        model:UserActivities,
        where:{
          userId:user.id
        },
        attributes:['score','updatedAt', 'activityId'],
        required: false
      }

    });
    console.log("ACTIV", activity)
    res.json(activity)
  } catch (err) {
    next(err);
  }
});

//GET: all activities for a single user
router.get("/users", async (req,res,next)=> {
  console.log("START")
  try{
    const user = await User.findByToken(req.headers.authorization)
    const activity= await Activity.findAll({
      include:{
        model:UserActivities,
        where:{
          userId:user.id
        },
        attributes:['userId','score','updatedAt'],
      },
    });
    res.json(activity)
  } catch (err) {
    next(err)
  }
})

//GET: read a single activity - find by activity.Id (logged in)
router.get("/:id",async (req,res,next)=>{
  try{
    const user = await User.findByToken(req.headers.authorization)
    const activity = await Activity.findByPk(req.params.id,{
      include:{
        model:UserActivities,
        where:{
          userId:user.id
        },
        //attributes:['score','updatedAt'],
        required: false
      }
    })
    res.status(201).send(activity)
    //res.json(activity)
  } catch (error) {
    next(error)
  }
})

//POST: post an activity to useractivities table - return that activity from the activities table with user useractivities info
router.post("/useractivity", async (req, res, next) => {
  try {
      const user = await User.findByToken(req.headers.authorization)
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
          const activity = await Activity.findByPk(req.body.activityId,{
            include:{
              model:UserActivities,
              where:{
                userId:user.id
              },
              //attributes:['score','updatedAt'],
              required: false
            }
          })
          res.status(201).send(activity)
      }
  } catch (error) {
      next(error);
  }
});

router.put("/useractivity", async (req,res,next)=>{
  try{
    const user = await User.findByToken(req.headers.authorization)

    await UserActivities.update({
      score: req.body.score
    },{
      where:{
        userId: user.id,
        activityId: req.body.activityId
      }
    })
    const activity = await Activity.findByPk(req.body.activityId,{
      include:{
        model:UserActivities,
        where:{
          userId:user.id
        },
        //attributes:['score','updatedAt'],
        required: false
      }
    })
    res.status(201).send(activity)
  } catch(error) {

  }
})

//POST: create a new activity (need to be admin?)
router.post("/", requireToken, async (req, res, next) => {
  try {
    if (req.user.dataValues.admin) {
      res.status(201).send(await Activity.create(req.body));
    } else {
      return res.status(403).send("You shall not pass!");
    }
  } catch (error) {
    next(error);
  }
});

router.put("/update/:id", requireToken, async (req, res, next) => {
  try {
    if (req.user.dataValues.admin) {
      await Activity.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.sendStatus(200);
    } else {
      return res.status(403).send("You shall not pass!");
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", requireToken, async (req, res, next) => {
  try {
    if (req.user.dataValues.admin) {
      const activity = await Activity.findByPk(req.params.id);
      res.send(await activity.update(req.body));
    } else {
      return res.status(403).send("You shall not pass!");
    }
  } catch (error) {
    next(error);
  }
});


router.delete("/:id",requireToken, async (req, res, next) => {
  try {
    if (req.user.dataValues.admin) {
      const activity = await Activity.findByPk(req.params.id);
      await activity.destroy();
      res.send(activity);
    } else {
      return res.status(403).send("You shall not pass!");
    }
  } catch (error) {
    next(error);
  }
});
