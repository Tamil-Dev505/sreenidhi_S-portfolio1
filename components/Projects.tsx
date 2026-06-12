"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const projects = [
  {
    title: "Smart School Management System",
    category: "Education Platform",
    description:
      "A full-stack school management web application with separate teacher and student portals for attendance, assignments, marks, timetables, announcements, and performance tracking.",
    highlights: ["Teacher and student login portals", "Attendance and marks tracking", "Assignments, timetables, and announcements"],
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    title: "Doctor Appointment & Hospital Management System",
    category: "Healthcare Platform",
    description:
      "A healthcare web application for online doctor appointments, schedule management, appointment confirmations, and hospital workflow handling.",
    highlights: ["Doctor discovery and scheduling", "Patient and admin management", "Real-time appointment handling"],
    tech: ["Python", "Django", "SQLite", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "AI Camera Text Extraction Website",
    category: "AI / OCR Tool",
    description:
      "An AI-powered OCR web app that extracts text from images and live camera feeds, letting users scan documents and copy or download results instantly.",
    highlights: ["Webcam-based document scanning", "Instant text extraction", "Copy and download output"],
    tech: ["Python", "Flask", "OpenCV", "Doctr OCR", "HTML5", "CSS3"],
  },
  {
    title: "Railway Booking System",
    category: "Travel Platform",
    description:
      "A modern railway ticket booking platform with train search, seat availability, passenger booking, payment flow, and booking confirmation features.",
    highlights: ["Train search and seat availability", "Passenger booking and payment flow", "Responsive ticketing UI"],
    tech: ["Python", "Django", "SQLite", "HTML5", "CSS3", "JavaScript"],
  },
];

function TiltCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="project-tilt-card relative w-full h-full glass-panel rounded-2xl sm:rounded-3xl p-4 min-[380px]:p-5 sm:p-8 cursor-pointer group overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-transparent group-hover:border-brand-blue/50 transition-colors duration-300 pointer-events-none"
      />
      <div
        style={{ transform: "translateZ(75px)" }}
        className="relative z-10 h-full flex flex-col justify-between gap-5 sm:gap-6"
      >
        <div>
          <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between gap-2 min-[420px]:gap-4 mb-4">
            <span className="w-fit max-w-full px-3 py-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] rounded-full bg-white/5 text-brand-cyan border border-white/10 break-words">
              {project.category}
            </span>
            <span className="text-[0.65rem] sm:text-xs text-gray-500 uppercase tracking-[0.18em] sm:tracking-[0.25em]">Case Study</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-glow-blue transition-all duration-300 mb-3 break-words">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-md">
            {project.description}
          </p>

          <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
            {project.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-cyan shadow-[0_0_10px_#00ffff] flex-shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 sm:px-3 py-1 text-[0.7rem] sm:text-xs font-semibold rounded-full bg-brand-purple/10 text-brand-cyan border border-brand-purple/20 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 relative perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl min-[380px]:text-4xl md:text-6xl font-heading font-bold text-glow-blue mb-4 break-words">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-xl">Showcasing my best creations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 items-stretch">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
