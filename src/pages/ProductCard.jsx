import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 border dark:border-gray-700 m-4 transform transition-transform hover:scale-105">
      <div className="relative overflow-hidden">
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img className="w-full h-55 object-cover" src={image} alt={`${product.name} ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 dark:text-white">{product.name}</div>
        <p className="text-gray-700 text-base dark:text-gray-300">
          {product.description}
        </p>
        <div className="font-bold text-lg mb-2 dark:text-white">₹{product.price}</div>
        <button 
          onClick={() => addToCart(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;