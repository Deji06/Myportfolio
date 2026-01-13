import reactLogo from "../../src/assets/react.svg";
import tailwindLogo from "../../src/assets/tailwind-css-2.svg";
import jsLogo from "../../src/assets/javascript-1.svg";
import tsLogo from "../../src/assets/typescript-2.svg";
import cssLogo from "../../src/assets/css-3.svg";
import nextLogo from "../assets/next-js.svg";
import nodeLogo from "../assets/nodejs-1.svg";
import expressLogo from "../assets/expressjs.svg";
import htmlLogo from "../assets/html-1.svg";
import githubLogo from "../assets/github-icon-2.svg";

import { motion } from "framer-motion";

const techLogos = [
  { src: htmlLogo, alt: "HTML" },
  { src: jsLogo, alt: "JavaScript" },
  { src: tsLogo, alt: "TypeScript" },
  { src: reactLogo, alt: "React" },
  { src: nextLogo, alt: "Next.js" },
  { src: nodeLogo, alt: "Node.js" },
  { src: expressLogo, alt: "Express" },
  { src: cssLogo, alt: "CSS" },
  { src: tailwindLogo, alt: "Tailwind" },
  { src: githubLogo, alt: "GitHub" },
];

const Slider = () => {
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <div className="relative py-8 mt- overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#1b1b1b] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#1b1b1b] to-transparent z-10" />

      <motion.div
        className="flex w-max gap-8"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-6 w-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] group-hover:text-white transition-colors">
              {logo.alt}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
