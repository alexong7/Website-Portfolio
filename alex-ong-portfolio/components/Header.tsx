import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header
      className="sticky top-0 flex items-start 
        justify-between max-w-7xl mx-auto z-20
        p-5
        "
    >
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          url="https://www.linkedin.com/in/alexong1/"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://github.com/alexong7"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          className="flex flex-row items-center text-gray-300 cursor-pointer"
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex">Get in Touch</p>
        </motion.div>
      </Link>
    </header>
  );
}
