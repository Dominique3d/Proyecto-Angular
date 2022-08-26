const express = require('express');
const router = express.Router();
const db = require("../models");
const Clase = require('../models/clase');

module.exports = router;

// Mostrar todas las clases
router.get('/', (req, res) => {
    Clase.findAll({
    }).then(clases => res.json(clases));
});

// CREATE /api/clase con id estudiante
router.post('/:id', (req, res) => {
    Clase.create({
        tipo: req.body.tipo,
        fecha: req.body.fecha,
        hora: req.body.fecha,
        estudianteId: req.body.estudianteId,
        planId: req.body.planId
    }).then(clase => {
        res.json(clase);
    }).catch(err => {
        res.json(err);
    })
});

// mostrar todas las clases de un estudiante 
router.get('/getAllClasesByIdEstudiante/:id', (req, res) => {
    Clase.findAll({
        where: {
            estudianteId: req.params.id
        }
    }).then(clases => res.json(clases));
});