
const path=require("path")
exports.getAddProduct=(req,res,next)=>{
    
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
  
}
exports.postAddProduct=(req,res,next)=>{
    console.log(req.body)
res.redirect('/')
}
exports.getProduct=(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
}
exports.contactProduct=(req,res,next)=>{
    
    res.sendFile(path.join(__dirname, '..', 'views', 'contactus.html'))
  
}
exports.successProduct=(req,res,next)=>{
    res.redirect('/success')
    }
    exports.successstartProduct= (req, res, next) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'success.html'));
    }