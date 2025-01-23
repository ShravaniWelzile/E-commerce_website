import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const products = [
  {
    name: 'Personalized Mug',
    image: '/images/mug.jpg',
    price: 15.99,
    description: 'A customizable mug perfect for any occasion.',
    category: 'Mugs',
  },
  {
    name: 'Gift Box',
    image: '/images/gift-box.jpg',
    price: 25.99,
    description: 'A premium gift box with surprises inside.',
    category: 'Gift Boxes',
  },
];

const seedDatabase = async () => {
  try {
    await Product.deleteMany(); // Clear existing data
    await Product.insertMany(products); // Add new products
    console.log('Database seeded successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();
