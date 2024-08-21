"use client";
import React from "react";
import { WavyBackground } from "../acernity-ui/wavy-background";
import Navbar from "../navbar";

export function WavyBackgroundDemo() {
  return (
    <>
      <Navbar />
      

    <WavyBackground className="max-w-3xl mx-auto  pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Connecting You to the Latest Innovations
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Empowering Your Digital Life
        </p>
      </WavyBackground>
    </>
  );
}
