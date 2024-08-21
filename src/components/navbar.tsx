import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Import your CSS file for styling
import Breadcrumb from '../components/breadcumb'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="bg-black p-2 fixed w-full z-50 border-b-2 border-white">
      <div className=" flex justify-between ">
      <div className="flex items-center justify-start">
          {/* Use a div with a background image for the logo */}
          <div className="logo"></div>
          <div className="text-white text-lg font-bold">PulseGadgets</div>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`${
  isOpen ? 'block' : 'hidden'
} lg:flex lg:items-center  lg:space-x-10 `}>
  <NavLink to='/home' className="block text-white text-lg font-bold">Home</NavLink>
  <div className="group inline-block relative">
    <NavLink to='/home' className="text-white py-2 text-lg font-bold">Shop</NavLink>
    <div className="absolute hidden text-white group-hover:block bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg border border-gray-700 w-56">
        <NavLink to='/laptop' className="block px-4 py-2 text-white text-lg font-bold hover:bg-gray-700 transition duration-300" >Laptops</NavLink>
        <NavLink to='/phone' className="block px-4 py-2 text-white text-lg font-bold hover:bg-gray-700 transition duration-300">Phone</NavLink>
        <NavLink to='/headphone' className="block px-4 py-2 text-white text-lg font-bold hover:bg-gray-700 transition duration-300">Headphones</NavLink>
        <NavLink to='/watch' className="block px-4 py-2 text-white text-lg font-bold hover:bg-gray-700 transition duration-300">Watch</NavLink>
        {/* <NavLink to='/other' className="block px-4 py-2 text-white text-lg font-bold hover:bg-gray-700 transition duration-300">Other</NavLink> */}
      </div>
  </div>
  <a href="/about" className="block text-white py-2 text-lg font-bold lg:py-0">About</a>
  <a href="/contact" className="block text-white py-2 text-lg font-bold lg:py-0">Contact</a>
  <NavLink to='/cart' className="text-white py-2 text-lg font-bold">Cart</NavLink>
</div>

      </div>
      
    </nav>
   
    </>
    
  );
};

export default Navbar;
