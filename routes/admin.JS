const express=require("express")
const router=express.Router()

module.exports=router
router.get('/add-product',(req,res,next)=>{
    
    res.send('<form action="/product"method="POST"><input type="text"name="title"><button type="submit">Add Product</button><label for="size">Product Size:</label> <input type="text" id="size" name="size"></form>')
  
})

router.use('/add-product',(req,res,next)=>{
    console.log(req.body)
res.redirect('/')
})