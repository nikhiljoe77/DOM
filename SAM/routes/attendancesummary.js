const express=require('express')
const attendancecontrollers = require('../controllers/attendancesummarycontrollers')
router=express.Router()


console.log("hi routes for student data")
router.get('/',attendancecontrollers.get)
router.post('/',attendancecontrollers.add)


//router.delete('/:id',attendancecontrollers.delete)
//router.put('/:id',attendancecontrollers.edit)


module.exports=router