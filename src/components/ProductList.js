import React from 'react';
import './ProductList.css'; // Make sure to import your CSS

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product._id} className="product-card">
          <img src={product.images[0]} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <a href={`/product/${product._id}`} className="btn">Buy Now</a>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
