import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute md:top-[-340px] top-[-53%] h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      <img src="/6.png" alt="Hero-img" className='aspect-square md:w-[200px] w-[100px] md:h-[200px] h-[100px] move-up-down absolute left-[13%] md:-bottom-[350px] md:block hidden z-50' />
    </div>
  );
};

export default Hero;
