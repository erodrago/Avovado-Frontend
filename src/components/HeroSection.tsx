"use client"
import React, { useEffect } from "react";
import { WobbleCard } from "./wobble-card";
import { motion, useAnimation } from "framer-motion";

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
    >
      <div className=" text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Bank with Ease
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-400">
            Experience seamless banking with Avo. Manage all your accounts in
            one place, make transactions effortlessly, and automate your
            savings.
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <WobbleCard
          containerClassName="min-h-[200px] bg-red-500 md:flex-1 md:min-w-[30%] lg:min-w-[25%]"
          className="flex flex-col items-center justify-center p-6"
        >
          <h2 className="text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Spend
          </h2>
          <span className="text-5xl my-4">💳</span>
          <p className="max-w-[26rem] text-center text-base md:text-lg text-neutral-200">
            Pay with ease.
          </p>
        </WobbleCard>
        <WobbleCard
          containerClassName="min-h-[200px] bg-blue-500 md:flex-1 md:min-w-[30%] lg:min-w-[25%]"
          className="flex flex-col items-center justify-center p-6"
        >
          <h2 className="text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Send
          </h2>
          <span className="text-5xl my-4">💸</span>
          <p className="max-w-[26rem] text-center text-base md:text-lg text-neutral-200">
            Move with ease.
          </p>
        </WobbleCard>
        <WobbleCard
          containerClassName="min-h-[200px] bg-green-500 md:flex-1 md:min-w-[30%] lg:min-w-[25%]"
          className="flex flex-col items-center justify-center p-6"
        >
          <h2 className="text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Save
          </h2>
          <span className="text-5xl my-4">💰</span>
          <p className="max-w-[26rem] text-center text-base md:text-lg text-neutral-200">
            Stash with ease.
          </p>
        </WobbleCard>
      </div>
    </motion.div>
  );
};

export default HeroSection;
