import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ArrowRight } from 'lucide-react';

const techPills = [
  { label: 'React.js', color: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10' },
  { label: 'Node.js', color: 'text-brand-green border-brand-green/30 bg-brand-green/10' },
  { label: 'MongoDB', color: 'text-brand-orange border-brand-orange/30 bg-brand-orange/10' },
  { label: 'Express.js', color: 'text-gray-300 border-white/20 bg-white/5' },
  { label: 'JavaScript', color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' },
  { label: 'Tailwind CSS', color: 'text-brand-blue border-brand-blue/30 bg-brand-blue/10' },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Animated Blob Background */}
      <div className="blob w-[500px] h-[500px] bg-brand-purple animate-blob top-[-100px] left-[-150px]"></div>
      <div className="blob w-[450px] h-[450px] bg-brand-orange animate-blob-slow bottom-[-80px] right-[-120px]" style={{animationDelay: '3s'}}></div>
      <div className="blob w-[350px] h-[350px] bg-brand-pink animate-blob top-[40%] right-[20%]" style={{animationDelay: '6s'}}></div>
      <div className="blob w-[300px] h-[300px] bg-brand-blue animate-blob-slow bottom-[10%] left-[20%]" style={{animationDelay: '1.5s'}}></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC4xNSIgb3BhY2l0eT0iMC4xNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 z-0 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 glass-card rounded-full mb-8 text-sm text-gray-300"
        >
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
          Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6"
        >
          <span className="text-white">Thiruthava</span>
          <br />
          <span className="text-gradient-primary">chelvan K</span>
        </motion.h1>

        {/* Role */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl font-bold mb-6"
        >
          <span className="text-gradient-cool">MERN Stack Developer</span>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
          className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building <span className="text-white font-semibold">scalable</span>, <span className="text-white font-semibold">user-friendly</span> web applications that make a real-world impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Link to="project" smooth duration={500} offset={-80}>
            <button className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple text-white shadow-lg hover:shadow-brand-pink/40 hover:-translate-y-1 transition-all duration-300">
              View Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <a href="/Thiru_Resume_IT.pdf" download className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base glass-card text-white hover:bg-white/10 hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300">
            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            Resume
          </a>
          <Link to="contact" smooth duration={500} offset={-80}>
            <button className="px-8 py-4 rounded-full font-bold text-base border border-white/20 text-gray-300 hover:text-white hover:border-white/50 hover:-translate-y-1 transition-all duration-300">
              Contact Me
            </button>
          </Link>
        </motion.div>

        {/* Floating Tech Pills */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techPills.map((pill, i) => (
            <motion.span
              key={pill.label}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              className={`pill font-mono ${pill.color}`}
            >
              {pill.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs"
      >
        <span>scroll</span>
        <div className="w-0.5 h-6 bg-gradient-to-b from-gray-600 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
