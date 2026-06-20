import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const exhibitsData = [
  {
    id: 'react',
    number: '01',
    title: 'React.js',
    category: 'Frontend Library',
    desc: 'Component-driven reactive user interfaces.',
    icon: '⚛',
    details: {
      built: ['✓ Custom Hooks', '✓ Context Providers', '✓ Code-Splitting / Suspense', '✓ Client-Side Routing'],
      usedIn: ['LuxeStay', 'HireVerse', 'WhatsApp Clone']
    }
  },
  {
    id: 'node',
    number: '02',
    title: 'Node.js',
    category: 'Runtime Environment',
    desc: 'Server-side scalable engine.',
    icon: '⬡',
    details: {
      built: ['✓ Event-Driven Servers', '✓ CORS & Middleware', '✓ Core Modules integration', '✓ Scalable micro-routing'],
      usedIn: ['LuxeStay', 'HireVerse', 'WhatsApp Clone']
    }
  },
  {
    id: 'mongodb',
    number: '03',
    title: 'MongoDB',
    category: 'NoSQL Database',
    desc: 'Flexible schema-less document database.',
    icon: '◉',
    details: {
      built: ['✓ Aggregation Pipelines', '✓ Mongoose Schema validation', '✓ Indexed search parameters', '✓ Geolocation queries'],
      usedIn: ['LuxeStay', 'HireVerse', 'WhatsApp Clone']
    }
  },
  {
    id: 'express',
    number: '04',
    title: 'Express.js',
    category: 'Web Framework',
    desc: 'Fast, minimalist backend framework.',
    icon: '◈',
    details: {
      built: ['✓ RESTful Routing', '✓ Custom Error Middlewares', '✓ JWT Authentication gates', '✓ Input sanitization layers'],
      usedIn: ['LuxeStay', 'HireVerse', 'WhatsApp Clone']
    }
  },
  {
    id: 'javascript',
    number: '05',
    title: 'JavaScript',
    category: 'Core Language',
    desc: 'Dynamic scripting language for web stacks.',
    icon: '◆',
    details: {
      built: ['✓ Asynchronous flows (ES6)', '✓ Closure & scope closures', '✓ DOM manipulation APIs', '✓ Event bubbling triggers'],
      usedIn: ['Everything']
    }
  },
  {
    id: 'tailwind',
    number: '06',
    title: 'Tailwind CSS',
    category: 'Utility CSS Framework',
    desc: 'Rapid component-driven styling.',
    icon: '◇',
    details: {
      built: ['✓ Customized config themes', '✓ Responsive grid systems', '✓ Pseudo-class animations', '✓ Dark-mode tokens'],
      usedIn: ['All Projects']
    }
  },
];

const secondarySkills = [
  'Java', 'HTML5', 'CSS3', 'MySQL', 'Git & GitHub', 
  'REST APIs', 'Postman', 'JWT Auth', 'Socket.IO', 'Agile/SDLC'
];

const Skills = () => {
  const [activeExhibit, setActiveExhibit] = useState(null);

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden bg-[#0c0a09]">
      <div className="blob w-80 h-80 bottom-[-80px] left-[-80px]" style={{ background: 'rgba(201,168,76,0.06)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hall Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="exhibit-number">Hall 02</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-2">
            Technology <span className="gold-text">Collection</span>
          </h2>
          <p className="font-mono text-[10px] tracking-[0.3em] text-cream-dim uppercase">
            Interactive Technical Artifacts. Hover to examine.
          </p>
          <div className="gold-divider mt-5 max-w-xs" />
        </motion.div>

        {/* Primary Floating Artifact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {exhibitsData.map((ex, i) => {
            const isOpen = activeExhibit === ex.id;
            
            return (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setActiveExhibit(ex.id)}
                onMouseLeave={() => setActiveExhibit(null)}
                className="museum-card p-6 min-h-[260px] flex flex-col justify-between relative cursor-pointer overflow-hidden transition-all duration-300"
                style={{
                  border: isOpen ? '1px solid rgba(201,168,76,0.5)' : '1px solid rgba(201,168,76,0.12)',
                  boxShadow: isOpen ? '0 10px 30px rgba(201,168,76,0.1)' : 'none',
                }}
              >
                {/* Visual Glass splitting background on hover */}
                <div 
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#c9a84c]/5 to-transparent transition-transform duration-500 origin-bottom"
                  style={{ height: '50%', transform: isOpen ? 'scaleY(1)' : 'scaleY(0)' }}
                />

                {/* Exhibit Top plaque */}
                <div className="flex justify-between items-center z-10">
                  <span className="font-mono text-[8px] tracking-[0.25em] text-cream-dark uppercase">
                    Exhibit #{ex.number}
                  </span>
                  <motion.span 
                    animate={isOpen ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-mono text-lg text-gold"
                  >
                    {ex.icon}
                  </motion.span>
                </div>

                {/* Animation: Content shift */}
                <div className="z-10 my-4 flex-grow flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {!isOpen ? (
                      <motion.div
                        key="closed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="font-serif text-2xl font-bold text-cream mb-1">
                          {ex.title}
                        </h3>
                        <p className="font-mono text-[9px] tracking-[0.2em] text-[#c9a84c] uppercase mb-3">
                          {ex.category}
                        </p>
                        <p className="font-sans text-cream-muted text-sm leading-relaxed">
                          {ex.desc}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="open"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="text-left flex flex-col justify-between h-full"
                      >
                        <div className="mb-4">
                          <span className="font-mono text-[8px] tracking-[0.2em] text-[#c9a84c] uppercase block mb-2">
                            Built Mechanics
                          </span>
                          <div className="grid grid-cols-1 gap-1">
                            {ex.details.built.map((b, idx) => (
                              <span key={idx} className="font-mono text-[9.5px] text-cream-muted leading-tight">
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="font-mono text-[8px] tracking-[0.2em] text-[#c9a84c] uppercase block mb-1">
                            Exhibited In
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {ex.details.usedIn.map((u, idx) => (
                              <span key={idx} className="museum-pill text-[8.5px] px-2 py-0.5">
                                {u}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Exhibit Bottom Status Indicator */}
                <div className="flex justify-between items-center z-10 border-t border-[#c9a84c]/5 pt-3">
                  <span className="font-mono text-[7px] text-cream-dark uppercase">
                    Status
                  </span>
                  <span className="font-mono text-[8px] text-gold uppercase tracking-wider">
                    {isOpen ? 'EXAMINING' : 'SECURE IN GLASS'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Stack Shelf Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="museum-card p-8 relative overflow-hidden"
        >
          <div className="corner-ornament tl" />
          <div className="corner-ornament tr" />
          <div className="corner-ornament bl" />
          <div className="corner-ornament br" />

          {/* Shelf Title */}
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-10 h-px bg-[#c9a84c]/30" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase">
              EXHIBIT SHELF: SECONDARY COLLECTIONS
            </span>
            <div className="w-10 h-px bg-[#c9a84c]/30" />
          </div>

          {/* Shelf Grid */}
          <div className="flex flex-wrap justify-center gap-4">
            {secondarySkills.map((skill, index) => (
              <motion.div
                key={skill}
                whileHover={{ y: -4, borderColor: '#c9a84c', background: 'rgba(201,168,76,0.06)' }}
                className="px-6 py-3 border border-[#c9a84c]/12 bg-[#110f0e]/50 font-mono text-[11px] tracking-wider text-cream-muted uppercase transition-all duration-300"
              >
                ✦ {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
