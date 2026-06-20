import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, CheckCircle, Users, Activity, Play, Code, Eye, RefreshCw } from 'lucide-react';
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
        credential: 'Register as Professional',
        items: ['Social feed — post, like & comment', 'Send & receive connection requests', 'Browse companies & active job listings', 'Apply with custom form + PDF résumé', 'Track interview pipeline round-by-round', 'Real-time job alert popups'],
      },
      {
        title: 'Company (Recruiter)',
        credential: 'Register as Company (Needs Admin Approval)',
        items: ['Post & manage job listings', 'Define custom interview rounds per job', 'Review, advance or reject applicants', 'Broadcast job openings to followers', 'Announce upcoming hiring plans', 'Auto-notify all professional followers'],
      },
      {
        title: 'Admin Panel',
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
        credential: 'thiru@gmail.com / praveen@gmail.com',
        items: ['Instant account creation', 'Profile & About updates', 'Light/Dark Theme Toggle'],
      },
      {
        title: 'Messaging & Media',
        credential: 'One-on-one & Groups',
        items: ['Real-time text & voice notes', 'Rich media sharing & polls', 'Message pinning & starring', 'Delete for everyone'],
      },
      {
        title: 'Chat Management',
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
        credential: 'admin@luxestay.com / Admin@123',
        items: ['Create & manage hubs & rooms', 'Monitor branch occupancy', 'Manage staff accounts', 'View analytics & reports'],
      },
      {
        title: 'Resident Module',
        credential: 'Register via sign-up page',
        items: ['Browse hubs & room listings', 'Bookings & payment tracking', 'Order food & spa services', 'Submit reviews after checkout'],
      },
      {
        title: 'Staff Module',
        credential: 'cook.chennai@luxestays.com (12345)',
        items: ['Claim assigned service tasks', 'Update operational workflow', 'Data tracking & status checks'],
      },
    ],
    note: 'Prototype for academic demonstration. Some assets are placeholders pending production update.',
  },
];

const Project = () => {
  const [expanded, setExpanded] = useState({});
  const [stage, setStage] = useState({}); // 'blueprint', 'code', 'final' per project
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleExpanded = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    // Set default exhibition stage to 'final' for all
    const initialStages = {};
    projectsData.forEach(p => {
      initialStages[p.id] = 'final';
    });
    setStage(initialStages);
  }, []);

  const triggerStageSequence = (id) => {
    // Reset to blueprint, then cycle to code, then final
    setStage(prev => ({ ...prev, [id]: 'blueprint' }));
    
    setTimeout(() => {
      setStage(prev => ({ ...prev, [id]: 'code' }));
    }, 1200);

    setTimeout(() => {
      setStage(prev => ({ ...prev, [id]: 'final' }));
    }, 2800);
  };

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden bg-[#0c0a09]">
      <div className="blob w-80 h-80 left-[-100px] top-0" style={{ background: 'rgba(201,168,76,0.06)' }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hall Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="exhibit-number">Hall 03</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-2">
            Engineering <span className="gold-text">Exhibition</span>
          </h2>
          <p className="font-mono text-[10px] tracking-[0.3em] text-cream-dim uppercase">
            A showcase of full-stack engineering masterpieces.
          </p>
          <div className="gold-divider mt-5 max-w-xs" />
        </motion.div>

        {/* Masterpieces Grid */}
        <div className="flex flex-col gap-16">
          {projectsData.map((project, index) => {
            const currentStage = stage[project.id] || 'final';
            const isHovered = hoveredCard === project.id;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="museum-card relative overflow-hidden transition-all duration-500"
                style={{
                  borderColor: isHovered ? 'rgba(201, 168, 76, 0.4)' : 'rgba(201, 168, 76, 0.12)',
                }}
              >
                {/* Corner ornaments */}
                <div className="corner-ornament tl" />
                <div className="corner-ornament tr" />
                <div className="corner-ornament bl" />
                <div className="corner-ornament br" />

                <div className="p-6 md:p-10">
                  {/* Masterpiece Header HUD */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase">
                        Masterpiece #{project.number}
                      </span>
                      {project.status === 'in-progress' && (
                        <span className="museum-pill text-[8px] px-2 py-0.5 text-yellow-500 border-yellow-500/30 bg-yellow-500/5 animate-pulse">
                          DEVELOPMENT ACTIVE
                        </span>
                      )}
                    </div>

                    {/* Exhibition state control panel */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => triggerStageSequence(project.id)}
                        className="p-1.5 border border-[#c9a84c]/20 hover:border-[#c9a84c] rounded text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all cursor-pointer flex items-center gap-1.5 font-mono text-[9px] tracking-wider uppercase"
                        title="Simulate Blueprint Load Flow"
                      >
                        <RefreshCw size={10} />
                        Simulate Load
                      </button>
                    </div>
                  </div>

                  {/* Main Grid: Info + Exhibition Viewport */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                    
                    {/* Left Panel: Info */}
                    <div className="lg:col-span-7 text-left">
                      <h3 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-1">
                        {project.title}
                      </h3>
                      <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: project.accentColor }}>
                        {project.subtitle}
                      </h4>
                      <p className="font-sans text-cream-muted text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="museum-pill text-[9.5px]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-5">
                        {project.githubLinks.map((gh, idx) => (
                          <a
                            key={idx}
                            href={gh.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-cream-muted hover:text-gold uppercase transition-colors"
                          >
                            <FaGithub size={14} />
                            <span>GitHub ({gh.label})</span>
                          </a>
                        ))}
                        <a
                          href={project.frontendLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-cream-muted hover:text-gold uppercase transition-colors"
                        >
                          <ExternalLink size={12} />
                          <span>View Case Study</span>
                        </a>
                      </div>
                    </div>

                    {/* Right Panel: Exhibition Reveal Viewport */}
                    <div className="lg:col-span-5 w-full">
                      <div
                        className="relative w-full aspect-[4/3] border border-[#c9a84c]/15 bg-[#080706]/95 overflow-hidden flex items-center justify-center text-center"
                        style={{
                          boxShadow: isHovered ? `0 0 30px ${project.accentColor}15` : 'none',
                        }}
                      >
                        {/* Interactive Stages renderer */}
                        <AnimatePresence mode="wait">
                          {currentStage === 'blueprint' && (
                            <motion.div
                              key="blueprint"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.85 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 p-4 font-mono text-[8px] text-sky-400 select-none flex flex-col justify-between text-left"
                              style={{
                                backgroundImage: 'radial-gradient(rgba(14, 165, 233, 0.15) 1px, transparent 1px), linear-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px)',
                                backgroundSize: '100% 100%, 20px 20px, 20px 20px'
                              }}
                            >
                              <div>
                                <div>// BLUEPRINT SCHEMATIC DRAW</div>
                                <div>SCALE: 1:1 // GRID STAGE_INIT</div>
                                <div>CORE OBJECT_ID: {project.id.toUpperCase()}</div>
                              </div>
                              
                              {/* Draw SVG wireframe */}
                              <svg className="w-full h-1/2 stroke-sky-400/40 fill-none stroke-[0.8] stroke-dasharray-[4]">
                                <rect x="10%" y="10%" width="80%" height="80%" />
                                <line x1="10%" y1="10%" x2="90%" y2="90%" />
                                <line x1="90%" y1="10%" x2="10%" y2="90%" />
                                <circle cx="50%" cy="50%" r="20%" />
                              </svg>

                              <div className="text-right">
                                STATUS: RENDERING BLUEPRINT COORDS
                              </div>
                            </motion.div>
                          )}

                          {currentStage === 'code' && (
                            <motion.div
                              key="code"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.85 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 p-4 font-mono text-[8px] text-emerald-400 text-left overflow-hidden bg-[#0c0a09]/95"
                            >
                              <div className="text-emerald-500 mb-2">// INJECTING COMPILED SOURCE PARTICLES</div>
                              <div className="flex flex-col gap-0.5 opacity-60">
                                <span>import React, &#123; useState, useEffect &#125; from 'react';</span>
                                <span>const controller = new AbortController();</span>
                                <span>const response = await fetch('/api/modules/system-analysis');</span>
                                <span>const payload = await response.json();</span>
                                <span>db.collection('{project.id}').insert(payload);</span>
                                <span>console.log('Exhibition model compilation complete.');</span>
                              </div>
                              {/* Flowing particle animation overlay */}
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/5 to-transparent animate-pulse" />
                            </motion.div>
                          )}

                          {currentStage === 'final' && (
                            <motion.div
                              key="final"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute inset-0 p-6 flex flex-col justify-between items-center text-center relative"
                              style={{
                                background: `radial-gradient(ellipse at center, ${project.accentMuted} 0%, rgba(12,10,9,0.95) 75%)`,
                              }}
                            >
                              {/* Overlay status plaque */}
                              <div className="my-auto">
                                <span className="font-serif text-3xl font-bold text-cream tracking-wider block">
                                  {project.title}
                                </span>
                                <span className="font-mono text-[9px] tracking-[0.25em] uppercase block mt-1" style={{ color: project.accentColor }}>
                                  EXHIBITION LOADED
                                </span>
                              </div>

                              {/* Hover System Analysis Drawer Plaque */}
                              <motion.div
                                animate={isHovered ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full bg-[#110f0e]/95 border border-[#c9a84c]/20 p-3 flex flex-col text-left absolute bottom-4 inset-x-4 max-w-[calc(100%-2rem)] mx-auto z-10"
                              >
                                <span className="font-mono text-[8px] tracking-[0.25em] text-[#c9a84c] uppercase block border-b border-[#c9a84c]/10 pb-1 mb-1.5">
                                  System Analysis plaque
                                </span>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[9px] text-cream-muted">
                                  <div className="flex justify-between">
                                    <span>Frontend:</span>
                                    <span className="text-emerald-400">✓ OK</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Backend:</span>
                                    <span className="text-emerald-400">✓ OK</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Database:</span>
                                    <span className="text-emerald-400">✓ OK</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Deployment:</span>
                                    <span className="text-emerald-400">✓ LIVE</span>
                                  </div>
                                </div>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Drawer Reveal Toggle */}
                  <div className="pt-5 border-t border-[#c9a84c]/10 flex justify-center">
                    <button
                      onClick={() => toggleExpanded(project.id)}
                      className="flex items-center gap-3 font-mono text-[9px] tracking-[0.3em] uppercase text-gold hover:text-gold-light transition-colors duration-200 cursor-pointer"
                    >
                      {expanded[project.id] ? 'Collapse Architecture Specs' : 'View Architecture Specs'}
                      <ChevronDown
                        size={14}
                        className={`transform transition-transform duration-300 ${expanded[project.id] ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                  {/* Expanded view: Architecture data flow */}
                  <AnimatePresence>
                    {expanded[project.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        {/* Interactive Architecture Grid with particle flow */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 pb-4 relative">
                          
                          {/* Frontend node */}
                          <div className="p-4 border border-[#c9a84c]/10 bg-[#110f0e]/80 text-left">
                            <span className="font-mono text-[8px] text-gold uppercase block mb-1">Layer 01</span>
                            <h5 className="font-serif text-sm font-bold text-cream mb-3">React Frontend</h5>
                            <ul className="space-y-1 font-sans text-xs text-cream-muted">
                              <li>• Interactive State Manager</li>
                              <li>• Responsive Tailwind Layout</li>
                              <li>• Client side route protection</li>
                            </ul>
                          </div>

                          {/* Middleware API node */}
                          <div className="p-4 border border-[#c9a84c]/10 bg-[#110f0e]/80 text-left relative">
                            {/* Animated SVG Data Particle flowing left-to-right */}
                            <div className="absolute inset-0 pointer-events-none hidden md:block">
                              <svg className="absolute top-1/2 left-0 w-full h-2 overflow-visible">
                                <circle cx="10%" cy="0" r="2.5" fill="#c9a84c">
                                  <animate attributeName="cx" values="0%; 100%" dur="2.4s" repeatCount="indefinite" />
                                </circle>
                              </svg>
                            </div>
                            
                            <span className="font-mono text-[8px] text-gold uppercase block mb-1">Layer 02</span>
                            <h5 className="font-serif text-sm font-bold text-cream mb-3">Express API</h5>
                            <ul className="space-y-1 font-sans text-xs text-cream-muted">
                              <li>• JWT Token authorization</li>
                              <li>• Multi-tier middleware filters</li>
                              <li>• CORS validation hooks</li>
                            </ul>
                          </div>

                          {/* Database layer node */}
                          <div className="p-4 border border-[#c9a84c]/10 bg-[#110f0e]/80 text-left">
                            <span className="font-mono text-[8px] text-gold uppercase block mb-1">Layer 03</span>
                            <h5 className="font-serif text-sm font-bold text-cream mb-3">MongoDB Database</h5>
                            <ul className="space-y-1 font-sans text-xs text-cream-muted">
                              <li>• Schema level validations</li>
                              <li>• BSON dataset mapping</li>
                              <li>• Index optimized query runs</li>
                            </ul>
                          </div>
                        </div>

                        {/* Workflows credentials list */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          {project.workflows.map((w, idx) => (
                            <div key={idx} className="p-4 bg-[#14100c]/40 border border-[#c9a84c]/5 text-left">
                              <h5 className="font-serif text-xs font-bold text-cream mb-2">
                                {w.title}
                              </h5>
                              <p className="font-mono text-[8px] text-cream-dark bg-[#080706] p-1.5 rounded mb-3 break-all select-all" title="Click to copy credential">
                                Access: {w.credential}
                              </p>
                              <ul className="space-y-1.5 font-sans text-[11px] text-cream-muted">
                                {w.items.map((item, id) => (
                                  <li key={id} className="flex gap-1.5 items-start">
                                    <span className="text-gold mt-0.5">◆</span>
                                    <span>{item}</span>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
