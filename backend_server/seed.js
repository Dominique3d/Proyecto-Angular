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
// >>>>>>> 3a1b0e622482a2973ab0b2539664b437bb00ac1e

const planes = [
    { precio: 150000, nombre: "PLAN ESTANDAR", n_clases_practicas: 12, n_clases_teoricas: 8 },
    { precio: 180000, nombre: "PLAN FULL", n_clases_practicas: 16, n_clases_teoricas: 8 },
    { precio: 200000, nombre: "PLAN PREMIUM", n_clases_practicas: 20, n_clases_teoricas: 8 },
    { precio: 55000, nombre: "PLAN RE-ENTRENAMIENTO", n_clases_practicas: 12, n_clases_teoricas: 4 },
    { precio: 30000, nombre: "PLAN TEORICO", n_clases_practicas: 0, n_clases_teoricas: 4 },
    { precio: 8000, nombre: "SESIÓN PSICOSENSOMÉTRICO", n_clases_practicas: 1, n_clases_teoricas: 0 },
];

const clases = [
    { tipo: "Practico", fecha_hora:  Date.now() , plan_id: 1},
    { tipo: "Practico", fecha_hora:  Date.now(), plan_id: 1},
    { tipo: "Teorico", fecha_hora:  Date.now(), plan_id: 1},
    { tipo: "Teorico", fecha_hora:  Date.now(), plan_id: 2},
    { tipo: "Practico", fecha_hora:  Date.now(), plan_id: 2},
    { tipo: "Practico", fecha_hora:  Date.now(), plan_id: 3},
];

sequelize.sync({ force: false }).then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
}).then(() => {
    // Rellenar usuarios
    personas.forEach(persona => Persona.create(persona));

    planes.forEach(plan => Plan.create(plan));

    clases.forEach(clase => Clase.create(clase));
});



/*
CREATE TABLE `didaktika`.`usuarios` ( `userId` INT NOT NULL , `userName` VARCHAR(255) NOT NULL , `userEmail` VARCHAR(255) NOT NULL , `userPassword` VARCHAR(255) NOT NULL , `userRol` INT NOT NULL , `userToken` VARCHAR(255) NOT NULL , PRIMARY KEY (`userId`)) ENGINE = InnoDB;
*/