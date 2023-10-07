import React from 'react'
import {motion} from 'framer-motion'
import gif from "../assets/gif2.gif"
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {

  return (
     <section className='relative w-full h-screen mx-auto '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap-5`}>
        <div className=''>
          <h1 className={`${styles.heroHeadText}`}>Hi,I'm <span className='orange_gradient '>Gurkan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a web developer.
          </p>
        </div>
        <div className='hero'>
            <img src="" alt="" className='hero-1'  />
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero