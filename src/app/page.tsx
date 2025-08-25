"use client";
import { useState, useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import ReliableLoadingScreen from "@/components/ReliableLoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <ReliableLoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`transition-all duration-1000 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
