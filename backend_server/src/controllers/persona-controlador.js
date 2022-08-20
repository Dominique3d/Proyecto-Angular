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
            as: "planes",
            attributes: ['nombre'],
        }],
        attributes: ['nombres', 'apellidos']
    }).then(personas => res.json(personas));
});

// CREATE /api/personas
router.post('/', (req, res) => {
    Persona.create({
        rut: req.body.rut,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        email: req.body.email,
        contraseña: req.body.contraseña,
        telefono: req.body.telefono,
        role: req.body.role
    }).then(persona => {
        res.json(persona);
    }).catch(err => {
        res.json(err);
    })
});


module.exports = router;