import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import gif from "../assets/gif2.gif"

const About = () => {

  return (
    <div className='flex flex-row items-center gap-[20px] justify-center
    
    '>

    <motion.p
    variants={fadeIn("", "", 0.1,1)}
    className="mt-[70px] text-white text-[30px] max-w-3xl
    leading-[55px]  tracking-wide "
    >
      I've started my wep development journey on August 2022.
      After College, I did not know which field I want to work at.
      After some research I took Harvard's open course CS50 and enjoyed it.
      After that, I choose web development because I really liked designing and creating 
      web apps. I have experience in TypeScript, Javascript, React,Next.js, Node.js and Threejs.
    </motion.p>
    <motion.div 
    variants={fadeIn("left","spring", 0.1,1)}
    className='mt-20 flex  '>
      <img src={gif} alt="" className='rounded-[10px] ' />
    </motion.div>
    </div>

  )
}

export default SectionWrapper(About, "about");