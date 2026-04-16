import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-10 border-t border-white/5 relative z-10 bg-dark-bg">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} <span className="text-gradient-primary font-bold">Thiruthavachelvan K</span>. Built with React & Tailwind CSS.
      </p>
      <div className="flex gap-5">
        <a href="https://github.com/thiruthavachelvan" target="_blank" rel="noopener noreferrer"
           className="text-gray-500 hover:text-white transition-colors duration-200">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/thiruthavachelvan-k-06382738a/" target="_blank" rel="noopener noreferrer"
           className="text-gray-500 hover:text-brand-blue transition-colors duration-200">
          <FaLinkedin size={22} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
