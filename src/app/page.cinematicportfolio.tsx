"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function CinematicPortfolio() {
  return (
    <div className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section - Thunder/Lightning Animation */}
      <Hero />
      
      {/* About Section - Floating Geometry Animation */}
      <About />
      
      {/* Portfolio Section - Matrix Code Animation */}
      <Portfolio />
      
      {/* Skills Section - Neural Network Animation */}
      <Skills />
      
      {/* Contact Section - Wave Distortion Animation */}
      <Contact />
      
      {/* Footer Section - Cinematic Grain Animation */}
      <Footer />
    </div>
  );
}