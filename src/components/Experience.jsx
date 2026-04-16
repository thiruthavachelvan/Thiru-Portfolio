import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const responsibilities = [
  'Built responsive, component-driven UI using React.js',
  'Improved application performance and reduced load times',
  'Integrated REST APIs for real-time frontend data binding',
];

const Experience = () => (
  <section id="experience" className="py-24 px-6 relative">
    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex items-center gap-4 mb-14"
      >
        <span className="text-brand-blue font-mono font-bold text-lg">04.</span>
        <h2 className="text-3xl md:text-5xl font-black">Work <span className="text-gradient-cool">Experience</span></h2>
        <div className="h-px bg-gradient-to-r from-brand-blue/50 to-transparent flex-grow"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-brand-blue/30 transition-all duration-500"
      >
        {/* Gradient accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-cyan"></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-brand-blue/10 rounded-full blur-3xl group-hover:opacity-80 transition-opacity"></div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan">
                <Briefcase size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-white">Frontend Developer Intern</h3>
            </div>
            <div className="flex items-center gap-2 ml-12">
              <span className="text-brand-cyan font-semibold text-lg">All India Translink Company</span>
            </div>
          </div>
          <div className="ml-12 md:ml-0 flex flex-col gap-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-brand-orange" />
              <span className="font-mono">April 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-pink" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        <div className="ml-12 space-y-3">
          {responsibilities.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan mt-2 shrink-0"></div>
              <p className="text-gray-300">{r}</p>
            </motion.div>
          ))}
        </div>

        <div className="ml-12 mt-6 flex gap-2 flex-wrap">
          {['React.js', 'REST APIs', 'UI Design', 'Performance'].map(t => (
            <span key={t} className="pill text-brand-blue border-brand-blue/30 bg-brand-blue/10 text-xs">{t}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
