var express = require("express");
var cors = require('cors')

const bodyParser = require('body-parser');
const sequelize = require('./src/models/index');
const WebpayPlus = require('transbank-sdk').WebpayPlus;
const axios = require('axios');
var mysql = require('mysql');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const persona = require('./src/models/persona');
require('./src/models/relaciones');


/*///////////////////////////////////////////////////////////////////////////

//CORS Middleaware
 app.use(function (req, res, next) {
   //Enabling CORS
   res.setHeader('Access-Control-Allow-Origin', "*");
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
   res.header('Access-Control-Allow-Headers',
   'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
   next();
 });

// const cors = require('cors');
//app.use(cors({origin: 'http://localhost:8080'}));


// set port, listen for requests
const PORT = process.env.PORT || 8080;

// Middleware
// Para poder rellenar el req.body
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
// app.use(cors({ origin: true}));

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
      "return_url": "http://localhost:3030/api/redirect",
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

*///////////////////////////////////////////////////////////////////////////

var app = express();
  // Datos BD
const mc = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'didaktika'
});

mc.connect();

// CORS Middleware
app.use(cors());

// Para poder rellenar el req.body
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const db = require("./src/models");

app.use('/api/clases', require('./src/controllers/clase-controlador'));
app.use('/api/personas', require('./src/controllers/persona-controlador'));
app.use('/api/planes', require('./src/controllers/plan-controlador'));


// Escuchar peticiones
app.listen(8080, () => {
  console.log('Express Server - puerto 8080 online');
});

// Revisa los datos de autenticación, si son correctos entrega el token, si no entrega el error correspondiente

// Agregar un nuevo producto
// Crea usuario
app.post('/usuario', function (req, res) {
  console.log(req.body);
  let datosUsuario = {
      //userId: req.body.id,
      userName: req.body.nombreUsuario,
      userEmail: req.body.email,
      userPassword: bcrypt.hashSync(req.body.contraseña, 10),
      userRol: 0,
      //userToken: req.body.userToken
  };
  if (mc) {
      mc.query("INSERT INTO usuarios SET ?", datosUsuario, function (error, result) {
          if (error) {
              return res.status(400).json({
                  ok: false, mensaje: 'Error al crear el usuario', errors: error
              });
          } else {
              res.status(201).json({
                  ok: true, usuario: result
              });
          }
      });
  }
});

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//actualizar contraseña
app.post('/recuperarPassword', function (req, res) {

  let correo = req.body.email;
  let password = bcrypt.hashSync(req.body.contraseña, 10);
  console.log(req);
  console.log(`UPDATE usuarios SET userPassword = "${password}" WHERE userEmail = "${correo}"`);

  mc.query(`UPDATE usuarios SET userPassword = "${password}" WHERE userEmail = "${correo}"`,
      function (error, result) {
          if (error) {
              return res.status(400).json({
                  ok: false, mensaje: 'Error al actualizar la contraseña'
              });
          } else {
              res.status(201).json({
                  ok: true, olvidarPassword: result
              });
          }
      });
})



// Revisa los datos de autenticación, si son correctos entrega el token, si no entrega el error correspondiente

app.post('/login', (req, res) => {
  var body = req.body;
  mc.query("SELECT * FROM usuarios WHERE userEmail = ?", body.email, function (error, results, fields) {
      if (error) {
          return res(500).json({
              ok: false,
              mensaje: "Error al buscar usuario",
              errors: error
          });
      }
      if (!results.length) {
          return res.status(400).json({
              ok: false,
              mensaje: 'Credenciales incorrectas - email',
              errors: error
          });
      }

      if (!bcrypt.compareSync(body.password, results[0].userPassword)) {
          return res.status(400).json({
              ok: false, mensaje: "Credenciales incorrectas - password", errors: error
          });
      }

      // Crea un token
      let SEED = 'esta-es-una-semilla';
      let token = jwt.sign({ usuario: results[0].userPassword }, SEED, { expiresIn: 14400 })
      res.status(200).json({
          ok: true,
          usuario: results,
          id: results[0].userId,
          token: token
      });
  });
});


