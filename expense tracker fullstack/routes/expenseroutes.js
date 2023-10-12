express=require('express')
const expensecontrollers = require('../controllers/expensecontrollers')
router=express.Router()

router.post('/',expensecontrollers.add)
router.delete('/:id',expensecontrollers.delete)
router.put('/:id',expensecontrollers.edit)
router.get('/',expensecontrollers.get)

module.exports=router