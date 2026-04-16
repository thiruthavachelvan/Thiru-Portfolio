import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Project', 'Experience', 'Education', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white cursor-pointer hover:text-primary-neon transition-colors duration-200">
          <Link to="home" smooth={true} duration={500}>Thiru<span className="text-primary-blue">.</span></Link>
        </h1>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link} to={link.toLowerCase()} smooth={true} duration={500} offset={-80} className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-200 font-medium tracking-wide">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
