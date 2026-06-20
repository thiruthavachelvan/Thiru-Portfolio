import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { label: 'Full Stack Developer', value: '2+', sub: 'Years Building', color: '#c9a84c' },
  { label: 'Problem Solver', value: '3+', sub: 'Full-Stack Projects', color: '#e8c97a' },
  { label: 'Consistent Learner', value: '2025', sub: 'Batch Graduate', color: '#c9a84c' },
];

const traits = [
  { title: 'Clean Code', desc: 'Turning complex problems into simple, beautiful and maintainable solutions.' },
  { title: 'Problem Solver', desc: 'Focused on creating products that make a real impact in people\'s lives.' },
  { title: 'Fast Learner', desc: 'Rapidly adapting to new technologies and engineering challenges.' },
  { title: 'Team Player', desc: 'Building better products through effective collaboration and communication.' },
];

const profileJson = `{
  "name": "Thiruthavachelvan K",
  "role": "MERN Stack Developer",
  "education": "B.Tech CSE (2025)",
  "specialties": [
    "MERN Stack Platforms",
    "RESTful Web Services",
    "Interactive UI/UX Architectures"
  ],
  "interests": [
    "Clean Code Design",
    "System Optimization",
    "Scalable Deployments"
  ]
}`;

const About = () => {
  const [profileExecuted, setProfileExecuted] = useState(false);
  const [typedOutput, setTypedOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runProfiler = () => {
    if (isRunning) return;
    setIsRunning(true);
    setTypedOutput('');
    setProfileExecuted(true);

    let i = 0;
    const interval = setInterval(() => {
      setTypedOutput((prev) => prev + profileJson[i]);
      i++;
      if (i >= profileJson.length) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 12);
  };

  // Trigger once on view automatically
  useEffect(() => {
    const el = document.getElementById('about');
    const handleScroll = () => {
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && !profileExecuted) {
          runProfiler();
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [profileExecuted]);

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden bg-[#0c0a09]">
      <div className="blob w-72 h-72 top-12 right-0" style={{ background: 'rgba(139,26,26,0.08)' }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hall Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="exhibit-number">Hall 01</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-2">
            The <span className="gold-text">Creator Archive</span>
          </h2>
          <p className="font-mono text-[10px] tracking-[0.3em] text-cream-dim uppercase">
            Executing creator profile archives.
          </p>
          <div className="gold-divider mt-5 max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Code Terminal Identity Dossier */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 museum-card p-6 md:p-8 relative overflow-hidden"
          >
            <div className="corner-ornament tl" />
            <div className="corner-ornament tr" />
            <div className="corner-ornament bl" />
            <div className="corner-ornament br" />

            {/* Dossier Terminal Header */}
            <div className="flex justify-between items-center border-b border-[#c9a84c]/15 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="font-mono text-[10px] text-cream-dark ml-2 uppercase">creator-identity.sh</span>
              </div>
              <span className="font-mono text-[8px] text-[#c9a84c] tracking-widest uppercase">SECURE LINK</span>
            </div>

            {/* Terminal execution area */}
            <div className="font-mono text-xs md:text-sm text-cream-muted leading-relaxed">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#c9a84c]">&gt;</span>
                <span className="text-cream">developer.profile()</span>
                <button
                  onClick={runProfiler}
                  disabled={isRunning}
                  className="ml-auto px-3 py-1 font-mono text-[9px] tracking-wider uppercase border border-[#c9a84c]/30 hover:border-[#c9a84c] text-gold hover:text-black hover:bg-[#c9a84c] transition-all disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                >
                  {isRunning ? 'Running...' : 'Execute Query'}
                </button>
              </div>

              {/* Typed output JSON block */}
              <div className="bg-[#080706]/95 border border-[#c9a84c]/5 p-4 rounded min-h-[220px] text-emerald-400 font-mono text-xs overflow-x-auto whitespace-pre">
                {typedOutput}
                {isRunning && <span className="inline-block w-1.5 h-3 bg-emerald-400 ml-1 animate-pulse" />}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Pedestal stats & biography info */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            {/* Stat pedestals */}
            <div className="flex flex-col gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="museum-card p-6 flex items-center gap-5 spotlight-hover"
                >
                  <div className="text-4xl font-serif font-black" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div>
                    <div className="font-sans text-cream text-sm font-semibold">{stat.label}</div>
                    <div className="font-mono text-[9px] tracking-[0.15em] text-cream-dim uppercase mt-0.5">{stat.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Narrative Plaque */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="museum-card p-6 relative"
            >
              <div className="corner-ornament bl" />
              <div className="corner-ornament br" />
              <div className="hall-label mb-3">Artist Narrative</div>
              <p className="font-sans text-cream-muted text-sm leading-relaxed mb-3">
                I am a passionate <strong className="text-cream">B.Tech Computer Science student (2025 batch)</strong> specializing in building full-stack web architectures from scratch using the MERN ecosystem.
              </p>
              <p className="font-sans text-cream-muted text-sm leading-relaxed">
                With expertise in RESTful endpoints, relational databases, clean software development cycles (SDLC), and agile flows, I aim to build high-performance products that solve real-world problems.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Traits matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {traits.map((trait, i) => (
            <div key={i} className="museum-card p-5 text-center spotlight-hover relative">
              <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full mx-auto mb-3 opacity-40" />
              <h4 className="font-serif text-base font-bold text-cream mb-2">{trait.title}</h4>
              <p className="font-sans text-cream-dim text-xs leading-relaxed">{trait.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Signature & Exhibition Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="gold-divider mb-6" />
          <p className="font-serif italic text-cream-dim text-base max-w-xl mx-auto">
            "Code is not just logic. Code is the architecture of digital spaces, and every artifact must be engineered with intent."
          </p>
          <div className="gold-divider mt-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
