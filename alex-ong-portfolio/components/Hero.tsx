import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Alex", "<Photographer />", "<Creator />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center 
        text-center overflow-hidden"
    >
      <BackgroundCircles />
      <img
        src={HERO_IMG_URL}
        className="relative rounded-full h-32 w-32 mx-auto"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          Software Engineer
        </h2>
        <h1>
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#F7AB0A"></Cursor>
        </h1>
      </div>
    </div>
  );
}

const HERO_IMG_URL =
  "https://media-exp1.licdn.com/dms/image/C5603AQE7bCFn1fMYIg/profile-displayphoto-shrink_800_800/0/1663305564154?e=1669852800&v=beta&t=Wlbp-2aO0KH-fGrDgWU4skDpzyQtsa6H4tFQbM_Lh_A";

export default Hero;
