import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Globe } from 'lucide-react';

const stats = [
  { label: 'Projects', value: '2+', color: 'from-brand-orange to-brand-pink' },
  { label: 'Internship', value: '1', color: 'from-brand-pink to-brand-purple' },
  { label: 'CGPA', value: '7.36', color: 'from-brand-purple to-brand-blue' },
];

const About = () => (
  <section id="about" className="py-24 px-6 relative">
    <div className="blob w-72 h-72 bg-brand-pink top-0 right-0 opacity-15"></div>
    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex items-center gap-4 mb-14"
      >
        <span className="text-brand-orange font-mono font-bold text-lg">01.</span>
        <h2 className="text-3xl md:text-5xl font-black">About <span className="text-gradient-primary">Me</span></h2>
        <div className="h-px bg-gradient-to-r from-brand-orange/50 to-transparent flex-grow"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main about card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="md:col-span-2 glass-card p-8 relative overflow-hidden group hover:border-brand-orange/30 transition-all duration-500"
        >
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl group-hover:opacity-60 transition-opacity"></div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-br from-brand-orange to-brand-pink">
              <Sparkles size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-bold">Who I Am</h3>
          </div>
          <p className="text-gray-300 text-base leading-loose mb-4">
            I'm a <strong className="text-white">B.Tech Computer Science student (2025 batch)</strong> with hands-on MERN stack experience building real-world web applications from scratch.
          </p>
          <p className="text-gray-300 text-base leading-loose">
            I have a strong foundation in <span className="text-brand-cyan font-semibold">Java</span>, <span className="text-brand-orange font-semibold">REST APIs</span>, <span className="text-brand-pink font-semibold">SDLC</span>, and <span className="text-brand-purple font-semibold">Agile methodologies</span> — passionate about turning complex problems into elegant, scalable solutions.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
            <Globe size={16} />
            <span>Currently based in Tamil Nadu, India</span>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="flex flex-col gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="glass-card p-6 flex-1 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Traits row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.3 }}
        className="mt-6 glass-card p-6 flex flex-wrap justify-around gap-6 hover:border-brand-blue/30 transition-colors duration-500"
      >
        {[
          { icon: <Terminal size={20} />, text: 'Clean Code Advocate', color: 'text-brand-cyan' },
          { icon: <Sparkles size={20} />, text: 'Problem Solver', color: 'text-brand-orange' },
          { icon: <Globe size={20} />, text: 'Full-Stack Oriented', color: 'text-brand-purple' },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-300">
            <span className={t.color}>{t.icon}</span>
            <span className="font-medium">{t.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
