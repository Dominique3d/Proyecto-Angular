module.exports = (sequelize, Sequelize) => {
    const Plan = sequelize.define("plan", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      precio: {
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      n_clases_practicas: {
        type: Sequelize.INTEGER
      },
      n_clases_teoricas: {
        type: Sequelize.INTEGER
      }
    });
  
    return Plan;
  };