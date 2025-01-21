import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import { Row, Col, Carousel, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import NavbarComponent from '../Components/Navbar';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetching products and categories from the API
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFeaturedProducts(data.slice(0, 5)); // Choose first 5 products for the carousel
        setSearchResults(data);
        const allCategories = Array.from(new Set(data.map((product) => product.category)));
        setCategories(allCategories); // Get unique categories
      })
      .catch((err) => console.error(err));
  }, []);

  // Handle search bar input
  const handleSearch = (query) => {
    if (query) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults(products);
    }
  };

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setSearchResults(products); // Show all products
    } else {
      const filteredProducts = products.filter((product) => product.category === category);
      setSearchResults(filteredProducts);
    }
  };

  return (
    <div className="container">
      <NavbarComponent onSearch={handleSearch} />

      <Row>
        {/* Sidebar Filter */}
        <Col md={3} className="d-none d-md-block">
          <div className="sidebar">
            <h3>Categories</h3>
            <Form>
              <Button
                variant="outline-primary"
                onClick={() => handleCategoryFilter('')}
                className="mb-2"
              >
                All Products
              </Button>
              {categories.map((category) => (
                <Button
                  variant="outline-primary"
                  onClick={() => handleCategoryFilter(category)}
                  className="mb-2"
                  key={category}
                >
                  {category}
                </Button>
              ))}
            </Form>
          </div>
        </Col>

        {/* Main Product List Section */}
        <Col md={9}>
          {/* Featured Products Carousel */}
          <Carousel className="my-5">
            {featuredProducts.map((product) => (
              <Carousel.Item key={product._id}>
                <img
                  className="d-block w-100"
                  src={product.image}
                  alt={product.name}
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <a href={`/product/${product._id}`} className="btn btn-primary">
                    View Details
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Product Search Bar */}
          <InputGroup className="mb-4">
            <FormControl
              placeholder="Search products..."
              onChange={(e) => handleSearch(e.target.value)}
            />
          </InputGroup>

          {/* Products Grid */}
          <h1 className="text-center my-5">Welcome to Gift Shoppe</h1>
          <Row>
            {searchResults.map((product) => (
              <Col xs={12} sm={6} md={4} key={product._id} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
