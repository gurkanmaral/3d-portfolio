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
    lg:flex-row md:flex-col sm:flex-col about
    '>

    <motion.p
    variants={fadeIn("", "", 0.1,1)}
    className="mt-[70px] text-white text-[30px] max-w-3xl
    leading-[55px]  tracking-wide about-text "
    >
       I started my web development journey in August 2022. After college, I wasn't sure which field I wanted to work in. After some research, I decided to take Harvard's open course, CS50, and I really enjoyed it. As a result, I chose web development because I found it captivating to design and create web applications. I have experience in TypeScript, JavaScript, React, Next.js, Node.js, Three.js, React Native, Laravel, Vue and Nuxt.
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