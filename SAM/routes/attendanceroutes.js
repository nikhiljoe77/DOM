const express=require('express')
const attendancecontrollers = require('../controllers/attendancecontrollers')
router=express.Router()

router.get(`/report`,attendancecontrollers.getreport)
router.get('/:date',attendancecontrollers.getbydate)
router.get('/',attendancecontrollers.get)
router.post('/',attendancecontrollers.add)


module.exports=router