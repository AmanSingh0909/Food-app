const express = require('express')

const authmiddleware = require('../middlewares/authmiddleware')
const { createResturantController } = require('../controllers/restaurantcontroller')

const router = express.Router()

//routes


// CREATE RESTURANT || POST
router.post('/create', authmiddleware, createResturantController)

module.exports = router