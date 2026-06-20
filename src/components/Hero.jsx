import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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

// Helper Component for Scrambled Typography Reveal
const ScrambleText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = '!@#$%^&*()_+{}:"<>?[]|,./;=~';

  useEffect(() => {
    let index = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        let scrambled = '';
        for (let i = 0; i < text.length; i++) {
          if (i < Math.floor(index)) {
            scrambled += text[i];
          } else if (text[i] === ' ') {
            scrambled += ' ';
          } else {
            scrambled += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        setDisplayText(scrambled);
        index += 0.45; // Controls speed of unscrambling
        if (index >= text.length + 1) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, 35);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  // 3D Glass Card State
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative mouse position from card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Apply tilt values (max 15 degrees)
    setRotateX(-mouseY * 20);
    setRotateY(mouseX * 20);

    // Apply glare positions
    setGlareX((mouseX + 0.5) * 100);
    setGlareY((mouseY + 0.5) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlareX(50);
    setGlareY(50);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden bg-[#0c0a09]"
      style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(201, 168, 76, 0.08) 0%, transparent 60%), #0c0a09'
      }}
    >
      {/* Light blobs */}
      <div className="blob w-[500px] h-[500px] top-[-100px] left-[-150px]" style={{ background: 'rgba(201,168,76,0.06)' }} />
      <div className="blob w-[300px] h-[300px] bottom-[-50px] right-[-100px]" style={{ background: 'rgba(139,26,26,0.08)' }} />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT: Cinematic Scrambled Typography */}
        <div className="lg:col-span-7 flex flex-col text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#c9a84c]/50" />
            <span className="font-mono text-[9px] tracking-[0.45em] text-gold uppercase">
              Hall 00 // Foyer
            </span>
          </motion.div>

          <h1 className="font-serif text-cream font-black leading-[1.05] tracking-wide mb-3" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}>
            <ScrambleText text="THIRUTHAVACHELVAN K" delay={300} />
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <h2 className="font-mono text-xs md:text-sm tracking-[0.25em] text-gold uppercase mb-6">
              MERN STACK DEVELOPER
            </h2>
            <p className="font-sans text-cream-dim text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Building premium, highly-interactive digital products and full-stack solutions from blueprint ideation to cloud deployment.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-wrap items-center gap-5"
          >
            <Link to="about" smooth duration={700} offset={-80}>
              <button 
                className="museum-btn-primary flex items-center gap-3 cursor-pointer group relative overflow-hidden" 
                id="start-tour-btn"
              >
                Start Tour
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link to="projects" smooth duration={700} offset={-80}>
              <button 
                className="museum-btn-outline flex items-center gap-3 cursor-pointer group" 
                id="exhibition-map-btn"
              >
                <Map size={15} />
                Exhibition Map
              </button>
            </Link>

            <a 
              href="/Thiru_Resume_IT.pdf" 
              download 
              className="museum-btn-outline flex items-center gap-2 cursor-pointer" 
              id="hero-resume-btn"
            >
              <Download size={14} />
              Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Floating 3D Glass Exhibit Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
            className="w-full max-w-sm"
          >
            {/* 3D Container */}
            <div 
              style={{ perspective: 1000 }} 
              className="w-full"
            >
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ rotateX, rotateY }}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                className="relative w-full aspect-[3/4] p-8 bg-[#14100c]/85 border border-[#c9a84c]/20 backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.7)] flex flex-col justify-between select-none overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Real-time reflection shine light */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-25 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(201,168,76,0.3) 0%, transparent 60%)`,
                  }}
                />

                {/* Card Corners */}
                <div className="corner-ornament tl" />
                <div className="corner-ornament tr" />
                <div className="corner-ornament bl" />
                <div className="corner-ornament br" />

                {/* Head HUD */}
                <div className="flex justify-between items-center" style={{ transform: 'translateZ(20px)' }}>
                  <span className="font-mono text-[8px] tracking-[0.3em] text-[#c9a84c] uppercase">
                    SYSTEM ACTIVE
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[8px] text-emerald-400">ONLINE</span>
                  </div>
                </div>

                {/* Core content body */}
                <div className="my-auto flex flex-col gap-6" style={{ transform: 'translateZ(40px)' }}>
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.25em] text-[#c9a84c] uppercase">
                      Current Exhibit
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-cream mt-1">
                      MERN Engineer
                    </h3>
                  </div>

                  {/* Systems Built list */}
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[8px] tracking-[0.25em] text-cream-dark uppercase">
                      Systems Built
                    </span>
                    <div className="flex flex-col gap-1 text-sm font-sans text-cream-muted">
                      <span>✦ Full Stack Platforms</span>
                      <span>✦ Scalable RESTful APIs</span>
                      <span>✦ Premium Interactive UIs</span>
                    </div>
                  </div>

                  {/* Stack grid */}
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[8px] tracking-[0.25em] text-cream-dark uppercase">
                      Core Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['React', 'Node', 'Express', 'MongoDB'].map((tech) => (
                        <span key={tech} className="museum-pill text-[9px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Foot plaque details */}
                <div className="flex justify-between items-end border-t border-[#c9a84c]/10 pt-4" style={{ transform: 'translateZ(20px)' }}>
                  <div className="flex flex-col">
                    <span className="font-mono text-[7px] text-cream-dark uppercase">EXHIBIT CODE</span>
                    <span className="font-mono text-[9px] text-[#c9a84c]">#THIRU-2025</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[7px] text-cream-dark uppercase">VERIFICATION</span>
                    <span className="font-mono text-[9px] text-cream-muted">SECURE CONNECTION</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dynamic tech badges scrolling marquee */}
      <div 
        className="absolute bottom-0 left-0 right-0 overflow-hidden border-t"
        style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(12,10,9,0.9)' }}
      >
        <div className="flex w-max animate-marquee gap-8 px-4 py-3.5">
          {marqueeItems.map((item, i) => (
            <span key={i} className="whitespace-nowrap font-mono text-[10px] tracking-[0.2em] text-cream-dark uppercase">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
