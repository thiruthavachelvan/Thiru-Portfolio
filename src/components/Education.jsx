import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, X, ShieldCheck } from 'lucide-react';

const certificates = [
  { id: 1, name: 'Full Stack Development', issuer: 'GUVI', date: '2023', image: '/certificates/GuviCertification - c12UIvClNvNOypPO.png' },
  { id: 2, name: 'Frontend with React', issuer: 'GUVI', date: '2023', image: '/certificates/GuviCertification - 4nNrBl95QOnWsQm9.png' },
  { id: 3, name: 'JavaScript Mastery', issuer: 'GUVI', date: '2022', image: '/certificates/GuviCertification - m4H0P9f9NLrocmlR.png' },
  { id: 4, name: 'Backend with Node.js', issuer: 'GUVI', date: '2023', image: '/certificates/GuviCertification - 00axwIfhww4KaYoA.png' },
  { id: 5, name: 'Web Fundamentals', issuer: 'GUVI', date: '2022', image: '/certificates/GuviCertification - KsaSltq4OfpcIGq2.png' },
  { id: 6, name: 'Python Programming', issuer: 'GUVI', date: '2022', image: '/certificates/GuviCertification - i3EQj1dxtIXrTVhT.png' },
];

const achievements = [
  { label: 'Full Stack Developer', sub: 'Build complex end-to-end applications' },
  { label: 'API Architect', sub: 'Designed scalable RESTful APIs' },
  { label: 'Performance Optimizer', sub: 'Optimized apps for speed and scale' },
];

const Education = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="education" className="py-28 px-6 relative overflow-hidden bg-[#0c0a09]">
      <div className="blob w-64 h-64 bottom-0 right-0" style={{ background: 'rgba(201,168,76,0.06)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hall Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="exhibit-number">Hall 05</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-2">
            Credentials <span className="gold-text">Archive</span>
          </h2>
          <p className="font-mono text-[11px] tracking-[0.25em] text-cream-dim uppercase">Academic foundation and verified skills.</p>
          <div className="gold-divider mt-5 max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Academic Degree (Takes up 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="museum-card p-8 relative spotlight-hover h-full"
            >
              <div className="corner-ornament tl" />
              <div className="corner-ornament tr" />
              <div className="corner-ornament bl" />
              <div className="corner-ornament br" />

              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: 'linear-gradient(to right, transparent, #c9a84c, transparent)' }} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3" style={{ background: 'linear-gradient(135deg, #c9a84c, #8b6914)', boxShadow: '0 4px 15px rgba(201,168,76,0.3)' }}>
                    <GraduationCap size={24} className="text-[#0c0a09]" />
                  </div>
                  <span className="font-mono tracking-[0.2em] text-[#c9a84c] text-xs uppercase">Primary Education</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-cream mb-3 leading-snug">
                  B.Tech Computer Science & Engineering
                </h3>
                <p className="font-sans text-[#c9a84c] opacity-80 font-medium mb-10">
                  Vels Institute of Science, Technology & Advanced Studies
                </p>

                <div className="space-y-6" style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '2rem' }}>
                  <div className="flex justify-between items-center group">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-cream-dark uppercase group-hover:text-gold transition-colors">CGPA</span>
                    <span className="font-serif text-3xl font-black text-cream group-hover:text-[#c9a84c] transition-colors drop-shadow-[0_0_10px_rgba(201,168,76,0.3)]">7.36</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-cream-dark uppercase">Duration</span>
                    <span className="font-mono text-[#c9a84c] opacity-90 font-bold">2021 — 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-cream-dark uppercase">Status</span>
                    <span className="museum-pill text-[10px] px-3 py-1">Graduated</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Certifications Grid (Takes up 7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ background: 'rgba(201,168,76,0.5)' }} />
              <span className="font-mono tracking-[0.2em] text-cream-dim text-xs uppercase">Verified Certifications</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(201,168,76,0.5), transparent)' }} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedCert(cert)}
                  className="museum-card p-5 cursor-pointer spotlight-hover group h-32 flex flex-col justify-between hover:border-[#c9a84c]/50 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start">
                    <Award size={18} className="text-[#c9a84c] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="font-mono text-[9px] text-cream-dark">{cert.date}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-cream group-hover:text-gold transition-colors line-clamp-2 mb-1">
                      {cert.name}
                    </h4>
                    <span className="font-mono text-[8px] tracking-wider text-[#c9a84c] uppercase">{cert.issuer}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}
                  className="museum-card p-4 text-center spotlight-hover opacity-70 hover:opacity-100 transition-opacity"
                >
                  <div className="font-serif text-sm font-bold text-[#c9a84c] mb-1">{a.label}</div>
                  <p className="font-mono text-[9px] text-cream-dark leading-relaxed">{a.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glass Unfolding Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-[#0c0a09]/80"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotateX: 30, opacity: 0 }}
              animate={{ scale: 1, rotateX: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotateX: -30, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative max-w-4xl w-full museum-card overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-50 p-2 text-cream-dim hover:text-gold transition-colors bg-[#0c0a09]/50 backdrop-blur-sm border border-[#c9a84c]/20 rounded-full"
              >
                <X size={20} />
              </button>

              {/* Decorative corners */}
              <div className="corner-ornament tl" />
              <div className="corner-ornament tr" />
              <div className="corner-ornament bl" />
              <div className="corner-ornament br" />

              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  
                  {/* Certificate Info */}
                  <div className="md:w-1/3 flex flex-col gap-6 relative z-10">
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase mb-2 block">Certificate of Completion</span>
                      <h3 className="font-serif text-3xl font-bold text-cream leading-tight">{selectedCert.name}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="block font-mono text-[9px] text-cream-dim uppercase tracking-wider mb-1">Issuer</span>
                        <span className="font-sans text-cream">{selectedCert.issuer}</span>
                      </div>
                      <div>
                        <span className="block font-mono text-[9px] text-cream-dim uppercase tracking-wider mb-1">Date Earned</span>
                        <span className="font-sans text-cream">{selectedCert.date}</span>
                      </div>
                    </div>

                    {/* Animated Golden Stamp */}
                    <motion.div 
                      initial={{ scale: 2, opacity: 0, rotate: -45 }}
                      animate={{ scale: 1, opacity: 1, rotate: -15 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
                      className="mt-4 flex items-center gap-2 text-[#c9a84c] border border-[#c9a84c] px-4 py-2 w-max shadow-[0_0_20px_rgba(201,168,76,0.3)] bg-[#c9a84c]/5"
                    >
                      <ShieldCheck size={18} />
                      <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Verified Authentic</span>
                    </motion.div>
                  </div>

                  {/* Certificate Image */}
                  <div className="md:w-2/3 relative group perspective-[1000px]">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative z-10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                      <img 
                        src={selectedCert.image} 
                        alt={selectedCert.name}
                        className="w-full h-auto object-contain border border-[#c9a84c]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu transition-transform duration-700 group-hover:rotate-y-2 group-hover:rotate-x-2"
                      />
                    </motion.div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
