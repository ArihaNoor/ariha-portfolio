"use client";
import { useState } from "react";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
import Image from "next/image";

const projectsData = [
  {
    title: "Trippy - Your Ultimate Travel Companion",
    description:
      "Trippy is an innovative travel website dedicated to making international travel seamless and enjoyable. Features include seamless user experience, APIs integration, responsive design, and Figma to responsive website conversion.",
    image: "/TRIPPY.png",
  },
  {
    title: "Cyber Nexis Tech",
    description:
      "Cyber Nexis Tech is a software company focused on developing cutting-edge software solutions. Features include Figma to responsive web page conversion and contact form API integration.",
    image: "/cyber.png",
  },
  {
    title: "Ecom-Electronics Store",
    description:
      "Experience seamless online shopping with our E-Store, featuring a sleek and responsive design, APIs and payment gateway integration, and APIs development.",
    image: "/Ecom.png",
  },
  {
    title: "Proctorial Prism",
    description:
      "Proctorial Prism ensures the future of secure screening with its AI-driven proctoring system. It offers unparalleled assessment integrity, designed for success in education and beyond. Easily monitor candidates, tests, and questions through a comprehensive dashboard. Experience seamless and reliable assessment management with Proctorial Prism.",
    image: "/PP.png",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="w-full mx-auto py-20 bg-lightGolden">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedProject(project);
            }}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:shadow-gray-500 hover:shadow-md transition-shadow duration-200"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="mb-4"
              width={500}
              height={300}
            />
            <h3 className="text-2xl font-bold mb-2 text-center">
              {project.title}
            </h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[60%] relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-gray-200 rounded-lg p-2 text-gray-500 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-2xl font-semibold mb-4">
              {selectedProject.title}
            </h3>
            <p className="mb-4">{selectedProject.description}</p>
            <div className="flex justify-center items-center mx-auto">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                className="mb-4 align-middle"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
