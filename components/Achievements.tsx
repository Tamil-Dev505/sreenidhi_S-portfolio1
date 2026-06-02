"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, title }: { from: number; to: number; title: string }) {
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
    <div className="flex flex-col items-center justify-center p-8 glass-panel rounded-3xl hover:border-brand-purple transition-all duration-300">
      <h3
        ref={ref}
        className="text-5xl md:text-7xl font-bold font-heading text-glow-purple mb-4"
      >
        {value}+
      </h3>
      <p className="text-gray-400 font-medium tracking-widest uppercase text-sm text-center">
        {title}
      </p>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Milestones
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Counter from={0} to={10} title="Projects Completed" />
          <Counter from={0} to={100} title="Commits Made" />
          <Counter from={0} to={4} title="Hackathons Won" />
          <Counter from={0} to={500} title="Cups of Coffee" />
        </div>
      </div>
    </section>
  );
}
