const Clase = require('./models/clase');
const Estudiante = require('./models/estudiante');
const Instructor = require('./models/instructor');
const Plan = require('./models/plan');


//1aN

Estudiante.hasMany(Clase, { as: "clases", foreignKey: "Estudiante_id" });

Clase.belongsTo(Estudiante, { as: "clase_id" });

//0aN

Estudiante.hasOne(Plan, { as: "plan_contratado", foreignKey: "Plan_id" });

Plan.belongsToMany(Estudiante, { as: "plan_id" , foreignKey: "Estudiante_id" });

//1aN
Instructor.hasMany(Clase, { as: "clases", foreignKey: "Instructor_id" });

Clase.belongsTo(Instructor, { as: "Instructor_id"});