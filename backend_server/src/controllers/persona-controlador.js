const express = require('express');
const router = express.Router();
const Persona = require('../models/persona');
const Clase = require('../models/clase');
const Plan = require('../models/plan');


// mostrar todas las personas
router.get('/getAllPersonas', (req, res) => {
    Persona.findAll({
        include: [{
            model: Clase,
            as: "clases",
            attributes: ['tipo']
        }, {
            model: Plan,
            as: "plans",
            attributes: ['nombre'],
        }],
        attributes: ['nombres', 'primerApellido', 'segundoApellido']
    }).then(personas => res.json(personas));
});

// CREATE /api/personas
router.post('/', (req, res) => {
    Persona.create({
        rut: req.body.rut,
        nombres: req.body.nombres,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        email: req.body.email,
        contrasena: bcrypt.hashSync(req.body.contraseña, 8),
        telefono: req.body.telefono,
        role: req.body.role
    }).then(persona => {
        res.json(persona);
    }).catch(err => {
        res.json(err);
    })
});

// mostrar todos los estudiantes
router.get('/getAllEstudiantes', (req, res) => {
    Persona.findAll({
        include: [{
            model: Clase,
            as: "clases",
            attributes: ['tipo']
        }, {
            model: Plan,
            as: "plans",
            attributes: ['nombre'],
        }],
        attributes: ['rut', 'nombres', 'primerApellido', 'segundoApellido', 'email', 'contrasena', 'telefono', 'role'],
            where: {
            role: 0
        }
    }).then(personas => res.json(personas));
});

// mostrar todos los instructores
router.get('/getAllInstructores', (req, res) => {
    Persona.findAll({
        include: [{
            model: Clase,
            as: "clases",
            attributes: ['tipo']
        }, {
            model: Plan,
            as: "plans",
            attributes: ['nombre'],
        }],
        attributes: ['rut', 'nombres', 'primerApellido', 'segundoApellido', 'email', 'contrasena', 'telefono', 'role'],
            where: {
            role: 1
        }
    }).then(personas => res.json(personas));
});

// UPDATE /api/personas
router.post('/update/:id', (req, res) => {
    Persona.update({
        rut: req.body.rut,
        nombres: req.body.nombres,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        email: req.body.email,
        contrasena: bcrypt.hashSync(req.body.contraseña, 8),
        telefono: req.body.telefono,
        role: req.body.role
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});



module.exports = router;