import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: pageInfo.typewriterWords,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center 
        text-center overflow-hidden"
    >
      <BackgroundCircles />
      <img src={HERO_IMG_URL} className="relative rounded-full h-36 w-36 " />
      <div className="z-20">
        <h2 className="text-[10px] tracking-[10px] sm:text-sm uppercase text-gray-500 pb-2 sm:tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="sm:text-5xl text-3xl lg:6xl font-semibold px-10">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#F7AB0A"></Cursor>
        </h1>

        <div className="pt-10 sm:pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#photography">
            <button className="heroButton">Photography</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const HERO_IMG_URL =
  "https://media-exp1.licdn.com/dms/image/C5603AQE7bCFn1fMYIg/profile-displayphoto-shrink_800_800/0/1663305564154?e=1669852800&v=beta&t=Wlbp-2aO0KH-fGrDgWU4skDpzyQtsa6H4tFQbM_Lh_A";

export default Hero;
