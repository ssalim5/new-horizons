const router = require('express').Router()
const { models: { UserCategories }} = require('../db')
module.exports = router

//POST: add a new category to usercategories for user
router.post("/", async (req, res, next) => {
    try {
        if(await UserCategories.findOne({
            where:{
                userId:req.body.userId,
                categoryId: req.body.categoryId
            }
        })){
            return res.status(403).send("this user/activity already exists")
        }else{
            res.status(201).send(await UserCategories.create(req.body));
        }
    } catch (error) {
        next(error);
    }
});

//DELETE: delete a usercategory record
router.delete("/:id", async (req,res,next) => {
    try{
        const useCat = await UserCategories.findByPk(req.params.id)
        await useCat.destroy()
        res.send(useCat)
      } catch (error) {
        next(error)
      }
})

//PUT: update a usercategory record
router.put("/:id", async (req,res,next) => {
    try{
        const useCat = await UserCategories.findByPk(req.params.id)
        res.send(await useCat.update(req.body))
      }
      catch(error){
        next(error)
      }
})