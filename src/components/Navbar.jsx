import React from 'react'
import { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {styles} from '../styles'
import {menu,close} from '../assets'
import {navLinks} from '../constants'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Navbar = () => {

  const [active,setActive] = useState("")
  const [toggle,setToggle] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 navbar ${
      isScrolled ? 'active' : ''
    }`}
  >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link to="/"
          className='flex items-center gap-2'
          onClick={()=>{setActive("")
          window.scrollTo(0,0)} }>
           
            <p className='text-white text-[18px] font-bold
            cursor-pointer flex'>GURKAN <span className='sm:block hidden'>&nbsp;MARAL</span></p>
          </Link>
          <div className='hidden sm:flex gap-[30px] items-center '>
            <div className='flex flex-row gap-[10px]'>
              <a href="https://github.com/gurkanmaral"  target="_blank" rel="noopener noreferrer">
                  <GitHubIcon style={{width:'30px',height:'30px'}} />
              </a>
              <a href="https://www.linkedin.com/in/g%C3%BCrkan-maral-577b2420a/"  target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon style={{width:'30px',height:'30px'}} />
              </a>
              
            </div>
         
          <ul className='list-none hidden sm:flex flex-row gap-10'>
              {navLinks.map((link)=> (
                <li key={link.id} className={`${
                  active === link.title ? "text-white border-b-2"
                  : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={()=> setActive(link.title)}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
          </ul>
          </div>
           
          <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px]
                object-contain cursor-pointer' 
                onClick={()=> setToggle(!toggle)}
                />
                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient
                top-20 right-0 absolute mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
                  <ul className='list-none flex justifty-end items-start flex-col gap-4'>
                  {navLinks.map((link)=> (
                    <li key={link.id} className={`${
                      active === link.title ? "text-white"
                      : "text-secondary"
                    }  font-medium cursor-pointer text-[16px]`}
                    onClick={()=> {
                      setToggle(!toggle)
                      setActive(link.title)                      
                    }}>
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
              </ul>
                </div>
                
          </div>
      </div>
    </nav>
  )
}

export default Navbar