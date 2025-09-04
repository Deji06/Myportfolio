import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import picture from "../assets/profilePic.jpg";
import { motion } from "framer-motion";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
// import { useState } from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { MdArrowOutward } from "react-icons/md";
import Slider  from "../components/Slider";

const LeftContainer = () => {
  // const [iconChange, setIconChange] = useState(false);

  return (
    <>
      <section className="">
        <div className="mt-10 sm:mt-1">
          <motion.h1
            className="uppercase text-[15px] sm:ml-5 pl-2 py-2 w-fit px-10 border-gradient"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            hello! i am deji olawuni
          </motion.h1>
          {/* <motion.h2
            className="uppercase sm:ml-5 ml-2 font-Zeyada mt-2 text-[35px] sm:text-[20px]"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            web developer
          </motion.h2>{" "} */}
          <h4 className="sm:ml-5 font-serif text-[16px] text-[#686868] py-4 borde sm:w-[80%] ">
            A full-stack web developer with a passion for building robust web
            applications from the ground up, ensuring a seamless experience for
            both the user and the system.
          </h4>
        </div>
        <div className="border w-full md:border-[#171717] "></div>

        <div className="flex sm:items-center gap-x-10  ml-2 sm:ml-5 mt-10 sm:mt-10  flex-wrap borde">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 10 }}
            className="w-[50px] h-[50px] rounded-[20%] object-cover overflow-hidden "
            src={picture}
            alt="my profile picture"
          />
          <div className="flex gap-3 items-center">
            <FaTwitter className="text-[16px]" />
            <a
              href="https://twitter.com/peace_oladeji"
              className="font-Zeyada capitalize text-[20px] underline hover:text-[#cccdde]"
            >
              twitter
            </a>
          </div>

          <div className="flex gap-3 items-center">
            <FaGithub className="" />
            <a
              href="https://github.com/Deji06"
              className="capitalize  font-Zeyada text-[20px] underline hover:text-[#cccdde]"
            >
              github
            </a>
          </div>
        </div>

        <div className="border w-full md:border-[#171717] border-white mt-5"></div>

        <div>
         <Slider />
        </div>

        <div className="flex flex-col space-y-3">
          <h2 className="mt- sm:ml-5 font-Zeyada sm:text-[20px] text-[30px] text-[#cccdde] ml-2 ">
            want to reach me ?
          </h2>
          <div className="flex sm:flex-row flex-col gap-y-2 justify-between sm:ml-5 ml-2">
            <div className="flex items-center gap-x-2 ">
              <MdOutlineLocalPhone className="text-[20px]" />
              <p className="text-[14px]">+234 9060839818</p>
            </div>
            <div className="flex items-center gap-x-3 ">
              <MdEmail className="text-[20px]"/>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=olawunioladeji06@gmail.com"
                className="hover:underline text-[14px]"
              >
                olawunioladeji06@gmail.com
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default LeftContainer;
