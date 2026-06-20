import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function App() {
  return (
    <div className="bg-museum-dark min-h-screen text-cream font-sans overflow-x-hidden relative">
      <Navbar />
      <main>
        <Hero />
        {[About, Skills, Project, Experience, Education, Contact].map((Section, i) => (
          <motion.div
            key={i}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <Section />
          </motion.div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
