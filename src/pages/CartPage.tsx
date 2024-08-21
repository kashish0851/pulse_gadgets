import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Navbar from '../components/navbar';
import BuyNowButton from '../components/delButton';
import Footer from '../components/footer'
const CartPage = () => {
  const { cartItems, popupVisible } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
   <>
   <Navbar> </Navbar>
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h2>
      {popupVisible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
          Item added to cart!
        </div>
      )}
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-700">Your cart is empty.</p>
      ) : (
        <div>
          <div className="flex flex-wrap justify-center">
            {cartItems.map((item, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border dark:border-gray-700 transform transition duration-500 hover:scale-105">
                  
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 dark:text-white">{item.name}</div>
                    <p className="text-gray-700 text-base dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    <div className="font-bold text-lg mb-2 dark:text-white">₹{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-lg">
            <div className="text-2xl font-bold dark:text-white">
              Total Price: ₹{totalPrice.toFixed(2)}
            </div>
            {/* <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ${
                cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={cartItems.length === 0}
              onClick={() => alert('Order placed!')}
            >
              Place Order
            </button> */}
            <BuyNowButton></BuyNowButton> 
          </div>
        </div>
      )}
    </div>
   
    </>
  );
};

export default CartPage;
