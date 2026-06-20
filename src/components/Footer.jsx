import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-12 border-t relative z-10 bg-museum-darker" style={{ borderColor: 'rgba(201, 168, 76, 0.12)' }}>
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col items-center md:items-start gap-1">
        <p className="text-cream-muted text-xs tracking-wider">
          © {new Date().getFullYear()} <span className="gold-text font-bold">Thiruthavachelvan K</span>. All rights reserved.
        </p>
        <p className="font-mono text-[9px] text-cream-dim uppercase tracking-[0.2em] mt-0.5">
          Curator & Architect • Digital Exhibition Space
        </p>
      </div>

      <div className="flex flex-col items-center md:items-end gap-3">
        <div className="flex gap-5">
          <a href="https://github.com/thiruthavachelvan" target="_blank" rel="noopener noreferrer"
             className="text-cream-dim hover:text-gold transition-colors duration-300"
             aria-label="GitHub Repository">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/thiruthavachelvan-k-06382738a/" target="_blank" rel="noopener noreferrer"
             className="text-cream-dim hover:text-gold transition-colors duration-300"
             aria-label="LinkedIn Profile">
            <FaLinkedin size={20} />
          </a>
        </div>
        <span className="font-serif italic text-xs text-cream-dark">
          "Exit through the gift shop."
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
