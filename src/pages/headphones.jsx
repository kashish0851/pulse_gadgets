import React from 'react';
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import {CardDemo } from '../components/acernity-ui/category';
import { assests } from "../assets/assests";
import ScrollButton from '../components/scrollbar';
import ProductCard from './ProductCard';
import { TypewriterEffectSmoothDemo } from "../components/acernity-ui/typewriter-effectComp";
import { cn } from "../utils/cn";
const products = [
  {
    id: 1,
    name: 'Sennheiser Accentum Wireless Bluetooth Headphones with Mic',
    description: 'Designed in Germany Audio, 50Hr Battery, 10 Min Quick Charge = 5Hr Playback, Hybrid Anc and 2Yr Warranty - Over Ear',
    price:  10989,
    images: [
      assests.hp1_1,
      assests.hp1_2,
      assests.hp1_3,
      assests.hp1_4
    ]
  },
  {
    id: 2,
    name: 'Noise Two Wireless On-Ear Headphones with 50 Hours Playtime',
    description: ' Low Latency(up to 40ms), 4 Play Modes, Dual Pairing, BT v5.3 (Bold Black)',
    price: 1709,
    images: [
      assests.hp2_1,
      assests.hp2_2,
      assests.hp2_3,
      assests.hp2_4
    ]
  },
  {
    id: 3,
    name: 'Srhythm NiceComfort 95 Hybrid Noise Cancelling Headphones',
    description: 'Wireless Bluetooth Headset with Transparency Mode,HD Sound',
    price:  8549,
    images: [
      assests.hp3_1,
      assests.hp3_2,
      assests.hp3_3,
      assests.hp3_4
    ]
  },
  {
    id: 4,
    name: 'JBL Tune 510BT, On Ear Wireless Headphones with Mic, up to 40 Hours',
    description: 'Playtime, Pure Bass, Quick Charging, Dual Pairing, Bluetooth 5.0 ',
    price: 2599,
    images: [
      assests.hp4_1,
      assests.hp4_2,
      assests.hp4_3,
      assests.hp4_4
    ]
  },
  {
    id: 5,
    name: 'Noise Newly Launched 4 Wireless On-Ear Headphones',
    description: 'Ear Headphones with 70H Playtime, ENC, 40mm Driver, Low Latency(up to 40ms), Dual Pairing, BT v5.4',
    price: 34990,
    images: [
      assests.hp5_1,
      assests.hp5_2,
      assests.hp5_3,
      assests.hp5_4
    ]
  },
  {
    id: 6,
    name: 'ZEBRONICS Thunder Bluetooth 5.3 Over ear Wireless Headphones ',
    description: ' ear Wireless Headphones with 60H Backup, Gaming Mode, Dual Pairing, ENC, AUX, Micro SD, Voice Assistant',
    price: 698,
    images: [
      assests.hp6_1,
      assests.hp6_2,
      assests.hp6_3,
      assests.hp6_4
    ]
  },
  {
    id: 7,
    name: 'boAt Rockerz 551Anc Hybrid Active Noise',
    description: 'Headphones with Up to 100H Playtime, ASAP Charge, Ambient Sound Mode &Dual Eq Modes, Enx Technology(Stellar Black)',
    price: 2598,
    images: [
      assests.hp7_1,
      assests.hp7_2,
      assests.hp7_3,
      assests.hp7_4
    ]
  },
  {
    id: 8,
    name: 'Srhythm NC25 Wireless Headphones',
    description: 'Digital Active Noise Cancelling Lightweight Noise Cancelling Headset Over-Ear with Low Latency,Game Mode',
    price: 7129,
    images: [
      assests.hp8_1,
      assests.hp8_2,
      assests.hp8_3,
      assests.hp8_4
    ]
  },
  {
    id: 9,
    name: 'boAt Rockerz 550 ',
    description: 'Over Ear Bluetooth Headphones with Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation(Black)',
    price: 2298,
    images: [
      assests.hp9_1,
      assests.hp9_2,
      assests.hp9_3,
      assests.hp9_4
    ]
  },
  // Add more products here
];
const HeadPhones= () => {
  return (
    <div >
      <Navbar></Navbar>
      <div
      className={cn(
        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
        "bg-cover",
        "before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
      )}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        // Fallback image
      >
        <source src={assests.headphone_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
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
    </div>
  );
}
export default HeadPhones;