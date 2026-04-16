import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench } from 'lucide-react';

const categories = [
  {
    title: 'Languages',
    icon: <Code size={22} />,
    gradient: 'from-brand-orange to-brand-pink',
    glow: 'group-hover:shadow-brand-orange/25',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 88 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Server size={22} />,
    gradient: 'from-brand-pink to-brand-purple',
    glow: 'group-hover:shadow-brand-pink/25',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Databases',
    icon: <Database size={22} />,
    gradient: 'from-brand-purple to-brand-blue',
    glow: 'group-hover:shadow-brand-purple/25',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    title: 'Tools & Practices',
    icon: <Wrench size={22} />,
    gradient: 'from-brand-blue to-brand-cyan',
    glow: 'group-hover:shadow-brand-blue/25',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'REST APIs', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'Debugging', level: 78 },
    ],
  },
];

const SkillBar = ({ name, level, gradient, delay }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex justify-between text-sm mb-1.5">
      <span className="text-gray-300 font-medium">{name}</span>
      <span className="text-gray-500 font-mono">{level}%</span>
    </div>
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: 'easeOut' }}
        className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
      />
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-24 px-6 relative">
    <div className="blob w-80 h-80 bg-brand-blue bottom-0 left-0 opacity-15"></div>
    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex items-center gap-4 mb-14"
      >
        <span className="text-brand-pink font-mono font-bold text-lg">02.</span>
        <h2 className="text-3xl md:text-5xl font-black">Tech <span className="text-gradient-cool">Stack</span></h2>
        <div className="h-px bg-gradient-to-r from-brand-pink/50 to-transparent flex-grow"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-7 group hover:scale-[1.02] hover:shadow-2xl ${cat.glow} transition-all duration-400 hover:border-white/20`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.gradient} shadow-lg`}>
                <span className="text-white">{cat.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{cat.title}</h3>
            </div>
            {cat.skills.map((s, j) => (
              <SkillBar key={s.name} {...s} gradient={cat.gradient} delay={0.2 + j * 0.08} />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Scrolling marquee strip */}
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mt-12 overflow-hidden border border-white/5 rounded-2xl py-4 relative"
      >
        <div className="flex w-max animate-marquee gap-8 px-4">
          {['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Java', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'REST APIs', 'MySQL',
            'React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Java', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'REST APIs', 'MySQL'].map((t, i) => (
            <span key={i} className="whitespace-nowrap text-gray-500 font-mono text-sm hover:text-white transition-colors">{t}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
