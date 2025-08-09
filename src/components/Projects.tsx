"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Online Restaurant Website",
    description: "A full-stack online restaurant website built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    image: "/online-restaurant.png",
    technologies: ["Go", "React", "PostgreSQL", "Gorm ORM", "Docker", "Github"],
    github: "https://github.com/Georgi-Zahariev/online-restaurant",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "AI Resume/CV Analyzer",
  description: "An AI-powered tool for analyzing resumes and CVs, inspired by modern AI ATS (Applicant Tracking System) scanners. The goal is to help users optimize their applications and increase their chances of getting more interviews.",
    image: "/resume.png",
    technologies: ["Python", "OpenAI API"],
    github: "https://github.com/Georgi-Zahariev/ai-resume-analyzer",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Online Review Analyzer",
  description: "A machine learning project for analyzing online reviews. I trained a sentiment analysis model on real-world review data, and when tested, it achieved strong performance in classifying review sentiment and extracting useful insights.",
    image: "/review.png",
    technologies: ["Python", "Pandas", "Scikit-learn", "logistic regression", "TF-IDF"],
    github: "https://github.com/Georgi-Zahariev/review-classification",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Llama Search",
  description: "Team project for a Software Engineering class: we built an AI chat system using a local language model, boosting, and sentiment analysis. The project was motivated by security concerns with external AI services—targeting corporations and government, ensuring sensitive data never leaves the local machine or network.",
    image: "/llama.png",
    technologies: ["Python", "Local LLM"],
    github: "https://github.com/mithranm/llamasearch",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "High-Performance Orderbook System",
    description: "A high-performance orderbook system for cryptocurrency trading with real-time data processing - part of Raven DAO (HFT startup) Challenge.",
    image: "/cripto.png",
    technologies: ["Go", "Advanced Algorithms", "WebSocket", "Binance API"],
    github: "https://github.com/Georgi-Zahariev/raven-dev-challenge",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
    image: "/website.png",
    technologies: [
        "Next.js 15", 
        "React 19", 
        "TypeScript", 
        "Tailwind CSS v4", 
        "Framer Motion", 
        "Lucide React",
    ],
    github: "https://github.com/Georgi-Zahariev/portfolio",
    live: "#",
    featured: true,
  },
   {
    id: 7,
    title: "Bellman-Ford Algorithm Visualizer",
    description: "Visualizing the Bellman-Ford algorithm in action, with step-by-step explanations and interactive elements.",
    image: "/algo.png",
    technologies: ["Java"],
    github: "#",
    live: "https://youtu.be/CxiiMgNOmiA",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Project Image/Icon */}
              <div className="relative h-70 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
                {project.image.startsWith('/') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-6xl">{project.image}</span>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    onClick={() => {
                      if (project.github && project.github !== "#" && project.github !== "") {
                        window.open(project.github, "_blank");
                      } else {
                        alert("GitHub source is not available for this project.");
                      }
                    }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    onClick={() => {
                      if (project.live && project.live !== "#" && project.live !== "") {
                        window.open(project.live, "_blank");
                      } else {
                        if (project.title === "Portfolio Website") {
                          alert("You are currently exploring this project – enjoy!");
                        } else {
                          alert("Live demo is not available for this project.");
                        }
                      }
                    }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      if (project.github && project.github !== "#" && project.github !== "") {
                        window.open(project.github, "_blank");
                      } else {
                        if (project.title === "Portfolio Website") {
                          alert("You are currently exploring this project – enjoy!");
                        } else {
                          alert("GitHub source is not available for this project.");
                        }
                      }
                    }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </button>
                  <button
                    onClick={() => {
                      if (project.live && project.live !== "#" && project.live !== "") {
                        window.open(project.live, "_blank");
                      } else {
                        if (project.title === "Portfolio Website") {
                          alert("You are currently exploring this project – enjoy!");
                        } else {
                          alert("Live demo is not available for this project.");
                        }
                      }
                    }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
              <div className="relative h-30 w-30 mb-4 mx-auto rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                {project.image.startsWith('/') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-2xl">{project.image}</span>
                )}
              </div>
                <h4 className="font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      if (project.github && project.github !== "#" && project.github !== "") {
                        window.open(project.github, "_blank");
                      } else {
                        alert("GitHub source is not available for this project. Please check the live demo instead.");
                      }
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (project.live && project.live !== "#" && project.live !== "") {
                        window.open(project.live, "_blank");
                      } else {
                        alert("Live demo is not available for this project. Please check the GitHub source instead.");
                      }
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            onClick={() => window.open('https://github.com/Georgi-Zahariev', '_blank')}
          >
            View All Projects on GitHub
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
