import React from 'react';
import './delButton.css'
function BuyNowButton() {
  return (
    <div className="flex justify-center">
      <button className="relative px-8 py-3 bg-black text-white font-semibold rounded-md overflow-hidden group">
        <span className="absolute inset-0 w-full h-full bg-black transition-all duration-300 transform translate-x-full group-hover:translate-x-0 ease-in-out"></span>
        <span className="relative flex items-center">
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">🚚</span>
          <span className="relative group-hover:opacity-0 transition-opacity duration-300 ease-in-out">Buy Now </span>
        </span>
      </button>
    </div>
  );
}

export default BuyNowButton;
