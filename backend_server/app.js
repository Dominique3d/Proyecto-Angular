const express = require("express");
const app = express();
const sequelize = require('./src/models/index');
require('./src/models/relaciones');

// set port, listen for requests
const PORT = process.env.PORT || 8080;

// Middleware
// Para poder rellenar el req.body
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

const db = require("./src/models");

// rutas
app.get("/", (req, res) => {
  res.json({ message: "Base de datos Funcionando!!!" });
});

app.use('/api/clases', require('./src/controllers/clase-controlador'));
app.use('/api/personas', require('./src/controllers/persona-controlador'));
app.use('/api/planes', require('./src/controllers/plan-controlador'));

// Arrancamos el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

  // Conectase a la base de datos
  // Force true: DROP TABLES
  sequelize.sync({ force: false }).then(() => {
    console.log("Nos hemos conectado a la base de datos");
  }).catch(error => {
    console.log('Se ha producido un error', error);
  })

});

//CORS Middleaware
app.use(function (req, res, next) {
  //Enabling CORS
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
  next();
});

const cors = require('cors');
app.use(cors());
