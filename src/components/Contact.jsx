import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-dark-bg/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary-neon/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary-blue font-mono text-lg mb-2 block">07. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left">
            <a href="mailto:thiruthavachelvan@gmail.com" className="flex items-center gap-4 group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary-blue/20 flex items-center justify-center group-hover:bg-primary-blue/30 transition-colors">
                <Mail className="text-primary-blue group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                <p className="font-medium text-white break-all text-sm">thiruthavachelvan@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-default">
              <div className="w-12 h-12 rounded-full bg-primary-neon/20 flex items-center justify-center group-hover:bg-primary-neon/30 transition-colors">
                <Phone className="text-primary-neon group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                <p className="font-medium text-white text-sm">+91 Enter Your Phone</p>
              </div>
            </div>

            <a href="https://github.com/thiruthavachelvan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <FaGithub size={24} className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 mb-1">GitHub</h4>
                <p className="font-medium text-white text-sm">thiruthavachelvan</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/thiruthavachelvan-k-06382738a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                <FaLinkedin size={24} className="text-blue-500 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 mb-1">LinkedIn</h4>
                <p className="font-medium text-white text-sm">Thiruthavachelvan K</p>
              </div>
            </a>
          </div>

          <a href="mailto:thiruthavachelvan@gmail.com">
            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-primary-neon hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 transform hover:-translate-y-1">
              <Send size={18} />
              Say Hello
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
