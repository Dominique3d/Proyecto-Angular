const sequelize = require('./src/models/index');
const Persona = require('./src/models/persona');
const Clase = require('./src/models/clase');
const Plan = require('./src/models/plan');
require('./src/models/relaciones');

// Personas
const personas = [
    { rut:197970715, nombres: "Juan", primerApellido: "Muñoz", segundoApellido: "Parada", email: "juan@agmail.com", contrasena: 1234, telefono: 952163664, role: 1, instructorAsignadoId: null},
    { rut:197970716, nombres: "Pablo", primerApellido: "San Martín", segundoApellido: "Domínguez", email: "pablo@gmail.com", contrasena: 12345, telefono: 952166789, role: 1, instructorAsignadoId: null},
    { rut:197970718, nombres: "Dominique", primerApellido: "Del Valle", segundoApellido: "Durán", email: "dominique@gmail.com", contrasena: 123456, telefono: 952166352, role: 1, instructorAsignadoId: null},
    { rut:197970719, nombres: "Claudio", primerApellido: "Macher", segundoApellido: "Chávez", email: "claudio@gmail.com", contrasena: 1234567, telefono: 952168273, role: 1, instructorAsignadoId: null},

    { rut:197970720, nombres: "Miguel", primerApellido: "Muñoz", segundoApellido: "Parada", email: "miguel@agmail.com", contrasena: 1234, telefono: 912163664, role: 0, instructorAsignadoId: 1},
    { rut:197970721, nombres: "José", primerApellido: "San Martín", segundoApellido: "Domínguez", email: "jose@gmail.com", contrasena: 12345, telefono: 922166789, role: 0, instructorAsignadoId: 1},
    { rut:197970722, nombres: "Andrés", primerApellido: "Del Valle", segundoApellido: "Durán", email: "andres@gmail.com", contrasena: 123456, telefono: 932166352, role: 0, instructorAsignadoId: 2},
    { rut:197970723, nombres: "Joaquín", primerApellido: "Macher", segundoApellido: "Chávez", email: "joaqu@gmail.com", contrasena: 1234567, telefono: 942168273, role: 0, instructorAsignadoId: 2},

    { rut:197970724, nombres: "Martina", primerApellido: "Muñoz", segundoApellido: "Parada", email: "martina@agmail.com", contrasena: 1234, telefono: 962163664, role: 0, instructorAsignadoId: 3},
    { rut:197970725, nombres: "Denise", primerApellido: "San Martín", segundoApellido: "Domínguez", email: "denise@gmail.com", contrasena: 12345, telefono: 972166789, role: 0, instructorAsignadoId: 3},
    { rut:197970726, nombres: "Carla", primerApellido: "Del Valle", segundoApellido: "Durán", email: "carla@gmail.com", contrasena: 123456, telefono: 982166352, role: 0, instructorAsignadoId: 4},
    { rut:197970727, nombres: "Rodrigo", primerApellido: "Macher", segundoApellido: "Chávez", email: "rodr@gmail.com", contrasena: 1234567, telefono: 992168273, role: 0, instructorAsignadoId: 4}
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
    { tipo: "Practico", fecha:  new Date("08-25-2022"), hora: "09:00:00", estudianteId: 5, planId: 1},
    { tipo: "Practico", fecha:  new Date("08-25-2022"), hora: "10:00:00", estudianteId: 6, planId: 1},
    { tipo: "Teorico", fecha:  new Date("08-25-2022"), hora: "11:00:00", estudianteId: 7, planId: 1},
    { tipo: "Teorico", fecha:  new Date("08-25-2022"), hora: "12:00:00", estudianteId: 8, planId: 2},
    { tipo: "Practico", fecha:  new Date("08-25-2022"), hora: "13:00:00", estudianteId: 9, planId: 2},
    { tipo: "Practico", fecha:  new Date("08-25-2022"), hora: "17:00:00", estudianteId: 10, planId: 3},
    { tipo: "Practico", fecha:  new Date("08-26-2022"), hora: "09:00:00", estudianteId: 11, planId: 1},
    { tipo: "Practico", fecha:  new Date("08-26-2022"), hora: "10:00:00", estudianteId: 12, planId: 1},
    { tipo: "Teorico", fecha:  new Date("08-26-2022"), hora: "11:00:00", estudianteId: 6, planId: 1},
    { tipo: "Teorico", fecha:  new Date("08-26-2022"), hora: "12:00:00", estudianteId: 10, planId: 2},
    { tipo: "Practico", fecha:  new Date("08-26-2022"), hora: "14:00:00", estudianteId: 7, planId: 2},
    { tipo: "Practico", fecha:  new Date("08-26-2022"), hora: "16:00:00", estudianteId: 9, planId: 3},
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
CREATE TABLE `didaktika`.`usuarios` ( `userId` INT NOT NULL , `userName` VARCHAR(255) NOT NULL , `userEmail` VARCHAR(255) NOT NULL , `userPassword` VARCHAR(255) NOT NULL , `userRol` VARCHAR(255) NOT NULL , `userToken` VARCHAR(255) NOT NULL , PRIMARY KEY (`userId`)) ENGINE = InnoDB;
*/