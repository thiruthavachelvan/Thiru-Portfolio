import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Hotel } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
  return (
    <section id="project" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-primary-blue font-mono text-xl">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Project</h2>
          <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel p-[1px] rounded-2xl overflow-hidden relative group hover:border-primary-blue/30 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-primary-neon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          
          <div className="bg-dark-surface p-8 md:p-10 rounded-xl relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
            
            <div className="w-full md:w-2/5 aspect-video bg-dark-bg/80 rounded-xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-primary-neon/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay"></div>
              <Hotel className="w-16 h-16 text-primary-neon tracking-widest mb-2 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
              <span className="text-primary-blue font-bold tracking-widest uppercase text-sm mt-2">LuxeStay</span>
            </div>

            <div className="w-full md:w-3/5 text-left">
              <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-primary-neon transition-colors">
                LuxeStay
              </h3>
              <p className="text-primary-blue text-lg mb-4">Luxury Hotel Booking System</p>
              
              <div className="bg-white/5 border border-white/10 p-5 rounded-lg mb-6 text-gray-300 text-sm leading-relaxed shadow-inner">
                Full-stack MERN application for hotel booking and property management featuring a comprehensive room booking system, role-based dashboards (Admin, Staff, Guest), payment tracking, review system, and an analytics dashboard.
              </div>
              
              <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-400 mb-8">
                <li className="px-2 py-1 bg-primary-blue/10 rounded">MongoDB</li>
                <li className="px-2 py-1 bg-primary-blue/10 rounded">Express.js</li>
                <li className="px-2 py-1 bg-primary-blue/10 rounded">React.js</li>
                <li className="px-2 py-1 bg-primary-blue/10 rounded">Node.js</li>
                <li className="px-2 py-1 bg-primary-neon/10 rounded text-primary-neon">Tailwind CSS</li>
              </ul>
              
              <div className="flex gap-6">
                <a href="https://github.com/thiruthavachelvan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium text-white hover:text-primary-neon transition-colors">
                  <FaGithub size={20} />
                  <span>Repository</span>
                </a>
                <a href="#" className="flex items-center gap-2 font-medium text-white hover:text-primary-blue transition-colors">
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
