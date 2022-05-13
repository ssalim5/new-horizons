const router = require("express").Router();
const {models: { Activity,User,UserActivities }} = require("../db");
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

//GET: read all activities (logged out)
router.get("/", async (req, res, next) => {
  try {
    const activity= await Activity.findAll();
    res.json(activity);
  } catch (err) {
    next(err);
  }
});

//GET: read all activities (logged in)
router.get("/user", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    const activity= await Activity.findAll({
      include:{
        model:UserActivities,
        where:{
          userId:user.id
        },
        attributes:['score','updatedAt'],
        required: false
      }
    });
    res.json(activity)
  } catch (err) {
    next(err);
  }
});

//GET: read a single activity - find by activity.Id (logged out)
router.get("/:id", async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id);
    res.json(activity);
  } catch (err) {
    next(err);
  }
});

//GET: read a single activity - find by activity.Id (logged in)
router.get("/user/:id",async (req,res,next)=>{
  try{
    const user = await User.findByToken(req.headers.authorization)
    const activity = await Activity.findByPk(req.params.id,{
      include:{
        model:UserActivities,
        where:{
          userId:user.id
        },
        attributes:['score','updatedAt'],
        required: false
      }
    })
    res.json(activity)
  } catch (error) {
    next(error)
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
