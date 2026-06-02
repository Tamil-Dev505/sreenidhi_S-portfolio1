"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express.js", "PHP"] },
  { category: "Database", items: ["MySQL", "MongoDB", "Firebase"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Figma"] },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-glow-purple">
            Tech Arsenal
          </h2>
          <p className="text-xl text-gray-400 mt-4">Technologies I use to build scalable experiences.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-brand-purple transition-colors duration-500"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-cyan/10 blur-[50px] rounded-full group-hover:bg-brand-purple/20 transition-colors duration-700" />
              
              <h3 className="text-2xl font-heading font-bold mb-6 text-white group-hover:text-glow-blue transition-all duration-300">
                {skillGroup.category}
              </h3>
              
              <ul className="space-y-4 relative z-10">
                {skillGroup.items.map((item, i) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 10, color: "#00ffff" }}
                    className="flex items-center gap-3 text-gray-300 font-medium cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shadow-[0_0_8px_#8a2be2]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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
