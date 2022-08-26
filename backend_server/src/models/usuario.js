const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');
const bcrypt = require("bcrypt");

class Usuario extends Model {}
Usuario.init({
      userName: {
        type: DataTypes.STRING
      },
      userEmail: {
        type: DataTypes.STRING
      },
      userPassword: {
        type: DataTypes.STRING
      },
      userRol: {
          type: DataTypes.STRING,
      },
      userToken: {
        type: DataTypes.STRING,
      },
    }, {
      sequelize,
      modelName: "usuario",
      timestamps: false
    });
  module.exports = Usuario;