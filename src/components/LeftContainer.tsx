// import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import profilePics from '../assets/Snapchat-433813669.jpg'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Project from "../pages/Project"
import {Link} from 'react-router-dom'


// type Props = {}

const LeftContainer = () => {
  return (
    <>
      <section className=' xl:ml-10 '>
        <div className='xl:ml-10  mt-5'>
            <h1 className=' xl:text-[4rem] xl:ml-0 text-[3rem] ml-5  sm:text-[4rem]'>coding 師傅</h1>  
            <h2 className='uppercase ml-5 xl:ml-0'>front end developer</h2> <br />
            <h3 className='uppercase underline xl:ml-0 ml-5 '>about</h3> <br />
            <h4 className='ml-5 xl:ml-0'> Hello, i build interactive, animated and fun Web projects to ease user experience.
                When i'm not coding i am finishing all the food at home, writing, watching movies 
                and travelling all around.You can also check out my Native projects where i create 
                magic with React Native and Expo
            </h4>
        </div>

        <div className='flex xl:gap-10 xl:items-center xl:ml-10 mt-5 ml-5 gap-5 sm:gap-10'>
          <img className='w-[50px] h-[50px] rounded-[50%] object-cover overflow-hidden ' src={profilePics} alt="my profile picture" />
          <div className='flex gap-3 items-center'>
            <FaTwitter className='text-[1rem]' />
            <a href='' className='text-[1rem] capitalize hover:underline'>twitter</a>
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



       

     
    
      </section>
    </>
  )
}

export default LeftContainer;

{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="blogs" element={<Blogs />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NoPage />} />
  </Route>
</Routes>
</BrowserRouter> */}