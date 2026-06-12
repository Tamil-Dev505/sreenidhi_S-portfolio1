"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const experiences = [
  {
    role: "Frontend / React Developer Intern",
    company: "El Codamics",
    duration: "Jan 2026 – May 2026",
    certImage: "/certificates/cert-codamics.jpg",
    details: [
      "Worked on CRM frontend development",
      "Integrated APIs with React",
      "Collaborated with development teams",
      "Improved UI/UX and frontend performance",
    ],
  },
  {
    role: "Data Analytics, AI & Web Development Intern",
    company: "NIELIT",
    duration: "May 2025",
    certImage: "/certificates/cert-nielit.jpg",
    details: [
      "Built web applications using Python Django",
      "Worked with HTML, CSS, JavaScript",
      "Developed REST APIs",
      "Performed basic data analysis and visualization",
    ],
  },
  {
    role: "Web Designing Intern",
    company: "XploCode Infotech",
    duration: "Feb 2025",
    certImage: "/certificates/cert-xplocode.jpg",
    details: [
      "Designed responsive web pages",
      "Built modern UI components",
      "Improved mobile responsiveness",
      "Worked with HTML, CSS, Bootstrap",
    ],
  },
];

export default function Experience() {
  const [activeCert, setActiveCert] = useState<string | null>(null);
  const [activeCertTitle, setActiveCertTitle] = useState<string | null>(null);

  const openLightbox = (image: string, title: string) => {
    setActiveCert(image);
    setActiveCertTitle(title);
  };

  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle floating background glow particles */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-14 sm:mb-20 lg:mb-24"
        >
          <span className="px-3 py-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] rounded-full bg-white/5 text-brand-cyan border border-white/10 mb-4 inline-block">
            Professional Timeline
          </span>
          <h2 className="text-3xl min-[380px]:text-4xl md:text-6xl font-heading font-bold text-glow-blue mb-4 break-words">
            Internships & Certifications
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A premium timeline showcasing my industry experience and verified training achievements.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l border-brand-blue/20 pl-6 min-[380px]:pl-8 ml-2 min-[380px]:ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Vertical central timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-cyan/20 -translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="mb-14 sm:mb-20 lg:mb-24 relative w-full md:flex justify-between items-center group">
                {/* Timeline node marker with neon pulse */}
                <div className="absolute left-[-31px] min-[380px]:left-[-41px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 z-10">
                  {/* Outer pulsing ping */}
                  <span className="absolute -inset-2 rounded-full bg-brand-cyan/20 animate-ping opacity-60 pointer-events-none" />
                  {/* Central node */}
                  <div className="w-5 h-5 rounded-full bg-[#050505] border-4 border-brand-cyan shadow-[0_0_15px_rgba(0,255,255,0.7)] group-hover:bg-brand-cyan transition-colors duration-500" />
                </div>

                {/* Content Box (slides in from opposite direction) */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.9, type: "spring", bounce: 0.15 }}
                  className={`w-full md:w-[46%] ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Glassmorphic border glow wrapper */}
                  <div className="relative rounded-2xl sm:rounded-3xl p-[1px] overflow-hidden group/card shadow-2xl hover:shadow-brand-blue/5 transition-all duration-500">
                    {/* Animated gradient neon border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan opacity-20 group-hover/card:opacity-100 transition-opacity duration-700 blur-[1px] animated-gradient-border" />

                    {/* Card Inner */}
                    <div className="relative rounded-2xl sm:rounded-3xl bg-[#050505]/90 backdrop-blur-xl p-4 min-[380px]:p-5 sm:p-8 h-full flex flex-col justify-between">
                      {/* Floating accent background glow inside card */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-full blur-2xl pointer-events-none" />

                      {/* Header details */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover/card:text-glow-blue transition-colors duration-300 break-words">
                            {exp.role}
                          </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 text-sm text-brand-purple font-medium">
                          <span>{exp.company}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-400 font-normal">{exp.duration}</span>
                        </div>
                      </div>

                      {/* Certificate image preview inside card */}
                      <div 
                        onClick={() => openLightbox(exp.certImage, `${exp.role} - ${exp.company}`)}
                        className="relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-6 border border-white/10 cursor-pointer group/cert bg-black/40"
                      >
                        <img 
                          src={exp.certImage} 
                          alt={`${exp.company} Certificate Preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/cert:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                          <svg className="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-brand-cyan text-xs sm:text-sm font-semibold tracking-wider uppercase text-center">Preview Certificate</span>
                        </div>
                      </div>

                      {/* Technical highlights bullet points */}
                      <ul className="space-y-3 text-gray-300 text-sm mb-6">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-brand-cyan mt-1 h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00ffff] flex-shrink-0" />
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Action Button */}
                      <button
                        onClick={() => openLightbox(exp.certImage, `${exp.role} - ${exp.company}`)}
                        className="w-full py-3.5 rounded-xl border border-brand-cyan/40 bg-brand-cyan/5 text-brand-cyan font-bold tracking-wider text-xs uppercase hover:bg-brand-cyan hover:text-black hover:box-glow transition-all duration-300 flex items-center justify-center gap-2 text-center"
                      >
                        <svg className="w-4 h-4 fill-none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Certificate
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal popup overlay */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-panel p-2 sm:p-2.5 rounded-2xl border border-white/10 overflow-hidden box-glow"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-brand-cyan hover:text-black transition-all duration-300 border border-white/15 hover:border-transparent cursor-pointer"
              >
                ✕
              </button>

              {/* Certificate Image */}
              <div className="w-full flex items-center justify-center bg-black/40 rounded-xl overflow-hidden p-2">
                <img
                  src={activeCert}
                  alt={activeCertTitle || "Internship Certificate"}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </div>

              {/* Title Footer */}
              {activeCertTitle && (
                <div className="py-4 px-4 sm:px-6 text-center border-t border-white/5 bg-white/[0.01]">
                  <h4 className="text-base sm:text-lg font-bold font-heading text-white tracking-wide">
                    {activeCertTitle}
                  </h4>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
