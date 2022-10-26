import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    justify-center items-center max-w-full mx-auto
    
    "
    >
      <h3 className="absolute  top-24 uppercase tracking-[20px] mr-[-20px] text-gray-500 text-lg sm:text-2xl">
        Projects
      </h3>

      <div
        className="relative mt-5 sm:mt-0 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin
      "
      >
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 sm:space-y-5 items-center
          justify-center p-10 md:p-44 h-screen xl:p-80
          "
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              className="largeIPhone:h-[150px] largeIPhone:w-[150px] h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] xl:h-[200px] xl:w-[200px] "
            />
            <div className="space-y-10 px-0">
              <h4
                className="underline decoration-[#F7AB0A]/50 text-lg sm:text-2xl xl:text-4xl tracking-[10px] mr-[-10px] 
              font-semibold text-center"
              >
                {project.title}
              </h4>

              <div className="flex justify-center space-x-5">
                {project.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    className="h-10 w-10 xl:h-14 xl:w-14 object-cover z-20"
                  />
                ))}
              </div>

              <p className="text-sm md:text-md text-center xl:text-lg">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;

const CY_PNG =
  "https://www.clipartmax.com/png/full/189-1890830_red-bird-clip-art.png";
