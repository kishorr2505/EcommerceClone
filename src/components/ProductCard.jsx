// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
      <div className="grid-wrapper">
        <div className="product-card">
        <img src={product.images} alt={product.title} className="product-image" />
        <div className="data">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        </div>
      </div>
      </div>
    );
  };
  
export default ProductCard;
