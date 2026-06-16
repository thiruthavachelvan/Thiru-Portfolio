import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, CheckCircle, Users, Activity, Hotel, MessageSquare, Briefcase } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 'hireverse',
    title: 'HireVerse',
    subtitle: 'Professional Networking & Job Portal Platform',
    status: 'in-progress',
    description: 'A full-stack, production-deployed web application that bridges candidates and companies through a LinkedIn-inspired social networking experience with a complete job hiring pipeline. Features social feeds, connection requests, job applications, multi-round interview tracking, real-time job alerts, and a full admin verification system.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    githubLinks: [
      { label: 'Frontend', url: 'https://github.com/thiruthavachelvan/Hireverse-Frontend' },
      { label: 'Backend', url: 'https://github.com/thiruthavachelvan/Hireverse-Backend' }
    ],
    frontendLink: 'https://hire-verse.netlify.app',
    backendLink: 'https://hireverse-backend-yu03.onrender.com',
    icon: <Briefcase className="w-16 h-16 text-brand-blue mb-3 drop-shadow-[0_0_20px_rgba(99,102,241,0.7)]" />,
    iconLabel: 'HIREVERSE',
    iconSub: 'Professional Networking & Job Portal',
    bgGradient: 'from-brand-blue/15 via-brand-cyan/10 to-brand-purple/15',
    bannerGradient: 'from-brand-blue via-brand-cyan to-brand-purple',
    textColor: 'text-brand-blue',
    workflows: [
      {
        title: 'Professional (Candidate)',
        icon: <Users size={18} />,
        color: 'from-brand-blue to-brand-cyan',
        credential: 'Register as Professional',
        items: ['Social feed — post, like & comment', 'Send & receive connection requests', 'Browse companies & active job listings', 'Apply with custom form + PDF résumé', 'Track interview pipeline round-by-round', 'Real-time job alert popups from followed companies'],
      },
      {
        title: 'Company (Recruiter)',
        icon: <Activity size={18} />,
        color: 'from-brand-cyan to-brand-purple',
        credential: 'Register as Company (Needs Admin Approval)',
        items: ['Post & manage job listings', 'Define custom interview rounds per job', 'Review, advance or reject applicants', 'Broadcast job openings to followers\' feed', 'Announce upcoming hiring plans', 'Auto-notify all professional followers'],
      },
      {
        title: 'Admin Panel',
        icon: <CheckCircle size={18} />,
        color: 'from-brand-purple to-brand-blue',
        credential: 'Admin credentials required',
        items: ['Verify & approve company registrations', 'View all users, companies & jobs', 'Monitor platform-wide activity', 'Reject unverified company accounts'],
      },
    ],
    note: 'Currently under active development. Basic version is live — new features including advanced analytics, real-time WebSocket notifications, and enhanced recruiter tools are in progress.'
  },
  {
    id: 'whatsapp-clone',
    title: 'WhatsApp Web Clone',
    subtitle: 'Real-Time Messaging & Communication Platform',
    description: 'A full-stack, real-time messaging application developed to deliver a seamless digital communication experience. The platform allows users to connect with friends, share media, create groups, and manage their personal profiles through a highly responsive web interface inspired by the official WhatsApp Web application.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS'],
    githubLinks: [
      { label: 'Frontend', url: 'https://github.com/thiruthavachelvan/Whatsapp-Clone-Frontend' },
      { label: 'Backend', url: 'https://github.com/thiruthavachelvan/Whatsapp-Clone-Backend' }
    ],
    frontendLink: 'https://whtsappweb-clonedbyme.netlify.app/',
    backendLink: 'https://whatsapp-clone-backend-qgg9.onrender.com',
    icon: <MessageSquare className="w-16 h-16 text-brand-green mb-3 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]" />,
    iconLabel: 'WHATSAPP',
    iconSub: 'Real-Time Chat App',
    bgGradient: 'from-brand-green/15 via-brand-cyan/10 to-brand-blue/15',
    bannerGradient: 'from-brand-green via-brand-cyan to-brand-blue',
    textColor: 'text-brand-green',
    workflows: [
      {
        title: 'Authentication & Profile',
        icon: <Users size={18} />,
        color: 'from-brand-green to-brand-cyan',
        credential: 'thiru@gmail.com / praveen@gmail.com',
        items: ['Instant account creation', 'Profile & About updates', 'Light/Dark Theme Toggle'],
      },
      {
        title: 'Messaging & Media',
        icon: <Activity size={18} />,
        color: 'from-brand-cyan to-brand-blue',
        credential: 'One-on-one & Groups',
        items: ['Real-time text & voice notes', 'Rich media sharing & polls', 'Message pinning & starring', 'Delete for everyone'],
      },
      {
        title: 'Chat Management',
        icon: <CheckCircle size={18} />,
        color: 'from-brand-blue to-brand-purple',
        credential: 'Status & Notifications',
        items: ['Mute & block users', 'Clear chat history', 'View & upload status updates'],
      },
    ],
    note: 'Developed to demonstrate advanced full-stack capabilities, optimistic UI updates, and zero-latency messaging using Socket.IO.'
  },
  {
    id: 'luxestay',
    title: 'LuxeStay',
    subtitle: 'Luxury Hotel Booking & Property Management',
    description: 'A full-stack MERN application delivering seamless hospitality experiences across global hubs (Mumbai, Chennai, Delhi, Bangalore, Coimbatore, New York). Includes room booking, role-based dashboards, payment tracking, spa reservations, culinary ordering, and real-time analytics.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    githubLinks: [
      { label: 'GitHub', url: 'https://github.com/thiruthavachelvan' }
    ],
    frontendLink: 'https://luxestay-hotel-booking.netlify.app/',
    backendLink: 'https://luxestay-backend-dmms.onrender.com/',
    icon: <Hotel className="w-16 h-16 text-brand-pink mb-3 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]" />,
    iconLabel: 'LUXESTAY',
    iconSub: 'Luxury Hotel Booking System',
    bgGradient: 'from-brand-orange/15 via-brand-pink/10 to-brand-purple/15',
    bannerGradient: 'from-brand-orange via-brand-pink to-brand-purple',
    textColor: 'text-brand-pink',
    workflows: [
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
    ],
    note: 'Prototype for academic demonstration. Some assets are placeholders pending production update.'
  }
];

const Project = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="blob w-96 h-96 bg-brand-purple left-[-100px] top-0 opacity-15"></div>
      <div className="blob w-72 h-72 bg-brand-orange right-0 bottom-0 opacity-15"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="text-brand-purple font-mono font-bold text-lg">03.</span>
          <h2 className="text-3xl md:text-5xl font-black">Featured <span className="text-gradient-primary">Projects</span></h2>
          <div className="h-px bg-gradient-to-r from-brand-purple/50 to-transparent flex-grow"></div>
        </motion.div>

        <div className="flex flex-col gap-16">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group relative"
            >
              {/* In Progress badge */}
              {project.status === 'in-progress' && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-brand-blue text-xs font-bold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                  In Progress
                </div>
              )}
              {/* Banner gradient strip */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.bannerGradient}`}></div>

              <div className="p-8 md:p-12">
                {/* Top: Visual + Info */}
                <div className="flex flex-col lg:flex-row gap-10 items-start mb-10">
                  {/* Project Visual */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    className="w-full lg:w-2/5 aspect-video bg-dark-bg/60 rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`}></div>
                    {project.icon}
                    <span className="text-white font-black text-2xl tracking-widest">{project.iconLabel}</span>
                    <span className="text-gray-400 text-xs mt-1">{project.iconSub}</span>
                  </motion.div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{project.title}</h3>
                    <p className={`${project.textColor} font-semibold mb-5 text-lg`}>{project.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed mb-7 text-sm md:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((t, i) => (
                        <span key={i} className={`pill text-xs font-bold ${
                          ['text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
                           'text-brand-green border-brand-green/30 bg-brand-green/10',
                           'text-brand-orange border-brand-orange/30 bg-brand-orange/10',
                           'text-brand-pink border-brand-pink/30 bg-brand-pink/10',
                           'text-brand-blue border-brand-blue/30 bg-brand-blue/10',
                           'text-brand-purple border-brand-purple/30 bg-brand-purple/10'][i % 6]
                        }`}>{t}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-5">
                      {project.githubLinks.map((gh, i) => (
                        <a key={i} href={gh.url} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-2 text-white hover:text-brand-pink transition-colors font-semibold group">
                          <FaGithub size={22} />
                          <span className="group-hover:underline">GitHub {gh.label !== 'GitHub' ? `(${gh.label})` : ''}</span>
                        </a>
                      ))}
                      <a href={project.frontendLink} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-white hover:text-brand-cyan transition-colors font-semibold group">
                        <ExternalLink size={20} />
                        <span className="group-hover:underline">Live Frontend</span>
                      </a>
                      {project.backendLink && (
                        <a href={project.backendLink} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                          <ExternalLink size={16} />
                          <span>Backend API</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Toggle */}
                <div className="border-t border-white/5 pt-6 flex justify-center">
                  <button onClick={() => toggleExpanded(project.id)}
                    className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${project.bannerGradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}>
                    {expanded[project.id] ? 'Hide Details' : 'View Testing Workflows'}
                    <ChevronDown size={18} className={`${project.textColor} transform transition-transform duration-300 ${expanded[project.id] ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Expandable workflows */}
                <AnimatePresence>
                  {expanded[project.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        {project.workflows.map((w, i) => (
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
                        {project.note}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

