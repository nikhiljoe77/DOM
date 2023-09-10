const path=require("path")
const express=require("express")
const router=express.Router()
const productsController=require('../controllers/products')


module.exports=router
router.get('/contactus',productsController.contactProduct)
router.post('/contactus',productsController.successProduct)
router.get('/success',productsController.successstartProduct );
