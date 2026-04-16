import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="text-primary-blue font-mono text-xl">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-neon/10 rounded-full blur-3xl rounded-full"></div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
            I am a <strong className="text-white">B.Tech Computer Science student (2025 batch)</strong> with hands-on MERN stack experience. I have a strong foundation in Java, REST APIs, SDLC, and Agile methodologies.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed relative z-10">
            Passionate about solving real-world problems and building scalable applications, I strive to write clean, maintainable code and create intuitive digital experiences that leave a lasting impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
