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
