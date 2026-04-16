import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-dark-bg/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-primary-neon font-mono text-xl">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="glass-panel p-8 relative ml-4 md:ml-8 border-l-2 border-l-primary-neon border-t-0 border-r-0 border-b-0 rounded-l-none"
        >
          <div className="absolute -left-[17px] top-8 w-8 h-8 rounded-full bg-dark-bg border-2 border-primary-neon flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            <Briefcase size={14} className="text-primary-neon" />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 pl-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">Frontend Developer Intern</h3>
            <span className="font-mono text-sm text-primary-neon/80 mt-1 md:mt-0 bg-primary-neon/10 px-3 py-1 rounded-full">April 2024</span>
          </div>
          
          <h4 className="text-lg text-primary-blue mb-6 pl-4 font-medium flex items-center gap-2">
            All India Translink Company
          </h4>
          
          <ul className="space-y-3 text-gray-300 list-disc list-inside pl-4 marker:text-primary-blue">
            <li className="leading-relaxed"><span className="ml-2">Built responsive and component-driven UI using React.js.</span></li>
            <li className="leading-relaxed"><span className="ml-2">Improved application performance and reduced load times.</span></li>
            <li className="leading-relaxed"><span className="ml-2">Integrated REST APIs seamlessly for real-time frontend data binding.</span></li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
