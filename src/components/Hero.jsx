import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Map, Download } from 'lucide-react';

const techBadges = [
  { label: 'React.js', icon: '⚛' },
  { label: 'Node.js', icon: '⬡' },
  { label: 'MongoDB', icon: '◉' },
  { label: 'Express.js', icon: '◈' },
  { label: 'JavaScript', icon: '◆' },
  { label: 'Tailwind CSS', icon: '◇' },
];

const marqueeItems = [
  'Code is the medium', '✦', 'Impact is the masterpiece',
  '✦', 'Engineering with purpose', '✦', 'Building digital experiences',
  '✦', 'Code is the medium', '✦', 'Impact is the masterpiece',
  '✦', 'Engineering with purpose', '✦', 'Building digital experiences', '✦',
];

const Hero = () => {
  const [entered, setEntered] = useState(false);
  const [curtainDone, setCurtainDone] = useState(false);

  useEffect(() => {
    // Auto-enter after a short pause for the curtain effect
    const t = setTimeout(() => setEntered(true), 400);
    const t2 = setTimeout(() => setCurtainDone(true), 2400);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <>
      {/* Entrance Curtain */}
      <AnimatePresence>
        {!curtainDone && (
          <motion.div
            className="museum-curtain"
            initial={{ scaleY: 1 }}
            animate={entered ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: 'top' }}
            onAnimationComplete={() => setCurtainDone(true)}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 1 }}
              animate={entered ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-serif text-4xl font-bold gold-text mb-2">Museum</div>
              <div className="font-mono text-xs tracking-[0.4em] text-cream-dim uppercase">of Thiruthavachelvan</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 120% 80% at 50% -10%, rgba(201,168,76,0.06) 0%, transparent 65%), #0c0a09' }}
      >
        {/* Ambient light blobs */}
        <div className="blob w-[600px] h-[600px] top-[-150px] left-[-200px]" style={{ background: 'rgba(201,168,76,0.08)' }} />
        <div className="blob w-[400px] h-[400px] bottom-[-100px] right-[-150px]" style={{ background: 'rgba(139,26,26,0.12)', animationDelay: '5s' }} />

        {/* Architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Vertical pillars */}
        <div className="absolute inset-y-0 left-[8%] w-px opacity-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.8), transparent)' }} />
        <div className="absolute inset-y-0 right-[8%] w-px opacity-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.8), transparent)' }} />

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10">

          {/* Exhibition stamp */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: curtainDone ? 1 : 0, y: curtainDone ? 0 : -20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 opacity-50" style={{ background: 'rgba(201,168,76,0.6)' }} />
            <span className="font-mono text-[10px] tracking-[0.4em] text-gold-muted uppercase">
              Private Developer Exhibition
            </span>
            <div className="h-px w-12 opacity-50" style={{ background: 'rgba(201,168,76,0.6)' }} />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: curtainDone ? 1 : 0, y: curtainDone ? 0 : 40 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          >
            <div className="font-mono text-[11px] tracking-[0.4em] text-cream-dim uppercase mb-3">
              Welcome to
            </div>
            <h1 className="font-serif font-black leading-none mb-2" style={{ fontSize: 'clamp(3.5rem, 12vw, 8rem)', color: '#f0ead8' }}>
              THIRU
            </h1>
            <h2 className="font-serif font-bold leading-none gold-text" style={{ fontSize: 'clamp(2.5rem, 9vw, 6rem)' }}>
              MUSEUM
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: curtainDone ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-cream-dim text-base md:text-lg mt-6 mb-4 max-w-xl mx-auto"
          >
            A collection of ideas engineered into digital experiences.
          </motion.p>

          {/* Role tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: curtainDone ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-10"
          >
            {['Full Stack Developer', 'MERN Specialist', 'Problem Solver'].map((role, i) => (
              <span key={i} className="font-mono text-[10px] tracking-[0.25em] text-gold-muted uppercase">
                {i > 0 && <span className="mr-6 opacity-30">·</span>}
                {role}
              </span>
            ))}
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: curtainDone ? 1 : 0, y: curtainDone ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {techBadges.map((badge, i) => (
                <motion.span
                  key={badge.label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="museum-pill text-[11px] flex items-center gap-1.5"
                >
                  <span className="opacity-60">{badge.icon}</span>
                  {badge.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Exhibition since + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: curtainDone ? 1 : 0, y: curtainDone ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Link to="about" smooth duration={700} offset={-80}>
              <button className="museum-btn-primary flex items-center gap-3" id="start-tour-btn">
                Start Tour
                <ArrowRight size={16} />
              </button>
            </Link>

            <Link to="projects" smooth duration={700} offset={-80}>
              <button className="museum-btn-outline flex items-center gap-3" id="exhibition-map-btn">
                <Map size={15} />
                Exhibition Map
              </button>
            </Link>

            <a href="/Thiru_Resume_IT.pdf" download className="museum-btn-outline flex items-center gap-2" id="hero-resume-btn">
              <Download size={14} />
              Resume
            </a>
          </motion.div>

          {/* Exhibition since */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: curtainDone ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <span className="font-mono text-[9px] tracking-[0.3em] text-cream-dark uppercase">Exhibition Since</span>
            <span className="font-serif text-gold text-lg font-bold">2021</span>
          </motion.div>
        </div>

        {/* Bottom marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: curtainDone ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-0 left-0 right-0 overflow-hidden border-t"
          style={{ borderColor: 'rgba(201,168,76,0.12)', background: 'rgba(12,10,9,0.8)' }}
        >
          <div className="flex w-max animate-marquee gap-8 px-4 py-3">
            {marqueeItems.map((item, i) => (
              <span key={i} className="whitespace-nowrap font-mono text-[11px] tracking-[0.15em] text-cream-dark uppercase">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute bottom-12 right-8 flex flex-col items-center gap-1"
        >
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)' }} />
          <span className="font-mono text-[9px] tracking-[0.3em] text-cream-dark uppercase rotate-90 mt-1">Scroll</span>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
