const express = require('express');
const userRouter  = require('./routes/userRouter');
const app = express() 
const PORT = process.env.PORT || 3000;

//! import ROutes
app.use('/',userRouter)



//!Start THe Server
app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)})

