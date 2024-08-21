"use client";
import React from "react";
import { ContainerScroll } from "../acernity-ui/container-scroll-animation";
import { assests } from "../../assets/assests";
// import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden h-[1000px]  md:mt-0">
        
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Ipad Pro
              </span>
            </h1>
          </>
        }
      >
        <img
          src={assests.ipad}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

