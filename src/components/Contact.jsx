import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contacts = [
  { icon: <Mail size={20} />, label: 'Email', value: 'thirukumar3210@gmail.com', href: 'mailto:thirukumar3210@gmail.com' },
  { icon: <Phone size={20} />, label: 'Phone', value: '+91 8056106645', href: 'tel:+918056106645' },
  { icon: <FaGithub size={20} />, label: 'GitHub', value: 'thiruthavachelvan', href: 'https://github.com/thiruthavachelvan' },
  { icon: <FaLinkedin size={20} />, label: 'LinkedIn', value: 'Thiruthavachelvan K', href: 'https://www.linkedin.com/in/thiruthavachelvan-k-06382738a/' },
];

const Contact = () => (
  <section id="contact" className="py-28 px-6 relative overflow-hidden">
    <div className="blob w-72 h-72 bottom-[-50px] left-0" style={{ background: 'rgba(201,168,76,0.06)' }} />
    <div className="blob w-56 h-56 top-0 right-0" style={{ background: 'rgba(139,26,26,0.08)' }} />

    <div className="max-w-4xl mx-auto relative z-10">
      {/* Hall Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="exhibit-number">Hall 06</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-3">
          Let's Create Something <span className="gold-text">Amazing</span>
        </h2>
        <p className="font-sans text-cream-dim text-base max-w-lg mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something meaningful.
        </p>
        <div className="gold-divider mt-6 max-w-xs mx-auto" />
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="museum-card p-8 md:p-12 relative spotlight-hover"
      >
        <div className="corner-ornament tl" />
        <div className="corner-ornament tr" />
        <div className="corner-ornament bl" />
        <div className="corner-ornament br" />

        <div className="relative z-10">
          {/* Contact links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 group transition-all duration-300"
                style={{
                  background: 'rgba(201,168,76,0.03)',
                  border: '1px solid rgba(201,168,76,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                  e.currentTarget.style.background = 'rgba(201,168,76,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)';
                  e.currentTarget.style.background = 'rgba(201,168,76,0.03)';
                }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
                    border: '1px solid rgba(201,168,76,0.2)',
                    color: '#c9a84c',
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] text-cream-dark uppercase mb-0.5">{c.label}</p>
                  <p className="font-sans text-cream text-sm font-medium break-all group-hover:text-gold transition-colors duration-300">
                    {c.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:thirukumar3210@gmail.com" className="flex-1">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full museum-btn-primary flex items-center justify-center gap-3 text-sm"
                id="contact-cta-btn"
              >
                <Send size={16} />
                Start a Conversation
                <ArrowRight size={14} />
              </motion.button>
            </a>

            <a href="/Thiru_Resume_IT.pdf" download className="flex-1">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full museum-btn-outline flex items-center justify-center gap-3 text-sm"
                id="contact-resume-btn"
              >
                <Download size={16} />
                Download Resume
              </motion.button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
