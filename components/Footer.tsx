"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Globe, Mail, ArrowUp } from "lucide-react";

const navLinks = ["About", "Tech Stack", "Experience", "Projects", "Contact"];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-10 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-32 bg-brand-cyan/5 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-3xl font-heading font-bold text-glow-blue">
              Sreenidhi<span className="text-brand-purple">.</span>
            </Link>
            <p className="text-gray-500 mt-3 max-w-xs text-sm">
              Building immersive digital experiences one pixel at a time.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-gray-400 hover:text-brand-cyan transition-colors text-sm uppercase tracking-widest"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.15, y: -4 }}
              href="https://github.com/sreenidhI-S10"
              target="_blank"
              rel="noreferrer"
              suppressHydrationWarning
              className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:box-glow transition-all duration-300"
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -4 }}
              href="https://linkedin.com/in/sreenidhi-s-b3964a262"
              target="_blank"
              rel="noreferrer"
              suppressHydrationWarning
              className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:box-glow transition-all duration-300"
            >
              <Globe size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -4 }}
              href="mailto:ssreenidhisaravanan@gmail.com"
              suppressHydrationWarning
              className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-gray-400 hover:text-brand-purple transition-all duration-300"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-gray-600 text-sm text-center">
            © 2026 Sreenidhi S. Designed & Built with ❤️ and lots of ☕
          </p>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            suppressHydrationWarning
            className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-brand-cyan hover:box-glow transition-all duration-300"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
