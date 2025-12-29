const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a product name"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    image: {
      type: String,
      required: [true, "Please add an image URL"],
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      enum: ["frames", "polaroids"], // 👈 FIX
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
