import React from 'react';
import '../Components/shopstyles.css';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.title} className="product-image" />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <button className="buy-button">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
