const express = require('express')
const TransactionControl = require('../controllers/transactionCntrl')
const transactRouter= express.Router()
const isAuth = require('../middlewares/isAuth')

transactRouter.post('/api/v1/transactions/create',isAuth,TransactionControl.create)
transactRouter.get('/api/v1/transactions/list',isAuth,TransactionControl.list)
transactRouter.put('/api/v1/transactions/update/:id',isAuth,TransactionControl.update)
transactRouter.delete('/api/v1/transactions/delete/:id',isAuth,TransactionControl.delete)
module.exports =  transactRouter

 