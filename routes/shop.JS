const express=require("express")
const router=express.Router()
module.exports=router
router.get('/',(req,res,next)=>{
    
    res.send('<h1>Hello from Express</h1>')
})