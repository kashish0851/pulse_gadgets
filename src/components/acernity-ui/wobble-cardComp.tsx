"use client";
// import Image from "next/image";
import React from "react";
import { WobbleCard } from "../acernity-ui/wobble-card";
import { assests } from "../../assets/assests";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full ">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          iPhone 15
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          The innovative new design features back glass that has colour infused throughout the material. A custom dual-ion exchange process for the glass and an aerospace-grade aluminium enclosure help make iPhone 15 incredibly durable.
          </p>
        </div>
        <img
            src={assests.wobble_1}
            width={200}
            height={200}
            alt="linear demo image"
            style={{ position: 'absolute', top: 39, right: 20 }}
            />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-90  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Buy AirPods Max
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Up to 20 hours of listening time with a single charge.
        </p>
        <img
            src={assests.wobble_2}
            width={200}
            height={200}
            alt="linear demo image"
            style={{ position: 'absolute', right: 20, bottom:0 }}
            />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          MacBook Air
          13" with M2 chip
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Portable design — Lightweight and less than two centimeters thin, so you can take MacBook Air anywhere you go.
          </p>
        </div>
        <img
            src={assests.wobble_3}
            width={400}
            height={400}
            alt="linear demo image"
            style={{ position: 'absolute', top: 20, right: 20 }}
            />
      </WobbleCard>
    </div>
  );
}
