import React from "react";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3 },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Typescript", icon: SiTypescript },
  { name: "Git", icon: FaGitAlt },
];

const Skills = () => {
  return (
    <section id="skills" className="w-[80%] mx-auto py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-black p-6 hover:bg-lightGolden rounded-lg shadow-lg flex items-center justify-center mt-4"
              >
                <IconComponent className="h-16 w-16 mb-4" />
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
