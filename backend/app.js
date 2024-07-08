const express = require('express');
const userRouter  = require('./routes/userRouter');
const mongoose  = require('mongoose');
const errorHandler = require('./middlewares/Errorhandler');
const app = express() 
const PORT = process.env.PORT || 3000;

app.use(express.json())
//! import ROutes
app.use('/',userRouter)

//! Error Handler to show error in jsonFormat 
app.use(errorHandler)
// app.use(isAuth);
//! mongoose connection
mongoose.connect('mongodb+srv://raghavWorld:5pGOrnZx7LgyH3tn@cluster0.avqjhzp.mongodb.net/expenseTracker').then(()=>{
    console.log('DB Connected')
}).catch((e)=>console.log(e))

//!Start THe Server
app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)})

