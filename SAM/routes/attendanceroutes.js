const express=require('express')
const attendancecontrollers = require('../controllers/attendancecontrollers')
router=express.Router()


console.log("hi")
router.get('/summary',attendancecontrollers.summary)
router.get('/',attendancecontrollers.get)

//router.delete('/:id',attendancecontrollers.delete)
//router.put('/:id',attendancecontrollers.edit)


module.exports=router