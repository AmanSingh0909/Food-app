const mongoose = require('mongoose')

//schema
const foodSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, 'Food title is required']
        },
        description:{
            type: String,
            required: [true, 'Food description is required']
        },
        price:{
            type: Number,
            required: [true, 'Food price is required']
        },
        imageURL:{
            type: String,
            default: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg',
        },
        foodTags:{
            type: String,
        },
        catefory:{
            type: String,
        },
        code:{
            type: String,
        },
        isAvailable:{
            type: Boolean,
            default: true
        },
        resturant:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant'
        },
        rating:{
            type: Number,
            default: 5,
            min: 1,
            max: 5
        },
        ratingCount:{
            type: String
        },

    },
    { timestamps: true })



module.exports = mongoose.model('Foods', foodSchema)