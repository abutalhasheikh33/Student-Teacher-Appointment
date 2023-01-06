const express=require('express');
const { getAllTeachers, createTeacher, getTeacher, updateTeacher, deleteTeacher } = require('../controllers/adminController');
const router = express.Router()


router.route('/').get(getAllTeachers).post(createTeacher);
router.route('/:id').get(getTeacher).patch(updateTeacher).delete(deleteTeacher);


module.exports=router
