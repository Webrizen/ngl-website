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

const Hero = () => {
  return (
    <section className="py-32 sm:py-36 lg:py-40 min-h-screen md:overflow-x-clip overflow-x-hidden flex items-center relative">
      <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-purple-600/70
  backdrop-filter blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-purple-600/70
  backdrop-filter blur-3xl opacity-50" />
      <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-purple-400/5 right-0
  -translate-y-[40%] translate-x-[40%] top-0">
        <div className="inset-[10%] rounded-full bg-gradient-to-l from-purple-400/20">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-purple-400/30" />
        </div>
      </div>
      <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-purple-400/5 left-0
  translate-y-[40%] -translate-x-[40%] bottom-0">
        <div className="inset-[10%] rounded-full bg-gradient-to-r from-purple-400/40">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-purple-400/50" />
        </div>
      </div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }} className="absolute md:top-1/2 top-[70%] left-[10%] md:w-[200px] w-[80px] h-auto z-50 move-up-down">
        <Image src={HeroImage1} placeholder="blur" alt="hero-image" width={500} height={500} />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }} className="absolute md:bottom-1/2 top-[10%] right-[10%] md:w-[200px] w-[80px] h-auto z-50 move-up-down-slow">
        <Image src={HeroImage2} placeholder="blur" alt="hero-image" width={500} height={500} />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }} className="absolute top-[20%] left-[15%] md:w-[200px] w-[80px] h-auto -z-10 filter blur-md move-up-down-slow-bg">
        <Image src={HeroImage3} placeholder="blur" alt="hero-image" width={500} height={500} />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }} className="absolute bottom-[20%] right-[15%] md:w-[200px] w-[80px] h-auto -z-10 filter blur-lg move-up-down-slow-bg">
        <Image src={HeroImage4} placeholder="blur" alt="hero-image" width={500} height={500} />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }} className="absolute md:top-[10%] bottom-[50%] right-[40%] md:w-[200px] w-[80px] h-auto -z-10 filter blur-sm move-up-down-slow-bg">
        <Image src={HeroImage5} placeholder="blur" alt="hero-image" width={500} height={500} />
      </motion.div>
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center flex flex-col items-center space-y-10">
          <span className="border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300">
            Creativity in mind
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize">
            We inspire Growth for your business brand
          </h1>
          <p className="text-base text-gray-700 dark:text-gray-300 text-center max-w-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti earum, qui odio,
            dolorum labore incidunt ad ab porro, provident excepturi molestiae corporis molestias nam accusamus.
          </p>
          <div className="flex justify-center">
            <Link href="#" className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-purple-700 text-white hover:bg-opacity-80">
              Let's talk
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
