const express = require ('express')
const { getuserController, updateUserController, updatePasswordController, resetPasswordController } = require("../controllers/userController")
const authmiddleware = require('../middlewares/authmiddleware')

const router = express.Router()

// Routes
//GET USER || GET
router.get('/getUser',authmiddleware, getuserController)

// UPDATE PROFILE
router.put('/updateUser', authmiddleware, updateUserController)

// Password Update
router.post('/updatepassword', authmiddleware, updatePasswordController )

//Rest Password
router.post('/resetPassword', authmiddleware, resetPasswordController)


module.exports = router