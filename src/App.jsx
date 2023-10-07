import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Feedbacks,Hero,Navbar,Tech,Works,
  StarsCanvas} from './components'
  
const  App = () => {


  return (
  
    <BrowserRouter>
    <div className="relative z-0 ">
       <div className=" bg-cover bg-no-repeat bg-center">
       <StarsCanvas />
         <Navbar />
         <Hero />
       </div>
       <About />    
       <Tech />
       <Works />
       <div className="relative z-0">
         <Contact />
        
       </div>
    </div>
    </BrowserRouter>
  )
}

export default App
