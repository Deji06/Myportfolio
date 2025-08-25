import { MdOutlineLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="mt-10 flex flex-col sm:flex-row justify-between sm:mx-10 animate-fade-in mb-5">
        {/* left */}
        <div className="borde m-5 sm:w-[50%] space-y-5">
          <p className="uppercase text-[15px]  pl-2 py-1 sm:w-[70%] border-gradient">
            let's talk for your project done
          </p>
          <h1 className="text-[40px]">Let's create amazing stuff together!</h1>
          <p>
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and I'll get back to you in the next 48 hours.
          </p>
          <div className="flex flex-col space-y-3">
            <h2 className="font-Zeyada text-[20px] text-[#cccdde]">
              want to reach me ?
            </h2>
            <div className="flex flex-col gap-y-5 items-cente justify-between">
              <div className="flex items-center gap-x-2 ">
                <MdOutlineLocalPhone className="text-[20px]" />
                <p className="text-[14px]">+234 9060839818</p>
              </div>
              <div className="flex items-center gap-x-3 ">
                <MdEmail className="text-[20px]" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=olawunioladeji06@gmail.com"
                  className="hover:underline text-[14px]"
                >
                  olawunioladeji06@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <form action="" className="sm:w-[60%] space-y-5 sm:px-10 m-5 animate-slide-in"
         style={{animationDelay:'1s'}}
        
        >
          <p className="text-[25px]">send a message</p>
          <div className="flex flex-col gap-y-2 border-none">
            <label htmlFor="" className="capitalize ">
              name
            </label>
            <input
              type="text"
              placeholder="john doe"
              className="border-b-2 border-[#686868] outline-none bg-black p-1 placeholder:text-[#686868]"
            />
          </div>
          <div className="flex flex-col gap-y-2 border-none">
            <label htmlFor="" className="capitalize ">
              email
            </label>
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="border-b-2 border-[#686868] outline-none bg-black p-1 placeholder:text-[#686868]"
            />
          </div>
          <div className="flex flex-col gap-y-2 border-none">
            <label htmlFor="" className="capitalize ">
              phone
            </label>
            <input
              type="text"
              placeholder="+234 1234567890"
              className="border-b-2 border-[#686868] outline-none bg-black p-1 placeholder:text-[#686868]"
            />
          </div>
          <textarea
            name=""
            id=""
            className="h-[100px] p-3 w-full outline-none border-b-2 border-[#686868] bg-black placeholder:text-[#686868]"
            placeholder="message"
          >
            {/* <label htmlFor="">message</label> */}
          </textarea>
          <button type="submit" className="border sm:w-[60%] w-[100%] m-auto rounded py-2 border-gradient">send message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
