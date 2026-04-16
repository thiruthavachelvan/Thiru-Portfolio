import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/5 mt-10 relative z-10 bg-dark-bg">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Thiruthavachelvan K. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
