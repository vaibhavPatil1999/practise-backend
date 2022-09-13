const express = require('express')
const path = require('path')
const db = require('./util/DB')
const sequelize = require('./models/appointment')

const app = express()
const addUserRouter = require('./routes/add-user')


const bodyparser = require('body-parser')
app.use(bodyparser.json({ extended: false }))


app.use(express.static(path.join(__dirname, 'public')))
app.use(addUserRouter)




db.sync().then(() => {
    app.listen(8081, () => {
        console.log('server started...')
    });
});





