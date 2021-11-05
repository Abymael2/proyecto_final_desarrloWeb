const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo : "mi titulo dinámico"})
})

router.get('/proy_arbol', (req, res) => {
    res.render("servicios", {tituloServicios: ""})
})
router.get('/proy_cli_node', (req, res) => {
    res.render("servicios", {tituloServicios: ""})
})
router.get('/proy_compilador', (req, res) => {
    res.render("servicios", {tituloServicios: ""})
})
router.get('/proy_sys_cafeteria', (req, res) => {
    res.render("servicios", {tituloServicios: ""})
})

module.exports = router;