import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const targetRef = useRef(null);
  
  // Map vertical scroll progress to horizontal movement
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal movement distance based on the number of cards
  // We want to scroll from 0 to a negative percentage that moves all cards through the viewport.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]); 

  return (
    <section id="experience" ref={targetRef} className="relative h-[300vh] bg-[#0c0a09]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
             <div className="w-[80vw] h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent absolute top-1/2 -translate-y-1/2" />
        </div>

        {/* Section Title Fixed */}
        <div className="absolute top-20 left-6 md:left-20 z-20 pointer-events-none">
          <div className="flex items-center gap-3 mb-3">
            <span className="exhibit-number">Hall 04</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-2">
            Career Exhibition <span className="gold-text">Path</span>
          </h2>
          <p className="font-mono text-[10px] tracking-[0.3em] text-cream-dim uppercase">
            Scroll to traverse the timeline.
          </p>
        </div>

        {/* Scrolling Content */}
        <motion.div style={{ x }} className="flex gap-12 px-[10vw] pt-20 items-center w-max z-10 relative">
          
          {/* Start Indicator */}
          <div className="flex flex-col items-center gap-4 min-w-[100px]">
             <span className="font-mono text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase rotate-90 mb-8">Start</span>
             <div className="w-3 h-3 rounded-full border border-[#c9a84c]/50 bg-[#0c0a09] relative z-10" />
          </div>

          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="relative min-w-[320px] md:min-w-[450px] group perspective-[1000px]">
               
               {/* Timeline connection dot */}
               <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-[#c9a84c] bg-[#0c0a09] z-20 shadow-[0_0_15px_rgba(201,168,76,0.3)]" />

               {/* Milestone Card - Hover to reveal details */}
               <motion.div 
                 initial={{ opacity: 0, y: 50, rotateX: 10 }}
                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, delay: index * 0.1 }}
                 className={`museum-card p-8 relative transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2
                             ${milestone.type === 'work' ? 'border-[#c9a84c]/40' : 'border-[#c9a84c]/10'}
                             ${index % 2 === 0 ? 'mb-[250px]' : 'mt-[250px]'}`}
                 style={{
                   transformStyle: 'preserve-3d',
                   boxShadow: milestone.type === 'work' ? '0 15px 40px rgba(201,168,76,0.1)' : undefined
                 }}
               >
                 <div className="corner-ornament tl" />
                 <div className="corner-ornament tr" />
                 <div className="corner-ornament bl" />
                 <div className="corner-ornament br" />

                 <div className="flex items-center justify-between mb-6">
                   <h3 className="font-serif text-4xl font-bold text-cream">{milestone.year}</h3>
                   <span className="font-mono text-[9px] tracking-[0.2em] text-[#c9a84c] uppercase px-2 py-1 border border-[#c9a84c]/20 bg-[#c9a84c]/5">
                     {milestone.type === 'work' ? 'Professional' : 'Milestone'}
                   </span>
                 </div>

                 <h4 className="font-serif text-xl font-semibold text-cream mb-2">{milestone.title}</h4>
                 
                 {milestone.company && (
                   <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-gold uppercase tracking-wider">
                     <Briefcase size={12} />
                     {milestone.company}
                   </div>
                 )}

                 <p className="font-sans text-sm text-cream-muted leading-relaxed mb-6">
                   {milestone.desc}
                 </p>

                 {/* Expandable glass panel for work details */}
                 {milestone.type === 'work' && (
                   <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100 border-t border-[#c9a84c]/20 pt-4 mt-2">
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
               </motion.div>
            </div>
          ))}

          {/* End Indicator */}
          <div className="flex flex-col items-center gap-4 min-w-[100px]">
             <div className="w-3 h-3 rounded-full border border-[#c9a84c]/50 bg-[#0c0a09] relative z-10 shadow-[0_0_10px_#c9a84c]" />
             <span className="font-mono text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase -rotate-90 mt-8">Present</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
