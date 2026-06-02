"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "El Codamics, Coimbatore",
    duration: "Jan 2026 – April 2026",
    details: [
      "Developed and maintained responsive web applications using HTML, CSS, JavaScript, React.js.",
      "Implemented REST API integration and CRUD operations for dynamic data handling.",
      "Collaborated with backend developers to build scalable features using Node.js and Express.js.",
      "Debugged and optimized application performance through testing and code improvements."
    ],
  },
  {
    role: "Data Analytics, AI & Web Development Intern",
    company: "NIELIT",
    duration: "May 2025",
    details: [
      "Developed web applications using Python, Django, HTML, CSS and JavaScript.",
      "Built REST APIs for data processing and backend communication.",
      "Performed basic data analysis and visualization using Python libraries.",
    ],
  },
  {
    role: "Web Designing Intern",
    company: "XploCode Infotech Private Limited",
    duration: "Feb 2025",
    details: [
      "Designed responsive web pages using HTML5, CSS3 and Bootstrap.",
      "Implemented modern UI components for better user experience.",
      "Optimized website layout for mobile and desktop responsiveness.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-glow-blue">
            Experience Timeline
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-brand-blue/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-brand-blue/30 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className="mb-20 relative w-full md:flex justify-between items-center group">
              {/* Timeline Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-[-41px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-[#050505] border-4 border-brand-cyan shadow-[0_0_15px_#00ffff] z-10 group-hover:bg-brand-cyan transition-colors duration-500"
              />

              {/* Content Box */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`w-full md:w-[45%] glass-panel p-8 rounded-2xl ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                } hover:border-brand-blue transition-all duration-300 relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                
                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                <h4 className="text-brand-purple text-lg font-medium mb-1">{exp.company}</h4>
                <p className="text-gray-400 text-sm mb-6">{exp.duration}</p>
                
                <ul className="space-y-2 text-gray-300 text-sm">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-brand-cyan mt-1">▹</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
