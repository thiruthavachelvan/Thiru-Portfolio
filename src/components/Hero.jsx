import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-neon/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-blue text-lg md:text-xl font-medium mb-4 tracking-widest uppercase"
        >
          Hello, I'm
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Thiruthavachelvan K
        </motion.h1>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-4xl text-gray-400 font-semibold mb-6"
        >
          <span className="text-gradient">MERN Stack Developer</span>
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable and user-friendly web applications.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center flex-wrap gap-4"
        >
          <Link to="project" smooth={true} duration={500} offset={-80}>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 font-bold rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              View Project
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="px-8 py-3 glass-panel font-bold rounded-full hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
