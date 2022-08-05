module.exports = (sequelize, Sequelize) => {
    const Instructor = sequelize.define("instructor", {
      rut: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nombres: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      contraseña: {
        type: Sequelize.INTEGER
      },
      telefono: {
        type: Sequelize.INTEGER
      }
    });
  
    return Instructor;
  };