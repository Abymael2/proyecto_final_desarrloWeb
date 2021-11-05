const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prodSchema = new Schema({
    nombre: String,
    precio: String,
    descripcion: String,
    categoria: String,
    codigo: String
})

// crear modelo
const Producto = mongoose.model('Producto', prodSchema);

module.exports = Producto;