import react from 'react'

function Home() {
    return (
        <div>
            

            <div className="product-list">
                <h2>Products</h2>
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                            style={{ height: "300px", width: "300px" }}
                        />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;