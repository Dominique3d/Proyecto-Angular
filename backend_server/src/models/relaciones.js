const Clase = require('./clase');
const Persona = require('./persona');
const Plan = require('./plan');

//NaN
Persona.belongsToMany(Clase, { through: "persona_clase" });
Clase.belongsToMany(Persona, { through: "persona_clase" });

//NaN
Persona.belongsToMany(Plan, { through: "persona_plan" });
Plan.belongsToMany(Persona, { through: "persona_plan" });

//1aN
Plan.hasMany(Clase, { as: "clase_plan", foreignKey: "plan_id" });
// Se añade una clave userId a la tabla clase
Clase.belongsTo(Plan, { as: "plan_clase" });