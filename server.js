const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app=require('./app')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.db_conn)
  .then(() => {
    console.log('Successful');
  });




app.listen('3000',()=>{
    console.log('Listening')
})