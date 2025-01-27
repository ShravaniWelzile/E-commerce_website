import React from "react";

function Cart({ cart, removeFromCart }) {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handlePayment = () => {
        // Mock payment function
        alert(`Payment of $${totalPrice} successful!`);
    };

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
            {cart.length > 0 && (
                <button onClick={handlePayment}>Proceed to Payment</button>
            )}
        </div>
    );
}

export default Cart;
