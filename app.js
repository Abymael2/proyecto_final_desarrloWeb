const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


require('dotenv').config() 

const port = process.env.PORT || 3000;

// Conexión a Base de datos
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@supercafe.8uyaw.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
//const uri = `mongodb+srv://${USER}:${PASSWORD}@supercafe.8uyaw.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + "/public"));

// Rutas Web
app.use('/', require('./router/rutas'));
app.use('/productos', require('./router/Productos'));

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Enlace invalido, Pagina no encontarada"
    })
})


app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})