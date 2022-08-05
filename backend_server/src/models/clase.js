module.exports = (sequelize, Sequelize) => {
    const Clase = sequelize.define("clase", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tipo: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      }
    });
  
    return Clase;
  };
