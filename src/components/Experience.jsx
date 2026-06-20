import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const milestones = [
  {
    year: '2021',
    title: 'First Steps',
    desc: 'Started my coding journey with a passion for creating digital experiences.',
    marker: '◇',
  },
  {
    year: '2022',
    title: 'Exploring',
    desc: 'Built my first projects and dived deep into new technologies.',
    marker: '◆',
  },
  {
    year: '2023',
    title: 'Full Stack',
    desc: 'Dove into backend, APIs and databases. Built more real-world projects.',
    marker: '◇',
  },
  {
    year: '2024',
    title: 'Building Products',
    desc: 'Full-stack applications, internship experience, and more.',
    marker: '◆',
    highlight: true,
  },
  {
    year: '2025',
    title: 'Scaling Impact',
    desc: 'Continuing to impact through building and creating a bigger impact.',
    marker: '◇',
  },
];

const responsibilities = [
  'Built responsive, component-driven UI using React.js',
  'Improved application performance and reduced load times',
  'Integrated REST APIs for real-time frontend data binding',
];

const Experience = () => (
  <section id="experience" className="py-28 px-6 relative overflow-hidden">
    <div className="blob w-64 h-64 top-0 right-[-100px]" style={{ background: 'rgba(201,168,76,0.06)' }} />

    <div className="max-w-5xl mx-auto relative z-10">
      {/* Hall Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="exhibit-number">Hall 04</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-2">
          Journey <span className="gold-text">Timeline</span>
        </h2>
        <p className="font-mono text-[11px] tracking-[0.25em] text-cream-dim uppercase">My path of learning, building and growing.</p>
        <div className="gold-divider mt-5 max-w-xs" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), rgba(201,168,76,0.1))' }}
          />

          <div className="flex flex-col gap-2">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 group pl-0"
              >
                {/* Marker */}
                <div className="relative z-10 flex flex-col items-center shrink-0 w-10">
                  <div
                    className="w-3 h-3 rotate-45 transition-all duration-300"
                    style={{
                      background: m.highlight ? '#c9a84c' : 'rgba(201,168,76,0.3)',
                      border: '1px solid rgba(201,168,76,0.5)',
                      boxShadow: m.highlight ? '0 0 12px rgba(201,168,76,0.4)' : 'none',
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  className="flex-1 pb-8 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-mono text-gold text-sm font-bold">{m.year}</span>
                    <span className="font-serif text-cream text-base font-bold">{m.title}</span>
                  </div>
                  <p className="font-sans text-cream-dim text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internship Card — Featured Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="museum-card p-8 relative spotlight-hover self-start"
        >
          {/* Corner ornaments */}
          <div className="corner-ornament tl" />
          <div className="corner-ornament tr" />
          <div className="corner-ornament bl" />
          <div className="corner-ornament br" />

          {/* Top accent */}
          <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'linear-gradient(to right, transparent, #c9a84c, transparent)' }} />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px" style={{ background: 'rgba(201,168,76,0.5)' }} />
              <span className="hall-label">Featured Experience</span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div
                className="p-2.5 rounded-none"
                style={{ background: 'linear-gradient(135deg, #c9a84c, #8b6914)', boxShadow: '0 4px 12px rgba(201,168,76,0.25)' }}
              >
                <Briefcase size={18} className="text-museum-dark" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream">Frontend Developer Intern</h3>
            </div>

            <p className="font-sans text-gold font-semibold text-base mb-6 ml-12">
              All India Translink Company
            </p>

            <div className="ml-12 flex flex-wrap gap-4 mb-6 text-sm text-cream-dim">
              <div className="flex items-center gap-2">
                <Calendar size={13} style={{ color: '#c9a84c' }} />
                <span className="font-mono text-xs">April 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} style={{ color: '#c9a84c' }} />
                <span className="font-sans text-xs">Tamil Nadu, India</span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="ml-12 space-y-3 mb-6">
              {responsibilities.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 text-gold text-xs shrink-0">◆</span>
                  <p className="font-sans text-cream-muted text-sm">{r}</p>
                </motion.div>
              ))}
            </div>

            {/* Skills used */}
            <div className="ml-12 flex flex-wrap gap-2">
              {['React.js', 'REST APIs', 'UI Design', 'Performance'].map(t => (
                <span key={t} className="museum-pill text-[10px]">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Experience;
