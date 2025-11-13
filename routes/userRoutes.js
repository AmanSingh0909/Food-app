const express = require ('express')
const { getuserController } = require("../controllers/userController")
const authmiddleware = require('../middlewares/authmiddleware')


const router = express.Router()

// Routes
//GET USER || GET
router.get('/getUser',authmiddleware, getuserController)


module.exports = router