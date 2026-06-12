"use client";

import { motion } from "framer-motion";
import React from "react";
import MagneticButton from "./MagneticButton";

export default function VideoShowcase() {
  return (
    <section id="doctor-showcase" className="py-16 sm:py-20 lg:py-24 relative perspective-1000">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cinematic Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative w-full max-w-6xl mx-auto rounded-2xl sm:rounded-3xl p-[1px] overflow-hidden group"
        >
          {/* Animated Glowing Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan opacity-30 group-hover:opacity-100 transition-opacity duration-700 blur-[1px] animated-gradient-border" />

          {/* Main Card Content */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#050505]/90 backdrop-blur-xl p-4 min-[380px]:p-5 sm:p-8 lg:p-12 h-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Floating particles inside the card */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-brand-blue/15 blur-[1px]"
                  style={{
                    width: i % 2 === 0 ? "8px" : "12px",
                    height: i % 2 === 0 ? "8px" : "12px",
                    left: `${10 + i * 18}%`,
                    top: `${30 + (i * 11) % 50}%`,
                  }}
                  animate={{
                    y: [0, -60, 0],
                    x: [0, 15, -15, 0],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: 6 + (i % 3) * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>

            {/* Cinematic Video Player Container */}
            <div className="relative w-full lg:w-3/5 aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group/video shadow-2xl shadow-brand-blue/5">
              <video
                src="/hospital.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/video:scale-105"
              />
              {/* Gradient Overlay for high-fidelity movie styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 via-transparent to-brand-blue/10 pointer-events-none mix-blend-color-dodge" />
            </div>

            {/* Project Details Column */}
            <div className="w-full lg:w-2/5 flex flex-col justify-between h-full space-y-6 z-10">
              <div>
                <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center gap-2 min-[420px]:gap-3 mb-4">
                  <span className="w-fit max-w-full px-3 py-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] rounded-full bg-white/5 text-brand-cyan border border-white/10 break-words">
                    Healthcare Platform
                  </span>
                  <span className="text-[0.65rem] sm:text-xs text-gray-500 uppercase tracking-[0.18em] sm:tracking-[0.25em]">Video Demo</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-glow-blue transition-all duration-300 mb-4 break-words">
                  Doctor Appointment & Hospital Management System
                </h3>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  A high-fidelity healthcare administration web application designed to streamline doctor scheduling and online patient appointments. Implements multi-role access control, dynamic timetables, and structured hospital workflow modules with real-time updates.
                </p>

                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-1 min-[520px]:grid-cols-2 gap-x-4 gap-y-3 mb-6">
                  {[
                    "Doctor Discovery",
                    "Patient Portal",
                    "Admin Control Panel",
                    "Appointment Booking",
                    "Workflow Management",
                    "Specialization Filters",
                    "Real-Time Confirmations",
                    "Responsive UI",
                  ].map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00ffff] flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "Django", "SQLite", "HTML5", "CSS3", "JavaScript"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 sm:px-3 py-1 text-[0.7rem] sm:text-xs font-semibold rounded-full bg-brand-purple/10 text-brand-cyan border border-brand-purple/20 backdrop-blur-sm transition-colors duration-300 hover:bg-brand-purple/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                <a
                  href="https://github.com/sreenidhI-S10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <MagneticButton className="w-full border border-brand-cyan/50 text-brand-cyan flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <svg className="w-4 h-4 fill-current animate-pulse" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub Code
                  </MagneticButton>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
