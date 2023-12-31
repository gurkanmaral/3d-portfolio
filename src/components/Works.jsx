
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'

const isMobile = window.innerWidth <= 768;

const ProjectCard = ({index,name,description,tags,
  image,source_code_link,demo})=>{
    return ( 
      <motion.div variants={isMobile ? {} : fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div     
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px]
        w-full ">
            <div className='relative w-full h-[230px]'>
              <img src={image} alt={name}
              className="w-full h-full object-cover rounded-2xl" />
              <div className='absolute inset-0 flex justify-end m-3
              card-img_hover'>
                  <div onClick={()=> window.open(source_code_link,"_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex
                  justify-center items-center cursor-pointer">
                    <img src={github} alt="github"
                    className='w-1/2 h-1/2 object-contain' />

                  </div>
                  
              </div>       
            </div>
            <div className='mt-5 '>
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                <div className='h-[100px] overflow-x-auto'>
                  <p className='mt-2 text-secondary 
                  text-[14px]'>{description}</p>
                </div>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag)=>(
                <p key={tag.name} className={`text-[14px]
                ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            {demo && (
              <div className='mt-4 text-white font-bold cursor-pointer'>
              <div onClick={()=> window.open(demo,"_blank")}>
                    <p>LIVE DEMO</p>
              </div>
            </div>
            )}
        </div>
      </motion.div>
    )
}

const Works = () => {
  return (
    <div className=''> 
      <motion.div variants={textVariant()} className='flex justify-center '>
        <h2 className={styles.sectionHeadText}>
          My Projects
        </h2>
    </motion.div>

    <div className='w-full flex justify-center '>
      <motion.p
      variants={isMobile ? {} : fadeIn("up", "spring", 0.1, 1)}
      className="mt-3 text-white text-[20px]  
      leading-[30px] tracking-wider  "
      >
         Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
      </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project,index)=>(
        <ProjectCard key={`project-${index}`}
        index={index}
        {...project}     
        />
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(Works,"work")