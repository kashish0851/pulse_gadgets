"use client";
import { TypewriterEffectSmooth } from "../acernity-ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Upgrade",
    },
    {
      text: "Your",
    },
    {
      text: "World",
    },
    {
      text: "with",
    },
    {
      text: "Pulse Gadgets.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center  mt-20 h-[10rem]">
    <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
      The road to freedom starts from here
    </p>
    <TypewriterEffectSmooth words={words} />
    <div className="flex flex-col md:flex-row mt-4 md:mt-0 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
        Buy now
      </button>
      <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
        Home
      </button>
    </div>
  </div>
  );
}
