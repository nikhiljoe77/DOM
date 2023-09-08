const path=require("path")
const express=require("express")
const router=express.Router()


module.exports=router
router.get('/contactus',(req,res,next)=>{
    
    res.sendFile(path.join(__dirname, '..', 'views', 'contactus.html'))
  
})
router.post('/contactus',(req,res,next)=>{
    res.redirect('/success')
    })

router.get('/success', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'success.html'));
});
