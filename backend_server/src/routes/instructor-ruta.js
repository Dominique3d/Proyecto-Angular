module.exports = app => {
    const instructores = require("../controllers/instructor-controlador.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", instructores.create);
  };