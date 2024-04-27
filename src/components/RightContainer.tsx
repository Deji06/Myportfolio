// import React from 'react'
import Projects, {Data} from './Projects'
import {motion} from 'framer-motion'




const RightContainer = () => {
  return (
    <>
          <div  className='flex flex-col gap-4 xl:ml-7 mt-4 ml-5 sm:ml-5 '>
            {Projects.map((project:Data, id) => {
            return (
              <a href={project.url} key={id}>
                <div className='bg-[#171717] xl:w-[600px] p-10 h-auto py-5 px-7 w-[90%] sm:w-[95%] hover:p-10 hover:transition ease-in-out delay-[60]' key={id}>
                  <div>
                    <h1 className='text-[1rem] uppercase mt-5'>{project.Tool}</h1>
                  </div>
                  <div className='mt-5' >
                    <h2 className='capitalize'>{project.Tittle}</h2>
                    <p className='text-[0.8rem] mt-1'>{project.About}</p>
                  </div>
                </div> 
              </a>
            )
            })}
        </div>
    </>
)
}

export default RightContainer;