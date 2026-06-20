"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0, rotationX: 45 },
      { y: 0, opacity: 1, rotationX: 0, delay: 0.2 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Floating Holographic Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-32 h-32 glass-panel rounded-2xl hidden md:flex items-center justify-center"
      >
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
          alt="Python" 
          className="w-16 h-16"
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full border border-brand-blue/30 bg-brand-blue/5 hidden md:flex items-center justify-center backdrop-blur-md"
      >
        <motion.img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
          alt="React" 
          className="w-24 h-24"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
        <h1
          ref={titleRef}
          className="text-4xl min-[380px]:text-5xl md:text-8xl font-heading font-extrabold mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ededed] to-brand-blue break-words"
          style={{ perspective: "1000px" }}
        >
          SREENIDHI S
        </h1>
        <h2
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-3xl font-sans mb-6 text-brand-cyan text-glow-blue tracking-wide"
        >
          Full Stack Developer | Creative Frontend Engineer
        </h2>
        <p
          ref={descRef}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I build immersive, futuristic, and scalable digital experiences with
          premium UI/UX and modern frontend technologies.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6"
        >
          <Link href="#projects">
            <MagneticButton className="border border-brand-cyan/50 text-brand-cyan">
              Explore Projects
            </MagneticButton>
          </Link>
          <a href="/resume/Sreenidhi's_resumee.pdf" download="Sreenidhi's_resumee.pdf">
            <MagneticButton className="border border-brand-purple/50 text-brand-purple">
              Download Resume
            </MagneticButton>
          </a>
          <Link href="#contact">
            <MagneticButton className="border border-white/20 text-white">
              Contact Me
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
