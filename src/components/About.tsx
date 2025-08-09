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
                Who am I?
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I am a dedicated Computer Science student and NCAA Division 1 student-athlete (volleyball) with a 4.0 GPA, driven by a passion for both academic and athletic excellence. My journey is defined by discipline, teamwork, and a relentless pursuit of growth.
                </p>
                <p>
                  My interests bridge both the traditional foundations of software—backend, full-stack, and web development—and the rapidly evolving fields that are shaping the future of business and society, such as AI, Machine Learning, and Data Science. I am drawn to areas that are driving innovation and transformation, and I thrive on building solutions that make a real impact.
                </p>
                <p>
                  Motivated for big things, I am always eager to learn, collaborate, and take on new challenges. Whether on the court or at the keyboard, I bring energy, curiosity, and a vision for making a difference in technology and beyond.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">6+</div>
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
