const { setRole } = require("../controllers/adminController")
const { login, updatePassword, verifyToken } = require("../controllers/authController")
const express = require('express')
const { createAppointment } = require("../controllers/teacherController")
const router = express.Router()

router.post('/login',login)
router.patch('/updatePassword',verifyToken,updatePassword)
router.post('/schedule',createAppointment)


module.exports = router