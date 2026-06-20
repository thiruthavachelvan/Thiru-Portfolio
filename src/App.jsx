import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import HallAnnouncer from './components/HallAnnouncer';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  // 1. Initialize Lenis Smooth Scroll on Exhibition Entrance
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  // 2. Active Section Observer (IntersectionObserver for Hall Announcements)
  useEffect(() => {
    if (isLoading) return;

    const sectionIds = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -45% 0px', // Narrow center viewport detection
      threshold: 0.05,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  return (
    <>
      {/* Cinematic Entrance Loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onEnter={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Digital Exhibition space */}
      {!isLoading && (
        <div className="bg-museum-dark min-h-screen text-cream font-sans overflow-x-hidden relative">
          {/* Spotlight cursor */}
          <CustomCursor />

          {/* HUD Hall announcement overlay */}
          <HallAnnouncer activeSection={activeSection} />

          {/* Core exhibition layout */}
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Project />
            <Experience />
            <Education />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
