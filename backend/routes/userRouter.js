const express = require('express')
const usersControl =require('../controllers/usersCntrl')
const userRouter = express.Router()

userRouter.post('/api/v1/users/register', usersControl.register)
// userRouter.post('/api/v1/users/login', usersControl.login)
// userRouter.post('/api/v1/users/profile', usersControl.profile)


module.exports = userRouter