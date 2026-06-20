import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, CheckCircle, Users, Activity, Hotel, MessageSquare, Briefcase } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 'hireverse',
    number: '001',
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
    accentColor: '#6366f1',
    accentMuted: 'rgba(99,102,241,0.15)',
    workflows: [
      {
        title: 'Professional (Candidate)',
        icon: <Users size={16} />,
        credential: 'Register as Professional',
        items: ['Social feed — post, like & comment', 'Send & receive connection requests', 'Browse companies & active job listings', 'Apply with custom form + PDF résumé', 'Track interview pipeline round-by-round', 'Real-time job alert popups'],
      },
      {
        title: 'Company (Recruiter)',
        icon: <Activity size={16} />,
        credential: 'Register as Company (Needs Admin Approval)',
        items: ['Post & manage job listings', 'Define custom interview rounds per job', 'Review, advance or reject applicants', 'Broadcast job openings to followers', 'Announce upcoming hiring plans', 'Auto-notify all professional followers'],
      },
      {
        title: 'Admin Panel',
        icon: <CheckCircle size={16} />,
        credential: 'Admin credentials required',
        items: ['Verify & approve company registrations', 'View all users, companies & jobs', 'Monitor platform-wide activity', 'Reject unverified company accounts'],
      },
    ],
    note: 'Currently under active development. Basic version is live — new features including advanced analytics, real-time WebSocket notifications, and enhanced recruiter tools are in progress.',
  },
  {
    id: 'whatsapp-clone',
    number: '002',
    title: 'WhatsApp Web Clone',
    subtitle: 'Real-Time Messaging & Communication Platform',
    description: 'A full-stack, real-time messaging application delivering a seamless digital communication experience. Allows users to connect with friends, share media, create groups, and manage personal profiles through a highly responsive web interface inspired by the official WhatsApp Web application.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS'],
    githubLinks: [
      { label: 'Frontend', url: 'https://github.com/thiruthavachelvan/Whatsapp-Clone-Frontend' },
      { label: 'Backend', url: 'https://github.com/thiruthavachelvan/Whatsapp-Clone-Backend' }
    ],
    frontendLink: 'https://whtsappweb-clonedbyme.netlify.app/',
    backendLink: 'https://whatsapp-clone-backend-qgg9.onrender.com',
    accentColor: '#10b981',
    accentMuted: 'rgba(16,185,129,0.12)',
    workflows: [
      {
        title: 'Authentication & Profile',
        icon: <Users size={16} />,
        credential: 'thiru@gmail.com / praveen@gmail.com',
        items: ['Instant account creation', 'Profile & About updates', 'Light/Dark Theme Toggle'],
      },
      {
        title: 'Messaging & Media',
        icon: <Activity size={16} />,
        credential: 'One-on-one & Groups',
        items: ['Real-time text & voice notes', 'Rich media sharing & polls', 'Message pinning & starring', 'Delete for everyone'],
      },
      {
        title: 'Chat Management',
        icon: <CheckCircle size={16} />,
        credential: 'Status & Notifications',
        items: ['Mute & block users', 'Clear chat history', 'View & upload status updates'],
      },
    ],
    note: 'Demonstrates advanced full-stack capabilities, optimistic UI updates, and zero-latency messaging using Socket.IO.',
  },
  {
    id: 'luxestay',
    number: '003',
    title: 'LuxeStay',
    subtitle: 'Luxury Hotel Booking & Property Management',
    description: 'A full-stack MERN application delivering seamless hospitality experiences across global hubs (Mumbai, Chennai, Delhi, Bangalore, Coimbatore, New York). Includes room booking, role-based dashboards, payment tracking, spa reservations, culinary ordering, and real-time analytics.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    githubLinks: [
      { label: 'GitHub', url: 'https://github.com/thiruthavachelvan' }
    ],
    frontendLink: 'https://luxestay-hotel-booking.netlify.app/',
    backendLink: 'https://luxestay-backend-dmms.onrender.com/',
    accentColor: '#c9a84c',
    accentMuted: 'rgba(201,168,76,0.12)',
    workflows: [
      {
        title: 'Admin Module',
        icon: <Activity size={16} />,
        credential: 'admin@luxestay.com / Admin@123',
        items: ['Create & manage hubs & rooms', 'Monitor branch occupancy', 'Manage staff accounts', 'View analytics & reports'],
      },
      {
        title: 'Resident Module',
        icon: <Users size={16} />,
        credential: 'Register via sign-up page',
        items: ['Browse hubs & room listings', 'Bookings & payment tracking', 'Order food & spa services', 'Submit reviews after checkout'],
      },
      {
        title: 'Staff Module',
        icon: <CheckCircle size={16} />,
        credential: 'cook.chennai@luxestays.com (12345)',
        items: ['Claim assigned service tasks', 'Update operational workflow', 'Data tracking & status checks'],
      },
    ],
    note: 'Prototype for academic demonstration. Some assets are placeholders pending production update.',
  },
];

const Project = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
      <div className="blob w-80 h-80 left-[-100px] top-0" style={{ background: 'rgba(201,168,76,0.06)' }} />
      <div className="blob w-64 h-64 right-0 bottom-0" style={{ background: 'rgba(139,26,26,0.08)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Hall Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="exhibit-number">Hall 03</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-2">
            Product <span className="gold-text">Gallery</span>
          </h2>
          <p className="font-mono text-[11px] tracking-[0.25em] text-cream-dim uppercase">A showcase of full-stack products and solutions.</p>
          <div className="gold-divider mt-5 max-w-xs" />
        </motion.div>

        {/* Project Cards — Framed Masterpieces */}
        <div className="flex flex-col gap-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="museum-card relative overflow-hidden"
            >
              {/* Corner ornaments */}
              <div className="corner-ornament tl" />
              <div className="corner-ornament tr" />
              <div className="corner-ornament bl" />
              <div className="corner-ornament br" />

              {/* Top accent bar */}
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, transparent, ${project.accentColor}, transparent)` }} />

              {/* In-Progress badge */}
              {project.status === 'in-progress' && (
                <div
                  className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3 py-1.5 font-mono text-[9px] tracking-[0.25em] uppercase"
                  style={{ color: '#c9a84c', border: '1px solid rgba(201,168,76,0.35)', background: 'rgba(201,168,76,0.06)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#c9a84c' }} />
                  Under Development
                </div>
              )}

              <div className="p-8 md:p-12">
                {/* Masterpiece label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-px" style={{ background: 'rgba(201,168,76,0.4)' }} />
                  <span className="font-mono text-[9px] tracking-[0.35em] text-gold-muted uppercase">Masterpiece #{project.number}</span>
                </div>

                {/* Top: Info + Visual */}
                <div className="flex flex-col lg:flex-row gap-10 items-start mb-10">
                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-2">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-5" style={{ color: project.accentColor }}>
                      {project.subtitle}
                    </p>
                    <p className="font-sans text-cream-muted text-sm leading-relaxed mb-7 max-w-xl">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="museum-pill text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-5">
                      {project.githubLinks.map((gh, i) => (
                        <a key={i} href={gh.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 font-sans text-cream-muted hover:text-cream text-sm transition-colors font-medium group">
                          <FaGithub size={18} style={{ color: '#c9a84c' }} />
                          <span className="group-hover:underline underline-offset-2">
                            GitHub {gh.label !== 'GitHub' ? `(${gh.label})` : ''}
                          </span>
                        </a>
                      ))}
                      <a href={project.frontendLink} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 font-sans text-cream-muted hover:text-cream text-sm transition-colors font-medium group">
                        <ExternalLink size={16} style={{ color: project.accentColor }} />
                        <span className="group-hover:underline underline-offset-2">View Case Study</span>
                      </a>
                      {project.backendLink && (
                        <a href={project.backendLink} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 font-sans text-cream-dark hover:text-cream-muted text-sm transition-colors">
                          <ExternalLink size={14} />
                          <span>Backend API</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project visual — framed art panel */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: index * 0.7, ease: 'easeInOut' }}
                    className="w-full lg:w-2/5 aspect-video rounded-none relative overflow-hidden flex items-center justify-center"
                    style={{
                      background: `radial-gradient(ellipse at center, ${project.accentMuted} 0%, rgba(12,10,9,0.9) 70%)`,
                      border: `1px solid ${project.accentColor}25`,
                      boxShadow: `0 0 40px ${project.accentColor}12, inset 0 0 40px rgba(0,0,0,0.4)`,
                    }}
                  >
                    {/* Frame ornaments */}
                    <div className="absolute top-3 left-3 w-5 h-5" style={{ borderTop: `1px solid ${project.accentColor}50`, borderLeft: `1px solid ${project.accentColor}50` }} />
                    <div className="absolute top-3 right-3 w-5 h-5" style={{ borderTop: `1px solid ${project.accentColor}50`, borderRight: `1px solid ${project.accentColor}50` }} />
                    <div className="absolute bottom-3 left-3 w-5 h-5" style={{ borderBottom: `1px solid ${project.accentColor}50`, borderLeft: `1px solid ${project.accentColor}50` }} />
                    <div className="absolute bottom-3 right-3 w-5 h-5" style={{ borderBottom: `1px solid ${project.accentColor}50`, borderRight: `1px solid ${project.accentColor}50` }} />

                    <div className="text-center z-10 px-4">
                      <div className="font-serif text-3xl font-black text-cream mb-1">{project.title}</div>
                      <div className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: project.accentColor }}>
                        Masterpiece #{project.number}
                      </div>
                      {/* Decorative dots */}
                      <div className="flex justify-center gap-2 mt-4">
                        {project.tags.slice(0, 3).map((t, i) => (
                          <div key={i} className="w-1 h-1 rounded-full" style={{ background: project.accentColor, opacity: 0.6 }} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Expand toggle */}
                <div className="pt-6 flex justify-center" style={{ borderTop: '1px solid rgba(201,168,76,0.07)' }}>
                  <button
                    onClick={() => toggleExpanded(project.id)}
                    className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-gold hover:text-gold-light transition-colors duration-200"
                  >
                    {expanded[project.id] ? 'Collapse Details' : 'View Testing Workflows'}
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-300 ${expanded[project.id] ? 'rotate-180' : ''}`}
                      style={{ color: '#c9a84c' }}
                    />
                  </button>
                </div>

                {/* Expandable workflows */}
                <AnimatePresence>
                  {expanded[project.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8">
                        {project.workflows.map((w, i) => (
                          <div
                            key={i}
                            className="p-5 relative"
                            style={{
                              background: 'rgba(20,16,12,0.7)',
                              border: '1px solid rgba(201,168,76,0.1)',
                            }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <span style={{ color: '#c9a84c' }}>{w.icon}</span>
                              <h4 className="font-serif text-sm font-bold text-cream">{w.title}</h4>
                            </div>
                            <p className="font-mono text-[9px] tracking-wide text-cream-dark bg-museum-darker px-2 py-1.5 rounded mb-4 break-all">
                              {w.credential}
                            </p>
                            <ul className="space-y-2">
                              {w.items.map((item, j) => (
                                <li key={j} className="flex gap-2 text-xs font-sans text-cream-muted">
                                  <span className="mt-0.5 shrink-0" style={{ color: '#c9a84c' }}>◆</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <p className="mt-6 text-center font-serif italic text-xs text-cream-dark">
                        {project.note}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom accent bar */}
              <div className="h-px w-full" style={{ background: `linear-gradient(to right, transparent, ${project.accentColor}30, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
