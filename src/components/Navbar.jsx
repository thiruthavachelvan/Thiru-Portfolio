import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const hallLinks = [
  { label: 'The Creator', hall: '01', to: 'about' },
  { label: 'Tech Collection', hall: '02', to: 'skills' },
  { label: 'Product Gallery', hall: '03', to: 'projects' },
  { label: 'Journey Timeline', hall: '04', to: 'experience' },
  { label: 'Achievements', hall: '05', to: 'education' },
  { label: 'Connect', hall: '06', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop — Top navigation bar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 border-b' 
          : 'py-5 bg-transparent'
      }`}
        style={scrolled ? {
          background: 'rgba(12, 10, 9, 0.95)',
          backdropFilter: 'blur(20px)',
          borderColor: 'rgba(201,168,76,0.15)',
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="home" smooth duration={600} className="cursor-pointer">
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none gold-text">
                  THIRU
                </span>
                <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-cream-dim mt-0.5">
                  Museum
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="hidden md:flex gap-8 items-center"
          >
            {hallLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                smooth duration={600} offset={-80}
                className="cursor-pointer group flex flex-col items-center relative"
              >
                <span className="font-mono text-[9px] tracking-[0.2em] text-gold-muted group-hover:text-gold transition-colors duration-300 uppercase">
                  Hall {link.hall}
                </span>
                <span className="font-sans text-cream-dim group-hover:text-cream text-xs font-medium transition-colors duration-300 mt-0.5">
                  {link.label}
                </span>
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-400 rounded-full" />
              </Link>
            ))}

            <a
              href="/Thiru_Resume_IT.pdf"
              download
              className="museum-btn-primary text-xs py-2.5 px-5 flex items-center gap-2"
              style={{ letterSpacing: '0.15em' }}
            >
              <Download size={13} />
              Resume
            </a>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 transition-colors duration-200"
            style={{ color: '#c9a84c' }}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 px-6 py-6 flex flex-col gap-1"
            style={{
              background: 'rgba(12, 10, 9, 0.97)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(201,168,76,0.15)',
            }}
          >
            {/* Museum Directory Header */}
            <div className="flex items-center gap-3 mb-4 pb-3" style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
              <span className="font-mono text-[10px] tracking-[0.3em] text-gold-muted uppercase">Museum Directory</span>
            </div>

            {hallLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                smooth duration={600} offset={-80}
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer flex items-center gap-4 py-3 group"
                style={{ borderBottom: '1px solid rgba(201,168,76,0.06)' }}
              >
                <span className="font-mono text-[10px] text-gold-muted group-hover:text-gold transition-colors w-10">
                  {link.hall}
                </span>
                <span className="font-serif text-cream-muted group-hover:text-cream text-base transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}

            <a
              href="/Thiru_Resume_IT.pdf"
              download
              className="mt-4 museum-btn-primary text-center text-xs flex items-center justify-center gap-2"
              style={{ letterSpacing: '0.15em' }}
            >
              <Download size={13} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
