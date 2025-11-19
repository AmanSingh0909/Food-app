const foodModel = require("../models/foodModel");

// CREATE FOOD
const createFoodController = async (req, res) => {
    try {
        const { title, description, price, imageURL, foodTags, category, code, isAvailable, resturant, rating, ratingCount } = req.body
        //validation
        if (!title || !description || !price || !resturant) {
            return res.status(500).send({
                success: false,
                message: "Please provide all required fields"
            })
        }
        const food = new foodModel({title, description, price, imageURL, foodTags, category, code, isAvailable, resturant, rating, ratingCount})
        await food.save()
        res.status(201).send({
            success: true,
            message: "New Food Created",
            food
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Create Food API",
            error
        })

    }
}

module.exports = { createFoodController }