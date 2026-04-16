import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['Home', 'About', 'Skills', 'Project', 'Experience', 'Education', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-card py-3 rounded-none border-x-0 border-t-0' : 'py-5 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="home" smooth duration={500} className="cursor-pointer">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-gradient-primary">T</span>
                <span className="text-white">hiru</span>
                <span className="text-brand-orange">.</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="hidden md:flex gap-8 items-center"
          >
            {navLinks.map(link => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth duration={500} offset={-80}
                className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-200 font-medium relative group text-sm tracking-wide"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-purple group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
            <a
              href="/Thiru_Resume_IT.pdf"
              download
              className="px-5 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-brand-orange to-brand-pink text-white hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Resume ↓
            </a>
          </motion.div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(v => !v)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 glass-card rounded-none border-x-0 border-t-0 px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map(link => (
              <Link key={link} to={link.toLowerCase()} smooth duration={500} offset={-80}
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer text-gray-300 hover:text-white font-medium text-lg py-2 border-b border-white/5"
              >
                {link}
              </Link>
            ))}
            <a href="/Thiru_Resume_IT.pdf" download className="mt-2 text-center px-5 py-3 font-bold rounded-full bg-gradient-to-r from-brand-orange to-brand-pink text-white">
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
