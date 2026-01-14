import Projects, { Data } from "./Projects";
import { FaGithub } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Sub-component to handle individual card glow logic
const ProjectCard = ({ project, index }: { project: Data; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a
      href={project.url}
      target="_blank"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group block relative"
    >
      <div className="bg-[#171717]/50 backdrop-blur-sm border border-white/5 p-6 sm:p-8 rounded-2xl hover:border-white/20 transition-all duration-300 overflow-hidden relative">
        {/* --- THE GLOW OVERLAY --- */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 transform-gpu will-change-transform"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) =>
                `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`
            ),
            backfaceVisibility: "hidden"
          }}
        />

        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
          {/* Text Content */}
          <div className="flex-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#cccdde] opacity-60">
              {project.Tool}
            </span>
            <h3 className="text-xl font-heading font-bold mt-2 mb-3">
              {project.Tittle}
              <div className="relative h-[2px] w-full overflow-hidden">
                {/* The actual moving segment */}
                <motion.div
                  className="absolute h-full w-10 bg-white/20 mb-2 will-change-transform transform-gpu"
                  style={{backfaceVisibility:"hidden"}}
                  initial={{ x: "0%" }}
                  animate={{
                    x: ["5%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "mirror",
                  }}
                />
              </div>
            </h3>
            <p className="text-sm text-[#737373] font-sans leading-relaxed mb-4">
              {project.About}
            </p>

            <div className="space-y-2">
              <p className="font-sans text-xs text-[#737373]">
                <span className="text-white opacity-80 font-medium">Tech:</span>{" "}
                {project.Technology}
              </p>
              {project.database && (
                <p className="font-sans text-xs text-[#737373]">
                  <span className="text-white opacity-80 font-medium">DB:</span>{" "}
                  {project.database}
                </p>
              )}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <FaGithub className="text-xl opacity-50 hover:opacity-100 transition-opacity" />
              <span className="text-[10px] font-mono uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                View Project →
              </span>
            </div>
          </div>

          {/* Project Image */}
          <div className="w-full lg:w-72 h-44 bg-[#222] rounded-xl overflow-hidden relative border border-white/10 group-hover:border-white/30 transition-colors">
            <img
              src={project.image}
              alt={project.Tittle}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const RightContainer = () => {
  return (
    <div className="flex flex-col gap-y-6 sm:ml-7 sm:w-full py-1">
      <div className="mb-4">
        <h2 className="uppercase font-spaceGrotesk font-bold text-2xl tracking-tighter">
          Featured Projects
        </h2>
        <div className="relative h-[2px] w-full overflow-hidden">
          {/* The actual moving segment */}
          <motion.div
            className="absolute h-full w-10 bg-white/20 mb-2 transform-gpu will-change-transform"
            style={{backfaceVisibility: "hidden"}}
            initial={{ x: "0%" }}
            animate={{
              x: ["5%", "400%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
        </div>
        {/* <div className="h-[2px] w-20 bg-white/20 mt-2 mb-2" /> */}
        <p className="font-sans text-[#686868] text-sm">
          A collection of my recent work and experiments
        </p>
      </div>

      <div className="flex flex-col gap-y-5">
        {Projects.map((project: Data, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default RightContainer;
