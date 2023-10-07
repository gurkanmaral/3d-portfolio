import React from 'react'
import { useState,useRef } from 'react'
import { motion } from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading,setLoading] = useState(false)

  

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10
    overflow-hidden '>
      <motion.div variants={slideIn('left',"tween",0.2,1)}
      className=" p-8 rounded-2xl flex flex-col items-center justify-center w-[100%]  ">
          <h1 className='text-[50px]'>Contact</h1>
          <div className='flex gap-[20px] mt-[50px] flex-col'>
            <div className='w-[500px] h-[100px] flex text-[30px] gap-[10px]
            justify-center items-center rounded-[10px] '>
              <EmailIcon style={{width:'30px',height:'30px'}} />
              <p>gurkanmaral1@gmail.com</p>
              
            </div>
            <div className='flex w-[100%] justify-center items-center'> 
            <div className='w-[200px] h-[100px] flex text-[30px] gap-[10px]
            justify-center items-center rounded-[10px] contact'>
              <a href="https://github.com/gurkanmaral"  target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={{width:'30px',height:'30px'}} />
              </a>
              <a href="https://github.com/gurkanmaral"  target="_blank" rel="noopener noreferrer">
              <p>Github</p>
              </a>
            </div>
            <div className='w-[200px] h-[100px]  flex text-[30px] gap-[10px]
            justify-center items-center rounded-[10px] contact'>
              <a href="https://www.linkedin.com/in/g%C3%BCrkan-maral-577b2420a/"
               target="_blank" rel="noopener noreferrer"
              >
                <LinkedInIcon  style={{width:'30px',height:'30px'}}/>
               
              </a>
              <a href="https://www.linkedin.com/in/g%C3%BCrkan-maral-577b2420a/">
               <p>Linkedin</p>
              </a>
             
            </div>
            </div>
           

          </div>
      </motion.div>
      
      <motion.div
      variants={slideIn('right',"tween",0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
       
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")