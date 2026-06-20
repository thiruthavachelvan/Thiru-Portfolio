import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, ArrowRight, Download, CheckCircle2, PenTool } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contacts = [
  { icon: <Mail size={16} />, label: 'Email', value: 'thirukumar3210@gmail.com', href: 'mailto:thirukumar3210@gmail.com' },
  { icon: <Phone size={16} />, label: 'Phone', value: '+91 8056106645', href: 'tel:+918056106645' },
  { icon: <FaGithub size={16} />, label: 'GitHub', value: 'thiruthavachelvan', href: 'https://github.com/thiruthavachelvan' },
  { icon: <FaLinkedin size={16} />, label: 'LinkedIn', value: 'Thiruthavachelvan K', href: 'https://www.linkedin.com/in/thiruthavachelvan-k-06382738a/' },
];

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, typing, sending, success
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formState === 'idle') setFormState('typing');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormState('sending');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        setFormState('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden bg-[#0c0a09]">
      <div className="blob w-72 h-72 bottom-[-50px] left-0" style={{ background: 'rgba(201,168,76,0.06)' }} />
      <div className="blob w-56 h-56 top-0 right-0" style={{ background: 'rgba(201,168,76,0.04)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hall Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="exhibit-number">Hall 06</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-3">
            Start a <span className="gold-text">Collaboration</span>
          </h2>
          <p className="font-mono text-[11px] tracking-[0.25em] text-cream-dim uppercase max-w-lg mx-auto">
            Leave a message in the curator's ledger.
          </p>
          <div className="gold-divider mt-6 max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-cream mb-6">Curator Contact</h3>
              <p className="font-sans text-cream-dim leading-relaxed mb-10">
                Interested in bringing a new exhibition to life? Or perhaps you have a project that requires a meticulous engineer's touch. Reach out directly through the archives below.
              </p>
              
              <div className="flex flex-col gap-4 mb-10">
                {contacts.map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-[#c9a84c]/20 rounded-full text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-[#0c0a09] transition-all duration-300">
                      {c.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[9px] tracking-[0.2em] text-cream-dark uppercase group-hover:text-[#c9a84c] transition-colors">{c.label}</p>
                      <p className="font-sans text-sm text-cream font-medium">{c.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <a href="/Thiru_Resume_IT.pdf" download>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full museum-btn-outline flex items-center justify-center gap-3 text-sm py-4"
              >
                <Download size={16} />
                Download Archive Dossier (Resume)
              </motion.button>
            </a>
          </div>

          {/* Right Column: Interactive Ledger Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="museum-card p-8 md:p-12 relative h-full flex flex-col justify-center"
            >
              <div className="corner-ornament tl" />
              <div className="corner-ornament tr" />
              <div className="corner-ornament bl" />
              <div className="corner-ornament br" />

              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(201,168,76,0.1)_0%,transparent_70%)] pointer-events-none" />

              <div className="flex items-center gap-3 mb-8">
                <PenTool size={18} className={`text-[#c9a84c] transition-all duration-500 ${formState === 'typing' ? 'animate-bounce' : ''}`} />
                <span className="font-mono tracking-[0.2em] text-[#c9a84c] text-xs uppercase">The Ledger</span>
              </div>

              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center h-[300px] text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 rounded-full border border-[#c9a84c] flex items-center justify-center mb-6 bg-[#c9a84c]/5"
                    >
                      <CheckCircle2 size={40} className="text-[#c9a84c]" />
                    </motion.div>
                    <h3 className="font-serif text-2xl font-bold text-cream mb-2">Message Inscribed</h3>
                    <p className="font-sans text-cream-dim">Your letter has been securely archived. The curator will review it shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="space-y-8 relative z-10"
                  >
                    <div className="relative group">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-[#c9a84c]/30 py-3 text-cream font-serif text-lg focus:outline-none focus:border-[#c9a84c] transition-colors peer"
                        placeholder=" "
                      />
                      <label className="absolute left-0 top-3 font-mono text-xs uppercase tracking-widest text-cream-dark transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#c9a84c] peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-[#c9a84c]">
                        Your Name
                      </label>
                    </div>

                    <div className="relative group">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-[#c9a84c]/30 py-3 text-cream font-serif text-lg focus:outline-none focus:border-[#c9a84c] transition-colors peer"
                        placeholder=" "
                      />
                      <label className="absolute left-0 top-3 font-mono text-xs uppercase tracking-widest text-cream-dark transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#c9a84c] peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-[#c9a84c]">
                        Your Email
                      </label>
                    </div>

                    <div className="relative group">
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full bg-transparent border-b border-[#c9a84c]/30 py-3 text-[#c9a84c] font-serif italic text-lg focus:outline-none focus:border-[#c9a84c] transition-colors peer resize-none"
                        placeholder=" "
                        style={{ lineHeight: '1.8' }}
                      />
                      <label className="absolute left-0 top-3 font-mono text-xs uppercase tracking-widest text-cream-dark transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#c9a84c] peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-[#c9a84c]">
                        Your Message
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={formState === 'sending'}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full museum-btn-primary flex items-center justify-center gap-3 text-sm py-4 relative overflow-hidden"
                    >
                      {formState === 'sending' ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-[#0c0a09] border-t-transparent rounded-full" />
                      ) : (
                        <>
                          <Send size={16} />
                          Seal and Send
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
