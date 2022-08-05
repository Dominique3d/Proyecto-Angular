module.exports = app => {
    const estudiantes = require("../controllers/estudiante-controlador.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", estudiantes.create);
  };