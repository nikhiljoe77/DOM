const path = require("path")
const Attendanceuser = require('../models/attendancemodels')



exports.get = (req, res, next) => {
    console.log("I am getting");
    Attendanceuser.findAll()
        .then(() => {
            res.sendFile(path.join(__dirname, '..', 'public', 'date.html'));
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'An error occurred while fetching details for the day' });
        });
}
exports.add = (req, res, next) => {

    
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
exports.getbydate = (req, res, next) => {
    console.log(req.params.date)
    Attendanceuser.findOne({
        where: {
            date: req.params.date
        }
    })
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => console.log(err))
}
exports.getreport = (req, res, next) => {
    console.log("last stroke")
    Attendanceuser.findAll()
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => console.log(err))
}