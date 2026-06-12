"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend & Database",
    items: [
      "Node.js",
      "Express.js",
      "PHP",
      "Django",
      "MySQL",
      "MongoDB",
      "SQLite",
      "REST APIs",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Python",
      "Java",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Canva",
      "Vercel",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 sm:py-24 lg:py-32 relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="px-3 py-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] rounded-full bg-white/5 text-brand-cyan border border-white/10 mb-4 inline-block">
            Skills
          </span>
          <h2 className="text-3xl min-[380px]:text-4xl md:text-6xl font-heading font-bold text-glow-purple mb-4 break-words">
            Tech Arsenal
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto">
            Technologies I use to build immersive, scalable, and creative digital experiences.
          </p>
        </motion.div>

        {/* 3 Columns Grid with equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 items-stretch">
          {skills.map((skillGroup, index) => (
            <div key={skillGroup.category} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="h-full"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 5 + index * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden group hover:border-brand-purple/50 border border-white/5 transition-colors duration-500 h-full flex flex-col justify-start"
                >
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-cyan/10 blur-[50px] rounded-full group-hover:bg-brand-purple/20 transition-colors duration-700 pointer-events-none" />
                  
                  <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 sm:mb-8 text-white group-hover:text-glow-blue transition-all duration-300 border-b border-white/5 pb-4 break-words">
                    {skillGroup.category}
                  </h3>
                  
                  {/* Responsive grid: stacks on narrow mobile (<400px) and becomes 2-columns above */}
                  <ul className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-3 relative z-10">
                    {skillGroup.items.map((item) => (
                      <motion.li
                        key={item}
                        whileHover={{ x: 6, color: "#00ffff" }}
                        className="flex items-center gap-2.5 text-gray-300 font-medium cursor-default text-sm sm:text-base transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shadow-[0_0_8px_#8a2be2] flex-shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Orbital animation effect */}
        <div className="mt-32 relative h-96 w-full flex items-center justify-center overflow-hidden hidden md:flex">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px] border border-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] border border-brand-blue/20 rounded-full border-dashed"
          />
          <div className="absolute w-[200px] h-[200px] bg-brand-purple/20 rounded-full blur-[60px]" />
          <h3 className="relative z-10 text-3xl font-heading font-bold text-glow-cyan tracking-widest uppercase">
            Core
          </h3>
        </div>
      </div>
    </section>
  );
}
