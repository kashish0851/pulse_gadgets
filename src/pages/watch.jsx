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
    name: 'Fire-Boltt Ninja Call Pro Plus',
    description: 'Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution',
    price:  1099,
    images: [
      assests.watch1_1,
      assests.watch1_2,
      assests.watch1_3,
      assests.watch1_4
    ]
  },
  {
    id: 2,
    name: 'Fastrack Limitless FS2 Pro',
    description: ' 1.96" Super AMOLED Display with Functional Crown and Resolution of 410X502 Nitrofast Charging|110+ Sports Modes',
    price: 1709,
    images: [
      assests.watch2_1,
      assests.watch2_2,
      assests.watch2_3,
      assests.watch2_4
    ]
  },
  {
    id: 3,
    name: 'Fire-Boltt 4G Pro VoLTE Calling Smart Watch- 2.02',
    description: 'TFT Display, 4G Nano-SIM GPS, Health Suite, Sports Modes, 400mAh Battery (Green)',
    price:  2525,
    images: [
      
      assests.watch4_1,
      assests.watch4_2,
      assests.watch4_3,
      assests.watch4_4
    ]
  },
  {
    id: 4,
    name: 'Noise New Macro Smart Watch',
    description: 'Metallic Finish BT Calling, Functional Crown, 7 Days Battery Life, Sleep Tracking, 200+ Watch Faces (Elite Black)',
    price: 2599,
    images: [
        assests.watch3_1,
        assests.watch3_2,
        assests.watch3_3,
        assests.watch3_4
    ]
  },
  {
    id: 5,
    name: 'Apple Watch SE (2nd Gen)',
    description: 'smart watch w/Starlight Aluminium Case & Starllight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, ',
    price: 34990,
    images: [
        assests.watch6_1,
        assests.watch6_2,
        assests.watch6_3,
        assests.watch6_4
    ]
  },
  {
    id: 6,
    name: 'Fastrack Dezire FX1 PRO ',
    description: 'Smartwatch with 1.43" AMOLED Display with 466 * 466 Pixel Resolution|SingleSync BT Calling|100+ Sports Modes and Watchfaces ',
    price: 3299,
    images: [
      
      assests.watch5_1,
      assests.watch5_2,
      assests.watch5_3,
      assests.watch5_4
    ]
  },
  {
    id: 7,
    name: 'Apple Watch Ultra 2 ',
    description: 'Smartwatch with Rugged Titanium Case & Indigo Alpine Loop Medium. Fitness Tracker, Precision GPS',
    price: 89900,
    images: [
      assests.watch7_1,
      assests.watch7_2,
      assests.watch7_3,
      assests.watch7_4
    ]
  },
  {
    id: 8,
    name: 'Samsung Galaxy Watch4 Classic',
    description: 'Enhanced Fitness tracking lets you track 90+ workouts; Powered by Samsung. Typical Usage Time (Hours): up to 40 Hours.',
    price: 7129,
    images: [
      assests.watch8_1,
      assests.watch8_2,
      assests.watch8_3,
      assests.watch8_4
    ]
  },
  {
    id: 9,
    name: 'Fire-Boltt Visionary 1.78"',
    description: 'AMOLED Bluetooth Calling Smartwatch with 368 * 448 Pixel Resolution, Rotating Crown & 60Hz Refresh Rate 100+ Sports Mode',
    price: 2298,
    images: [
      assests.watch9_1,
      assests.watch9_2,
      assests.watch9_3,
      assests.watch9_4
    ]
  },
  // Add more products here
];
const Watches= () => {
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
        <source src={assests.watch} type="video/mp4" />
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
export default Watches;