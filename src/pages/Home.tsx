import RightContainer from '../components/RightContainer'
import LeftContainer from '../components/LeftContainer'
import {motion} from 'framer-motion'



// type Props = {}

const Home = () =>  {
  return (
    <>
        <motion.h1 initial={{y:-100}} animate={{y:0}} transition={{duration:3}} className=' xl:mt-10 xl:text-[4rem] text-[3rem] uppercase ml-5 mt-10 xl:text-center sm:text-[4rem] '> coding 師傅</motion.h1>
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