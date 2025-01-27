// routes/products.js
const express = require("express");
const Product = require("../models/product");
const router = express.Router();

const products = [
    { _id: "1", name: "Product 1", description: "Description 1", price: 100 },
    { _id: "2", name: "Product 2", description: "Description 2", price: 200 },
];

// Fetch all products
router.get("/products", async (req, res) => {
//  try {
  //  const products = await Product.find();
    res.json(products);
  //} catch (error) {
    //res.status(500).json({ message: error.message });
  //}
});

// POST route to add a new product
router.post("/", async (req, res) => {
   // try {
     // const product = new Product(req.body);
     // await product.save();
     const { name, description, price } = req.body;
     res.status(201).json({ message: "Product added successfully", product });
    //} catch (error) {
      //res.status(500).json({ message: "Error adding product", error });
    //}
  });
  

module.exports = router;
