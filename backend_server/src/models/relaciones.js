const Clase = require('./clase');
const Persona = require('./persona');
const Plan = require('./plan');
const Usuario = require('./usuario');

// 1a1
// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla addresses
Persona.hasOne(Usuario, { as: "usuario", foreignKey: "persona_id" });

// Añade una clave userId a la tabla addresses
Usuario.belongsTo(Persona, { as: "persona", foreignKey: "persona_id" });


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

