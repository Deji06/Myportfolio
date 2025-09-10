import mobileView from '../assets/binaryyMobile.png'
import DesktopView from '../assets/binaryy.png'
import DesktopView2 from '../assets/binaryy2.png'

const Binaryy = () => {
  return (
    <>
       <div className='pb-10 mt-10 md:mt-0 bg-white animate-slide-in'style={{ animationDelay: "1s" }}>
        <p className="m-auto w-fit pt-10 text-[35px] text-[#686868] font-bold ">project details</p>
        <img 
          src={DesktopView} 
          alt="chat app image" 
          loading='lazy'
          className='w-[80%] md:h-[450px] m-auto mt-5'         
        />

        <div className='px-5 m-auto mt-10 space-y-5'>
          <div className='md:w-[80%] m-auto'>
            <p className='font-bold text-[30px] text-[#686868]'>Consulting Website for AI Firm: A Case Study</p>
            <p className='text-black text-[16px] mt-2'>
              My client, a consulting firm with the mission “Innovating with AI, solving real-world problems”, needed a professional, 
              modern website to present their services. Their focus was on showcasing capabilities like Research & Strategy Development 
              and AI-powered solutions for industries such as transit. The challenge was to design a site that looked credible, engaging, 
              and future-ready, while staying lightweight and user-friendly.
            </p>
            <div className='space-y-3 mt-2'>
              <p className='text-[#686868] font-bold text-[30px]'>solution</p>
              <ul className="list-disc list-inside space-y-2">
                <li className='text-black'><span className='font-bold text-[20px] text-[#686868]'>Next.js →</span> Provided server-side rendering and SEO optimization to help the consulting firm’s brand rank well and load fast.</li>
                <li className='text-black'><span className='font-bold text-[20px] text-[#686868]'>Tailwind CSS →</span> Enabled a clean, consistent design system that adapts beautifully across all devices.</li>
                <li className='text-black'><span className='font-bold text-[20px] text-[#686868]'>Framer Motion → </span> Added subtle animations that highlight key brand messages and create an engaging browsing experience.</li>
              </ul>
              <p className='text-black'>This stack gave me the flexibility to build a scalable and efficient application, while also focusing on user experience.</p>
            </div>

          </div>

            <div className='flex md:flex-row flex-col gap-x-3 gap-y-5 pt-10 md:mx-14'>
              <img 
                src={DesktopView2} alt="mobile view for the chat app"  
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
              <p className='font-bold text-[30px] text-[#686868] capitalize pt-10'>result</p>
              <p className='text-black text-[20px]'>
                The final product was a modern, responsive consulting website that communicates trust and innovation. Visitors are 
                guided smoothly through the firm’s offerings, with motion-enhanced visuals that reinforce their identity 
                as an AI-driven leader.
              </p>
              <div className='space-y-3'>
                <p className='text-[#686868] font-bold text-[20px]'>This project showcased:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li className='text-black text-[20px]'>My ability to translate a client’s brand vision into a digital experience.</li>
                  <li className='text-black text-[20px]'>Expertise with Next.js, Tailwind, and Framer Motion to deliver a polished and scalable frontend solution.</li>
                  <li className='text-black text-[20px]'>A user-first design approach, balancing clarity, aesthetics, and performance.</li>
                </ul>
              </div>

            </div>

            
        </div>
      </div>
    
    
    </>
  )
}

export default Binaryy