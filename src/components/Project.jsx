import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, CheckCircle, Users, Activity, Hotel } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const workflows = [
  {
    title: 'Admin Module',
    icon: <Activity size={18} />,
    color: 'from-brand-orange to-brand-pink',
    credential: 'admin@luxestay.com / Admin@123',
    items: ['Create & manage hubs & rooms', 'Monitor branch occupancy', 'Manage staff accounts', 'View analytics & reports'],
  },
  {
    title: 'Resident Module',
    icon: <Users size={18} />,
    color: 'from-brand-pink to-brand-purple',
    credential: 'Register via sign-up page',
    items: ['Browse hubs & room listings', 'Bookings & payment tracking', 'Order food & spa services', 'Submit reviews after checkout'],
  },
  {
    title: 'Staff Module',
    icon: <CheckCircle size={18} />,
    color: 'from-brand-purple to-brand-blue',
    credential: 'cook.chennai@luxestays.com (12345)',
    items: ['Claim assigned service tasks', 'Update operational workflow', 'Data tracking & status checks'],
  },
];

const Project = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="project" className="py-24 px-6 relative">
      <div className="blob w-96 h-96 bg-brand-purple left-[-100px] top-0 opacity-15"></div>
      <div className="blob w-72 h-72 bg-brand-orange right-0 bottom-0 opacity-15"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-brand-purple font-mono font-bold text-lg">03.</span>
          <h2 className="text-3xl md:text-5xl font-black">Featured <span className="text-gradient-primary">Project</span></h2>
          <div className="h-px bg-gradient-to-r from-brand-purple/50 to-transparent flex-grow"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card overflow-hidden group"
        >
          {/* Banner gradient strip */}
          <div className="h-2 w-full bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple"></div>

          <div className="p-8 md:p-12">
            {/* Top: Visual + Info */}
            <div className="flex flex-col lg:flex-row gap-10 items-start mb-10">
              {/* Project Visual */}
              <motion.div
                animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}
                className="w-full lg:w-2/5 aspect-video bg-dark-bg/60 rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/15 via-brand-pink/10 to-brand-purple/15"></div>
                <Hotel className="w-16 h-16 text-brand-pink mb-3 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]" />
                <span className="text-white font-black text-2xl tracking-widest">LUXESTAY</span>
                <span className="text-gray-400 text-xs mt-1">Luxury Hotel Booking System</span>
              </motion.div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2">LuxeStay</h3>
                <p className="text-brand-pink font-semibold mb-5 text-lg">Luxury Hotel Booking & Property Management</p>
                <p className="text-gray-300 leading-relaxed mb-7 text-sm md:text-base">
                  A full-stack MERN application delivering seamless hospitality experiences across global hubs (Mumbai, Chennai, Delhi, Bangalore, Coimbatore, New York). Includes room booking, role-based dashboards, payment tracking, spa reservations, culinary ordering, and real-time analytics.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'].map((t, i) => (
                    <span key={i} className={`pill text-xs font-bold ${
                      ['text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
                       'text-brand-green border-brand-green/30 bg-brand-green/10',
                       'text-brand-orange border-brand-orange/30 bg-brand-orange/10',
                       'text-brand-pink border-brand-pink/30 bg-brand-pink/10',
                       'text-brand-blue border-brand-blue/30 bg-brand-blue/10'][i]
                    }`}>{t}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-5">
                  <a href="https://github.com/thiruthavachelvan" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-white hover:text-brand-pink transition-colors font-semibold group">
                    <FaGithub size={22} />
                    <span className="group-hover:underline">GitHub</span>
                  </a>
                  <a href="https://luxestay-hotel-booking.netlify.app/" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-white hover:text-brand-cyan transition-colors font-semibold group">
                    <ExternalLink size={20} />
                    <span className="group-hover:underline">Live Frontend</span>
                  </a>
                  <a href="https://luxestay-backend-dmms.onrender.com/" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                    <ExternalLink size={16} />
                    <span>Backend API</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Toggle */}
            <div className="border-t border-white/5 pt-6 flex justify-center">
              <button onClick={() => setExpanded(v => !v)}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-brand-orange to-brand-pink bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                {expanded ? 'Hide Details' : 'View Testing Workflows'}
                <ChevronDown size={18} className={`text-brand-pink transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Expandable workflows */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                    {workflows.map((w, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${w.color}`}>
                            <span className="text-white">{w.icon}</span>
                          </div>
                          <h4 className="font-bold text-white">{w.title}</h4>
                        </div>
                        <p className="text-xs font-mono text-gray-500 bg-dark-bg/60 p-2 rounded mb-4 break-all">{w.credential}</p>
                        <ul className="space-y-2">
                          {w.items.map((item, j) => (
                            <li key={j} className="flex gap-2 text-sm text-gray-300">
                              <CheckCircle size={13} className="mt-0.5 text-brand-green shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-center text-xs text-gray-600 italic">
                    Prototype for academic demonstration. Some assets are placeholders pending production update.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
