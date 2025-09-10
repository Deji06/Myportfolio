import appImage from '../assets/chatApp.png'
import mobileView from '../assets/chatappMobile.jpg'
import DesktopView from '../assets/desktopview.png'

const ChatApp = () => {
  return (
    <>
       <div className='pb-10 mt-10 md:mt-0 bg-white animate-slide-in'style={{ animationDelay: "1s" }}>
        <p className="m-auto w-fit pt-10 text-[35px] text-[#686868] font-bold ">project details</p>
        <img 
          src={appImage} 
          alt="chat app image" 
          loading='lazy'
          className='w-[80%] md:h-[450px] m-auto mt-5'         
        />

        <div className='px-5 m-auto mt-10 space-y-5'>
          <div className='md:w-[80%] m-auto space-y-5'>
            <p className='font-bold text-[30px] text-[#686868]'>Building a Seamless Chat App: My Approach to UI/UX and Real-Time Design</p>
            <p className='text-black'>
              Effective communication tools are essential in today’s world, and 
              building a chat app allowed me to combine technical expertise with 
              user-centered design thinking. My project demonstrates how I approach full-stack development, real-time systems, 
              and UI/UX design to create a smooth, engaging experience.
            </p>
            <div className='space-y-3'>
              <p className='text-black text-[20px]'>Tech Stack at a Glance</p>
              <ul className="list-disc list-inside space-y-2">
                <li className='text-black'>Frontend: React + Tailwind CSS (responsive, modern UI)</li>
                <li className='text-black'>Backend: Node.js + Express (fast and reliable server logic)</li>
                <li className='text-black'>Database: MongoDB Atlas (scalable cloud-based storage)</li>
                <li className='text-black'>Real-time: Socket.IO (instant one-to-one messaging)</li>
              </ul>
              <p className='text-black'>This stack gave me the flexibility to build a scalable and efficient application, while also focusing on user experience.</p>
            </div>

          </div>

            <div className='flex md:flex-row flex-col gap-x-3 gap-y-5 pt-10 md:mx-14'>
              <img 
                src={DesktopView} alt="mobile view for the chat app"  
                className='md:w-[80%] max-h-[450px] m-auto mt-5 object-contain rounded-md'         

                // className='md:w-[100%] h-[400px] object-cover rounded-[10px]'
                loading='lazy'
              />
               <img 
                src={mobileView} 
                alt="mobile view for the chat app" 
                className='w-[80%] md:max-h-[360px] m-auto mt-5 object-contain rounded-[10px]'         

                // className='md:w-[20%] h-[400px] object-cover rounded-[10px]'
                loading='lazy'
               /> 
            </div>

            <div className='space-y-3 md:w-[80%] m-auto'>
              <p className='font-bold text-[30px] text-[#686868] pt-10'>Building for Real-Time Interaction</p>
              <p className='text-black'>
                One of the core challenges in chat applications is ensuring instant communication.
                With Socket.IO, I implemented one-to-one real-time messaging, giving users immediate feedback and a
                natural conversation flow. Combined with MongoDB Atlas, messages and chat histories
                are stored securely and retrieved efficiently.
              </p>
              <div className='space-y-3'>
                <p className='font-bold text-[30px] text-[#686868]'>My Design Philosophy</p>
                <p className='text-black'>For me, a successful digital product is not just functional — it’s enjoyable to use. This project reflects my philosophy:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li className='text-black'>Keep it simple: Eliminate unnecessary complexity in both UI and backend.</li>
                  <li className='text-black'>Focus on speed: Fast responses and real-time updates create trust and engagement.</li>
                  <li className='text-black'>Think scalability: Design systems that can grow with user demand.</li>
                </ul>
              </div>

            </div>

            
        </div>
      </div>
    
    
    </>
  )
}

export default ChatApp