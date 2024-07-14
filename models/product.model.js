const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter Product name"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,

        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
            required: false,
        },

    },
    {
        timestamps: true // allows us to have two more extra fields,the one when its created at and when its updated at
    }

);


const Product =mongoose.model("Product",ProductSchema);

module.exports = Product;