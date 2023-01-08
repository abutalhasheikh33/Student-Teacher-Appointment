const express = require('express');
const errorController = require('./controllers/errorController');
const app = express()
const adminRoutes = require('./routes/adminRoutes') 
app.use(express.json())
app.use('/api/v1/teachers',adminRoutes)


app.use(errorController)

module.exports = app