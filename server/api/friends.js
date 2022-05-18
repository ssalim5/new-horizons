const router = require('express').Router()
const { models: { Friend, User }} = require('../db')
module.exports = router

//POST: add a new Friend
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Friend.create(req.body));
  } catch (error) {
    next(error);
  }
});


//Get read all friends
router.get('/:id', async (req, res, next) => {
  try {
    const friends = await Friend.findAll({
      where: {
        userId: req.params.id
       },
  });
    res.json(friends)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const friend = await Friend.findByPk(req.params.id);
    await friend.destroy();
    res.send(friend);
  } catch (error) {
    next(error);
  }
});
