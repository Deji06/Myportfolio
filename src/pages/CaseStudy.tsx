import React from 'react'
import chatApp from '../assets/chatApp.png'
import binaryy  from '../assets/binaryy.png'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import Binaryy from '../assets/binaryy.png';


const CaseStudy = () => {
  return (
    <>
    <div className='mt-16 space-y-5'>
      <p className='border-gradient text-center capitalize w-fit px-5 m-auto'>case study</p>
      <h1 className='text-[40px] capitalize text-center'>meet with creative things</h1>

      <div className='grid grid-cols-2 gap-x-3 justify-between w-full p-2 mb-10'>
        <Link to={'/ChatApp'} className='w-fit space-y-3 p-3 h-full'>
          <img src={chatApp} alt="chat app desktop view" 
            className=' object-contain w-fit h-auto rounded'
          />
          <div className='flex flex-col justify-between space-y-3'>
            <div className='flex justify-between'>
              <p className='capitalize'>chat app</p>
              <p className='text-[15px] capitalize'>sep <span className='text-[14px]'>12, 2021</span></p>
            </div>
            <div className='border-gradient w-full'></div>
            <div className='flex justify-between'>
              <p className='text-[30px]'>chat app built with next js and express js</p>
              <MdArrowOutward  className='text-[25px]'/>
            </div>
          </div>
        </Link>

         <Link to={'/Binaryy'} className='w-fit space-y-3 p-3 h-full'>
          <img src={Binaryy} alt="chat app desktop view" 
            className=' object-contain w-fit h-auto rounded'
          />
          <div className='flex flex-col justify-between space-y-3'>
            <div className='flex justify-between'>
              <p className='capitalize'>binaryy</p>
              <p className='text-[15px] capitalize'>sep <span className='text-[14px]'>12, 2021</span></p>
            </div>
            <div className='border-gradient w-full'></div>
            <div className='flex justify-between'>
              <p className='text-[30px]'>chat app built with next js and express js</p>
              <MdArrowOutward  className='text-[25px]'/>
            </div>
          </div>
        </Link>

         <Link to={'/'} className='w-fit space-y-3 p-3 h-full'>
          <img src={chatApp} alt="chat app desktop view" 
            className=' object-contain w-fit h-auto rounded'
          />
          <div className='flex flex-col justify-between space-y-3'>
            <div className='flex justify-between'>
              <p className='capitalize'>chat app</p>
              <p className='text-[15px] capitalize'>sep <span className='text-[14px]'>12, 2021</span></p>
            </div>
            <div className='border-gradient w-full'></div>
            <div className='flex justify-between'>
              <p className='text-[30px]'>chat app built with next js and express js</p>
              <MdArrowOutward  className='text-[25px]'/>
            </div>
          </div>
        </Link>

        

      </div>

      

    </div>
    </>
  )
}

export default CaseStudy