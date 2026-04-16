import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const certs = [
    { name: "Java Fundamentals", issuer: "DataCamp" },
    { name: "JavaScript", issuer: "Guvi" },
    { name: "SQL Fundamentals", issuer: "DataCamp" },
    { name: "Full Stack Development", issuer: "Guvi" }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Education Column */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-primary-blue font-mono text-xl">05.</span>
            <h2 className="text-3xl font-bold">Education</h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 border-t-2 border-t-primary-blue border-l-0 border-r-0 border-b-0 rounded-t-none relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <GraduationCap className="w-24 h-24 text-primary-blue" />
            </div>
            
            <div className="mb-4 relative z-10">
              <h3 className="text-xl font-bold text-white leading-tight mb-2">B.Tech Computer Science and Engineering</h3>
              <p className="text-primary-blue font-medium">Vels Institute of Science, Technology and Advanced Studies</p>
            </div>
            
            <div className="flex flex-col gap-2 relative z-10 mt-6 pt-4 border-t border-white/10">
              <div className="flex justify-between items-center text-sm font-mono text-gray-300">
                <span className="text-gray-400">CGPA</span>
                <span className="text-white font-bold bg-white/10 px-2 py-1 rounded">7.36</span>
              </div>
              <div className="flex justify-between items-center text-sm font-mono text-gray-300">
                <span className="text-gray-400">Duration</span>
                <span className="text-primary-neon">2021 – 2025</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications Column */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-primary-neon font-mono text-xl">06.</span>
            <h2 className="text-3xl font-bold">Certifications</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {certs.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-4 flex items-center justify-between hover:border-primary-neon/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary-neon/10 rounded-lg">
                    <Award className="text-primary-neon w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-200">{cert.name}</span>
                </div>
                <span className="text-xs text-primary-blue px-3 py-1 bg-primary-blue/10 rounded-full font-mono">{cert.issuer}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Education;
