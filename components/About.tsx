"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const localProfileImage = "/sreenidhi-profile.png";

export default function About() {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass-panel p-5 min-[380px]:p-6 sm:p-10 md:p-20 rounded-2xl sm:rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-3xl min-[380px]:text-4xl md:text-6xl font-heading font-bold mb-8 sm:mb-10 text-glow-blue relative z-10">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center relative z-10">
            <div className="flex-1 space-y-5 sm:space-y-6 text-base min-[380px]:text-lg md:text-2xl leading-relaxed text-gray-300">
              <p>
                I&apos;m a passionate Full Stack Developer focused on building immersive, modern, and scalable web experiences.
              </p>
              <p>
                I enjoy blending creativity with engineering to create visually stunning and highly functional applications. From pixel-perfect frontends to robust backend architectures, my goal is to deliver excellence in every line of code.
              </p>
            </div>

            <div className="relative w-full max-w-sm md:w-[320px] md:max-w-none aspect-[3/4] glass-panel rounded-2xl overflow-hidden border border-brand-cyan/20 group hover:border-brand-cyan transition-colors duration-500 shrink-0">
              {imageUnavailable ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-blue/10 via-white/5 to-brand-purple/10">
                  <div className="text-center px-6">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-brand-cyan/30 bg-white/5 text-3xl font-heading font-bold text-brand-cyan">
                      SS
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                      Profile Photo
                    </p>
                  </div>
                </div>
              ) : (
                <Image
                  src={localProfileImage}
                  alt="Portrait of SREENIDHI S"
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={() => setImageUnavailable(true)}
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
