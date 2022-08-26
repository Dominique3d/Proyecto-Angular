const express = require('express');
const router = express.Router();
const Persona = require('../models/persona');
const Clase = require('../models/clase');
const Plan = require('../models/plan');
const Usuario = require('../models/usuario');


// mostrar todas las personas
router.get('/', (req, res) => {
    Persona.findAll().then(personas => res.json(personas));
});

// CREATE /api/personas
router.post('/', (req, res) => {
    Persona.create({
        rut: req.body.rut,
        nombres: req.body.nombres,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        email: req.body.email,
        contrasena: bcrypt.hashSync(req.body.contrasena, 8),
        telefono: req.body.telefono,
        role: req.body.role,
        instructorAsignadoId: req.body.instructorAsignadoId
    }).then(persona => {
        res.json(persona);
    }).catch(err => {
        res.json(err);
    })
});

// mostrar todos los estudiantes
router.get('/getAllEstudiantes', (req, res) => {
    Persona.findAll({
        where: {
            role: 0
        }
    }).then(personas => res.json(personas));
});

// mostrar todos los instructores
router.get('/getAllInstructores', (req, res) => {
    Persona.findAll({
        where: {
            role: 1
        }
    }).then(personas => res.json(personas));
});

// UPDATE /api/personas
router.put('/update/:id', (req, res) => {
    Persona.update({
        rut: req.body.rut,
        nombres: req.body.nombres,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        email: req.body.email,
        telefono: req.body.telefono,
        role: req.body.role,
        instructorAsignadoId: req.body.instructorAsignadoId
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

//Get persona por ID
router.get('/getPersonaById/:id', (req, res) => {
    Persona.findByPk(req.params.id).then(personas => res.json(personas));
});

//Get todos los Estudiantes de un Instructor
router.get('/getAllEstudiantesByIdInstructor/:id', (req, res) => {
    Persona.findAll({
        where: {
            role: 0,
            instructorAsignadoId: req.params.id
        }
    }).then(personas => res.json(personas));
});

// mostrar todos los estudiantes
router.get('/getDatosUsuario/:email', (req, res) => {
    Persona.findAll({
        where: {
            email : req.params.email
        }
    }).then(personas => res.json(personas));
});

module.exports = router;