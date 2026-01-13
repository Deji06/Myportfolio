import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import picture from "../assets/profilePic.jpg";
import { motion } from "framer-motion";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Slider from "./Slider";

const LeftContainer = () => {
  return (
    <>
      <section className="">
        <div className="mt-10 sm:mt-1">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4 sm:ml-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-green-500/80">
              Available for projects
            </span>
          </motion.div>
          {/* Main Greeting - Space Grotesk */}
          <motion.h1
            className="uppercase font-spaceGrotesk font-bold text-[18px] sm:text-[20px] tracking-tight sm:ml-5 py-2 w-fit px-2"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            hello! i am deji olawuni
          </motion.h1>

          <div className="relative h-[2px] w-full overflow-hidden">
            {/* The actual moving segment */}
            <motion.div
              className="absolute h-full w-8 bg-white"
              initial={{ x: "0%" }}
              animate={{
                x: ["5%", "600%"], // Moves from far left to far right
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            />
          </div>

          <h4 className="sm:ml-5 font-sans text-[16px] leading-relaxed text-[#a1a1a1] py-3 sm:w-[85%]">
            A Full-stack web developer specialized in building{" "}
            <span className="text-white">robust web applications</span> from the
            ground up, ensuring a seamless experience for both the user and the
            system.
          </h4>
        </div>

        <div className="border w-full border-[#171717]"></div>

        {/* Socials*/}
        <div className="flex items-center gap-x-6 sm:ml-5 mb-10 mt-2">
          <div className="relative">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-[60px] h-[60px] rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
              src={picture}
              alt="profile"
            />
            <div className="absolute -inset-1 bg-white/5 rounded-2xl -z-10 blur-sm"></div>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/Deji06"
              className="flex items-center gap-2 text-[12px] font-mono text-[#737373] hover:text-white transition-colors group"
            >
              <FaGithub className="group-hover:rotate-12 transition-transform" />{" "}
              /Deji06
            </a>
            <a
              href="https://twitter.com/peace_oladeji"
              className="flex items-center gap-2 text-[12px] font-mono text-[#737373] hover:text-white transition-colors group"
            >
              <FaTwitter className="group-hover:rotate-12 transition-transform" />{" "}
              /peace_oladeji
            </a>
          </div>
        </div>

        <div className="border w-full border-[#171717] mt-5"></div>

        <div>
          <Slider />
        </div>

        {/* Contact Section */}
        <div className="mt-8 sm:ml-5">
          <h2 className="font-spaceGrotesk font-bold text-[14px] uppercase tracking-widest text-white/40 mb-4">
            _want to reach me ?
          </h2>

          <div className="grid grid-cols-1 gap-3">
            {/* Email Card */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=olawunioladeji06@gmail.com"
              className="group flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.07] hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <MdEmail className="text-[#737373] group-hover:text-white" />
                <span className="text-[13px] font-mono text-[#a1a1a1] group-hover:text-white">
                  Email
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#444] group-hover:text-[#737373]">
                olawunioladeji06@gmail.com
              </span>
            </a>

            {/* Phone Card */}
            <div className="group flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-xl">
              <div className="flex items-center gap-3">
                <MdOutlineLocalPhone className="text-[#737373]" />
                <span className="text-[13px] font-mono text-[#a1a1a1]">
                  Phone
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#737373]">
                +234 9060839818
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeftContainer;
