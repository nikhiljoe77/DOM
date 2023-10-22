const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Attendanceuser = sequelize.define('attendanceuser', {
    date: {
        type: Sequelize.DATE,
        allownull: false,
        primaryKey: true

    },
    status1: {
        type: Sequelize.INTEGER,
        allownull: false,
    },
    status2: {
        type: Sequelize.STRING,
        allownull: false
    },
},
    {
        timestamps: false
    })
module.exports = Attendanceuser