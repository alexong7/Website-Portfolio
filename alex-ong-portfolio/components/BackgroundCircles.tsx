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
      <div className="absolute border border-[#333333] rounded-full h-[70px] w-[70px] sm:h-[250px] sm:w-[250px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] sm:h-[300px] sm:w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] mt-52 animate-ping" />
      <div className="rounded-full border border-[F7AB0A] opacity-20 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] lg:h-[650px] lg:w-[650px] absolute mt-52 xl:mt-60 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[700px] w-[600px] sm:h-[800px] sm:w-[800px] mt-52 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
