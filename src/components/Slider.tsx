import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import reactLogo from '../../src/assets/react.svg'
import tailwindLogo from '../../src/assets/tailwind-css-2.svg'
import jsLogo from '../../src/assets/javascript-1.svg';
import tsLogo from '../../src/assets/typescript-2.svg';
import cssLogo from '../../src/assets/css-3.svg';
import nextLogo from '../assets/next-js.svg'
import nodeLogo from '../assets/nodejs-1.svg'
import expressLogo from '../assets/expressjs.svg'
import htmlLogo from '../assets/html-1.svg'
import githubLogo from '../assets/github-icon-2.svg'


const techLogos = [
  { src: htmlLogo, alt: 'html logo' },
  { src: jsLogo, alt: 'javascript' },
  { src: tsLogo, alt: 'typescript' },
  { src: reactLogo, alt: 'React' },
  { src: nextLogo, alt: 'next js' },
  { src: nodeLogo, alt: 'node js' },
  { src: expressLogo, alt: 'express js' },
  { src: cssLogo, alt: 'CSS' },
  { src: tailwindLogo, alt: 'Tailwind CSS' },
  { src: githubLogo, alt: 'github logo' },
];

const Slider: React.FC = () => {
  return (
    <div className=" py-4  mt-5 ">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        // slidesPerView={8}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        // pagination={{ clickable: false }}
        loop={true} // Ensure smooth cycling with few slides
        breakpoints={{
          320: { slidesPerView: 4 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="animate-slide-in"
      >
        {techLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="borde py-2 px-5">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-8 object-contain transition-transform duration-300 bg-[#f3f3f3] rounded-[20%] px-2 "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;