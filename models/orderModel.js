const mongoose = require('mongoose')

//schema
const ordersSchema = new mongoose.Schema(
    {
        foods: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Foods'
            }
        ],
        payment:{},
        buyer:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        status:{
            type: String,
            enum: ['pending', 'confirmed', 'preparing', 'on the way', 'delivered', 'cancelled'],
            default: 'preparing'
        },
        
    },
    { timestamps: true })



module.exports = mongoose.model('orders', ordersSchema)