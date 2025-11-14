const express = require ('express')
const { getuserController, updateUserController, updatePasswordController, resetPasswordController, deleteProfileController } = require("../controllers/userController")
const authmiddleware = require('../middlewares/authmiddleware')

const router = express.Router()

// Routes
//GET USER || GET
router.get('/getUser',authmiddleware, getuserController)

// UPDATE PROFILE
router.put('/updateUser', authmiddleware, updateUserController)

// Password Update
router.post('/updatePassword', authmiddleware, updatePasswordController )

//Rest Password
router.post('/resetPassword', authmiddleware, resetPasswordController)

// delete USER
router.delete('/deleteUser/:id', authmiddleware, deleteProfileController)
module.exports = router