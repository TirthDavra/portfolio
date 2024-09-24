import React from "react";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaWhatsappSquare,
} from "react-icons/fa";

const skillIcons = [
  { icon: <FaHtml5 size={140} />, name: "HTML" },
  { icon: <FaCss3Alt size={140} />, name: "CSS" },
  { icon: <FaReact size={140} />, name: "REACT" },
  { icon: <FaJsSquare size={140} />, name: "JavaScript" },
];
const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className="text-white w-[400px] md:min-w-[700px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillIcons.map((skill, index) => (
            <div
              className="h-[160px] w-[160px] md:h-[180px] md:w-[180px] flex flex-col justify-between items-center  p-4 rounded-xl"
              key={index}
            >
              {skill.icon}
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
