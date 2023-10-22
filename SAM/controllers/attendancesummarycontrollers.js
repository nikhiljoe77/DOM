const path=require("path")
const Attendanceuser = require('../models/attendancemodels')
exports.add = (req, res, next) => {
    
    //res.send("hello" )
   console.log("adding")
    console.error(req.body, 'i m body')
    Attendanceuser.create({

        date: req.body.date,
        status1: req.body.status1,
        status2: req.body.status2
    })
        .then(result => {  
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })

}
exports.get = (req, res, next) => {
    console.log("I am getting summary data");
    Attendanceuser.findAll()
    .then(result => {
        res.json(result)
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'An error occurred while fetching summary for the day' });
        });
};