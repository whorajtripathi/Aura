import mongoose from "mongoose";

const posistionsSchema = new mongoose.Schema({
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
        type: String,
    }
});

const PostionsModel = mongoose.model("Postions", posistionsSchema);

export default PostionsModel;