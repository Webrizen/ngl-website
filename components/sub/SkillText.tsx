"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box w-min whitespace-nowrap flex flex-row items-center justify-start py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] backdrop-blur-xl rounded-md"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Think better with Neo Great Line
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-3xl servicesh2 font-bold text-blue-950 dark:text-white md:text-5xl leading-tight mt-[10px] text-center mb-[15px]'
      >
        Making apps with <span className='bg-gradient-to-br from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent'>modern technologies</span>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  )
}

export default SkillText