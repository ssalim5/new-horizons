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

//GET: read all chats (logged in)
router.get("/", async (req, res, next) => {
    try {
      const {id} = await User.findByToken(req.headers.authorization)
      const {chats} = await User.findByPk(id,{
        include:[
            {model:Chat,required:false,
            include:[{
                model:Message,
                include:[{model:User,attributes:['username','imageUrl']}],
                order: [['id', 'ASC']]
            },
            {model:User,attributes:['username']}
            ],
            },
        ]
        })
        console.log(chats[0].messages)
      res.json(chats)
    } catch (err) {
      next(err);
    }
  });
  //yet to be used
  router.get("/:chatId", async (req, res, next) => {
    try {
      const {id} = await User.findByToken(req.headers.authorization)
      const chat = await Chat.findByPk(req.params.chatId,{
            include:[{
                model:Message,
                include:[{model:User,attributes:['username','imageUrl']},],
                order: [['createdAt', 'ASC']]
            }],
            })
            console.log(chat)
      res.json(chat)
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async (req,res,next)=>{
    try {
      const user = await User.findByToken(req.headers.authorization)
      let newChat = await Chat.create(user)
      newChat.addUser(user)
      res.json(newChat)
    } catch (error) {
      next(error);
    }
  })

  router.put("/user", async (req,res,next)=>{ //Add user to chat
    try {
      console.log(req.body)
      let chat = await Chat.findByPk(req.body.chat.id)
      let user = await User.findByPk(req.body.user.id)
      await chat.addUser(user)
      res.json(chat)
    } catch (error) {
      next(error);
    }
  })

  router.post("/message", async (req,res,next)=>{ //Add user to chat
    try {
      const {id} = await User.findByToken(req.headers.authorization)
      let message = await Message.create({...req.body.message,userId:id})
      res.json(message)
    } catch (error) {
      next(error);
    }
  })

  // router.post("/", async (req,res,next)=>{
  //   try {
      
  //   } catch (error) {
      
  //   }
  // })