const Sequelize = require('sequelize')

const sequelize = new Sequelize("orm-practise","root","MYSQL100",{
    dialect:"mysql",
    host:"localhost"
})

module.exports = sequelize
