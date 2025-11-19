const express = require('express')

const authmiddleware = require('../middlewares/authmiddleware')
const { createFoodController } = require('../controllers/foodController')


const router = express.Router()

//routes
//create food
router.post('/create', authmiddleware, createFoodController)



module.exports = router