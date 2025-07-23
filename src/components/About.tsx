"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import profileImage from "../assets/profile_converted.jpeg";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Animated Border */}
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-1"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
                  <Image
                    src={profileImage}
                    alt="Georgi Zahariev - Profile Picture"
                    className="w-full h-full object-cover"
                    fill
                    sizes="320px"
                  />
                </div>
              </motion.div>
              
              {/* Floating Tech Badges */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                JS
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                TS
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Passionate Developer & Problem Solver
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a Computer Science student and software developer with a passion for creating 
                beautiful, functional web applications. With expertise in modern technologies 
                like React, Next.js, and TypeScript, I love bringing ideas to life through code.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                working on personal projects, or diving deep into AI and Machine Learning. 
                I believe in continuous learning and staying up-to-date with the latest 
                trends in technology.
              </p>
              
              <p>
                My goal is to create digital experiences that not only look great 
                but also provide exceptional user experiences and solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Learning</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
