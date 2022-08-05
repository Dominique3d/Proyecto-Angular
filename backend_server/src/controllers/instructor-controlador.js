const db = require("../models");
const Instructor = db.instructores;
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
    const instructor = {
      rut: req.body.id,
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      email: req.body.email,
      contraseña: req.body.contraseña,
      telefono: req.body.telefono,
    };
  
    // Guardar clase en la base de datos
    Instructor.create(instructor)
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