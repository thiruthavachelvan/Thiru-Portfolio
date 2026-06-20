import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HallAnnouncer = ({ activeSection }) => {
  const [currentHall, setCurrentHall] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const sectionHalls = {
    about: { number: '01', title: 'THE CREATOR ARCHIVE' },
    skills: { number: '02', title: 'TECHNOLOGY COLLECTION' },
    projects: { number: '03', title: 'ENGINEERING EXHIBITION' },
    experience: { number: '04', title: 'CAREER EXHIBITION PATH' },
    education: { number: '05', title: 'CREDENTIALS ARCHIVE' },
    contact: { number: '06', title: 'COLLABORATION HUB' },
  };

  useEffect(() => {
    if (activeSection && sectionHalls[activeSection]) {
      setCurrentHall(sectionHalls[activeSection]);
      setIsVisible(true);
      
      // Auto-fade after 1.2 seconds
      const t = setTimeout(() => {
        setIsVisible(false);
      }, 1500);

      return () => clearTimeout(t);
    }
  }, [activeSection]);

  return (
    <AnimatePresence>
      {isVisible && currentHall && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center bg-black/40 backdrop-blur-[3px] select-none"
        >
          {/* Framed HUD display box */}
          <div
            className="p-8 md:p-12 text-center max-w-lg border border-[#c9a84c]/20 bg-[#0c0a09]/95 shadow-[0_0_60px_rgba(0,0,0,0.8)] relative"
            style={{
              borderImage: 'linear-gradient(to right, rgba(201,168,76,0.1), rgba(201,168,76,0.6), rgba(201,168,76,0.1)) 1',
            }}
          >
            {/* HUD Bracket corners */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#c9a84c]/40" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#c9a84c]/40" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#c9a84c]/40" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#c9a84c]/40" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col items-center"
            >
              <span className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase mb-2">
                ENTERING HALL {currentHall.number}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-black text-cream tracking-[0.15em] uppercase">
                {currentHall.title}
              </h2>
              <div className="w-10 h-[1px] bg-[#c9a84c]/30 mt-4 mb-2 animate-pulse" />
              <span className="font-mono text-[8px] tracking-[0.2em] text-cream-dark uppercase">
                EXHIBITION MODULE LOADED
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HallAnnouncer;
