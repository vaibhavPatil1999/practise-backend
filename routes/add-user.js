const express = require('express')
const path = require('path')

const getController2 = require('../controllers/add-user2')
const router = express.Router()

router.get('/user/add-user',getController2.getController)

router.post('/user/add-user',getController2.postController)

router.get('/user/get-user',getController2.getCon)

router.delete('/user/delete/:id',getController2.deleteCOn)
 



module.exports = router