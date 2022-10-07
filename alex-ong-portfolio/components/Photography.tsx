import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Photography } from "../typings";

type Props = {
  photos: Photography;
};

function Photography({ photos }: Props) {
  return (
    <motion.div
      className="h-screen relative flex flex-col overflow-hidden items-center 
    text-left md:flex-row justify-center max-w-full mx-auto"
    >
      <h3 className="absolute ml-5 top-24 uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Photography
      </h3>
      <h3 className="absolute top-32 md:top-14 uppercase tracking-[3px] text-[#F7AB0A]/30 text-sm">
        My Personal Gallery
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      >
        <div className="flex space-x-10 p-10 sm:p-20  snap-center">
          {photos.photos.map((photo, i) => (
            <img
              key={i}
              className=" snap-center h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] xl:h-[500px] xl:w-[500px]"
              src={urlFor(photo).url()}
            />
          ))}
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12" />
    </motion.div>
  );
}

export default Photography;

const HERO_IMG_URL =
  "https://media-exp1.licdn.com/dms/image/C5603AQE7bCFn1fMYIg/profile-displayphoto-shrink_800_800/0/1663305564154?e=1669852800&v=beta&t=Wlbp-2aO0KH-fGrDgWU4skDpzyQtsa6H4tFQbM_Lh_A";
