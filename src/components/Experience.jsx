import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const milestones = [
  {
    year: '2021',
    title: 'First Steps',
    desc: 'Started my coding journey with a passion for creating digital experiences.',
    type: 'learning'
  },
  {
    year: '2022',
    title: 'Exploring',
    desc: 'Built my first projects and dived deep into new technologies.',
    type: 'learning'
  },
  {
    year: '2023',
    title: 'Full Stack',
    desc: 'Dove into backend, APIs and databases. Built more real-world projects.',
    type: 'learning'
  },
  {
    year: '2024',
    title: 'Frontend Developer Intern',
    company: 'All India Translink Company',
    location: 'Tamil Nadu, India',
    date: 'April 2024',
    desc: 'Professional internship experience.',
    type: 'work',
    responsibilities: [
      'Built responsive, component-driven UI using React.js',
      'Improved application performance and reduced load times',
      'Integrated REST APIs for real-time frontend data binding',
    ],
    tech: ['React.js', 'REST APIs', 'UI Design', 'Performance']
  },
  {
    year: '2025',
    title: 'Scaling Impact',
    desc: 'Continuing to impact through building and creating a bigger impact.',
    type: 'learning'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 px-6 bg-[#0c0a09] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-50">
             <div className="w-px h-full bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent absolute left-8 md:left-1/2 md:-translate-x-1/2" />
        </div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-20 relative z-20"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="exhibit-number">Hall 04</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-2">
            Career Exhibition <span className="gold-text">Path</span>
          </h2>
          <p className="font-mono text-[11px] tracking-[0.25em] text-cream-dim uppercase">
            A vertical journey through time.
          </p>
          <div className="gold-divider mt-6 max-w-xs mx-auto" />
        </motion.div>

        {/* Vertical Timeline Content */}
        <div className="flex flex-col gap-12 md:gap-24 relative z-10">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={milestone.year} className="relative flex flex-col md:flex-row items-center w-full group perspective-[1000px]">
                 
                 {/* Timeline connection dot */}
                 <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-[#c9a84c] bg-[#0c0a09] z-20 shadow-[0_0_15px_rgba(201,168,76,0.3)] hidden md:block" />

                 {/* Spacer for alternating layout on desktop */}
                 <div className={`hidden md:block w-1/2 ${isEven ? 'order-1' : 'order-3'}`} />
                 
                 {/* Center column for dot on mobile/desktop alignment */}
                 <div className="md:w-0 order-2 relative flex justify-center items-center">
                    <div className="md:hidden absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border border-[#c9a84c] bg-[#0c0a09] z-20 shadow-[0_0_15px_rgba(201,168,76,0.3)]" />
                 </div>

                 {/* Milestone Card */}
                 <motion.div 
                   initial={{ opacity: 0, y: 50, rotateX: 10 }}
                   whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8 }}
                   className={`w-full md:w-[45%] order-3 ${isEven ? 'md:order-3 md:pl-12 pl-20' : 'md:order-1 md:pr-12 md:text-right pl-20 md:pl-0'}`}
                 >
                   <div 
                     className={`museum-card p-8 relative transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 text-left
                                 ${milestone.type === 'work' ? 'border-[#c9a84c]/40' : 'border-[#c9a84c]/10'}`}
                     style={{
                       transformStyle: 'preserve-3d',
                       boxShadow: milestone.type === 'work' ? '0 15px 40px rgba(201,168,76,0.1)' : undefined
                     }}
                   >
                     <div className="corner-ornament tl" />
                     <div className="corner-ornament tr" />
                     <div className="corner-ornament bl" />
                     <div className="corner-ornament br" />

                     <div className="flex flex-col mb-6">
                       <span className="font-mono text-[9px] tracking-[0.2em] text-[#c9a84c] uppercase mb-2">
                         {milestone.type === 'work' ? 'Professional' : 'Milestone'}
                       </span>
                       <h3 className="font-serif text-4xl font-bold text-cream">{milestone.year}</h3>
                     </div>

                     <h4 className="font-serif text-xl font-semibold text-cream mb-2">{milestone.title}</h4>
                     
                     {milestone.company && (
                       <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-gold uppercase tracking-wider">
                         <Briefcase size={12} className="shrink-0" />
                         {milestone.company}
                       </div>
                     )}

                     <p className="font-sans text-sm text-cream-muted leading-relaxed mb-6">
                       {milestone.desc}
                     </p>

                     {/* Work details always visible instead of hover so it's easier to read vertically */}
                     {milestone.type === 'work' && (
                       <div className="border-t border-[#c9a84c]/20 pt-4 mt-2">
                         <div className="flex gap-4 mb-4 text-[#c9a84c] opacity-80">
                           <div className="flex items-center gap-1.5 font-mono text-[9px]"><MapPin size={10} /> {milestone.location}</div>
                           <div className="flex items-center gap-1.5 font-mono text-[9px]"><Calendar size={10} /> {milestone.date}</div>
                         </div>
                         <ul className="space-y-2 mb-4">
                           {milestone.responsibilities.map((resp, i) => (
                             <li key={i} className="flex gap-2 text-xs font-sans text-cream-dim">
                               <span className="text-[#c9a84c] mt-0.5">◆</span> {resp}
                             </li>
                           ))}
                         </ul>
                         <div className="flex flex-wrap gap-1.5">
                           {milestone.tech.map(t => (
                             <span key={t} className="museum-pill text-[8px] px-1.5 py-0.5">{t}</span>
                           ))}
                         </div>
                       </div>
                     )}
                   </div>
                 </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
