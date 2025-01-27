import React from "react";


function Cart({ cart, removeFromCart }) {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${totalPrice}</h3>
        </div>
    );
}

export default Cart;