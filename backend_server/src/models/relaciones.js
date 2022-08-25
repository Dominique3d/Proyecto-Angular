const Clase = require('./clase');
const Persona = require('./persona');
const Plan = require('./plan');

//NaN


//NaN
Persona.belongsToMany(Plan, { through: "persona_plan" });
Plan.belongsToMany(Persona, { through: "persona_plan" });

//1aN
// Persona.hasMany(Clase);
Clase.belongsTo(Persona, {as: "estudiante"});

// Plan.hasMany(Clase);
Clase.belongsTo(Plan);

// Persona.hasMany(Persona)
Persona.belongsTo(Persona, {as: "instructorAsignado"});
// 
//     , { as: "clase_plan", foreignKey: "plan_id" });

// // Se añade una clave userId a la tabla clase
// Clase.belongsTo(Plan, { as: "plan_clase" });

