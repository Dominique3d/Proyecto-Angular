const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');

class Clase extends Model {}
Clase.init({
      tipo: {
        type: DataTypes.STRING
      },
      hora: {
        type: DataTypes.STRING
      },
      fecha: {
        type: DataTypes.STRING
      }
      
    }, {
      sequelize,
      modelName: "clase",
      timestamps: false
    });
  module.exports = Clase;