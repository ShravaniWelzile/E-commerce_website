import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./Home.css";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5173/api/products")
      .then((response) => response.json())
      .then((data) => {setProducts(data);
      setIsLoading(false);})
      .catch((error) => { console.error("Error fetching products:", error);
        setIsLoading(false);});
  }, []);

  if (products.length === 0) {
    return <div className="loader">Loading products...</div>;
  }  

  if (isLoading) {
    return <div className="loader">Loading products...</div>;
  }
  
  const categorizedProducts = {
    "Greeting Cards": products.filter((p) => p.category === "cards"),
    "Greeting Boxes": products.filter((p) => p.category === "boxes"),
    Gifts: products.filter((p) => p.category === "gifts"),
    Scrapbooks: products.filter((p) => p.category === "scrapbooks"),
  };

  return (
    <div className="home-container">
      <Link to="/login" className="login-button">
        Login
      </Link>
      {Object.entries(categorizedProducts).map(([category, items]) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="product-list">
            <h2>Products</h2>
            {items.map((product) => (
              <div key={product._id} className="product-card">
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
      ))}
    </div>
  );
}

export default Home;
