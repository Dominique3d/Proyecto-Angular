//Requires
var express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//Inicialización de variables
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Conexión con base de datos
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'didaktika'
});
mc.connect();

//Rutas
//Crear nuevo usuario
app.post('/createUser', function (req, res) {
    let datosUsuario = {
        nombres: req.body.name,
        apellidos: req.body.lName,
        rut: req.body.rut,
        direccion: req.body.address,
        telefono: req.body.moNum,
        correo: req.body.mail,
        password: req.body.pass
    };
    if (mc) {
        mc.query("INSERT INTO usuarios SET ?", datosUsuario, function (error, result) {
            if(error) {
                res.status(500).json({ "Mensaje": "Error"});
            }
            else{
                res.status(201).json({"Mensaje": "Insertado"});
            }
        });
    }
});

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});

//Escuchar peticiones
app.listen(3000, ()=>{
    console.log('Express Server - puerto 3000 online');
});