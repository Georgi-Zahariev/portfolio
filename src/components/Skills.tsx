"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiOpenjdk, SiGo, SiPython, SiC, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiVuedotjs,
  SiGit, SiDocker, SiVercel, SiKubernetes, SiGithubactions,
  SiPostgresql, SiOracle, SiMongodb, SiSqlite,
  SiAmazon, SiLinux,
  SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiTensorflow
} from "react-icons/si";
import { 
  FaPuzzlePiece, FaHandshake, FaBolt, FaComments, FaClipboardList, FaCrown 
} from "react-icons/fa";
import { MdStorage } from "react-icons/md";

const skillCategories = {
  comfortable: {
    title: "Comfortable With",
    description: "Technologies I use often and feel confident with",
    skills: {
      "Programming Languages": [
        { name: "Java", icon: SiOpenjdk, level: 95 },
        { name: "Python", icon: SiPython, level: 80 },
        { name: "Go", icon: SiGo, level: 75 },
        { name: "C", icon: SiC, level: 75 }
      ],
      "Frameworks & Libraries": [
        { name: "React", icon: SiReact, level: 75 },
        { name: "Next.js", icon: SiNextdotjs, level: 75 },
      ],
      "Tools & Platforms": [
        { name: "Git", icon: SiGit, level: 90 },
        { name: "Docker", icon: SiDocker, level: 90 },
        { name: "ORMs", icon: MdStorage, level: 75 },
      ],
      "Databases": [
        { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
        { name: "OracleDB", icon: SiOracle, level: 80 }
      ],
      "Backend & DevOps": [
        { name: "AWS", icon: SiAmazon, level: 70 }
      ],
      "AI/ML & Data": [
        { name: "Pandas", icon: SiPandas, level: 80 },
        { name: "NumPy", icon: SiNumpy, level: 80 },
        { name: "Scikit-learn", icon: SiScikitlearn, level: 80 },
      ]
    }
  },
  familiar: {
    title: "Somewhat Familiar",
    description: "Technologies I've worked with and am learning",
    skills: {
      "Programming Languages": [
        { name: "JavaScript", icon: SiJavascript, level: 50 },
        { name: "TypeScript", icon: SiTypescript, level: 45 }
      ],
      "Frameworks & Libraries": [
        { name: "Vue.js", icon: SiVuedotjs, level: 40 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 40 },
      ],
      "Tools & Platforms": [
        { name: "Kubernetes", icon: SiKubernetes, level: 60 },
        { name: "GitHub Actions", icon: SiGithubactions, level: 55 }
      ],
      "Databases": [
        { name: "MongoDB", icon: SiMongodb, level: 60 },
        { name: "SQLite", icon: SiSqlite, level: 55 }
      ],
      "Backend & DevOps": [
        { name: "Linux", icon: SiLinux, level: 60 }
      ],
      "AI/ML & Data": [
        { name: "TensorFlow", icon: SiTensorflow, level: 40 },
      ]
    }
  }
};

const softSkills = [
  { name: "Problem Solving", icon: FaPuzzlePiece },
  { name: "Team Collaboration", icon: FaHandshake },
  { name: "Quick Learning", icon: FaBolt },
  { name: "Communication", icon: FaComments },
  { name: "Project Management", icon: FaClipboardList },
  { name: "Leadership", icon: FaCrown }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's an overview of my technical skills and experience levels with different technologies.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className={`p-6 rounded-2xl ${
                key === 'comfortable' 
                  ? 'bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800' 
                  : 'bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800'
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${
                  key === 'comfortable' ? 'text-green-700 dark:text-green-300' : 'text-orange-700 dark:text-orange-300'
                }`}>
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {category.description}
                </p>
              </div>

              {Object.entries(category.skills).map(([categoryName, skills], skillCategoryIndex) => (
                <div key={categoryName} className="mb-6 last:mb-0">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    {categoryName}
                  </h4>
                  <div className="space-y-3">
                    {skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: categoryIndex * 0.2 + skillCategoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent className="text-2xl text-gray-600 dark:text-gray-400" />
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                className={`h-2 rounded-full ${
                                  key === 'comfortable'
                                    ? 'bg-gradient-to-r from-green-500 to-blue-500'
                                    : 'bg-gradient-to-r from-orange-500 to-yellow-500'
                                }`}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{ 
                                  duration: 1, 
                                  delay: categoryIndex * 0.2 + skillCategoryIndex * 0.1 + skillIndex * 0.05 + 0.5 
                                }}
                              />
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400 w-8">
                              {skill.level}%
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
            Soft Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl text-center cursor-pointer transition-all duration-300 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-300 dark:border-green-700 hover:shadow-lg"
                >
                  <IconComponent className="text-3xl mb-2 mx-auto text-green-600 dark:text-green-400" />
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
