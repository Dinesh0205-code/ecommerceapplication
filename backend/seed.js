const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const connectDB = require("./config/db");

dotenv.config();

// Connect to MongoDB
connectDB();

const products = [
  {
    name: "Classic Oak Wooden Photo Frame",
    price: 999,
    description:
      "Handcrafted classic oak wooden frame with a clean minimalist finish. Ideal for portraits and memories.",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    category: "frames",
  },
  {
    name: "Premium Walnut Wooden Photo Frame",
    price: 1299,
    description:
      "Premium dark walnut textured wooden frame that adds elegance to any living space.",
    image:
      "https://images.unsplash.com/photo-1544000051-17368532f913?q=80&w=800&auto=format&fit=crop",
    category: "frames",
  },
  {
    name: "Vintage Polaroid Print Set (Pack of 12)",
    price: 499,
    description:
      "High-quality vintage-style polaroid prints. Includes 12 customized photo prints.",
    image:
      "https://images.unsplash.com/photo-1526285849717-482456cd7436?q=80&w=800&auto=format&fit=crop",
    category: "polaroids",
  },
  {
    name: "Modern Black Border Polaroid Set (Pack of 10)",
    price: 599,
    description:
      "Modern black-bordered polaroid prints for a stylish and contemporary look.",
    image:
      "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=800&auto=format&fit=crop",
    category: "polaroids",
  },
];

const importData = async () => {
  try {
    await Product.deleteMany(); // clear existing products
    await Product.insertMany(products); // insert new products
    console.log("✅ Products imported successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error importing data:", error);
    process.exit(1);
  }
};

importData();
