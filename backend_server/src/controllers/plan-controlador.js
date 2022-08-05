const db = require("../models");
const Plan = db.planes;
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
    const plan = {
      id: req.body.id,
      nombre: req.body.nombre,
      n_clases_practicas: req.body.n_clases_practicas,
      n_clases_teoricas: req.body.n_clases_teoricas,
    };
  
    // Guardar clase en la base de datos
    Plan.create(plan)
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