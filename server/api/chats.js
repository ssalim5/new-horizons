const router = require("express").Router();
const {models: { Chat,User,UserChats,Message }} = require("../db");
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
      const {id} = await User.findByToken(req.headers.authorization)
      const {chats} = await User.findByPk(id,{
        include:[
            {model:Chat,required:false,
            include:[{
                model:Message
            }],
            }
        ]
        })
      res.json(chats)
    } catch (err) {
      next(err);
    }
  });
