import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
    bg-[#292929] p-10
    "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center
      "
        src={WORKIVA_URL}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineering Intern</h4>
        <p className="font-bold text-2xl mt-1">Workvia</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src={DART_PNG} />
          <img className="h-10 w-10 rounded-full" src={DART_PNG} />
        </div>
        <p className="uppercase py-5 text-gray-300">May 2022 - Present</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Bullet Point</li>
          <li>Bullet Point</li>
          <li>Bullet Point</li>
          <li>Bullet Point</li>
          <li>Bullet Point</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

const WORKIVA_URL =
  "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_eb1c3f9803c733f5a009095d7a69001c/workiva-workiva.png";

const DART_PNG = "https://avatars.githubusercontent.com/u/1609975?s=280&v=4";
