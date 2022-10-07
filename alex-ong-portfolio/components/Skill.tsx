import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(skill.image).url()}
        className="rounded-full  border-gray-500 object-cover w-14 h-14 xl:h-20 xl:w-20
        filter group-hover:grayscale transition duration-300 ease-in-out 
        "
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
      ease-in-out group-hover:bg-white h-14 w-14 xl:h-20 xl:w-20 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-md text-center font-bold text-black opacity-100">
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

const JAVA_LOGO =
  "https://png2.cleanpng.com/dy/de71ae8adae94f796c358fee58c8760e/L0KzQYm3VMI0N5VBj5H0aYP2gLBuTfpifpIyiud3dHnwdX7sjwZqepDzhdd3dD3mf773lgRmel5ue9H3cz3tccfoTgBtaaVrRdxqdnGwRbLrhcMxPmRrS6MBMUCxQIq7WME1PWc2TaQ9NUGzSIKCWck2P191htk=/kisspng-java-runtime-environment-computer-icons-java-platf-java-5ade3063f31610.0948145615245108199957.png";
