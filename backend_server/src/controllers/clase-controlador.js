const db = require("../models");
const Clase = db.clases;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Valida la request
    if (!req.body.title) {
      res.status(400).send({
        message: "La consulta no puede estar vacia"
      });
      return;
    }
  
    // Crear clase
    const clase = {
      id: req.body.id,
      tipo: req.body.tipo,
    };
  
    // Guardar clase en la base de datos
    Clase.create(clase)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error al crear la clase."
        });
      });
  };