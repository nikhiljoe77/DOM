const path=require('path')
const http = require('http');
const express=require("express")
const router=express.Router()
const bodyParser=require('body-parser')
const app=express()
const adminRoutes=require('./routes/admin.JS')
const shopRoutes=require('./routes/shop.JS')
const contactRoutes=require('./routes/contact.JS')

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(contactRoutes)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))

})




app.listen(4000)
