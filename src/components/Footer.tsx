"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaHeart, FaArrowUp } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-theme-secondary border-t border-theme relative overflow-hidden">
      <div className="container-responsive py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gradient mb-4">Tirth Davara</h3>
              <p className="text-theme-secondary leading-relaxed mb-6 max-w-md">
                Passionate React developer creating exceptional digital experiences
                with modern technologies and creative problem-solving.
              </p>

              {/* Social Links */}
              {/* <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-theme-tertiary hover:bg-[rgb(var(--accent-primary))]/10 text-theme-secondary hover:text-[rgb(var(--accent-primary))] transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <div className="text-lg">{social.icon}</div>
                  </motion.a>
                ))}
              </div> */}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-theme mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-theme-secondary hover:text-[rgb(var(--accent-primary))] transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-theme mb-6">Get in Touch</h4>
              <div className="space-y-3 text-theme-secondary">
                <p>tirthdavara52@gmail.com</p>
                <p>+91 9313424235</p>
                <p>Surat, Gujarat</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-theme"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-theme-secondary">
              <span>© {new Date().getFullYear()} Tirth Davara. Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-theme-secondary text-sm">
                Built with Next.js & Tailwind CSS
              </span>

              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-theme-tertiary hover:bg-[rgb(var(--accent-primary))]/10 text-theme-secondary hover:text-[rgb(var(--accent-primary))] transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <HiOutlineArrowUp className="text-lg" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-[rgb(var(--accent-primary))]/5 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-[rgb(var(--accent-secondary))]/5 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
    </footer>
  );
};

export default Footer;
