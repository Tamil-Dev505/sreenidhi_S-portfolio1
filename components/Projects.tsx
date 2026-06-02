"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "School Management System",
    description:
      "A comprehensive full-stack platform designed to streamline educational administration. Features include student profile management, academic record tracking, real-time attendance monitoring, grade management, and powerful admin dashboards for institutional oversight. Built with a focus on user accessibility and data security.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Railway Booking System",
    description:
      "An enterprise-grade web-based ticket reservation platform that revolutionizes train bookings. Delivers real-time seat availability, seamless booking management, secure payment integration, and intuitive admin controls. Engineered to handle high traffic volumes with responsive design and robust backend architecture.",
    tech: ["HTML", "CSS", "JavaScript", "SQLite"],
    github: "#",
    live: "#",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A modern, feature-rich messaging platform enabling instant bidirectional communication. Built with cutting-edge WebSocket technology for real-time message delivery, complete with typing indicators, user presence, message history, and a stunning glassmorphism UI. Optimized for both desktop and mobile experiences.",
    tech: ["React.js", "Node.js", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "Smart Ambulance IoT System",
    description:
      "An innovative IoT-powered healthcare solution transforming emergency response management. Features GPS tracking, real-time ambulance location monitoring, automated dispatch systems, and an interactive web dashboard. Integrates IoT sensors for vehicle status and real-time incident management.",
    tech: ["Python", "IoT", "Sensors", "Web Dashboard"],
    github: "#",
    live: "#",
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
      className="relative w-full h-[400px] glass-panel rounded-3xl p-8 cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-brand-blue/50 transition-colors duration-300 pointer-events-none"
      />
      <div
        style={{ transform: "translateZ(75px)" }}
        className="h-full flex flex-col justify-between"
      >
        <div>
          <h3 className="text-2xl font-bold font-heading text-white group-hover:text-glow-blue transition-all duration-300 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-purple/10 text-brand-cyan border border-brand-purple/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-auto">
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <ExternalLink size={18} /> Code
          </Link>
          <Link
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 text-sm text-brand-cyan hover:text-white transition-colors ml-auto"
          >
            <ExternalLink size={18} /> Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative perspective-1000">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-glow-blue mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xl">Showcasing my best creations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
