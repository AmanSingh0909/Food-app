const categoryModel = require('../models/categoryModel');


const createCatController = async (req, resp) => {
    try {
        const { title, imageUrl } = req.body
        // validation
        if (!title) {
            return resp.status(500).send({
                success: false,
                message: "please Provide category title and image"
            })
        }
        const newCategory = new categoryModel({ title, imageUrl })
        await newCategory.save()
        resp.status(201).send({
            success: true,
            message: "New Category Created Successfully",
            newCategory
        })

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in Create Category API",
            error
        })
    }
}

// GET ALL CAT
const getAllCatController = async (req, resp) => {
    try {
        const category = await categoryModel.find({})
        if (!category) {
            return resp.status(404).send({
                success: false,
                message: "No Category Found"
            })
        }
        resp.status(200).send({
            success: true,
            totalCount: category.length,
            category
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in Get All Category API",
            error
        })
    }
}

// UPDATE CAT
const updateCatController = async (req, resp) => {
    try {
        const { id } = req.params
        const { title, imageUrl } = req.body
        const updatedcategory = await categoryModel.findByIdAndUpdate(id, { title, imageUrl }, { new: true })
        if (!updatedcategory) {
            resp.status(500).send({
                success: false,
                message: "No Category Found",
            })
        }
        resp.status(200).send({
            success: true,
            message: "Category Updated Successfully",
            updatedcategory
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in Update Category API",
            error
        })

    }
}

//DELETE CAT
const deleteCatController = async (req, resp) => {
    try {
        const { id } = req.params
        if (!id) {
            resp.status(500).send({
                success: false,
                message: "Please provide Category ID",
            })
        }
        const category = await categoryModel.findById(id)
        if (!category) {
            return resp.status(500).send({
                success: false,
                message: "No Category Found",
            })
        }
        await categoryModel.findByIdAndDelete(id)
        resp.status(200).send({
            success: true,
            message: "Category Deleted Successfully",
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in Delete Category API",
            error
        })
    }
}

module.exports = { createCatController, getAllCatController, updateCatController, deleteCatController }
