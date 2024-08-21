import React from "react";
import { CardBody, CardContainer, CardItem } from "../acernity-ui/3d-card";
import { assests } from "../../assets/assests";

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-wrap gap-8 items-stretch ">
      <CardContainer className="inter-var flex-1 ">
        <CardBody className=" bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[10rem] sm:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Galaxy Watch6
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            A big, circular view on your wrist
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={assests.prod_home_1}
              height="300"
              width="300"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
          
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Buy now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var flex-1 ">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[15rem] sm:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Apple Watch Series 9
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Digital Crown with haptic feedback
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={assests.prod_home_2}
              height="300"
              width="300"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Buy now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var flex-1 ">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[15rem] sm:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Fossil Gen 6
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Display Wellness Edition Pink Smartwatch FTW4071
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={assests.prod_home_3}
              height="300"
              width="300"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Buy now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var flex-1">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[15rem] sm:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Samsung Galaxy Z Flip4 5G
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            (Bora Purple, 8GB RAM, 256GB Storage) 
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={assests.prod_home_4}
              height="350"
              width="300"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Buy now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var flex-1 ">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Samsung Galaxy Buds2 Pro
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            with Innovative AI features with Noise Cancellation 
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={assests.prod_home_5}
              height="300"
              width="300"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Buy now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var flex-1 ">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[15rem] sm:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Marshall Kilburn II
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Portable Bluetooth Speaker with 20+ hours of playtime,
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={assests.prod_home_6}
              height="300"
              width="300"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Buy now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var flex-1 ">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[15rem] sm:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Apple 2023 MacBook Pro
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            M3 Max chip with 16‑core CPU and 40‑core GPU
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={assests.prod_home_7}
              height="300"
              width="300"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Buy now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var flex-1">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[15rem] sm:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
           Sony WH-CH520
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Wireless On-Ear Bluetooth Headphones with Mic
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={assests.prod_home_8}
              height="300"
              width="300"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Buy now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var flex-1">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[15rem] sm:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
           Apple MacBook Air Laptop 
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
           13.3-inch/33.74 cm Retina Display
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={assests.lap_2_1}
              height="300"
              width="300"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Buy now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
    
  );
}
