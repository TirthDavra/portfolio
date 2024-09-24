"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cusror from "@/../public/assets/icon1.png";
import lighting from "@/../public/assets/icon2.png";
import profilePic from "@/../public/assets/profilepic.png";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">

      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 
      bg-[radial-gradient(closest-side,#000,#2B1942)]"
      ></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Tirth Davara</h1>
        </div>
        <motion.div
          className="hidden xl:block absolute left-[280px] top-[170px]"
          drag
        >
          <Image
            src={cusror}
            height="170"
            width="170"
            alt="cusror"
            className=""
            draggable="false"
          />
        </motion.div>
        <motion.div
          className="hidden xl:block absolute right-[220px] top-[20px]"
          drag
        >
          <Image
            src={lighting}
            height="120"
            width="120"
            alt="cusror"
            className=""
            draggable="false"
          />
        </motion.div>
        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          I am a react developer focused on creating websites that provides a
          smooth user experience.
        </p>
        <Image
          src={profilePic}
          alt="profile"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
