import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ExperienceCard({ experience }: Props) {
  const startDate = new Date(experience.dateStarted);
  const endDate = new Date(experience.dateEnded);

  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 
    w-[400px] md:w-[600px] xl:w-[750px] snap-center bg-[#292929] px-14 py-3 sm:py-5 sm:p-5 xl:p-10 opacity-40 hover:opacity-100
    cursor-pointer transition-opacity duration-300 "
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className=" h-16 w-16  sm:h-20 sm:w-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10 flex flex-col items-center">
        <h4 className=" text-sm sm:text-md xl:text-lg font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-sm sm:text-md xl:text-lg mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-6 w-6 sm:h-8 sm:w-8  xl:h-10 xl:w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-1 xs:py-5 text-gray-300 text-[10px] xs:text-sm xl:text-md">
          {months[startDate.getMonth()]} {startDate.getFullYear()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : months[endDate.getMonth()] + " " + endDate.getFullYear()}
        </p>
        <ul className="list-disc space-y-4 ml-5  text-[11px] sm:text-[12px] md:text-[14px]">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

const WORKIVA_URL =
  "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_eb1c3f9803c733f5a009095d7a69001c/workiva-workiva.png";

const DART_PNG = "https://avatars.githubusercontent.com/u/1609975?s=280&v=4";
