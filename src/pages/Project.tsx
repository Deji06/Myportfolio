import Projects, {Data} from '../components/Projects'
// import RightContainer from '../components/RightContainer'
const Project = () => {
  return (
    <>
      <h1 className='text-center xl:text-[5rem] uppercase mt-5 text-[2rem]'>my projects</h1>
      {/* <RightContainer/> */}
      <div className='flex flex-col gap-4 p-10'>
            {Projects.map((project:Data, id ) => {
            return (
              <a href={project.url}>
                <div className='bg-[#171717] xl:m-auto xl:w-[1000px] h-auto py-5 px-7 ml-0' key={id}>
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

export default Project