import React from 'react';
import { ThreeDCardDemo } from '../components/acernity-ui/3d-cardComp';
import { WavyBackgroundDemo } from '../components/acernity-ui/WavyBackgroundComp';
import ResponsiveAppBar from '../components/navbar';
import Navbar from '../components/navbar';
import { FlipWordsDemo } from '../components/acernity-ui/flip-wordComp';
import { WobbleCardDemo } from '../components/acernity-ui/wobble-cardComp';
import { HeroScrollDemo } from '../components/acernity-ui/container-scroll-animationComp';
import { TypewriterEffectSmoothDemo } from '../components/acernity-ui/typewriter-effectComp';
import { InfiniteMovingCardsDemo } from '../components/acernity-ui/infinite-moving-cardsComp';
import {CardDemo } from '../components/acernity-ui/category';
import './home.css'
import ScrollButton from '../components/scrollbar';
import Footer from '../components/footer';

// Adjust the path as necessary

const HomePage = () => {
  return (
    <div >
    
        
      <div><WavyBackgroundDemo></WavyBackgroundDemo></div>
      <div> <FlipWordsDemo></FlipWordsDemo></div>
      <div> <CardDemo></CardDemo></div>
      <div> <WobbleCardDemo></WobbleCardDemo></div>
      {/* <div>
        <ThreeDCardDemo></ThreeDCardDemo>
      </div> */}
      <div> <HeroScrollDemo></HeroScrollDemo></div>
      {/* <div> <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo></div> */}

<div> <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo></div>

        <ThreeDCardDemo></ThreeDCardDemo>
       <ScrollButton></ScrollButton>
        <Footer></Footer>
      {/* <div> <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo></div> */}
</div>
    
     
  );
};

export default HomePage;
