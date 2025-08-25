"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaDownload, FaCode, FaRocket } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import profilePic from "@/../public/assets/profilepic.png";
import ParticleBackground from "./ParticleBackground";
import ThunderBackground from "./ThunderBackground";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[rgb(var(--bg-primary))] via-[rgb(var(--bg-secondary))] to-[rgb(var(--bg-tertiary))] pt-24">
      {/* Thunder/Lightning Background */}
      <ThunderBackground />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Dynamic Floating Elements with Mouse Parallax */}
        <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          x: useTransform(() => typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) * 0.01 : 0),
          y: useTransform(() => typeof window !== 'undefined' ? (mousePosition.y - window.innerHeight / 2) * 0.01 : 0),
        }}
      >
        {/* Animated Energy Orbs */}
        <motion.div
          className="absolute top-20 left-[10%] hidden lg:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        >
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] opacity-20 blur-xl rounded-full animate-pulse" />
            <motion.div 
              className="absolute inset-2 bg-gradient-to-r from-[rgb(var(--accent-primary))]/30 to-[rgb(var(--accent-secondary))]/30 rounded-full backdrop-blur-sm border border-[rgb(var(--accent-primary))]/20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="absolute inset-4 bg-[rgb(var(--accent-primary))]/40 rounded-full"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.8, 0.4, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

          <motion.div
          className="absolute top-32 right-[15%] hidden lg:block"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -360],
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
        >
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent-secondary))] to-[rgb(var(--accent-tertiary))] opacity-25 blur-xl rounded-full animate-pulse" />
            <motion.div 
              className="absolute inset-1 bg-gradient-to-r from-[rgb(var(--accent-secondary))]/25 to-[rgb(var(--accent-tertiary))]/25 rounded-full backdrop-blur-sm border border-[rgb(var(--accent-secondary))]/20"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div 
              className="absolute inset-3 bg-[rgb(var(--accent-secondary))]/50 rounded-full"
              animate={{
                scale: [0.7, 1.3, 0.7],
                opacity: [0.9, 0.3, 0.9],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
          </motion.div>

        {/* Additional floating energy particles */}
          <motion.div
          className="absolute bottom-32 left-[20%] hidden lg:block"
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent-tertiary))] to-[rgb(var(--accent-primary))] opacity-15 blur-lg rounded-full animate-pulse" />
            <motion.div 
              className="absolute inset-2 bg-[rgb(var(--accent-tertiary))]/20 rounded-full backdrop-blur-sm border border-[rgb(var(--accent-tertiary))]/15"
              animate={{
                scale: [0.9, 1.2, 0.9],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
          </motion.div>

      <div className="container-responsive relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity, y }}
          className="text-center"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-[rgb(var(--accent-primary))]/20 mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3" />
            <span className="text-sm font-medium text-theme-secondary">
              Available for new projects
            </span>
            <HiSparkles className="ml-2 text-[rgb(var(--accent-primary))] animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4 mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
              <span className="text-theme-secondary block mb-2">Hi, I'm</span>
              <span className="gradient-text block font-extrabold tracking-tight">
                Tirth Davara
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl sm:text-2xl lg:text-3xl text-theme-secondary max-w-4xl mx-auto leading-relaxed font-light">
              React Developer crafting{" "}
              <span className="text-gradient font-semibold">exceptional digital experiences</span>
              {" "}with modern technologies and creative problem-solving
            </p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="relative inline-block">
          <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] rounded-full blur-2xl opacity-30 animate-pulse" />
            <Image
              src={profilePic}
                  alt="Tirth Davara - React Developer"
                  className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-[rgb(var(--accent-primary))]/20 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full border-2 border-[rgb(var(--accent-primary))]/30 animate-pulse" />
              </motion.div>
              
              {/* Floating icons around profile */}
              <motion.div
                className="absolute -top-4 -right-4 p-3 bg-theme-secondary rounded-full shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FaCode className="text-[rgb(var(--accent-primary))] text-xl" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 p-3 bg-theme-secondary rounded-full shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaRocket className="text-[rgb(var(--accent-secondary))] text-xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#portfolio"
              className="button-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-20">View My Work</span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="button-secondary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
            
            <motion.a
              href="/Tirth_CV.pdf"
              download="Tirth_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-theme-secondary hover:text-[rgb(var(--accent-primary))] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-sm" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-6"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-theme-secondary hover:bg-[rgb(var(--accent-primary))]/10 transition-colors duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xl text-theme-secondary group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-300" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-theme-secondary hover:bg-[rgb(var(--accent-primary))]/10 transition-colors duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-xl text-theme-secondary group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-300" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              className="w-6 h-10 border-2 border-theme-muted rounded-full flex justify-center"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-[rgb(var(--accent-primary))] rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
        </motion.div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg-primary))]/50 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
