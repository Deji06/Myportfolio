import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const NavBar = () => {
  const [iconChange, setIconChange] = useState(false);
  const[activeLink, setActiveLink] = useState('Home')
  return (
    <>
    {/* large screen nav bar */}
      <nav
        className="md:flex justify-between sm:items-center mx-5 sm:mx-12 py-5 animate-fade-in animate-slide-in hidden"
        style={{ animationDelay: "0.4s" }}
      >
        <div>
          <Link to={'/'} className="uppercase text-[25px] font-Zeyada  ">deji</Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 items-center">

          <Link to="/" className={`uppercase text-[14px] ${activeLink === 'Home'? 'text-[#cccdde]' : 'text-[#686868]'}`} onClick={()=> setActiveLink('Home')}>
            Home
          </Link>

          <Link to="/CaseStudy" className={`uppercase text-[14px] ${activeLink === 'case-study'? 'text-[#cccdde]' : 'text-[#686868]'}`} onClick={()=> setActiveLink('case-study')}>
            case study
          </Link>

          <Link to="/Contact" className={`uppercase text-[14px] ${activeLink === 'contact'? 'text-[#cccdde]' : 'text-[#686868]'}`} onClick={()=> setActiveLink('contact')}>
            contact
          </Link>

          </div>
        <Link
          to={"/Booking"}
          className="flex card items-center border-gradient px-7 py-3 gap-x-4"
          onMouseEnter={() => setIconChange(true)}
          onMouseLeave={() => setIconChange(false)}
        >
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
        </Link>
      </nav>
{/* small screen navbar */}
         <nav
        className="flex justify-between sm:items-center mt-5 mx-4 sm:mx-12 py-3 animate-fade-in animate-slide-in md:hidden "
        style={{ animationDelay: "0.4s" }}
      >
        <div>
          <Link to={'/'} className="uppercase text-[25px] font-Zeyada  ">deji</Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 items-center">
          <Link to="/" className={`uppercase text-[14px] ${activeLink === 'Home'? 'text-[#cccdde]' : 'text-[#686868]'}`} onClick={()=> setActiveLink('Home')}>
            Home
          </Link>

          <Link to="/CaseStudy" className={`uppercase text-[14px] ${activeLink === 'case-study'? 'text-[#cccdde]' : 'text-[#686868]'}`} onClick={()=> setActiveLink('case-study')}>
            case study
          </Link>

          <Link to="/Contact" className={`uppercase text-[14px] ${activeLink === 'contact'? 'text-[#cccdde]' : 'text-[#686868]'}`} onClick={()=> setActiveLink('contact')}>
            contact
          </Link>

        <Link
          to={"/Booking"}
          className="flex card items-center border-gradient px-7 py-3 gap-x-4"
          onMouseEnter={() => setIconChange(true)}
          onMouseLeave={() => setIconChange(false)}
        >
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
        </Link>
          </div>
      </nav>
    </>
  );
};

export default NavBar;
