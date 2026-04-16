import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contacts = [
  { icon: <Mail size={22} />, label: 'Email', value: 'thirukumar3210@gmail.com', href: 'mailto:thirukumar3210@gmail.com', gradient: 'from-brand-orange to-brand-pink' },
  { icon: <Phone size={22} />, label: 'Phone', value: '+91 8056106645', href: 'tel:+918056106645', gradient: 'from-brand-pink to-brand-purple' },
  { icon: <FaGithub size={22} />, label: 'GitHub', value: 'thiruthavachelvan', href: 'https://github.com/thiruthavachelvan', gradient: 'from-brand-purple to-brand-blue' },
  { icon: <FaLinkedin size={22} />, label: 'LinkedIn', value: 'Thiruthavachelvan K', href: 'https://www.linkedin.com/in/thiruthavachelvan-k-06382738a/', gradient: 'from-brand-blue to-brand-cyan' },
];

const Contact = () => (
  <section id="contact" className="py-24 px-6 relative overflow-hidden">
    <div className="blob w-96 h-96 bg-brand-pink bottom-[-100px] left-0 opacity-15"></div>
    <div className="blob w-72 h-72 bg-brand-orange top-0 right-0 opacity-10"></div>

    <div className="max-w-5xl mx-auto text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-14"
      >
        <span className="text-brand-pink font-mono text-base font-bold mb-2 block">07. What's Next?</span>
        <h2 className="text-4xl md:text-6xl font-black mb-5">
          Get In <span className="text-gradient-primary">Touch</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-loose">
          Open to new opportunities and collaborations. Whether you have a project idea, job offer, or just want to say hi — I'd love to connect!
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass-card p-8 md:p-12 max-w-3xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
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
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/8 transition-all duration-300 text-left"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                <span className="text-white">{c.icon}</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">{c.label}</p>
                <p className="font-semibold text-white text-sm break-all">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <a href="mailto:thirukumar3210@gmail.com">
          <motion.button 
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-2xl font-black text-lg bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple text-white hover:shadow-2xl hover:shadow-brand-pink/30 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Send size={20} />
            Say Hello 👋
          </motion.button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
