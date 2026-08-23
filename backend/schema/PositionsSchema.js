const mongoose = require("mongoose");

const positionsSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    qty: {
        type: Number,
        required: true,
    },

    avg: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    net: {
        type: String,
    },

    day: {
        type: String,
    },

    isLoss: {
        type: Boolean,
        default: false,
    },
});

const PostionsModel = mongoose.model("Position", positionsSchema);

module.exports = PostionsModel;