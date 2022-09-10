const path = require('path')
const express = require('express')
const getController2 = require('../controllers/add-user2')
const router = express.Router()

router.get('/add-user',getController2.getController)

router.post('/add-user',getController2.postController)
 



module.exports = router