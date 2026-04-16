import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const certs = [
  { name: 'Java Fundamentals', issuer: 'DataCamp', color: 'from-brand-orange to-brand-pink' },
  { name: 'JavaScript', issuer: 'Guvi', color: 'from-brand-pink to-brand-purple' },
  { name: 'SQL Fundamentals', issuer: 'DataCamp', color: 'from-brand-purple to-brand-blue' },
  { name: 'Full Stack Development', issuer: 'Guvi', color: 'from-brand-blue to-brand-cyan' },
];

const Education = () => (
  <section id="education" className="py-24 px-6 relative">
    <div className="blob w-72 h-72 bg-brand-cyan bottom-0 right-0 opacity-10"></div>
    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex items-center gap-4 mb-14"
      >
        <span className="text-brand-cyan font-mono font-bold text-lg">05–06.</span>
        <h2 className="text-3xl md:text-5xl font-black">Education & <span className="text-gradient-cool">Certs</span></h2>
        <div className="h-px bg-gradient-to-r from-brand-cyan/50 to-transparent flex-grow"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="glass-card p-8 relative overflow-hidden group hover:border-brand-cyan/30 transition-all duration-500"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-blue"></div>
          <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <GraduationCap size={120} />
          </div>
          <div className="flex gap-3 items-center mb-5">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-blue">
              <GraduationCap size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-black text-white">Education</h3>
          </div>
          <h4 className="text-lg font-bold text-white mb-2 leading-snug">B.Tech Computer Science & Engineering</h4>
          <p className="text-brand-cyan font-semibold mb-6">Vels Institute of Science, Technology & Advanced Studies</p>
          <div className="space-y-3 border-t border-white/5 pt-5">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">CGPA</span>
              <span className="text-2xl font-black text-gradient-cool">7.36</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Duration</span>
              <span className="font-mono font-bold text-brand-cyan">2021 – 2025</span>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <div className="flex flex-col gap-4">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-card p-5 flex items-center justify-between gap-4 group hover:scale-[1.02] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cert.color} shrink-0`}>
                  <Award size={18} className="text-white" />
                </div>
                <span className="font-semibold text-white">{cert.name}</span>
              </div>
              <span className={`pill text-xs font-bold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent border-white/10`}>
                {cert.issuer}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
