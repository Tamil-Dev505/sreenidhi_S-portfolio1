"use client";

import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import SchoolShowcase from "../components/SchoolShowcase";
import VideoShowcase from "../components/VideoShowcase";
import RailwayShowcase from "../components/RailwayShowcase";
import Achievements from "../components/Achievements";
import CertificationsShowcase from "../components/CertificationsShowcase";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <SchoolShowcase />
        <VideoShowcase />
        <RailwayShowcase />
        <Achievements />
        <CertificationsShowcase />
        <Contact />
      </main>
      <Footer />
    </>
  );
}