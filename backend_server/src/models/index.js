const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.didaktika = require("./clase.js")(sequelize, Sequelize);
db.didaktika = require("./estudiante.js")(sequelize, Sequelize);
db.didaktika = require("./instructor.js")(sequelize, Sequelize);
db.didaktika = require("./plan.js")(sequelize, Sequelize);

module.exports = db;