// import React from "react";
import AssetHub from "../assets/AssetHub.png";
import NextChat from "../assets/NextChat.png";
import AI_CodeReviewer from "../assets/AI_CodeReviewer.png";
import Agrix from "../assets/Agrix.png";
import Hangman from "../assets/Hangman.png";
import { useEffect } from "react";
import AOS from "aos";
const Projects = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const Projects = [
    {
      id: 1,
      image: AssetHub,
      title: "AssetHub - Asset Management System",
      desc: "Enterprise asset tracking system with RBAC, workflows, notifications, and software management.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Zustand"],
      github: "https://github.com/Ayush02003/AssetHub",
    },
    {
      id: 2,
      image: NextChat,
      title: "NextChat - Messaging Platform",
      desc: "Real-time chat application with private messaging, JWT authentication, and live user status.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/Ayush02003/NextChat",
    },
    {
      id: 3,
      image: AI_CodeReviewer,
      title: "AI_CodeReviewer",
      desc: "AI-powered tool for code analysis, issue detection, and intelligent improvement suggestions.",
      tech: ["React", "Node.js", "Express.js", "Gemini API"],
      github: "https://ai-codereviewer-4ok1.onrender.com/",
    },
    {
      id: 4,
      image: Agrix,
      title: "Agrix - Farming Platform",
      desc: "Connecting organic farmers and consumers through a direct farm-to-table marketplace.",
      tech: ["React", "Express.js", "Firebase"],
      github: "https://github.com/Ayush02003/Agrix",
    },
    {
      id: 5,
      image: Hangman,
      title: "Hangman Game",
      desc: "Interactive TypeScript word guessing game with dynamic state-based logic.",
      tech: ["React", "TypeScript"],
      github: "https://hangman-game-daj5.onrender.com/",
    },
  ];
  return (
    <section className="py-16 bg-gray-900" id="projects">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-15" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-primary">Projects...</span>
          </h2>
          {/* <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => window.open(project.github, "_blank")}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#19243d] rounded-xl 
              overflow-hidden  
                border border-gray-800 hover:border-primary/50
                shadow-[0_0_20px_rgba(0,0,0,0.3)]
                hover:shadow-[0_0_25px_rgba(6,162,206,0.35)]
                hover:scale-101 
                cursor-pointer
                transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60   object-full hover:opacity-90 transition-opacity duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded
                       hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
