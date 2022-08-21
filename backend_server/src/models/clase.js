const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');

class Clase extends Model {}
Clase.init({
      tipo: {
        type: DataTypes.STRING
      },
      fecha_hora: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      modelName: "clase",
      timestamps: false
    });
  module.exports = Clase;