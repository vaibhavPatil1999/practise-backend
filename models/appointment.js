const Sequelize = require('sequelize')

const sequelize = require('../util/DB')

const Grahak = sequelize.define("appointment", {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   name: {
      type: Sequelize.STRING,
      allowNull: false,
   },

   email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
   },

   contact: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique : true,
   }





})

module.exports = Grahak
