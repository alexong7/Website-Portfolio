import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[50px] w-[50px] sm:h-[250px] sm:w-[250px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[80px] w-[80px] sm:h-[300px] sm:w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] mt-52 animate-ping" />
      <div className="rounded-full border border-[F7AB0A] opacity-20 h-[375px] w-[375px] sm:h-[500px] sm:w-[500px] lg:h-[650px] lg:w-[650px] absolute mt-52 xl:mt-60 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] sm:h-[800px] sm:w-[800px] mt-52 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
