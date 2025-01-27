// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String, // You can store URLs for product images
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
