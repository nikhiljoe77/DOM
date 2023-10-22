const path=require("path")
const Attendanceuser = require('../models/attendancemodels')

/*exports.delete=(req,res,next)=>{
    Attendanceuser.findByPk(req.params.id)
    .then(attendanceuser=>{
        return attendanceuser.destroy()
    }).then(result=>{
        console.log('Destroyed expense')
        res.json(result)
    })
    .catch(err=>console.log(err))
}

exports.edit=(req,res,next)=>{
    const id=req.params.id
    const uexpense=req.params.expense
    const udescription=req.params.description
    Attendanceuser.findByPk(id)
    .then(attendanceuser=>{
        attendanceuser.expense=uexpense,
        attendanceuser.description=udescription
    }).then(result=>{
        console.log('updated expense')
        res.json(result)
    })
    .catch(err=>console.log(err))
}*/
exports.summary = (req, res, next) => {
    console.log("I am getting summary");
    Attendanceuser.findAll()
    .then(() => {
        res.sendFile(path.join(__dirname, '..', 'public', 'attsummary.html'));
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'An error occurred while fetching summary for the day' });
        });
};



exports.get = (req, res, next) => {
    console.log("I am getting");
    Attendanceuser.findAll()
    .then(() => {
        res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'An error occurred while fetching details for the day' });
        });
};
