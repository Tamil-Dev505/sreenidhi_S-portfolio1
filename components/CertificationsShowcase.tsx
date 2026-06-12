"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { X, Maximize2 } from "lucide-react";

interface Certificate {
  filename: string;
  title: string;
  issuer: string;
  date: string;
  src: string;
}

function getCleanMetadata(filename: string) {
  const lower = filename.toLowerCase();
  
  // Custom high-fidelity metadata overrides for known certificates
  if (lower.includes("sih") || lower.includes("hackathon")) {
    return {
      title: "Smart India Hackathon 2025 Participation",
      issuer: "Ministry of Education (Govt. of India)",
      date: "2025"
    };
  }
  if (lower.includes("data_structures") || lower.includes("ucsd") || lower.includes("coursera")) {
    return {
      title: "Data Structures Certificate",
      issuer: "UC San Diego & HSE University",
      date: "2025"
    };
  }
  if (lower.includes("cloud_computing") || lower.includes("nptel")) {
    return {
      title: "Cloud Computing Elite Certification",
      issuer: "NPTEL (IIT Kharagpur)",
      date: "2024"
    };
  }
  if (lower.includes("machine_learning") || lower.includes("nehru") || lower.includes("ai")) {
    return {
      title: "Machine Learning and AI Workshop",
      issuer: "Nehru Institute of Eng & Technology",
      date: "2024"
    };
  }
  if (lower.includes("style_craft") || lower.includes("tecquora") || lower.includes("css")) {
    return {
      title: "Style Craft CSS (Second Prize)",
      issuer: "Hindusthan College of Engineering",
      date: "2025"
    };
  }
  if (lower.includes("codamics")) {
    return {
      title: "Python and Web Development",
      issuer: "Codamics Academy",
      date: "2024"
    };
  }
  if (lower.includes("nielit")) {
    return {
      title: "Scientific Officer Certification",
      issuer: "NIELIT",
      date: "2024"
    };
  }
  if (lower.includes("xplocode")) {
    return {
      title: "Frontend Development Course",
      issuer: "Xplocode",
      date: "2024"
    };
  }
  if (lower.includes("cyber")) {
    return {
      title: "Cyber Security Essentials",
      issuer: "Simplilearn",
      date: "2024"
    };
  }
  if (lower.includes("py")) {
    return {
      title: "Python Programming",
      issuer: "Infosys Springboard",
      date: "2023"
    };
  }
  if (lower.includes("web_dev") || lower.includes("web dev")) {
    return {
      title: "Full Stack Web Development",
      issuer: "Simplilearn",
      date: "2024"
    };
  }
  if (lower.includes("web_course") || lower.includes("web course")) {
    return {
      title: "Responsive Web Design",
      issuer: "Wipro",
      date: "2024"
    };
  }

  // Fallback convention parsing: "Title_-_Issuer_-_Date.jpg"
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
  
  let parts: string[] = [];
  if (nameWithoutExt.includes(" - ")) {
    parts = nameWithoutExt.split(" - ");
  } else if (nameWithoutExt.includes("_-_")) {
    parts = nameWithoutExt.split("_-_");
  } else if (nameWithoutExt.includes("-")) {
    parts = nameWithoutExt.split("-");
  } else if (nameWithoutExt.includes("_")) {
    parts = nameWithoutExt.split("_");
  } else {
    parts = [nameWithoutExt];
  }

  parts = parts.map(p => p.trim());

  const title = parts[0] || "Certification";
  const issuer = parts[1] || "Verification System";
  const date = parts[2] || "2025";

  const cleanString = (str: string) => {
    return str
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  };

  return {
    title: cleanString(title),
    issuer: cleanString(issuer),
    date: date
  };
}

export default function CertificationsShowcase() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/certificates")
      .then((res) => res.json())
      .then((data: string[]) => {
        // Exclude any files related to internships and map metadata
        const parsed = data
          .filter(filename => !filename.toLowerCase().includes("intern") && !filename.startsWith("cert-"))
          .map((filename) => {
            const meta = getCleanMetadata(filename);
            return {
              filename,
              title: meta.title,
              issuer: meta.issuer,
              date: meta.date,
              src: `/certificates/${filename}`,
            };
          });
        setCertificates(parsed);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load certificates:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="certifications" className="py-20 sm:py-24 lg:py-32 relative">
      {/* space particle background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? "bg-brand-cyan/10" : "bg-brand-purple/10"} blur-[1px]`}
            style={{
              width: i % 3 === 0 ? "4px" : i % 3 === 1 ? "6px" : "8px",
              height: i % 3 === 0 ? "4px" : i % 3 === 1 ? "6px" : "8px",
              left: `${(i * 13) % 95}%`,
              top: `${(i * 7) % 95}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8 + (i % 4) * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="px-3 py-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] rounded-full bg-white/5 text-brand-cyan border border-white/10 mb-4 inline-block">
            Credentials
          </span>
          <h2 className="text-3xl min-[380px]:text-4xl md:text-6xl font-heading font-bold text-white text-glow-blue mb-4 break-words">
            CERTIFICATIONS
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            A collection of certifications showcasing continuous learning, technical expertise, and professional development.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-cyan"></div>
          </div>
        ) : certificates.length === 0 ? (
          <p className="text-gray-400 text-center">No certifications loaded yet. Drop files inside public/certificates/ to load.</p>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {certificates.map((cert) => (
              <motion.div
                key={cert.filename}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl sm:rounded-3xl p-[1px] overflow-hidden cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Glowing neon border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 group-hover:from-brand-cyan group-hover:to-brand-purple transition-all duration-500 rounded-2xl sm:rounded-3xl opacity-50 group-hover:opacity-100 blur-[0.5px]" />
                
                {/* Card Container */}
                <div className="relative rounded-2xl sm:rounded-3xl bg-[#050505]/95 backdrop-blur-xl p-3 min-[380px]:p-4 sm:p-5 h-full flex flex-col justify-between border border-white/5 transition-all duration-300">
                  
                  {/* Image container with Awwwards style zoom & overlay */}
                  <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                    <img
                      src={cert.src}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="p-3 rounded-full bg-white/10 text-white border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white group-hover:text-brand-cyan transition-colors duration-300 line-clamp-1 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium line-clamp-1 mb-4">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-white/5">
                      <span className="text-gray-500 text-xs font-semibold tracking-wider">
                        COMPLETED
                      </span>
                      <span className="text-brand-purple text-xs font-bold font-heading px-2 py-0.5 rounded bg-brand-purple/10 border border-brand-purple/20">
                        {cert.date}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl bg-[#050505]/95 p-3 sm:p-6 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors shadow-lg"
                onClick={() => setSelectedCert(null)}
              >
                <X size={20} />
              </button>

              {/* Dynamic scrollable image container */}
              <div className="w-full h-full overflow-auto flex items-center justify-center max-h-[70vh] rounded-2xl mb-4 sm:mb-5">
                <img
                  src={selectedCert.src}
                  alt={selectedCert.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg select-none"
                />
              </div>

              {/* Title Overlay Footer */}
              <div className="w-full text-center sm:text-left sm:flex sm:items-center sm:justify-between px-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-brand-cyan text-sm font-medium">
                    {selectedCert.issuer}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 flex items-center justify-center gap-3">
                  <span className="text-xs text-gray-500 font-semibold tracking-widest uppercase">
                    COMPLETED DATE:
                  </span>
                  <span className="px-3 py-1 rounded bg-brand-purple/20 text-brand-purple border border-brand-purple/30 text-xs font-bold font-heading">
                    {selectedCert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
