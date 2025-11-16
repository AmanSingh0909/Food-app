const restaurantModel = require('../models/restaurantmodel')

//CREATE RESTURANT
const createResturantController = async (req, resp) => {
    try {
        const { title, imageUrl, foods, time, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coords } = req.body
        // validation
        if (!title || !coords) {
            return resp.status(500).send({
                success: false,
                message: "please Provide title and address"
            })
        }
        const newResturant = new restaurantModel({ title, imageUrl, foods, time, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coords })
        await newResturant.save()
        resp.status(201).send({
            success: true,
            message: "New Resturant Created Successfully"
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in create Resturant API",
            error
        })

    }
}

module.exports = { createResturantController }