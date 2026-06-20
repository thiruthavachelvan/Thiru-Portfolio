import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const trophies = [
  { name: 'Full Stack Development', issuer: 'Guvi', icon: '🏆' },
  { name: 'Java Fundamentals', issuer: 'DataCamp', icon: '🏆' },
  { name: 'JavaScript', issuer: 'Guvi', icon: '🏅' },
  { name: 'SQL Fundamentals', issuer: 'DataCamp', icon: '🏅' },
];

const achievements = [
  { label: 'Full Stack Developer', sub: 'Build complex end-to-end applications' },
  { label: 'API Architect', sub: 'Designed scalable RESTful APIs' },
  { label: 'Performance Optimizer', sub: 'Optimized apps for speed and scale' },
];

const Education = () => (
  <section id="education" className="py-28 px-6 relative overflow-hidden">
    <div className="blob w-64 h-64 bottom-0 right-0" style={{ background: 'rgba(201,168,76,0.06)' }} />

    <div className="max-w-5xl mx-auto relative z-10">
      {/* Hall Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="exhibit-number">Hall 05</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-2">
          Achievements <span className="gold-text">& Education</span>
        </h2>
        <p className="font-mono text-[11px] tracking-[0.25em] text-cream-dim uppercase">Milestones and recognitions earned along the way.</p>
        <div className="gold-divider mt-5 max-w-xs" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="museum-card p-8 relative spotlight-hover"
        >
          <div className="corner-ornament tl" />
          <div className="corner-ornament tr" />
          <div className="corner-ornament bl" />
          <div className="corner-ornament br" />

          <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'linear-gradient(to right, transparent, #c9a84c, transparent)' }} />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-2.5"
                style={{ background: 'linear-gradient(135deg, #c9a84c, #8b6914)', boxShadow: '0 4px 12px rgba(201,168,76,0.25)' }}
              >
                <GraduationCap size={18} className="text-museum-dark" />
              </div>
              <span className="hall-label">Education</span>
            </div>

            <h3 className="font-serif text-xl font-bold text-cream mb-2 leading-snug">
              B.Tech Computer Science & Engineering
            </h3>
            <p className="font-sans text-gold font-medium mb-8">
              Vels Institute of Science, Technology & Advanced Studies
            </p>

            <div className="space-y-4" style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '1.5rem' }}>
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] tracking-[0.25em] text-cream-dark uppercase">CGPA</span>
                <span className="font-serif text-3xl font-black gold-text">7.36</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] tracking-[0.25em] text-cream-dark uppercase">Duration</span>
                <span className="font-mono text-gold font-bold">2021 — 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] tracking-[0.25em] text-cream-dark uppercase">Status</span>
                <span className="font-mono text-gold text-sm">Graduated</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Trophies + Achievements */}
        <div className="flex flex-col gap-4">
          {/* Trophy Room Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-px" style={{ background: 'rgba(201,168,76,0.5)' }} />
            <span className="hall-label">Trophy Room</span>
            <div className="w-6 h-px" style={{ background: 'rgba(201,168,76,0.5)' }} />
          </div>

          {/* Certifications as trophy plaques */}
          {trophies.map((trophy, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="museum-card p-5 flex items-center justify-between gap-4 spotlight-hover group"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl">{trophy.icon}</span>
                <span className="font-serif text-cream text-sm font-bold group-hover:text-gold transition-colors duration-300">
                  {trophy.name}
                </span>
              </div>
              <span className="museum-pill text-[9px]">{trophy.issuer}</span>
            </motion.div>
          ))}

          {/* Achievement badges */}
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}
                className="museum-card p-4 text-center spotlight-hover"
              >
                <div className="font-serif text-sm font-bold text-cream mb-1">{a.label}</div>
                <p className="font-mono text-[9px] text-cream-dark leading-relaxed">{a.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom quote */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="gold-divider mb-6" />
        <p className="font-serif italic text-cream-dim text-base">
          "Achievements are the results of consistent effort."
        </p>
        <div className="gold-divider mt-6" />
      </motion.div>
    </div>
  </section>
);

export default Education;
