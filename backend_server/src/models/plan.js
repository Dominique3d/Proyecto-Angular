const { Model, DataTypes } = require('sequelize');
const sequelize = require('./index');

class Plan extends Model {}
Plan.init({
      precio: {
        type: DataTypes.INTEGER
      },
      nombre: {
        type: DataTypes.STRING
      },
      n_clases_practicas: {
        type: DataTypes.INTEGER
      },
      n_clases_teoricas: {
        type: DataTypes.INTEGER
      }
    }, {
      sequelize,
      modelName: "plan",
      timestamps: false
    });
    module.exports = Plan;