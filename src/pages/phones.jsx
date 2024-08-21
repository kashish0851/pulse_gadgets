import React from 'react';
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import {CardDemo } from '../components/acernity-ui/category';
import { assests } from "../assets/assests";
import ScrollButton from '../components/scrollbar';
import ProductCard from './ProductCard';
import { TypewriterEffectSmoothDemo } from "../components/acernity-ui/typewriter-effectComp";
const products = [
  {
    id: 1,
    name: ' Apple iPhone 15 (256 GB)',
    description: 'A16 Bionic is incredibly efficient to help deliver great all-day battery life.',
    price:  81999,
    images: [
      assests.phone1_1,
      assests.phone1_2,
      assests.phone1_3,
      assests.phone1_4
    ]
  },
  {
    id: 2,
    name: 'Redmi Note 13 5G ',
    description: '(Arctic White, 6GB RAM, 128GB Storage)  7.mm Slimmest Note Ever | 108MP Pro-grade Camera',
    price: 16999,
    images: [
      assests.phone2_1,
      assests.phone2_2,
      assests.phone2_3,
      assests.phone2_4,
    ]
  },
  {
    id: 3,
    name: 'SAMSUNG GALAXY S23 FE 5G',
    description: 'Premium Design & Display: Experience the iconic design heritage of Galaxy S23.',
    price:  39999,
    images: [
      assests.phone3_1,
      assests.phone3_2,
      assests.phone3_3,
      assests.phone3_4,
    ]
  },
  {
    id: 4,
    name: 'Samsung Galaxy Z Flip6 5G AI Smartphone ',
    description: 'Galaxy AI is Here - Your self-expression tool, Galaxy Z Flip6, is more compact and eye-catching',
    price: 38990,
    images: [
      assests.phone4_1,
      assests.phone4_2,
      assests.phone4_3,
      assests.phone4_4,
    ]
  },
  {
    id: 5,
    name: 'OnePlus Nord CE 3 Lite 5G ',
    description: 'Chromatic Gray, 8GB RAM, 128GB Storage 08 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP',
    price: 17590,
    images: [
      assests.phone5_1,
      assests.phone5_2,
      assests.phone5_3,
      assests.phone5_4,
    ]
  },
  {
    id: 6,
    name: 'OnePlus Nord CE4 Lite 5G',
    description: '500 mAh Battery & Reverse Charging: Ditch the power bank and press play all day with Nord CE4 Lite’s gigantic 5,500 mAh battery.',
    price: 19999,
    images: [
      assests.phone6_1,
      assests.phone6_2,
      assests.phone6_3,
      assests.phone6_4,
    ]
  },
  {
    id: 7,
    name: 'Vivo Y200 5G Mobile',
    description: 'Camera: Dual 64MP+2MP Rear Camera | 16MP Selfie Camera Rear flash, Rear Aura Light with dual color temperature',
    price: 22999,
    images: [
      assests.phone7_1,
      assests.phone7_2,
      assests.phone7_3,
      assests.phone7_4,
    ]
  },
  {
    id: 8,
    name: 'Ipone 15',
    description: 'Cinematic mode now in 4K Dolby Vision up to 30 fps,16.95 cm (6.7-inch) Super Retina XDR display',
    price: 64999,
    images: [
      assests.phone8_1,
      assests.phone8_2,
      assests.phone8_3,
      assests.phone8_4,
    ]
  },
  {
    id: 9,
    name: 'Apple iPhone 15 Pro Max (256 GB) - Natural Titanium',
    description: 'CUSTOMIZABLE ACTION BUTTON — Action button is a fast track to your favorite feature.',
    price: 112990,
    images: [
      assests.phone9_1,
      assests.phone9_2,
      assests.phone9_3,
      assests.phone9_4,
    ]
  },
  // Add more products here
];
const Phones = () => {
  return (
    <div >
      <Navbar></Navbar>
      <CardDemo></CardDemo>
      <ScrollButton></ScrollButton>
    <div><TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo></div>
    <div className="container w-screen ">
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default Phones;