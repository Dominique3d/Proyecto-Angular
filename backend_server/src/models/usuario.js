const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');
const bcrypt = require("bcrypt");

class Persona extends Model {}
Persona.init({
      userId: {
        type: DataTypes.STRING
      },
      userName: {
        type: DataTypes.STRING
      },
      userEmail: {
        type: DataTypes.STRING
      },
      userPassword: {
        type: DataTypes.STRING
      },

      // Si es 0 es usuario normal y si es 1 es administrador
      userRole: {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },
      userToken: {
        type: DataTypes.STRING,
      },
    }, {
      sequelize,
      modelName: "usuario",
      timestamps: false
    });
  module.exports = Persona;