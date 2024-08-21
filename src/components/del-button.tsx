import React, { useState } from 'react';
import './del-styles.css';

const AddToCartButton = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000); // Reset to default state after animation
  };

  return (
    <div className="add-to-cart-container">
      <button
        className={`add-to-cart-button ${isAddedToCart ? 'hidden' : ''}`}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      {isAddedToCart && (
        <div className="truck"></div>
      )}
    </div>
  );
};

export default AddToCartButton;
