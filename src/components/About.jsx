import React from 'react';
import { motion } from 'framer-motion';

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

const About = () => (
  <section id="about" className="py-28 px-6 relative overflow-hidden">
    {/* Ambient */}
    <div className="blob w-64 h-64 top-0 right-0" style={{ background: 'rgba(139,26,26,0.12)' }} />

    <div className="max-w-5xl mx-auto relative z-10">
      {/* Hall Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="exhibit-number">Hall 01</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-2">
          The <span className="gold-text">Creator</span>
        </h2>
        <p className="font-mono text-[11px] tracking-[0.25em] text-cream-dim uppercase">Know the person behind the code.</p>
        <div className="gold-divider mt-5 max-w-xs" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Artist Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="lg:col-span-3 museum-card p-8 relative spotlight-hover"
        >
          {/* Corner ornaments */}
          <div className="corner-ornament tl" />
          <div className="corner-ornament tr" />
          <div className="corner-ornament bl" />
          <div className="corner-ornament br" />

          <div className="relative z-10">
            {/* Profile label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: 'rgba(201,168,76,0.5)' }} />
              <span className="hall-label">Artist Profile</span>
              <div className="w-8 h-px" style={{ background: 'rgba(201,168,76,0.5)' }} />
            </div>

            {/* Name plate */}
            <div className="mb-6 pb-6" style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
              <h3 className="font-serif text-3xl font-bold text-cream mb-1">Thiruthavachelvan K</h3>
              <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">MERN Stack Developer</p>
            </div>

            {/* Bio */}
            <p className="font-sans text-cream-muted text-base leading-relaxed mb-4">
              I'm a <strong className="text-cream">B.Tech Computer Science student (2025 batch)</strong> with hands-on MERN stack
              experience building real-world web applications from scratch.
            </p>
            <p className="font-sans text-cream-muted text-base leading-relaxed mb-6">
              I have a strong foundation in{' '}
              <span className="text-gold font-medium">Java</span>,{' '}
              <span className="text-gold font-medium">REST APIs</span>,{' '}
              <span className="text-gold font-medium">SDLC</span>, and{' '}
              <span className="text-gold font-medium">Agile methodologies</span> — passionate about turning
              complex problems into elegant, scalable solutions.
            </p>

            {/* Info rows */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { label: 'Role', value: 'Full Stack Developer' },
                { label: 'Location', value: 'Tamil Nadu, India' },
                { label: 'Speciality', value: 'MERN Stack' },
                { label: 'Experience', value: '2+ Years' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] tracking-[0.25em] text-cream-dark uppercase">{item.label}</span>
                  <span className="font-sans text-cream-muted text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-8 flex justify-end">
              <div className="text-right">
                <div className="font-serif italic text-2xl text-cream opacity-40">Thiru</div>
                <div className="w-20 h-px ml-auto mt-1" style={{ background: 'rgba(201,168,76,0.3)' }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats pedestals */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
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

          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="museum-card p-6 relative"
          >
            <div className="hall-label mb-3">About</div>
            <p className="font-sans text-cream-muted text-sm leading-relaxed">
              I love turning complex problems into simple, beautiful solutions. Writing clean code that makes a real impact is what drives me every day.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Traits row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.3 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {traits.map((trait, i) => (
          <div key={i} className="museum-card p-5 spotlight-hover text-center">
            <div className="font-serif text-base font-bold text-cream mb-2">{trait.title}</div>
            <p className="font-sans text-cream-dim text-xs leading-relaxed">{trait.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <div className="gold-divider mb-6" />
        <p className="font-serif italic text-cream-muted text-lg">
          "These tools are my instruments. Every project is a masterpiece."
        </p>
        <div className="gold-divider mt-6" />
      </motion.div>
    </div>
  </section>
);

export default About;
