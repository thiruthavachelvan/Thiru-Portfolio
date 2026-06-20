import React from 'react';
import { motion } from 'framer-motion';

const exhibits = [
  {
    number: '01',
    title: 'React.js',
    category: 'Frontend Library',
    desc: 'A JavaScript library for building user interfaces.',
    level: 88,
    used: 'All Projects',
  },
  {
    number: '02',
    title: 'Node.js',
    category: 'Runtime Environment',
    desc: 'Server-side JavaScript execution environment.',
    level: 82,
    used: 'REST APIs, Backend',
  },
  {
    number: '03',
    title: 'MongoDB',
    category: 'NoSQL Database',
    desc: 'Flexible, scalable document database for modern apps.',
    level: 85,
    used: 'All Major Projects',
  },
  {
    number: '04',
    title: 'Express.js',
    category: 'Web Framework',
    desc: 'Fast, unopinionated and minimalist web framework.',
    level: 80,
    used: 'API Development',
  },
  {
    number: '05',
    title: 'JavaScript',
    category: 'Core Language',
    desc: 'The language of the web. Used in everything.',
    level: 90,
    used: 'Everything',
  },
  {
    number: '06',
    title: 'Tailwind CSS',
    category: 'Utility-first CSS',
    desc: 'Utility-first CSS framework for rapid UI styling.',
    level: 92,
    used: 'UI Styling',
  },
];

const secondarySkills = [
  { name: 'Java', level: 80 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 88 },
  { name: 'MySQL', level: 75 },
  { name: 'Git & GitHub', level: 88 },
  { name: 'REST APIs', level: 85 },
  { name: 'Postman', level: 80 },
  { name: 'JWT Auth', level: 78 },
  { name: 'Socket.IO', level: 72 },
  { name: 'Agile/SDLC', level: 75 },
];

const Skills = () => (
  <section id="skills" className="py-28 px-6 relative overflow-hidden">
    <div className="blob w-72 h-72 bottom-0 left-0" style={{ background: 'rgba(201,168,76,0.08)' }} />

    <div className="max-w-5xl mx-auto relative z-10">
      {/* Hall Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="exhibit-number">Hall 02</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-2">
          Technology <span className="gold-text">Collection</span>
        </h2>
        <p className="font-mono text-[11px] tracking-[0.25em] text-cream-dim uppercase">Tools, Frameworks and Technologies I master.</p>
        <div className="gold-divider mt-5 max-w-xs" />
      </motion.div>

      {/* Main exhibits — glass case style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {exhibits.map((ex, i) => (
          <motion.div
            key={ex.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="museum-card p-6 group spotlight-hover relative"
          >
            {/* Exhibit number plaque */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[9px] tracking-[0.3em] text-gold-muted uppercase">Exhibit #{ex.number}</span>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#c9a84c', opacity: 0.5 }} />
            </div>

            {/* Tool name */}
            <h3 className="font-serif text-2xl font-bold text-cream mb-1 group-hover:text-gold transition-colors duration-300">
              {ex.title}
            </h3>
            <p className="font-mono text-[10px] tracking-[0.2em] text-gold-muted uppercase mb-3">{ex.category}</p>
            <p className="font-sans text-cream-dim text-sm leading-relaxed mb-5">{ex.desc}</p>

            {/* Proficiency bar */}
            <div className="mb-3">
              <div className="flex justify-between text-[10px] mb-1.5">
                <span className="font-mono text-cream-dark uppercase tracking-wider">Proficiency</span>
                <span className="font-mono text-gold">{ex.level}%</span>
              </div>
              <div className="h-0.5 bg-cream-dark/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${ex.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08 + 0.3, ease: 'easeOut' }}
                  style={{ height: '100%', background: 'linear-gradient(to right, #8b6914, #c9a84c, #e8c97a)', borderRadius: '9999px' }}
                />
              </div>
            </div>

            {/* Used in label */}
            <div className="flex items-center gap-2 mt-4 pt-4" style={{ borderTop: '1px solid rgba(201,168,76,0.08)' }}>
              <span className="font-mono text-[9px] tracking-[0.2em] text-cream-dark uppercase">Used in</span>
              <span className="font-mono text-[9px] tracking-[0.15em] text-gold uppercase">{ex.used}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional skills — display shelf */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="museum-card p-8 relative"
      >
        <div className="corner-ornament tl" />
        <div className="corner-ornament tr" />

        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-px" style={{ background: 'rgba(201,168,76,0.5)' }} />
          <span className="hall-label">Additional Collection</span>
          <div className="w-6 h-px" style={{ background: 'rgba(201,168,76,0.5)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
          {secondarySkills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-sans text-cream-muted font-medium">{skill.name}</span>
                <span className="font-mono text-cream-dark text-xs">{skill.level}%</span>
              </div>
              <div className="h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(201,168,76,0.1)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 + 0.2, ease: 'easeOut' }}
                  style={{ height: '100%', background: 'linear-gradient(to right, rgba(201,168,76,0.4), rgba(201,168,76,0.8))', borderRadius: '9999px' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid rgba(201,168,76,0.08)' }}>
          <p className="font-serif italic text-cream-dim text-sm">"These tools are my instruments. Every project is a masterpiece."</p>
        </div>
      </motion.div>

      {/* Scrolling marquee */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mt-8 overflow-hidden py-4 relative"
        style={{ borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}
      >
        <div className="flex w-max animate-marquee gap-10 px-4">
          {['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Java', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'REST APIs', 'MySQL', 'Socket.IO',
            'React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Java', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'REST APIs', 'MySQL', 'Socket.IO'].map((t, i) => (
            <span key={i} className="whitespace-nowrap font-mono text-[10px] tracking-[0.3em] text-cream-dark uppercase hover:text-gold transition-colors">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
