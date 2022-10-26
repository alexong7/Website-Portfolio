import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <div
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly
     items-center top-[30px]
    "
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-lg xl:text-2xl">
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
       scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 largeIPhone:mb-[60px]
      "
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
