const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product',
                },
                name: { type: String, required: true },
                quantity: { type: Number, required: true },
                price: { type: Number, required: true },
            },
        ],
        totalAmount: {
            type: Number,
            required: true,
        },
        customerName: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: true,
            default: 'Pending',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Order', orderSchema);
