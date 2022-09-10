const express = require('express')
//const addUserRouter = require('./add-user')
const path = require('path')
const router = express.Router()

router.get('/',(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','user.html'))
})


module.exports = router