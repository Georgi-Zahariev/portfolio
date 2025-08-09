"use client";


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Only run on client
    const newParticles = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 4 + 1}px`,
      height: `${Math.random() * 4 + 1}px`,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.width,
              height: p.height,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Georgi Zahariev
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300">
              Software Developer and AI Enthusiast
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate CS student and software developer with interest in building data-driven applications. 
            Currently exploring full-stack development, AI, ML and Data Science
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>

            <motion.button
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://drive.google.com/drive/folders/1TzRMs2ca2qrk7ijaP4wptTIYiLcEMx6d?usp=drive_link', '_blank')}
            >
              My Resume/CV
            </motion.button>

          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown 
          className="w-8 h-8 text-white/60 cursor-pointer hover:text-white transition-colors"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </motion.div>
    </section>
  );
}
