import React from 'react';

function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.images[0]} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;
