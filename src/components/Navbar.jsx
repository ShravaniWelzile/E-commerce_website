import React from "react";
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import Cart from "./Cart";
import { useState } from "react";

function Navbar({ user }) {
    const [cartCount, setCartCount] = useState(0);
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Site Logo" />
                <h1>Fluento Shopping</h1>
            </div>
            <div className="nav-links" style={{ color: "white" }}>
                <Link to="/home" className="nav-link">Home</Link>
                <b> | </b>
                <Link to="/cart" className="nav-link">Cart</Link>
                <b> | </b>
                <Link to="/account" className="nav-link">Account</Link>
                <b> | </b>
                <Link to="/help" className="nav-link">About</Link>
            </div>
            <div className="cart-icon">
                🛒 Cart: <span>{cartCount}</span>
            </div>
        </nav>
    )
}

export default Navbar
