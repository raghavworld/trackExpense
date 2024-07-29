const express = require('express');
const userRouter  = require('./routes/userRouter');
const mongoose  = require('mongoose');
const errorHandler = require('./middlewares/Errorhandler');
const categoryRouter = require('./routes/categoryRouter');
const transactRouter = require('./routes/transactionRoutes');
const app = express() 
const PORT = process.env.PORT || 3000;
const cors = require('cors')


app.use(express.json())
//!enable cors for all routes
app.use(cors())
//! import ROutes
app.use('/',userRouter)
app.use('/',categoryRouter)
app.use('/',transactRouter)
//! Error Handler to show error in jsonFormat 
app.use(errorHandler)
// app.use(isAuth);
//! mongoose connection
mongoose.connect('mongodb+srv://raghavWorld:5pGOrnZx7LgyH3tn@cluster0.avqjhzp.mongodb.net/expenseTracker').then(()=>{
    console.log('DB Connected')
}).catch((e)=>console.log(e))

//!Start THe Server
app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)})

