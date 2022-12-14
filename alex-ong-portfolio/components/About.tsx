import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col relative text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[15px] mr-[-15px] text-gray-500 text-2xl md:ml-14">
        About
      </h3>

      <motion.img
        src={urlFor(pageInfo?.profilePic).url()}
        initial={{
          x: -150,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 mt-10 xs:mt-0 flex-shrink-0 h-36 w-36 largeIPhone:h-[150px] largeIPhone:w-[150px] mobile_md:h-36 mobile_md:w-36 xs:h-48 xs:w-48 sm:w-52 sm:h-52 rounded-full 
        object-cover md:rounded-lg md:h-95 md:w-64
        xl:w-[400px] xl:h-[500px]
        "
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="space-y-2 xs:space-y-5 px-0 md:px-10 mt-8 xs:mt-0"
      >
        <h4 className="text-2xl sm:text-4xl font-semibold">
          A <span className="underline decoration-[#F7AB0A]/40"> Little</span>{" "}
          Bit About Me
        </h4>
        <p className="text-[12px] largeIPhone:text-[13px] largeIPhone:leading-[22px] text-left mobile_md:text-[13px] sm:text-md lg:text-[17px] leading-4 mobile_md:leading-5 sm:leading-7">
          {pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;

const HERO_IMG_URL =
  "https://media-exp1.licdn.com/dms/image/C5603AQE7bCFn1fMYIg/profile-displayphoto-shrink_800_800/0/1663305564154?e=1669852800&v=beta&t=Wlbp-2aO0KH-fGrDgWU4skDpzyQtsa6H4tFQbM_Lh_A";
