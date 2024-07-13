"use client"
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import avoLogo from "../../public/avo.jpeg"

export const AnimatedHeader = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4, duration: 0.5, type: "spring", stiffness: 100 },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      className="relative flex flex-col items-center justify-center w-full mb-8"
    >
      
      <div
        className="w-20 h-20 mb-2"
        style={{
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <Image
          className="w-full h-full object-cover"
          src={avoLogo}
          alt="Avo logo"
          style={{
            borderRadius: "50%",
          }}
        />
      </div>
      <strong className="bg-yellow-400 px-1 text-5xl mb-2">Avo</strong>
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-10">
        Simple Banking.
      </h1>
    </motion.div>
  );
};
