const express = require('express')
const categoryControl = require('../controllers/categoryCntrl')
const catrouter= express.Router()
const isAuth = require('../middlewares/isAuth')

catrouter.post('/api/v1/categories/create',isAuth,categoryControl.create)
catrouter.get('/api/v1/categories/list',isAuth,categoryControl.list)
catrouter.put('/api/v1/categories/update/:id',isAuth,categoryControl.update)
catrouter.delete('/api/v1/categories/delete/:id',isAuth,categoryControl.delete)
module.exports = catrouter










