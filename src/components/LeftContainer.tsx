// import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import profilePics from '../assets/WhatsApp Image 2024-04-29 at 02.07.34_86d5abc8.jpg'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"
import { FaHandPeace } from "react-icons/fa";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Project from "../pages/Project"
// import { gsap } from "gsap";


// gsap.to(".", { rotation: 27, x: 100, duration: 1 });

// type Props = {}

const LeftContainer = () => {
  return (
    <>
      <section className=' xl:ml-10 '>
        <div className='xl:ml-10  mt-5'>
            <motion.h1 className= 'uppercase xl:text-[2.2rem] xl:ml-0 text-[2rem] ml-5  sm:text-[2rem]' initial={{y:-200 ,opacity:0}} animate={{y: 0 ,opacity:1}} transition={{duration: 2}} >
            olawuni peace oladeji
            </motion.h1>  
            <motion.h2 className='uppercase ml-5 xl:ml-0' initial={{x:200 ,opacity:0}} animate={{x: 0 ,opacity:1}} transition={{duration: 2}}>front end developer</motion.h2> <br />
            <h3 className='uppercase underline xl:ml-0 ml-5 '>about</h3> <br />
            <h4 className=' ml-5 xl:ml-0 '> <span className="flex items-center gap-1">Hello World <FaHandPeace className="text-yellow-500  text-[2rem] "/></span>
              My name is Deji Olawuni, a frontend developer. 
              check out few of my projects and hit me up if you've got some gigs
              for me. <br /> ps i'm a broke nigga esha nu aye mi
            </h4>
        </div>

        <div className='flex xl:gap-10 xl:items-center xl:ml-10 mt-5 ml-5 gap-5 sm:gap-10 flex-wrap'>
          <motion.img initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 10}}  className='w-[50px] h-[50px] rounded-[50%] object-cover overflow-hidden ' src={profilePics} alt="my profile picture" />
          <div className='flex gap-3 items-center'>
            <FaTwitter className='text-[1rem]' />
            <a href='https://twitter.com/peace_oladeji' className='text-[1rem] capitalize hover:underline'>twitter</a>
          </div>

          <div className='flex gap-3 items-center' >
            <FaGithub className='text-[1rem]' />
            <a href='https://github.com/' className='capitalize text-[1erem] hover:underline'>github</a>
          </div>
        </div>

        <div className='flex flex-col xl:ml-10 mt-5 ml-5'>
          <div className='flex items-center   gap-4'>
            <span className='border border-white-500 w-[50px]' ></span>
            <span>
              {<Link to= '/Projects'>Projects</Link>} 
            </span> 
          </div>
          <div className='flex items-center gap-4'>
            <span className='border border-white-500 w-[50px]' ></span>
            <span>
              {<Link to= '/Tools'>Tools</Link>} 
            </span> 
          </div>
        </div>
        <h2 className="mt-5 xl:ml-10 ml-5">want to reach me ?</h2>
        <div className="flex flex-col xl:ml-10 mt-2 ml-5">
          <span>+234 9060839818</span>
          <span>olawunioladeji06@gmail.com</span>
        </div>
      </section>
    </>
  )
}

export default LeftContainer;
