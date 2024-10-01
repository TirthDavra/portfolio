"use client";
import React from "react";
import project1 from "@/../public/assets/project1.jpeg";
import project2 from "@/../public/assets/project2.jpeg";
import project3 from "@/../public/assets/project3.jpeg";
import project4 from "@/../public/assets/project4.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "HRM - Human Resource Management System",
    desc: "HRM is a company product featuring two modules: admin and employee. Within this product, I've developed reusable components using React JS and metronics theme, ensuring a consistent and efficient user interface. Additionally, I implemented Google Calendar integration into the app, enhancing scheduling and organizational capabilities for both administrators and employees.",
    devStack: "NodeJS, ExpressJS, ReactJS",

    src: project1,
  },
  {
    title: "Six-fintech",
    desc: "SIX-FINTECH is a website clone of TradingView. Within this application, I have developed numerous reusable and dynamic components using ReactJS along with Material UI. Additionally, I integrated APIs into charts, such as bar charts using Recharts. implemented responsive design to ensure optimal viewing experience across devices.",
    devStack: "NodeJS, ExpressJS, ReactJS",
    src: project2,
  },
  {
    title: "Charitag",
    desc: "CHARITAG is an E-commerce website with four distinct modules: merchant, consumer, charity, and corporation. I have desigbed and developed key pages for the merchant panel, including product, inventory, and orders pages, using Next.js, Tailwind CSS, and TypeScript. Additionally, I developed dynamic, reusable components and make it responsive for mobile devices. I have also integrated REST APIs with axios to fetch data from the backend and integrated web sockets to enable real-time communication.",
    devStack: "Laravel, NextJS",
    link: "",
    git: "",
    src: project3,
  },
  {
    title: "Instant-chat-app",
    desc: "I Developed a instant-chat-app with React.js and tailwind css for realtime chatting.I have used firebase for authentication and also use firebase database to store and fetch data.",
    devStack: "ReactJS, Firebase",
    link: "",
    git: "",
    src: project4,
  },
];
const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${index % 2 === 1
              ? "md:flex-row-reverse gap-12"
              : "md:flex-row gap-12"
              }`}
          >
            <div className="space-y-2 max-w-[500px]">
              <h2 className="text-7xl my-4 text-white/70">{`0 ${index + 1
                }`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-lg text-orange-400 font-semibold">
                {project.devStack}
              </p>
              {/* <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git}>Git</a>
              </div> */}
            </div>
            <div className="flex justify-center items-center">
              <Image
                alt={project.title}
                src={project.src}
                className="object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
