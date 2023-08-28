const http = require('http');
const express=require("express")
const router=express.Router()
const bodyParser=require('body-parser')
const app=express()
const adminRoutes=require('./routes/admin.JS')
const shopRoutes=require('./routes/shop.JS')

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')

})




app.listen(4000)
