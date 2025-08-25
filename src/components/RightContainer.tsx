// import React from 'react'
import Projects, { Data } from "./Projects";
import { FaGithub } from "react-icons/fa";

const RightContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 sm:ml-7 space-y-2  animate-slide-in"
       style={{animationDelay:'1s'}}
      
      >
        <p className="capitalize text-[30px] font-Zeyada">personal projects</p>
        {Projects.map((project: Data, id) => {
          return (
            <a href={project.url} key={id} className="">
              <div
                className="bg-[#171717] xl:w-[90%] sm:p-10 sm:h-auto py-5 px-7 sm:w-[95%] hover:bg-[#2c2b2b] hover:transition ease-in-out rounded-[10px] "
                key={id}
              >
                <h1 className="text-[20px] font-Zeyada uppercase mt-5">
                  built with: {project.Tool}
                </h1>

                <div className="mt-5">
                  <h2 className="capitalize font-serif">{project.Tittle}</h2>
                  <p className="text-[0.8rem] text-[#737373] mt-1 font-serif">
                    {project.About}
                  </p>
                  <p className="font-serif text-[0.8rem] mt-3 text-[#737373]">
                    <span className="text-[#fff] capitalize">Tech used: </span>{" "}
                    {project.Technology}
                  </p>
                  {project.id === 2 &&  
                    <p className="font-serif text-[0.8rem] mt-3 text-[#737373]">
                      <span className="text-[#fff]">Database: </span>
                      {project.database}
                    </p>
                  
                  }
                  {/* <span className="text-white text-[0.8rem] pt-1">
                    click me
                  </span> */}
    
                  <a href="https://github.com/Deji06" className="mt-10">
                    <FaGithub className="text-[1rem] mt-5" />
                  </a>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default RightContainer;
