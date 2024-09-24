import Image from "next/image";
import React from "react";
import book from "@/../public/assets/book.png";
import pc from "@/../public/assets/pc.png";
import card from "@/../public/assets/card.png";
import finance from "@/../public/assets/finance.png";

const About = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto" id="about">
        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-8 text-center">
          About <span className="text-orange-400">Me</span>
        </h1>
        <div className="px-6 md:p-0 grid lg:grid-cols-8 gap-8">

          {/* Education Card */}
          <div className="w-full lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden min-h-[200px]">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
            <div className="flex flex-row p-6 space-x-4 items-start">
              <Image src={book} alt="book" className="w-[100px] h-[100px]" />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-white/80">Education</h2>
                <p className="text-lg text-white/70 mt-2">
                  I graduated with a Bachelor of Computer Applications (BCA) in 2023. My coursework focused on software development, web technologies, and programming, which laid a strong foundation in problem-solving and building web applications.
                </p>
              </div>
            </div>
          </div>

          {/* Problem-Solving Card */}
          <div className="w-full lg:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden min-h-[200px]">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
            <div className="flex flex-row p-6 space-x-4 items-start">
              <Image src={finance} alt="finance" className="w-[100px] h-[100px]" />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-white/80">Problem-Solving</h2>
                <p className="text-lg text-white/70 mt-2">
                  My problem-solving skills are rooted in my ability to break down complex challenges into manageable components. Whether debugging code, optimizing applications, or designing efficient user interfaces, I approach each problem with logic, creativity, and persistence.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="w-full lg:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden min-h-[200px]">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
            <div className="flex flex-row p-6 space-x-4 items-start">
              <Image src={card} alt="card" className="w-[100px] h-[100px]" />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-white/80">Experience</h2>
                <p className="text-lg text-white/70 mt-2">
                  I have experience building and deploying responsive web applications using React, JavaScript, and other modern web technologies. Through real-world projects and internships, I've gained hands-on experience in front-end development.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Card */}
          <div className="w-full lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden min-h-[200px]">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
            <div className="flex flex-row p-6 space-x-4 items-start">
              <Image src={pc} alt="pc" className="w-[100px] h-[100px]" />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-white/80">Technical Skills</h2>
                <p className="text-lg text-white/70 mt-2">
                  My technical skills include expertise in front-end development using React, JavaScript, HTML, and CSS. I am proficient in building responsive and dynamic user interfaces, working with RESTful APIs, and managing application state with Redux.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
