import React from 'react';
import Navbar from '../components/navbar';
import Breadcrumb from '../components/breadcumb';
import Footer from '../components/footer';
import './about.css';
import { assests } from "../../src/assets/assests";
import { LayoutGridDemo } from '../components/acernity-ui/layout-gridComp';
import { CardStackDemo } from '../components/acernity-ui/card-stackComp';
function About() {

  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen flex flex-col justify-center">
{/*       
      <div className='breadcrumbs'>
        <Breadcrumb />
      </div> */}
      <div className="flex items-center justify-center flex-1">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left side - Info Card */}
          <div className="bg-cyan-400 rounded-lg shadow-lg p-10 h-500 md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Pulse Gadgets</h2>
            <p className="text-gray-600 leading-relaxed">
            Welcome to Pulse Gadgets, your one-stop shop for the latest and greatest in electronic devices. At Pulse Gadgets, we are passionate about bringing you the best technology products on the market. Our mission is to enhance your digital life by providing top-quality gadgets that combine innovation, functionality, and style.
            </p>
          </div>
          {/* Right side - Logo */}
          <div className="flex items-center justify-center md:w-1/2 rounded-full overflow-hidden">
            <img src={assests.logo} alt="Pulse Gadgets Logo" className="h-500" />
          </div>

        </div>
       
      </div>
   
      
      <div className='flex justify-center items-center '>
  <h1 className="text-3xl font-semibold text-gray-800 mb-4">Successfully delivered 10,000 plus orders</h1>
</div>

    </div>
    <CardStackDemo></CardStackDemo>
      <Footer />
    </>
    
  );
}

export default About;
