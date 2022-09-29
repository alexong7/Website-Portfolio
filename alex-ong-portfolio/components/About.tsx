import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex flex-col relative text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:ml-14">
        About
      </h3>

      <motion.img
        src={HERO_IMG_URL}
        initial={{
          x: -300,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-95 md:w-64
        xl:w-[500px] xl:h-[600px]
        "
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-[#F7AB0A]/40"> little</span>{" "}
          bit about me :)
        </h4>
        <p>
          I'm Alex! Current junior at Iowa State University with experience in
          full-stack development. I'm a creator at heart. Through building clean
          UI and capturing life's moments with my camera, I love to create.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;

const HERO_IMG_URL =
  "https://media-exp1.licdn.com/dms/image/C5603AQE7bCFn1fMYIg/profile-displayphoto-shrink_800_800/0/1663305564154?e=1669852800&v=beta&t=Wlbp-2aO0KH-fGrDgWU4skDpzyQtsa6H4tFQbM_Lh_A";
