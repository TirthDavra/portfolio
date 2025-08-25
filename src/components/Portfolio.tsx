"use client";
import React, { useState } from "react";
import project1 from "@/../public/assets/proj1.jpg";
import project2 from "@/../public/assets/proj2.jpg";
import project3 from "@/../public/assets/proj4.jpg";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaCode, FaEye, FaStar, FaChartLine, FaUsers, FaClock, FaAward } from "react-icons/fa";
import { HiOutlineArrowRight, HiOutlineLightBulb, HiOutlineCog, HiOutlineSparkles } from "react-icons/hi";
import { BiTrendingUp } from "react-icons/bi";

const projects = [
  {
    id: 1,
    title: "HRM System",
    subtitle: "Human Resource Management Platform",
    desc: "Comprehensive HR management system with Admin and Employee modules, featuring Google Calendar integration for scheduling and reusable React components with Metronic theme.",
    longDesc: "A full-featured HR platform that streamlines employee management, attendance tracking, and scheduling. Built with modular architecture using React.js and integrated with Google Calendar API for seamless scheduling functionality.",
    challenge: "Creating a scalable HR system that handles multiple user roles while providing intuitive scheduling and employee management capabilities.",
    solution: "Developed reusable components using React.js and Metronic theme, integrated Google Calendar API for scheduling, and implemented role-based access control for Admin and Employee modules.",
    results: ["Streamlined HR processes", "Automated scheduling system", "Role-based access control", "Enhanced employee experience"],
    devStack: ["Node.js", "Express.js", "React.js", "Google Calendar API", "Metronic Theme"],
    category: "Full Stack",
    link: "#",
    git: "#",
    src: project1,
    featured: true,
    status: "Live",
    year: "2024",
    color: "from-blue-500 to-purple-600",
    icon: "👥",
    metrics: {
      performance: 92,
      accessibility: 95,
      seo: 88,
      users: "500+"
    }
  },
  {
    id: 2,
    title: "SIX-FINTECH",
    subtitle: "TradingView Clone Platform",
    desc: "Advanced trading platform clone with dynamic chart components, real-time data visualization, and full responsive design using React.js and Material UI.",
    longDesc: "A sophisticated trading platform that replicates TradingView's functionality with interactive charts, real-time market data, and responsive design. Built with reusable components and integrated chart APIs for comprehensive financial data visualization.",
    challenge: "Building a complex trading interface with real-time data updates, interactive charts, and responsive design that works across all devices.",
    solution: "Developed reusable, dynamic components using React.js and Material UI, integrated chart APIs like Recharts for data visualization, and ensured full responsiveness across all screen sizes.",
    results: ["Real-time market data", "Interactive chart functionality", "Full responsive design", "Enhanced trading experience"],
    devStack: ["Node.js", "Express.js", "React.js", "Material UI", "Recharts"],
    category: "Web App",
    link: "#",
    git: "#",
    src: project2,
    featured: true,
    status: "Live",
    year: "2024",
    color: "from-green-500 to-teal-600",
    icon: "📈",
    metrics: {
      performance: 89,
      accessibility: 94,
      seo: 86,
      users: "2K+"
    }
  },
  {
    id: 3,
    title: "CHARITAG",
    subtitle: "E-Commerce Platform",
    desc: "Complete e-commerce solution with merchant panel and user marketplace, featuring dynamic components, REST API integration, and real-time WebSocket updates.",
    longDesc: "A comprehensive e-commerce platform that serves both merchants and customers. Features include merchant panel for product management, inventory tracking, order processing, and a user marketplace with real-time updates via WebSockets.",
    challenge: "Creating a dual-sided e-commerce platform that efficiently manages merchant operations while providing seamless shopping experience for customers.",
    solution: "Designed merchant panel pages for Products, Inventory, and Orders management. Developed user marketplace with dynamic components, integrated REST APIs via Axios, and implemented WebSockets for real-time updates.",
    results: ["Dual-sided marketplace", "Real-time inventory updates", "Seamless payment processing", "Enhanced merchant tools"],
    devStack: ["Next.js", "Laravel", "MySQL", "Axios", "WebSockets", "Tailwind CSS"],
    category: "Full Stack",
    link: "#",
    git: "#",
    src: project3,
    featured: true,
    status: "Live",
    year: "2024",
    color: "from-orange-500 to-red-600",
    icon: "🛒",
    metrics: {
      performance: 91,
      accessibility: 96,
      seo: 93,
      users: "10K+"
    }
  },
  {
    id: 4,
    title: "HOST-LAB",
    subtitle: "Hotel Management Admin Panel",
    desc: "Comprehensive hotel management dashboard with reusable components for reservations, guest tracking, and operational efficiency.",
    longDesc: "A sophisticated hotel management system designed to streamline hotel operations. Features include reservation management, guest tracking, room allocation, and administrative dashboard with reusable and dynamic components.",
    challenge: "Building an intuitive hotel management system that handles complex booking scenarios, guest information, and operational workflows.",
    solution: "Built a hotel management dashboard with reusable and dynamic components for tasks like reservations and guest tracking, ensuring efficient hotel operations and enhanced guest experience.",
    results: ["Streamlined hotel operations", "Efficient reservation management", "Enhanced guest tracking", "Improved operational efficiency"],
    devStack: ["Next.js", "Tailwind CSS", "React Components", "Admin Dashboard"],
    category: "Web App",
    link: "#",
    git: "#",
    src: project1,
    featured: false,
    status: "Live",
    year: "2023",
    color: "from-purple-500 to-pink-600",
    icon: "🏨",
    metrics: {
      performance: 88,
      accessibility: 92,
      seo: 85,
      users: "1K+"
    }
  },
  {
    id: 5,
    title: "TALENTS-LIST",
    subtitle: "Event Talent Booking Platform",
    desc: "Multi-role platform connecting clients with talent, featuring real-time messaging, file sharing, and comprehensive booking management.",
    longDesc: "A dynamic talent booking platform that facilitates connections between clients and talent for events. Features include role-based access for clients and talent, real-time messaging with WebSocket integration, and support for image/file sharing.",
    challenge: "Creating a platform that efficiently connects clients with talent while providing seamless communication and booking management capabilities.",
    solution: "Developed a platform with Client and Talent roles, integrated real-time messaging using WebSockets, supported image/file sharing, and designed UI using Metronic theme with Axios for data management.",
    results: ["Efficient talent booking", "Real-time communication", "File sharing capabilities", "Enhanced user experience"],
    devStack: ["Next.js", "Laravel", "MySQL", "WebSockets", "Metronic Theme", "Axios"],
    category: "Full Stack",
    link: "#",
    git: "#",
    src: project2,
    featured: false,
    status: "Live",
    year: "2023",
    color: "from-indigo-500 to-blue-600",
    icon: "🎭",
    metrics: {
      performance: 90,
      accessibility: 93,
      seo: 87,
      users: "3K+"
    }
  },
  {
    id: 6,
    title: "STUDIIO.AU",
    subtitle: "Photography & Studio Management Platform",
    desc: "Multi-role platform for photography business management with galleries, studio booking, and PayPal subscription integration.",
    longDesc: "A comprehensive photography and studio management platform serving multiple user roles including Master Admin, Business Admin, Client, and Photographer. Features include gallery management, studio booking system, and PayPal subscription integration.",
    challenge: "Building a complex multi-role platform that manages photography businesses, studio bookings, and subscription services while maintaining user experience across different user types.",
    solution: "Developed a multi-role platform with Master Admin, Business Admin, Client, and Photographer roles. Designed galleries and studios, integrated PayPal subscriptions, and developed backend APIs with Sequelize and Express.js.",
    results: ["Multi-role management", "Studio booking system", "PayPal integration", "Gallery management"],
    devStack: ["React.js", "Node.js", "Express.js", "Sequelize", "MySQL", "PayPal API"],
    category: "Full Stack",
    link: "#",
    git: "#",
    src: project3,
    featured: true,
    status: "Live",
    year: "2024",
    color: "from-yellow-500 to-orange-600",
    icon: "📸",
    metrics: {
      performance: 87,
      accessibility: 91,
      seo: 84,
      users: "5K+"
    }
  },
];

const categories = ["All", "Full Stack", "Web App"];
const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'showcase' | 'carousel'>('grid');

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
    <section id="portfolio" className="section-padding bg-gradient-to-b from-[rgb(var(--bg-primary))] to-[rgb(var(--bg-secondary))] relative overflow-hidden">
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
            <HiOutlineSparkles className="mr-2 text-[rgb(var(--accent-primary))]" />
            <span className="text-sm font-medium text-theme-secondary">Portfolio Showcase</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-theme">Crafted with </span>
            <span className="text-gradient">Purpose</span>
          </h2>
          
          <p className="text-xl text-theme-secondary max-w-4xl mx-auto leading-relaxed mb-8">
            Each project tells a story of innovation, problem-solving, and impact. 
            Explore the journey from challenge to solution, backed by real results and user success.
          </p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
          >
            {[
              { icon: <FaCode />, value: "15+", label: "Projects Built" },
              { icon: <FaUsers />, value: "65K+", label: "Users Served" },
              { icon: <BiTrendingUp />, value: "95%", label: "Performance Score" },
              { icon: <FaAward />, value: "4.9/5", label: "Client Rating" },
            ].map((stat, index) => (
          <motion.div
            key={index}
                className="text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl text-[rgb(var(--accent-primary))] mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-theme-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-16"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] text-white shadow-lg"
                    : "bg-theme-secondary text-theme-secondary hover:bg-theme-tertiary hover:text-theme"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-theme-secondary rounded-xl p-1">
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                viewMode === 'grid'
                  ? "bg-[rgb(var(--accent-primary))] text-white"
                  : "text-theme-secondary hover:text-theme"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Grid
            </motion.button>
            <motion.button
              onClick={() => setViewMode('carousel')}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                viewMode === 'carousel'
                  ? "bg-[rgb(var(--accent-primary))] text-white"
                  : "text-theme-secondary hover:text-theme"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Carousel
            </motion.button>
            <motion.button
              onClick={() => setViewMode('showcase')}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                viewMode === 'showcase'
                  ? "bg-[rgb(var(--accent-primary))] text-white"
                  : "text-theme-secondary hover:text-theme"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Story
            </motion.button>
          </div>
        </motion.div>

        {/* Dynamic Project Display */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            /* Uniform Grid View */
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="relative group cursor-pointer h-[520px] w-full"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="h-full w-full overflow-hidden rounded-2xl bg-theme-secondary border border-theme shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                    {/* Fixed Height Image Section */}
                    <div className="relative overflow-hidden h-48 flex-shrink-0">
                      <Image
                        src={project.src}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      
                      {/* Project Icon */}
                      <div className="absolute top-3 left-3">
                        <div className="text-3xl drop-shadow-lg">{project.icon}</div>
                      </div>

                      {/* Status Badge */}
                      {/* <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm ${
                          project.status === 'Live' 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div> */}

                      {/* Featured Badge */}
                      {/* {project.featured && (
                        <div className="absolute bottom-3 left-3">
                          <div className="flex items-center px-2 py-1 rounded-lg bg-[rgb(var(--accent-primary))]/20 text-[rgb(var(--accent-primary))] border border-[rgb(var(--accent-primary))]/30 backdrop-blur-sm">
                            <FaStar className="mr-1 text-xs" />
                            <span className="text-xs font-semibold">Featured</span>
                          </div>
                        </div>
                      )} */}

                      {/* Performance Metrics */}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex gap-1">
                          <div className="px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-xs">
                            {project.metrics.performance}%
                          </div>
                          <div className="px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-xs">
                            {project.metrics.users}
                          </div>
                        </div>
                      </div>

                      {/* Hover Actions Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="flex gap-3">
                          {/* <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-[rgb(var(--accent-primary))]/30 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaExternalLinkAlt className="text-sm" />
                          </motion.a> */}
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project.id);
                              setViewMode('showcase');
                            }}
                            className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-[rgb(var(--accent-secondary))]/30 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <HiOutlineSparkles className="text-sm" />
                          </motion.button>
                          {/* <motion.a
                            href={project.git}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-[rgb(var(--accent-tertiary))]/30 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub className="text-sm" />
                          </motion.a> */}
                        </div>
                      </div>
                    </div>

                    {/* Fixed Height Content Section */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3 flex-shrink-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-theme-muted font-mono">{project.year}</span>
                          <div className="text-xs px-2 py-1 rounded-lg bg-[rgb(var(--accent-primary))]/10 text-[rgb(var(--accent-primary))] font-medium">
                            {project.category}
                          </div>
                        </div>
                      </div>

                      {/* Title - Fixed Height */}
                      <h3 className="text-xl font-bold text-theme mb-2 group-hover:text-gradient transition-colors duration-300 line-clamp-2 flex-shrink-0">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-[rgb(var(--accent-primary))] font-medium mb-3 line-clamp-1 flex-shrink-0">
                        {project.subtitle}
                      </p>

                      {/* Description - Fixed Height */}
                      <p className="text-sm text-theme-secondary leading-relaxed mb-4 line-clamp-3 flex-1">
                {project.desc}
              </p>

                      {/* Tech Stack - Fixed Height */}
                      <div className="flex flex-wrap gap-1 mb-4 flex-shrink-0 overflow-hidden">
                        {project.devStack.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs rounded-lg bg-theme-tertiary text-theme-secondary font-medium hover:bg-[rgb(var(--accent-primary))]/10 hover:text-[rgb(var(--accent-primary))] transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.devStack.length > 4 && (
                          <span className="px-2 py-1 text-xs rounded-lg bg-theme-tertiary text-theme-muted font-medium">
                            +{project.devStack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Bottom Actions - Fixed Height */}
                      <div className="flex items-center justify-between flex-shrink-0">
                        <div className="flex gap-3">
                          {/* <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[rgb(var(--accent-primary))] hover:text-[rgb(var(--accent-secondary))] font-medium transition-colors duration-300 flex items-center gap-1 text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaEye className="text-xs" />
                            Demo
                          </a> */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project.id);
                              setViewMode('showcase');
                            }}
                            className="text-theme-secondary hover:text-[rgb(var(--accent-primary))] font-medium transition-colors duration-300 flex items-center gap-1 text-sm"
                          >
                            <HiOutlineSparkles className="text-xs" />
                            Story
                          </button>
                        </div>
                        
                        <motion.div
                          className="text-[rgb(var(--accent-primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{ x: hoveredProject === project.id ? 3 : 0 }}
                        >
                          <HiOutlineArrowRight className="text-lg" />
                        </motion.div>
                      </div>
              </div>
            </div>
                </motion.div>
              ))}
            </motion.div>
          ) : viewMode === 'carousel' ? (
            /* Premium Carousel View */
            <motion.div
              key="carousel"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Featured Projects Carousel */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-theme mb-6 flex items-center gap-3">
                  <FaStar className="text-[rgb(var(--accent-primary))]" />
                  Featured Projects
                </h3>
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex gap-6 pb-4" style={{ width: `${filteredProjects.filter(p => p.featured).length * 400}px` }}>
                    {filteredProjects.filter(project => project.featured).map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex-shrink-0 w-80 h-96 group cursor-pointer"
                        onHoverStart={() => setHoveredProject(project.id)}
                        onHoverEnd={() => setHoveredProject(null)}
                        onClick={() => {
                          setSelectedProject(project.id);
                          setViewMode('showcase');
                        }}
                      >
                        <div className="h-full w-full overflow-hidden rounded-2xl bg-theme-secondary border border-theme shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105">
                          {/* Large Image */}
                          <div className="relative overflow-hidden h-48">
              <Image
                              src={project.src}
                alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
                            
                            {/* Large Project Icon */}
                            <div className="absolute top-4 left-4">
                              <div className="text-4xl drop-shadow-lg">{project.icon}</div>
                            </div>

                            {/* Featured Badge */}
                            {/* <div className="absolute top-4 right-4">
                              <div className="flex items-center px-3 py-1 rounded-lg bg-[rgb(var(--accent-primary))]/20 text-[rgb(var(--accent-primary))] border border-[rgb(var(--accent-primary))]/30 backdrop-blur-sm">
                                <FaStar className="mr-1 text-xs" />
                                <span className="text-xs font-semibold">Featured</span>
                              </div>
                            </div> */}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                              <motion.div
                                className="text-white text-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileHover={{ scale: 1, opacity: 1 }}
                              >
                                <HiOutlineSparkles className="text-3xl mx-auto mb-2" />
                                <p className="text-sm font-medium">View Full Story</p>
                              </motion.div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 h-48 flex flex-col">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-sm text-theme-muted font-mono">{project.year}</span>
                              <div className="text-xs px-2 py-1 rounded-lg bg-[rgb(var(--accent-primary))]/10 text-[rgb(var(--accent-primary))] font-medium">
                                {project.category}
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-theme mb-2 group-hover:text-gradient transition-colors duration-300">
                              {project.title}
                            </h3>
                            
                            <p className="text-sm text-[rgb(var(--accent-primary))] font-medium mb-3">
                              {project.subtitle}
                            </p>

                            <p className="text-sm text-theme-secondary leading-relaxed mb-4 flex-1 line-clamp-3">
                              {project.longDesc}
                            </p>

                            {/* Key Results */}
                            <div className="space-y-1">
                              {project.results.slice(0, 2).map((result, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] rounded-full" />
                                  <span className="text-xs text-theme-secondary">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* All Projects Grid */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-theme mb-6 flex items-center gap-3">
                  <FaCode className="text-[rgb(var(--accent-primary))]" />
                  All Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer h-64"
                      onClick={() => {
                        setSelectedProject(project.id);
                        setViewMode('showcase');
                      }}
                    >
                      <div className="h-full w-full overflow-hidden rounded-xl bg-theme-secondary border border-theme shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        {/* Compact Image */}
                        <div className="relative overflow-hidden h-32">
                          <Image
                src={project.src}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                          
                          <div className="absolute top-2 left-2">
                            <div className="text-lg">{project.icon}</div>
                          </div>

                          {/* {project.featured && (
                            <div className="absolute top-2 right-2">
                              <FaStar className="text-[rgb(var(--accent-primary))] text-xs" />
                            </div>
                          )} */}
                        </div>

                        {/* Compact Content */}
                        <div className="p-3 h-32 flex flex-col">
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-xs text-theme-muted font-mono">{project.year}</span>
                            <div className="text-xs px-1 py-0.5 rounded bg-[rgb(var(--accent-primary))]/10 text-[rgb(var(--accent-primary))] font-medium">
                              {project.category}
                            </div>
                          </div>

                          <h4 className="text-sm font-bold text-theme mb-1 line-clamp-1 group-hover:text-gradient transition-colors duration-300">
                            {project.title}
                          </h4>

                          <p className="text-xs text-theme-secondary line-clamp-2 flex-1">
                            {project.desc}
                          </p>

                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-[rgb(var(--accent-primary))] font-medium">
                              {project.metrics.users}
                            </span>
                            <HiOutlineArrowRight className="text-sm text-theme-muted group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-300" />
                          </div>
                        </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
            </motion.div>
          ) : (
            /* Story/Showcase View */
            <motion.div
              key="showcase"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              {selectedProject && (() => {
                const project = projects.find(p => p.id === selectedProject) || projects[0];
                return (
                  <div className="space-y-12">
                    {/* Project Hero */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-theme-secondary to-theme-tertiary p-8 lg:p-12">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="text-6xl">{project.icon}</div>
                            <div>
                              <div className="text-sm text-theme-muted font-mono">{project.year}</div>
                              <div className="text-sm px-3 py-1 rounded-full bg-[rgb(var(--accent-primary))]/20 text-[rgb(var(--accent-primary))] font-medium inline-block">
                                {project.category}
                              </div>
                            </div>
                          </div>
                          
                          <h2 className="text-4xl lg:text-5xl font-bold text-theme mb-4">
                            {project.title}
                          </h2>
                          <p className="text-xl text-gradient font-semibold mb-6">
                            {project.subtitle}
                          </p>
                          <p className="text-lg text-theme-secondary leading-relaxed mb-8">
                            {project.longDesc}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-4">
                            {/* <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="button-primary"
                            >
                              <FaEye className="mr-2" />
                              View Live Project
                            </a> */}
                            {/* <a
                              href={project.git}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="button-secondary"
                            >
                              <FaGithub className="mr-2" />
                              View Source
                            </a> */}
                            <button
                              onClick={() => setViewMode('grid')}
                              className="px-6 py-3 rounded-xl border border-theme text-theme-secondary hover:text-theme transition-colors duration-300"
                            >
                              ← Back to Grid
                            </button>
                          </div>
                        </div>

                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 rounded-2xl blur-xl`} />
                          <Image
                            src={project.src}
                            alt={project.title}
                            className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Story Sections */}
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Challenge */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-theme-secondary rounded-2xl p-8 border border-theme"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <HiOutlineLightBulb className="text-2xl text-yellow-500" />
                          <h3 className="text-xl font-bold text-theme">The Challenge</h3>
                        </div>
                        <p className="text-theme-secondary leading-relaxed">
                          {project.challenge}
                        </p>
                      </motion.div>

                      {/* Solution */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-theme-secondary rounded-2xl p-8 border border-theme"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <HiOutlineCog className="text-2xl text-[rgb(var(--accent-primary))]" />
                          <h3 className="text-xl font-bold text-theme">The Solution</h3>
                        </div>
                        <p className="text-theme-secondary leading-relaxed">
                          {project.solution}
                        </p>
                      </motion.div>

                      {/* Results */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-theme-secondary rounded-2xl p-8 border border-theme"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <BiTrendingUp className="text-2xl text-green-500" />
                          <h3 className="text-xl font-bold text-theme">The Results</h3>
                        </div>
                        <div className="space-y-3">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] rounded-full" />
                              <span className="text-theme-secondary text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Tech Stack & Metrics */}
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Technology Stack */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-theme-secondary rounded-2xl p-8 border border-theme"
                      >
                        <h3 className="text-xl font-bold text-theme mb-6 flex items-center gap-3">
                          <FaCode className="text-[rgb(var(--accent-primary))]" />
                          Technology Stack
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {project.devStack.map((tech, idx) => (
                            <div
                              key={idx}
                              className="px-4 py-3 rounded-xl bg-theme-tertiary text-theme font-medium text-center hover:bg-[rgb(var(--accent-primary))]/10 hover:text-[rgb(var(--accent-primary))] transition-colors duration-300"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Performance Metrics */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-theme-secondary rounded-2xl p-8 border border-theme"
                      >
                        <h3 className="text-xl font-bold text-theme mb-6 flex items-center gap-3">
                          <FaChartLine className="text-[rgb(var(--accent-primary))]" />
                          Performance Metrics
                        </h3>
                        <div className="space-y-4">
                          {Object.entries(project.metrics).map(([key, value], idx) => (
                            <div key={idx} className="flex justify-between items-center">
                              <span className="text-theme-secondary capitalize">{key}</span>
                              <span className="text-gradient font-bold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center gap-4">
                      {projects.map((p, idx) => (
                        <motion.button
                          key={p.id}
                          onClick={() => setSelectedProject(p.id)}
                          className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            p.id === selectedProject
                              ? 'bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))]'
                              : 'bg-theme-tertiary hover:bg-theme-muted'
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <HiOutlineArrowRight className="text-lg" />
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Portfolio;
