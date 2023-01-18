const express = require('express');
const errorController = require('./controllers/errorController');
const app = express()
const adminRoutes = require('./routes/adminRoutes')
const teacherRoutes = require('./routes/teacherRoutes')
const studentRoutes = require('./routes/studentRoutes')

app.use(express.json())
app.use('/api/v1/admin',adminRoutes)
app.use('/api/v1/teachers',teacherRoutes)
app.use('/api/v1/student',studentRoutes)
app.use(errorController)

module.exports = app