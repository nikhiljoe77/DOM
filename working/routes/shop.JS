
const express=require("express")
const router=express.Router()
module.exports=router
const productsController=require('../controllers/products')
router.get('/',productsController.getProduct)