const express=require('express');
const { verify } = require('jsonwebtoken');
const { getAllTeachers, createTeacher, getTeacher, updateTeacher, deleteTeacher, allow, setRole } = require('../controllers/adminController');
const { verifyToken } = require('../controllers/authController');
const router = express.Router()


router.route('/').get(verifyToken,allow('admin'),getAllTeachers).post(allow('admin'),setRole('teacher'),createTeacher);
router.route('/:id').get(getTeacher).patch(updateTeacher).delete(deleteTeacher);


module.exports = router
