import React from "react";
import { FlipWords } from "../acernity-ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Empower", "Enhance", "Transform", "Elevate"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
       We <FlipWords words={words} /> <br></br>
        Your Tech Journey with PulseGadgets
      </div>
    </div>
  );
}
