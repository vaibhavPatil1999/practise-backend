const express = require('express')
const path = require('path')
const app = express()
const addUserRouter = require('./routes/add-user')
const userRouter = require('./routes/user')
const bodyparser = require('body-parser')
app.use(bodyparser.json({extended:false}))


app.use(express.static(path.join(__dirname,'public')))
app.use(addUserRouter)
app.use(userRouter)






app.listen(8081,()=>{
    console.log('server started...')
})