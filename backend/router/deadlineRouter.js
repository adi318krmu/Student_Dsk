const express= require('express')
const router= express.Router()
const protect= require('../middleware/authMiddle')
const{createDeadline, getdeadLine}= require('../controller/deadlineController')

router.post('/createDeadline',protect, createDeadline)
router.get('/getDeadline', protect,getdeadLine)

module.exports=router