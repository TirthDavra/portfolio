"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Portfolio",
    path: "#portfolio",
  },
  {
    title: "Skills",
    path: "#skills",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && nav) {
        setNav(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (nav && e.target === e.currentTarget) {
        setNav(false);
      }
    };

    if (nav) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [nav]);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 15,
      },
    },
  };

  const navItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, type: "spring", damping: 15 },
        opacity: { duration: 0.2 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
        opacity: { duration: 0.1 },
      },
    },
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-theme/80 backdrop-blur-custom border-b border-theme shadow-lg" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="container-responsive">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between py-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link href="/" className="text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-300">
              TD
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <Link
                    href={link.path}
                    className="relative px-4 py-2 text-theme-secondary hover:text-theme transition-colors duration-300 font-medium"
                  >
                    {link.title}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-theme-secondary hover:bg-theme-tertiary transition-all duration-300 hover:scale-110 group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <HiSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <HiMoon className="w-5 h-5 text-blue-600" />
                )}
              </motion.div>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link
                href="#contact"
                className="button-primary relative z-10"
              >
                <span className="relative z-20">Contact Me</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-gradient">
            TD
          </Link>
          <div className="flex items-center space-x-4">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-theme-secondary hover:bg-theme-tertiary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <HiSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <HiMoon className="w-5 h-5 text-blue-600" />
                )}
              </motion.div>
            </motion.button>
            <motion.button
              onClick={toggleNav}
              className="border border-theme p-2 rounded-lg text-theme-secondary hover:text-theme hover:border-[rgb(var(--accent-primary))] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden fixed inset-0 z-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setNav(false);
                }
              }}
            >
              {/* Background Overlay with Glassmorphism */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'rgba(2, 6, 23, 0.85)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                }}
              />
              
              {/* Additional blur layer for better effect */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(2, 6, 23, 0.9) 0%, rgba(15, 23, 42, 0.8) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              />
              
              {/* Mobile Menu Content */}
              <div className="relative flex flex-col justify-center items-center min-h-screen px-8 z-10">
                <ul className="text-center space-y-8 mb-8">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      variants={navItemVariants}
                      className="group"
                    >
                      <Link
                        href={link.path}
                        onClick={closeNav}
                        className="text-2xl font-semibold text-theme-secondary hover:text-theme transition-colors duration-300 block py-3 relative"
                      >
                        {link.title}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] group-hover:w-full transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Mobile Contact Button */}
                <motion.div variants={navItemVariants}>
                  <Link
                    href="#contact"
                    onClick={closeNav}
                    className="button-primary inline-block text-lg px-8 py-4"
                  >
                    <span className="relative z-20">Contact Me</span>
                  </Link>
                </motion.div>

                {/* Mobile Social Links */}
                <motion.div 
                  variants={navItemVariants}
                  className="flex gap-6 mt-8"
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-theme-secondary hover:bg-[rgb(var(--accent-primary))]/10 text-theme-secondary hover:text-[rgb(var(--accent-primary))] transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-theme-secondary hover:bg-[rgb(var(--accent-primary))]/10 text-theme-secondary hover:text-[rgb(var(--accent-primary))] transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </motion.div>

                {/* Close Instructions */}
                <motion.p 
                  variants={navItemVariants}
                  className="text-sm text-theme-muted mt-8 text-center"
                >
                  Tap anywhere or press ESC to close
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
