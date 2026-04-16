import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { title: "Languages", icon: <Code className="text-primary-blue w-6 h-6" />, skills: ["JavaScript (ES6+)", "Java", "HTML5", "CSS3"] },
    { title: "Frameworks & Libraries", icon: <Server className="text-primary-neon w-6 h-6" />, skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS"] },
    { title: "Databases", icon: <Database className="text-blue-400 w-6 h-6" />, skills: ["MongoDB", "MySQL"] },
    { title: "Tools", icon: <Wrench className="text-purple-400 w-6 h-6" />, skills: ["Git & GitHub", "Postman", "REST APIs", "Debugging & Testing"] }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-dark-bg/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-primary-blue font-mono text-xl">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
          <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary-blue/50 transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
