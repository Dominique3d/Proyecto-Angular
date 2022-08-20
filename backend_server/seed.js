const sequelize = require('./src/models/index');
const Persona = require('./src/models/persona');
const Clase = require('./src/models/clase');
const Plan = require('./src/models/plan');
require('./src/models/relaciones');

// Personas
const personas = [
    { rut:197970715, nombres: "Anton", apellidos: "Munoz", email: "juan@agmail.com", contraseña: 1234, telefono: 952163664, role: 0 },
    { rut:197970716, nombres: "Pablo", apellidos: "Sanmartin", email: "pablo@gmail.com", contraseña: 12345, telefono: 952166789, role: 0 },
    { rut:197970718, nombres: "Dominique", apellidos: "DelValle", email: "dominique@gmail.com", contraseña: 123456, telefono: 952166352, role: 1 },
    { rut:197970719, nombres: "Claudio", apellidos: "Macher", email: "claudio@gmail.com", contraseña: 1234567, telefono: 952168273, role: 1 },
];

sequelize.sync({ force: false }).then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
}).then(() => {
    // Rellenar usuarios
    personas.forEach(persona => Persona.create(persona));

});

