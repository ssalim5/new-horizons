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
