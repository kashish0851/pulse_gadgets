"use client";
import React from "react";
import { cn } from "../../utils/cn";
import { FlipWordsDemo } from "./flip-wordComp";
import { assests } from "../../assets/assests";

export function CardDemo() {
  return (
    <div className="flex flex-wrap gap-2  mb-7">
    
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
       
      >
        <source src={assests.iphone_video_home} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
    </div>
  );
}
export default CardDemo();
