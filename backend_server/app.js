const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const sequelize = require('./src/models/index');
const WebpayPlus = require('transbank-sdk').WebpayPlus;
const axios = require('axios');
require('./src/models/relaciones');

// set port, listen for requests
const PORT = process.env.PORT || 8080;

// Middleware
// Para poder rellenar el req.body
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(cors({ origin: true}));

app.post("/api/token", (request, response) => {
    const headers = {
        "Content-Type": "application/json",
        "Tbk-Api-Key-Id": "597055555532",
        "Tbk-Api-Key-Secret": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C"
    };
    const url = "https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.0/transactions";
    const datosDeCompra = {
      "buy_order": "ordenCompra12345678",
      "session_id": "sesion1234557545",
      "amount": 150000,
      "return_url": "http://localhost:3000/api/redirect",
    }
    try {
        axios.post(url, datosDeCompra, {headers: headers})
            .then(r => {
                console.log("data => ", r.data);
                return response.send(r.data);
            })
            .catch(e => {
                console.log("error =>", e.response.data);
                return response.send(e.response.data);
            })
    } catch (error) {
        return res.status(500).send(error);
    }
})
app.post("/api/redirect", (request, response) => {
  response.redirect("http://localhost:4200/home?success=" + true);
})

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
