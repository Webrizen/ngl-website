"use client";
import React from "react";
import HeroImage1 from "@/assets/hero-images/1.png";
import HeroImage2 from "@/assets/hero-images/2.png";
import HeroImage3 from "@/assets/hero-images/3.png";
import HeroImage4 from "@/assets/hero-images/4.png";
import HeroImage5 from "@/assets/hero-images/5.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Hero = () => {
  return (
    <section className="py-32 md:pt-40 min-h-screen bg-[url('/bg.svg')] bg-cover bg-bottom bg-no-repeat md:overflow-x-clip flex justify-center items-center relative">
      <div className="mx-auto container h-full flex justify-center items-center w-full px-5 md:px-2">
        <div className="text-center flex flex-col items-center space-y-5">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black text-sm dark:text-white flex items-center"
          >
            <span>Neo Great Line</span>
          </HoverBorderGradient>
          <h1 className="text-4xl md:text-9xl text-gray-900 dark:text-white font-bold capitalize">
            We inspire <span className="text-ani">Growth</span> for your <span className="text-ani-now">business</span> brand
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-5xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti earum, qui odio,
            dolorum labore incidunt ad ab porro, provident excepturi molestiae corporis molestias nam accusamus.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#_" className="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Let's Talk</span>
            </a>
            <a href="#_" className="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Portfolio</span>
              <span className="relative invisible">Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
