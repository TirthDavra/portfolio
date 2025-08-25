"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import phone from "@/../public/assets/phone.png";
import mail from "@/../public/assets/mail.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://getform.io/f/bxojevka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // You can add error handling here if needed
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+91 9313424235",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "tirthdavara52@gmail.com",
      description: "Online support"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Surat, Gujarat",
      description: "Available remotely"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-[rgb(var(--bg-tertiary))] to-[rgb(var(--bg-primary))] relative overflow-hidden">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-[rgb(var(--accent-primary))]/20 mb-6">
            <HiMail className="mr-2 text-[rgb(var(--accent-primary))]" />
            <span className="text-sm font-medium text-theme-secondary">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-theme">Let's Work </span>
            <span className="text-gradient">Together</span>
          </h2>
          
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life 
            with modern web technologies and exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-theme mb-6">
                Get in Touch
              </h3>
              <p className="text-theme-secondary leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hello, feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-theme-secondary rounded-2xl p-6 border border-theme hover:border-[rgb(var(--accent-primary))]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-[rgb(var(--accent-primary))]/10 text-[rgb(var(--accent-primary))] group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-theme text-lg">{info.title}</h4>
                        <p className="text-[rgb(var(--accent-primary))] font-medium">{info.value}</p>
                        <p className="text-theme-muted text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-lg font-semibold text-theme mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/tirth-davara-515261274", label: "LinkedIn" },
                  // { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-theme-secondary hover:bg-[rgb(var(--accent-primary))]/10 text-theme-secondary hover:text-[rgb(var(--accent-primary))] transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-xl">{social.icon}</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-theme-secondary rounded-2xl p-8 border border-theme shadow-xl">
              <h3 className="text-2xl font-bold text-theme mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-theme-tertiary border border-theme text-theme placeholder-theme-muted focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-primary))]/50 focus:border-[rgb(var(--accent-primary))] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-theme-tertiary border border-theme text-theme placeholder-theme-muted focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-primary))]/50 focus:border-[rgb(var(--accent-primary))] transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-theme-tertiary border border-theme text-theme placeholder-theme-muted focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-primary))]/50 focus:border-[rgb(var(--accent-primary))] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl bg-theme-tertiary border border-theme text-theme placeholder-theme-muted focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-primary))]/50 focus:border-[rgb(var(--accent-primary))] transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-theme-tertiary border border-theme text-theme placeholder-theme-muted focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-primary))]/50 focus:border-[rgb(var(--accent-primary))] transition-all duration-300 resize-none"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full button-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="relative z-20">Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FaCheckCircle className="text-lg relative z-20" />
                      <span className="relative z-20">Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg relative z-20" />
                      <span className="relative z-20">Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-[rgb(var(--accent-primary))]/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-[rgb(var(--accent-secondary))]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default Contact;
