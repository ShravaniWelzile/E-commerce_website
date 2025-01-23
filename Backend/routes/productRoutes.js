import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

// Routes
router.get('/', getProducts); // Get all products
router.get('/:id', getProductById); // Get single product by ID
router.post('/', createProduct); // Add new product
router.put('/:id', updateProduct); // Update product
router.delete('/:id', deleteProduct); // Delete product

export default router;
