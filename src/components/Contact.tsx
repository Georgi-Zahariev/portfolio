"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone, Instagram } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:zahariev.georgi03@gmail.com",
      color: "hover:text-red-500"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Georgi-Zahariev",
      color: "hover:text-gray-700 dark:hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/zahariev-georgi/",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/zahariev.georgi11/",
      color: "hover:text-pink-400"
    }
  ];

  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Only run on client
    const newParticles = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: p.left,
              top: p.top,
            }}
            animate={{
              scale: [0, 1, 0],
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

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info - First Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm"
              >
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300">zahariev.georgi03@gmail.com</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Location - Middle Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm"
            >
              <MapPin className="w-6 h-6 text-green-400" />
              <div>
                <div className="font-medium">Location</div>
                <div className="text-gray-300">Fairfax, VA, USA / Sofia, Bulgaria</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Third Column - Available for */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm"
            >
              <Phone className="w-6 h-6 text-purple-400" />
              <div>
                <div className="font-medium">Available for</div>
                <div className="text-gray-300">Full-time, Part-time & Contract</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links - After all columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h4 className="text-lg font-semibold mb-6">Connect with me</h4>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.9 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-white/10 rounded-full text-gray-300 ${link.color} transition-all duration-300 hover:bg-white/20`}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>




        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">
            © 2025 Georgi Zahariev. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
