const express = require('express');
const app = express()
const adminRoutes = require('./routes/adminRoutes') 
app.use(express.json())
app.use('/api/v1/teachers',adminRoutes)


app.use()

module.exports = app