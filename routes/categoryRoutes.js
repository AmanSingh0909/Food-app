const express = require('express')

const authmiddleware = require('../middlewares/authmiddleware')
const { createCatController, getAllCatController, updateCatController, deleteCatController } = require('../controllers/categoryController')


const router = express.Router()

//routes

//create cat
router.post('/create', authmiddleware, createCatController)

//GET ALL CAT
router.get('/getAll', getAllCatController )

//update cat
router.put('/update/:id', authmiddleware, updateCatController)

// DELETE CAT
router.delete('/delete/:id', authmiddleware, deleteCatController)


module.exports = router