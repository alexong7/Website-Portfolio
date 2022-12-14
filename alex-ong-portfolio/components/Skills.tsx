import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative flex-col text-center md:text-left 
    xl:flex-row items-center max-w-[2000px] justify-center min-h-screen xl:space-y-20 mx-auto "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 xl:top-14 uppercase tracking-[3px] mr-[-3px] text-gray-500 text-[12px] mobile_md:text-sm">
        Hover over a skill for more info
      </h3>

      <div className="largeIPhone:mt-[0px] sm:mt-0 mt-10 grid grid-cols-4 gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
