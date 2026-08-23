import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },

    qty: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    mode: {
        type: String,
    },

    
});

const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;