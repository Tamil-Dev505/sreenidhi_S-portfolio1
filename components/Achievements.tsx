"use client";

import { motion, useInView, animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Counter({
  from,
  to,
  title,
  description,
  delayOffset,
}: {
  from: number;
  to: number;
  title: string;
  description: string;
  delayOffset: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(val) {
          setValue(Math.floor(val));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView]);

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 5 + delayOffset * 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex flex-col items-center justify-start p-5 sm:p-8 glass-panel rounded-2xl sm:rounded-3xl hover:border-brand-purple/50 border border-white/5 transition-all duration-300 h-full group"
    >
      <h3
        ref={ref}
        className="text-4xl min-[380px]:text-5xl md:text-6xl font-bold font-heading text-glow-purple mb-4 text-brand-purple group-hover:scale-105 transition-transform duration-300"
      >
        {value}+
      </h3>
      <h4 className="text-white font-semibold tracking-wider uppercase text-sm text-center mb-3 min-h-[40px] flex items-center justify-center">
        {title}
      </h4>
      <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-24 lg:py-32 relative">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="px-3 py-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] rounded-full bg-white/5 text-brand-cyan border border-white/10 mb-4 inline-block">
            Proven Track Record
          </span>
          <h2 className="text-3xl min-[380px]:text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Milestones
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            Key professional highlights and academic accomplishments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <Counter
            from={0}
            to={3}
            title="INTERNSHIPS COMPLETED"
            description="Successfully completed industry internships in Web Development, Frontend Development, and Data Analytics."
            delayOffset={0}
          />
          <Counter
            from={0}
            to={10}
            title="CERTIFICATIONS EARNED"
            description="Earned certifications from NPTEL, Infosys Springboard, Simplilearn, Wipro, and other learning platforms."
            delayOffset={1}
          />
          <Counter
            from={0}
            to={4}
            title="FULL STACK PROJECTS"
            description="Developed and deployed real-world full stack applications including Railway Booking System, School Management System, OCR System, and Hospital Management System."
            delayOffset={2}
          />
          <Counter
            from={0}
            to={2}
            title="HACKATHONS PARTICIPATED"
            description="Participated in technical competitions and hackathon events focused on innovation and problem solving."
            delayOffset={3}
          />
        </div>
      </div>
    </section>
  );
}
