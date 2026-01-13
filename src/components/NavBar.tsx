import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { motion } from "framer-motion";

const NavBar = () => {
  const [iconChange, setIconChange] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <>
      {/* large screen nav bar */}
      <nav
        className="md:flex justify-between sm:items-center mx-5 sm:mx-12 py-5 animate-fade-in animate-slide-in hidden"
        style={{ animationDelay: "0.4s" }}
      >
        <Link
          to={"/"}
          className="capitalize font-mono group flex flex-col space-y-[0.5] "
        >
          <p className="leading-none tracking-tighter text-lg font-bold">
            deji olawuni
          </p>
          <div className="flex items-center mt-0">
            <div className="border-[3px] w-7  border-current opacity-90"></div>
            <p className="text-[9px] leading-none ml-1 tracking-[0.2em] opacity-70 uppercase">
              portfolio
            </p>
          </div>
        </Link>

        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 items-center">
          <Link
            to="/"
            className={`uppercase text-[14px] font-sans font-bold tracking-widest transition-colors duration-300  ${
              activeLink === "Home" ? "text-[#cccdde]" : "text-[#686868]"
            }`}
            onClick={() => setActiveLink("Home")}
          >
            Home
          </Link>

          <Link
            to="/CaseStudy"
            className={`uppercase text-[14px] font-sans font-bold tracking-widest transition-colors duration-300 ${
              activeLink === "case-study" ? "text-[#cccdde]" : "text-[#686868]"
            }`}
            onClick={() => setActiveLink("case-study")}
          >
            case study
          </Link>

          <Link
            to="/Contact"
            className={`uppercase text-[14px] font-sans font-bold tracking-widest transition-colors duration-300  ${
              activeLink === "contact" ? "text-[#cccdde]" : "text-[#686868]"
            }`}
            onClick={() => setActiveLink("contact")}
          >
            contact
          </Link>
        </div>
        <Link
          to={"/Booking"}
          className="flex flex-col card items-center border-gradien px-7 py-3 gap-x-4 gap-y-2"
          onMouseEnter={() => setIconChange(true)}
          onMouseLeave={() => setIconChange(false)}
        >
          <div className="flex items-center gap-x-2">
            <p className="capitalize border-none ">book a call</p>
            {iconChange ? (
              <MdOutlinePhoneForwarded
                className={`transition-opacity duration-300 ${
                  iconChange ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <MdOutlineLocalPhone
                className={`transition-opacity duration-300 ${
                  iconChange ? "opacity-0" : "opacity-100"
                }`}
              />
            )}
          </div>

          <div className="relative h-[2px] w-full overflow-hidden">
            {/* The actual moving segment */}
            <motion.div
              className="absolute h-full w-10 bg-white mb-2"
              initial={{ x: "0%" }}
              animate={{
                x: ["5%", "450%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            />
          </div>
        </Link>
      </nav>
      
      {/* small screen navbar */}
      <nav
        className="flex justify-between sm:items-center mt-5 mx-4 sm:mx-12 py-3 animate-fade-in animate-slide-in md:hidden "
        style={{ animationDelay: "0.4s" }}
      >
        <Link
          to={"/"}
          className="capitalize font-mono group flex flex-col space-y-[0.5] "
        >
          <p className="leading-none tracking-tighter text-lg font-bold">
            deji olawuni
          </p>
          <div className="flex items-center mt-0">
            <div className="border-[3px] w-7  border-current opacity-90"></div>
            <p className="text-[9px] leading-none ml-1 tracking-[0.2em] opacity-70 uppercase">
              portfolio
            </p>
          </div>
        </Link>

        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 items-center">
          <Link
            to="/"
            className={`uppercase text-[13px] font-sans font-medium tracking-widest transition-colors duration-300 ${
              activeLink === "Home" ? "text-[#cccdde]" : "text-[#686868]"
            }`}
            onClick={() => setActiveLink("Home")}
          >
            Home
          </Link>

          <Link
            to="/CaseStudy"
            className={`uppercase text-[13px] font-sans font-medium tracking-widest transition-colors duration-300 ${
              activeLink === "case-study" ? "text-[#cccdde]" : "text-[#686868]"
            }`}
            onClick={() => setActiveLink("case-study")}
          >
            case study
          </Link>

          <Link
            to="/Contact"
            className={`uppercase text-[13px] font-sans font-medium tracking-widest transition-colors duration-300 ${
              activeLink === "contact" ? "text-[#cccdde]" : "text-[#686868]"
            }`}
            onClick={() => setActiveLink("contact")}
          >
            contact
          </Link>

               <Link
          to={"/Booking"}
          className="flex flex-col card items-center border-gradien px-7 py-3 gap-x-4 gap-y-2"
          onMouseEnter={() => setIconChange(true)}
          onMouseLeave={() => setIconChange(false)}
        >
          <div className="flex items-center gap-x-2">
            <p className="capitalize border-none ">book a call</p>
            {iconChange ? (
              <MdOutlinePhoneForwarded
                className={`transition-opacity duration-300 ${
                  iconChange ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <MdOutlineLocalPhone
                className={`transition-opacity duration-300 ${
                  iconChange ? "opacity-0" : "opacity-100"
                }`}
              />
            )}
          </div>

          <div className="relative h-[2px] w-full overflow-hidden">
            {/* The actual moving segment */}
            <motion.div
              className="absolute h-full w-10 bg-white mb-2"
              initial={{ x: "0%" }}
              animate={{
                x: ["5%", "450%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            />
          </div>
        </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
