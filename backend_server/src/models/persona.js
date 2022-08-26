const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');
const bcrypt = require("bcrypt");

class Persona extends Model {}
Persona.init({
      rut: {
        type: DataTypes.STRING,
      },
      nombres: {
        type: DataTypes.STRING
      },
      primerApellido: {
        type: DataTypes.STRING
      },
      segundoApellido: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      contrasena: {
        type: DataTypes.STRING
      },
      telefono: {
        type: DataTypes.INTEGER
      },

      // Si es 0 es usuario normal y si es 1 es administrador
      role: {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },

      // idInstructorAsignado: {
      //   type: DataTypes.INTEGER
      // }
    }, {
      instanceMethods: {
        generateHash(contrasena) {
            return bcrypt.hash(contrasena, bcrypt.genSaltSync(8));
        },
        validPassword(contrasena) {
            return bcrypt.compare(contrasena, this.contrasena);
        }
      },
      sequelize,
      modelName: "persona",
      timestamps: false
    });
  module.exports = Persona;