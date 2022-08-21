const sequelize = require('./src/models/index');
const Persona = require('./src/models/persona');
const Clase = require('./src/models/clase');
const Plan = require('./src/models/plan');
require('./src/models/relaciones');

// Personas
const personas = [
    { rut:197970715, nombres: "Juan", primerApellido: "Muñoz", segundoApellido: "Parada", email: "juan@agmail.com", contrasena: 1234, telefono: 952163664, role: 0 },
    { rut:197970716, nombres: "Pablo", primerApellido: "San Martín", segundoApellido: "Domínguez", email: "pablo@gmail.com", contrasena: 12345, telefono: 952166789, role: 0 },
    { rut:197970718, nombres: "Dominique", primerApellido: "Del Valle", segundoApellido: "Durán", email: "dominique@gmail.com", contrasena: 123456, telefono: 952166352, role: 1 },
    { rut:197970719, nombres: "Claudio", primerApellido: "Macher", segundoApellido: "Chávez", email: "claudio@gmail.com", contrasena: 1234567, telefono: 952168273, role: 1 },
];

const personas2  = [
    { rut:197970715, nombres: "Sergio", primerApellido: "Muñoz", segundoApellido: "Parada", email: "juan@agmail.com", contrasena: 1234, telefono: 952163664, role: 0 },
]

sequelize.sync({ force: false }).then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
}).then(() => {
    // Rellenar usuarios
    personas.forEach(persona => Persona.create(persona));
});

