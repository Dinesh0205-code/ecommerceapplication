const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const products = [
    {
        name: 'Classic Oak Wooden Frame',
        price: 45.00,
        description: 'Handcrafted oak wood frame with a minimalist design. Perfect for your favorite memories.',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop',
        category: 'Wooden Frame',
    },
    {
        name: 'Walnut Texture Frame',
        price: 55.00,
        description: 'Rich dark walnut finish that adds a touch of sophistication to any room.',
        image: 'https://images.unsplash.com/photo-1544000051-17368532f913?q=80&w=800&auto=format&fit=crop',
        category: 'Wooden Frame',
    },
    {
        name: 'Vintage Polaroid Set (Pack of 12)',
        price: 25.00,
        description: 'High-quality polaroid prints with a vintage finish. Includes 12 customized photos.',
        image: 'https://images.unsplash.com/photo-1526285849717-482456cd7436?q=80&w=800&auto=format&fit=crop',
        category: 'Polaroid Set',
    },
    {
        name: 'Modern Black Polaroid Set',
        price: 30.00,
        description: 'Sleek black-bordered polaroid prints for a modern look. Set of 10 prints.',
        image: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=800&auto=format&fit=crop',
        category: 'Polaroid Set',
    },
];

const importData = async () => {
    try {
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
