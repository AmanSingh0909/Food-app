// GET USER INFGO

const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs')

const getuserController = async (req, resp) => {
    try {
        //find user
        const user = await userModel.findById({ _id: req.user.id })
        //validation
        if (!user) {
            return resp.status(404).send({
                success: false,
                message: "User Not Found"
            })
        }
        //hide password
        user.password = undefined
        //resp
        resp.status(200).send({
            success: true,
            message: "User get Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in Get User API",
            error
        })

    }

}
// UPDATE USER
const updateUserController = async (req, resp) => {
    try {
        //FInd User
        const user = await userModel.findById(req.user.id)
        //validation
        if (!user) {
            return resp.status(404).send({
                success: false,
                message: "user not found"
            })
        }
        //update
        const { userName, address, phone } = req.body
        if (userName) user.userName = userName
        if (address) user.address = address
        if (phone) user.phone = phone

        //save user
        await user.save()
        resp.status(200).send({
            success: true,
            message: "User Updated Successfully"
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in Update User API",
            error
        })

    }
}

// Password update
const updatePasswordController = async (req, resp) => {
    try {
        //find user
        const user = await userModel.findById(req.user.id)
        //validation
        if (!user) {
            return resp.status(404).send({
                success: false,
                message: "User not found"
            })
        }
        // get data from user
        const { oldpassword, newPassword } = req.body
        if (!oldpassword || !newPassword) {
            return resp.status(500).send({
                success: false,
                message: "Please Provide old or new password"
            })
        }
        //check user password | compare password
        const isMatch = await bcrypt.compare(oldpassword, user.password)
        if (!isMatch) {
            return resp.status(500).send({
                success: false,
                message: "Invalid old password"
            })
        }
        // Hashing password
        var salt = bcrypt.genSaltSync(10)
        const hashedpassword = await bcrypt.hash(newPassword, salt)
        user.password = hashedpassword
        await user.save()
        resp.status(200).send({
            success: true,
            message: "Password Updated"
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in password update API",
            error
        })
    }
}

// RESET PASSWORD
const resetPasswordController = async (req, resp) => {
    try {
        const { email, newPassword, answer } = req.body
        if (!email || !answer || !newPassword) {
            return resp.status(500).send({
                success: false,
                message: "Please Provide All Fields"
            })
        }
        const user = await userModel.findOne({ email, answer })
        if (!user) {
            return resp.status(500).send({
                success: false,
                message: "User not found or Invalid answer"
            })
        }
        // Hashing password
        var salt = bcrypt.genSaltSync(10)
        const hashedpassword = await bcrypt.hash(newPassword, salt)
        user.password = hashedpassword
        await user.save()
        resp.status(200).send({
            success: true,
            message: "Password Reset Successfully"
        })

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "error in password RESET API",
            error
        })

    }
}

// DELETE PROFILE ACCOUNT
const deleteProfileController = async(req, resp) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        return resp.status(200).send({
            success: true,
            message: "YOur account has been deleted"
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in delete Profilr API",
            error
        })
        
    }
}

module.exports = { getuserController, updateUserController, updatePasswordController, resetPasswordController, deleteProfileController }