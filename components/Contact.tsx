"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Globe, ExternalLink } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError(false);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-glow-purple mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 text-xl max-w-xl mx-auto">
            Open to opportunities, collaborations, and exciting new projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5 group">
              <span className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-brand-cyan group-hover:box-glow transition-all duration-300">
                <Mail size={22} />
              </span>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Email</p>
                <a
                  href="mailto:ssreenidhisaravanan@gmail.com"
                  className="text-white text-lg hover:text-brand-cyan transition-colors"
                >
                  ssreenidhisaravanan@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <span className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-brand-purple group-hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-all duration-300">
                <Phone size={22} />
              </span>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Phone</p>
                <a
                  href="tel:+919344980186"
                  className="text-white text-lg hover:text-brand-purple transition-colors"
                >
                  +91 9344980186
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <span className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-white group-hover:box-glow transition-all duration-300">
                <MapPin size={22} />
              </span>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Location</p>
                <p className="text-white text-lg">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/sreenidhi-s-b3964a262"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-brand-cyan hover:box-glow hover:scale-110 transition-all duration-300"
              >
                <Globe size={22} />
              </a>
              <a
                href="https://github.com/sreenidhI-S10"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-white hover:text-brand-cyan hover:box-glow hover:scale-110 transition-all duration-300"
              >
                <ExternalLink size={22} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <div className="glass-panel p-12 rounded-3xl text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-3xl font-bold text-glow-blue mb-2">Message Sent!</h3>
                <p className="text-gray-400">I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-panel p-10 rounded-3xl space-y-6"
              >
                <div>
                  <label className="text-gray-400 text-sm uppercase tracking-widest mb-2 block">
                    Name
                  </label>
                  <input
                    name="from_name"
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-cyan rounded-xl px-5 py-4 text-white outline-none transition-colors duration-300 placeholder-gray-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm uppercase tracking-widest mb-2 block">
                    Email
                  </label>
                  <input
                    name="from_email"
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-cyan rounded-xl px-5 py-4 text-white outline-none transition-colors duration-300 placeholder-gray-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm uppercase tracking-widest mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-cyan rounded-xl px-5 py-4 text-white outline-none transition-colors duration-300 placeholder-gray-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-brand-blue/80 to-brand-purple/80 hover:from-brand-blue hover:to-brand-purple text-white font-bold py-5 rounded-xl transition-all duration-300 hover:box-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed tracking-widest"
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
