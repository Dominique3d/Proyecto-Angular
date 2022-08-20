const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');

class Persona extends Model {}
Persona.init({
      rut: {
        type: DataTypes.INTEGER,
      },
      nombres: {
        type: DataTypes.STRING
      },
      apellidos: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      contraseña: {
        type: DataTypes.INTEGER
      },
      telefono: {
        type: DataTypes.INTEGER
      },

      // Si es 0 es usuario normal y si es 1 es administrador
      role: {
          type: DataTypes.INTEGER,
          defaultValue: 0
      }
    }, {
      sequelize,
      modelName: "persona",
      timestamps: false
    });
  module.exports = Persona;