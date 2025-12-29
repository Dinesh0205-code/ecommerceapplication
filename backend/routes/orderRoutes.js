const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// @desc    Create new order
// @route   POST /api/orders
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { items, totalAmount } = req.body;

        if (items && items.length === 0) {
            res.status(400).json({ message: 'No order items' });
            return;
        } else {
            const order = new Order({
                items,
                totalAmount,
            });

            const createdOrder = await order.save();
            res.status(201).json(createdOrder);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

module.exports = router;
