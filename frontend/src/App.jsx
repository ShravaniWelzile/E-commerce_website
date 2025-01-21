

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './pages/HomePage';
//import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
//import CheckoutPage from './pages/CheckoutPage';
import EGiftCardPage from './pages/EGiftCardPage';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route path="/cart" element={<CartPage />} />
    
        <Route path="/egift-card" element={<EGiftCardPage />} />
      </Routes>
    </div>
  );
};

export default App;
