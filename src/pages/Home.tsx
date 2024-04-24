import React from 'react'
import RightContainer from '../components/RightContainer'
import LeftContainer from '../components/LeftContainer'


// type Props = {}

const Home = () => {
  return (
    <>
        <h1 className=' xl:mt-10 xl:text-[3rem] text-[2rem] uppercase mt-10 text-center sm:text-[3rem]'>my portfolio</h1>
        <main className= ' xl:flex xl:gap-10 xl:mt-8  block ' >
            <div className='xl:w-[40%] xl:pb-[10px] w-[100%]   ml-0'>
            < LeftContainer /> 
            </div>

            <div className=' xl:w-[50%] xl:ml-10 h-[500px] overflow-auto no-scrollbar w-[100%] ml-0 sm:mt-5  '>
                <RightContainer/> 
            </div>
        </main>
    </>
  )
}

export default Home