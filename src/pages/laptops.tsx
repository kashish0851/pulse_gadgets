"use client";
import React from "react";
import { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';
import Navbar from "../components/navbar";
import { TypewriterEffectSmoothDemo } from "../components/acernity-ui/typewriter-effectComp";
import { CardBody, CardContainer, CardItem } from "../components/acernity-ui/3d-card";
import AddToCartButton from "../components/del-button";
import ProductCard from './ProductCard';
import Flickity from 'flickity';
import './laptop.css';
import 'flickity/css/flickity.css';
import Footer from '../components/footer';
import { assests } from "../assets/assests";
import ScrollButton from '../components/scrollbar';
import Breadcrumb from '../components/breadcumb';
const products = [
  {
    id: 1,
    name: 'Apple MacBook Air Laptop ',
    description: '13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID',
    price:  71990,
    images: [
      assests.lap_2_1,
      assests.lap_2_2,
      assests.lap_2_3,
      assests.lap_2_4
    ]
  },
  {
    id: 2,
    name: 'Acer [Smartchoice] Aspire Lite',
    description: 'AMD Ryzen 3 5300U Premium Thin and Light Laptop AL15-41 with 39.62 cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.6 KG',
    price: 28990,
    images: [
      assests.lap_3_1,
      assests.lap_3_2,
      assests.lap_3_3,
      assests.lap_3_4
    ]
  },
  {
    id: 3,
    name: 'Acer Nitro V Gaming Laptop ',
    description: 'Intel Core i5-13420H with RTX 2050 Graphics 4 GB VRAM, 144Hz Display ,15.6"(39.6cms) FHD ANV15-51',
    price:  69990,
    images: [
      assests.lap_4_1,
      assests.lap_4_2,
      assests.lap_4_3,
      assests.lap_4_4
    ]
  },
  {
    id: 4,
    name: 'Lenovo IdeaPad Slim 1 AMD Ryzen 5 5500U 15.6" HD Thin and Light Laptop',
    description: '16GB/512GB SSD/Windows 11 Home/MS Office 2021/1Yr ADP Free/Cloud Grey/1.61Kg',
    price: 38990,
    images: [
      assests.lap_1_1,
      assests.lap_1_2,
      assests.lap_1_3,
      assests.lap_1_4
    ]
  },
  {
    id: 5,
    name: 'Acer Aspire Lite AMD Ryzen 5  5500U',
    description: 'Premium Thin and Light Laptop (16 GB RAM/512 GB SSD/Windows 11 Home) AL15-41, 39.62 cm (15.6") Full HD',
    price: 34990,
    images: [
      assests.lap_5_1,
      assests.lap_5_2,
      assests.lap_5_3,
      assests.lap_5_4
    ]
  },
  {
    id: 6,
    name: 'Acer ALG 12th Gen Intel Core i5 Gaming',
    description: 'Laptop (16GB RAM/512GB SSD/4GB RTX 2050 Graphics/60Hz/Win11Home/Wifi 6) AL15G-52, 39.62cm',
    price: 56990,
    images: [
      assests.lap_6_1,
      assests.lap_6_2,
      assests.lap_6_3,
      assests.lap_6_4
    ]
  },
  {
    id: 7,
    name: 'Lenovo LOQ Intel Core i5',
    description: '15.6" (39.6cm) 144Hz 300Nits FHD Gaming Laptop (12GB/512GB SSD/Win 11/NVIDIA RTX 2050 4GB/100%',
    price: 56990,
    images: [
      assests.lap_7_1,
      assests.lap_7_2,
      assests.lap_7_3,
      assests.lap_7_4
    ]
  },
  {
    id: 8,
    name: 'ASUS VivoBook 15',
    description: 'hin and Light Laptop, Dual Core Intel Celeron N4020, 15.6-inch (39.62 cm) HD, (4GB RAM/256GB SSD/Integrated',
    price: 21530,
    images: [
      assests.lap_8_1,
      assests.lap_8_2,
      assests.lap_8_3,
      assests.lap_8_4
    ]
  },
  {
    id: 9,
    name: 'Apple 2022 MacBook Air laptop',
    description: '34.46 cm (13.6-inch) Liquid Retina display, 8GB RAM, 512GB SSD storage, backlit keyboard, 1080p FaceTime HD camera. ',
    price: 112990,
    images: [
      assests.lap_9_1,
      assests.lap_9_2,
      assests.lap_9_3,
      assests.lap_9_4
    ]
  },
  // Add more products here
];
const Laptops = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const flkty = new Flickity(carouselRef.current, {
      cellAlign: 'left',
      contain: true,
      autoPlay: true,
      pauseAutoPlayOnHover: false,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: true,
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
      }
      
    });

    return () => {
      flkty.destroy();
    };
  }, []);
  return (
    <>
    <Navbar />
  
   
    {/* <div className="flex flex-wrap gap-2  mb-7"> */}
    <div className="hero-slider " ref={carouselRef} >
      <div
        className="carousel-cell"
        style={{
          backgroundImage: `url(${assests.lap_hero_1})`,
        }}
      >
        <div className="overlay"></div>
        
      </div>
      <div
        className="carousel-cell"
        style={{
          backgroundImage:  `url(${assests.lap_hero_2})`,
        }}
      >
        <div className="overlay"></div>
        <div className="inner">
          
          <h2 className="title">PulseGadgets</h2>
          <a href="https://flickity.metafizzy.co/" target="_blank" rel="noopener noreferrer" className="btn">Buy Now</a>
        </div>
      </div>
      <div
        className="carousel-cell"
        style={{
          backgroundImage:  `url(${assests.lap_hero_3})`,
        }}
      >
        <div className="overlay"></div>
        
      </div>
    </div>

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
    </>
  );
}

export default Laptops;
