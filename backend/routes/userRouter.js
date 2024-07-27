const express = require('express')
const usersControl =require('../controllers/usersCntrl')
const userRouter = express.Router()
const isAuth = require('../middlewares/isAuth')



userRouter.post('/api/v1/users/register', usersControl.register)
userRouter.post('/api/v1/users/login', usersControl.login)
userRouter.get('/api/v1/users/profile',isAuth,usersControl.profile)
userRouter.get('/api/v1/users/generateotp',usersControl.generateOtp)
userRouter.get('/api/v1/users/verifyotp',usersControl.verifyOtp)
userRouter.put('/api/v1/users/forgotpass',usersControl.forgotPassword)

module.exports = userRouter