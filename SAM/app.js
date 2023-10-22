const express=require('express')
const path=require('path')
const attendanceroutes=require('./routes/attendanceroutes')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')));
app.use(attendanceroutes)

app.listen(4000,()=>{console.log("server is running")})