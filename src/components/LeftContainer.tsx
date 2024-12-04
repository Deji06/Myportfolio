// import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import profilePics from "../assets/WhatsApp Image 2024-04-29 at 02.07.34_86d5abc8.jpg";
import picture from "../assets/profilePic.jpg"
import { motion } from "framer-motion";

const LeftContainer = () => {
  return (
    <>
      <section className=" xl:ml-10 p-2 sm:p-0 ">
        <div className="mt-14 sm:mt-5">
          <motion.h1
            className="uppercase text-[35px] sm:ml-5 ml-2 font-Zeyada  sm:text-[40px]"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            olawuni peace oladeji
          </motion.h1>
          <motion.h2
            className="uppercase sm:ml-5 ml-2  font-Zeyada text-[35px] sm:text-[20px]"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            web developer
          </motion.h2>{" "}
          <h4 className="sm:ml-5 font-serif text-[20px] p-4 sm:p-0  ">
            {" "}
            Hello, as a passionate frontend developer, I aim to solve real-world
            web development challenges using my skills and knowledge.
          </h4>
        </div>

        <div className="flex sm:items-center ml-2 sm:ml-5 mt-5 sm:mt-10  gap-5 sm:gap-10 flex-wrap">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 10 }}
            className="w-[50px] h-[50px] rounded-[50%] object-cover overflow-hidden "
            src={picture}
            alt="my profile picture"
          />
          <div className="flex gap-3 items-center">
            <FaTwitter className="text-[1rem]" />
            <a
              href="https://twitter.com/peace_oladeji"
              className="text-[25px] font-Zeyada capitalize hover:underline"
            >
              twitter
            </a>
          </div>

          <div className="flex gap-3 items-center">
            <FaGithub className="text-[1rem]" />
            <a
              href="https://github.com/Deji06"
              className="capitalize text-[25px] font-Zeyada hover:underline"
            >
              github
            </a>
          </div>
        </div>
        <h2 className="mt-5 sm:ml-5 font-Zeyada text-[25px] ml-2 ">want to reach me ?</h2>
        <div className="flex flex-col font-serif space-y-2 sm:ml-5 ml-2 ">
          <span>+234 9060839818</span>
          {/* <a href="intent://olawunioladeji06@gmail.com#Intent;scheme=mailto;package=com.google.android.gm;end">olawunioladeji06@gmail.com</a> */}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=olawunioladeji06@gmail.com" className="hover:underline">olawunioladeji06@gmail.com</a>
        </div>
      </section>
    </>
  );
};

export default LeftContainer;
