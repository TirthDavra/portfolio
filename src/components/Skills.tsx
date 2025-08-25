"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiRedis,
  SiAmazonwebservices,
  SiFirebase,
} from "react-icons/si";
import { HiCode, HiDatabase, HiCloud } from "react-icons/hi";

const skillCategories = [
  {
    title: "Frontend",
    icon: <HiCode className="text-2xl" />,
    skills: [
      { name: "React", icon: <FaReact />, level: 95, color: "from-blue-400 to-blue-600" },
      { name: "TypeScript", icon: <SiTypescript />, level: 80, color: "from-blue-500 to-blue-700" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 88, color: "from-gray-700 to-gray-900" },
      { name: "JavaScript", icon: <FaJsSquare />, level: 75, color: "from-yellow-400 to-yellow-600" },
      { name: "HTML5", icon: <FaHtml5 />, level: 80, color: "from-orange-500 to-red-600" },
      { name: "CSS3", icon: <FaCss3Alt />, level: 75, color: "from-blue-400 to-blue-600" },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 85, color: "from-teal-400 to-blue-500" },
    ]
  },
  {
    title: "Backend",
    icon: <HiDatabase className="text-2xl" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 85, color: "from-green-500 to-green-700" },
      { name: "MySQL", icon: <FaDatabase />, level: 70, color: "from-blue-400 to-yellow-500" },
      { name: "MongoDB", icon: <SiMongodb />, level: 82, color: "from-green-500 to-green-700" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 70, color: "from-blue-600 to-blue-800" },
      { name: "Firebase", icon: <SiFirebase />, level: 75, color: "from-pink-500 to-purple-600" },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <HiCloud className="text-2xl" />,
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 90, color: "from-orange-500 to-red-600" },
      { name: "Docker", icon: <FaDocker />, level: 70, color: "from-blue-500 to-blue-700" },
      { name: "AWS", icon: <SiAmazonwebservices />, level: 65, color: "from-yellow-400 to-orange-500" },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [inView, setInView] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-[rgb(var(--bg-secondary))] to-[rgb(var(--bg-tertiary))] relative overflow-hidden">
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
            <HiCode className="mr-2 text-[rgb(var(--accent-primary))]" />
            <span className="text-sm font-medium text-theme-secondary">Technical Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-theme">Skills & </span>
            <span className="text-gradient">Technologies</span>
          </h2>
          
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
            Proficient in modern web technologies with a focus on creating 
            scalable, performant, and user-friendly applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="flex rounded-2xl bg-theme-secondary p-2 shadow-lg">
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] text-white shadow-lg"
                    : "text-theme-secondary hover:text-theme"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.icon}
                <span className="hidden sm:block">{category.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onViewportEnter={() => setInView(true)}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-theme-secondary rounded-2xl p-6 border border-theme hover:border-[rgb(var(--accent-primary))]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-theme-tertiary text-[rgb(var(--accent-primary))] group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-theme text-lg">{skill.name}</h3>
                        <div className="text-sm text-theme-secondary">
                          {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Intermediate" : "Beginner"}
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[rgb(var(--accent-primary))] font-mono">
                      {skill.level}%
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="h-3 bg-theme-tertiary rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "15+", label: "Projects Completed" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-theme-secondary rounded-2xl p-6 border border-theme hover:border-[rgb(var(--accent-primary))]/30 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-theme-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-[rgb(var(--accent-primary))]/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-[rgb(var(--accent-secondary))]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Skills;
