const express = require("express");
const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json()); 

app.use(express.urlencoded({ extended: true })); 

const db = require("./src/models");

db.sequelize.sync();

// rutas
app.get("/", (req, res) => {
  res.json({ message: "Base de datos Funcionando!!!" });
});

require("./src/routes/clase-ruta")(app);
require("./src/routes/estudiante-ruta")(app);
require("./src/routes/instructor-ruta")(app);
require("./src/routes/plan-ruta")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});