const mongoose = require('mongoose')

//schema
const ordersSchema = new mongoose.Schema(
    {
        foods:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Foods'
        },
        

    },
    { timestamps: true })



module.exports = mongoose.model('orders', ordersSchema)