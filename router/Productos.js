const express = require('express');
const router = express.Router();

// const Producto = require('../../proyectofinal/models/producto')
const Producto = require('../models/producto')

router.get('/', async (req, res) => {
    
    try {
        
        const arrayProductosDB = await Producto.find()
        console.log(arrayProductosDB)

        res.render("productos", {
            arrayProductos: arrayProductosDB
        })

    } catch (error) {
        console.log(error)
    }
    
})

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async (req, res) => {
    const body = req.body
    try {
        // const mascotaDB = new Mascota(body)
        // await mascotaDB.save()

        await Producto.create(body)

        res.redirect('/productos')
        
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {

        const prodaDB = await Producto.findOne({ _id: id })
        console.log(prodaDB)

        res.render('detalle', {
            prod: prodaDB,
            error: false
        })
        
    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const prodaDB = await Producto.findByIdAndDelete({ _id: id })
        
        if (prodaDB) {
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'fallo eliminar!'
            })
        }

    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const body = req.body
    
    try {

        const mascotaDB = await Producto.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(mascotaDB)

        res.json({
            estado: true,
            mensaje: 'Editado'
        })
        
    } catch (error) {
        console.log(error)
        
        res.json({
            estado: false,
            mensaje: 'Fallamos!!'
        })
    }
})


module.exports = router;