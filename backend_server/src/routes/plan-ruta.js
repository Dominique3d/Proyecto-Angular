module.exports = app => {
    const planes = require("../controllers/plan-controlador.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", planes.create);
  };