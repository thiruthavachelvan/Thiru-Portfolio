import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onEnter }) => {
  const [logs, setLogs] = useState([]);
  const [showMainTitle, setShowMainTitle] = useState(false);
  const [showEnterBtn, setShowEnterBtn] = useState(false);
  
  const containerRef = useRef(null);
  const gatesLeftRef = useRef(null);
  const gatesRightRef = useRef(null);
  const contentRef = useRef(null);

  const logLines = [
    { text: '>> INITIALIZING DIGITAL EXHIBITION...', delay: 200 },
    { text: '>> Fetching Creator Identity... [ OK ]', delay: 800 },
    { text: '>> Loading Engineering Works... [ OK ]', delay: 1400 },
    { text: '>> Syncing Technology Collection... [ OK ]', delay: 2000 },
    { text: '>> Opening Exhibition Security Channels... [ OK ]', delay: 2500 },
    { text: '>> EXHIBITION CORE READY.', delay: 2900 },
  ];

  useEffect(() => {
    // Sequentially print terminal logs
    logLines.forEach((line) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, line.text]);
      }, line.delay);
    });

    // Reveal Title Card
    setTimeout(() => {
      setShowMainTitle(true);
      gsap.fromTo(
        '.loader-title',
        { opacity: 0, y: 30, letterSpacing: '0.4em' },
        { opacity: 1, y: 0, letterSpacing: '0.15em', duration: 1.5, ease: 'power4.out' }
      );
      gsap.fromTo(
        '.loader-subtitle',
        { opacity: 0 },
        { opacity: 0.6, duration: 1.5, delay: 0.5 }
      );
    }, 3500);

    // Show Enter Button
    setTimeout(() => {
      setShowEnterBtn(true);
      gsap.fromTo(
        '.loader-enter-btn',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' }
      );
    }, 4500);
  }, []);

  const handleEnterExhibition = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onEnter) onEnter();
      }
    });

    // Fade out text content
    tl.to(contentRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: 'power2.inOut'
    });

    // Animate digital gates opening (split left/right) and scale up background
    tl.to(gatesLeftRef.current, {
      xPercent: -100,
      duration: 1.6,
      ease: 'power3.inOut'
    }, '-=0.4');

    tl.to(gatesRightRef.current, {
      xPercent: 100,
      duration: 1.6,
      ease: 'power3.inOut'
    }, '-=1.6');

    // Fade out the entire container overlay
    tl.to(containerRef.current, {
      opacity: 0,
      display: 'none',
      duration: 0.8,
      ease: 'power1.inOut'
    }, '-=0.5');
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] overflow-hidden select-none bg-[#080706]"
    >
      {/* Visual Gates / Curtains */}
      <div
        ref={gatesLeftRef}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#0c0a09] border-r border-[#c9a84c]/10 flex justify-end items-center z-10"
        style={{ transformOrigin: 'left' }}
      >
        <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent" />
      </div>
      <div
        ref={gatesRightRef}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#0c0a09] border-l border-[#c9a84c]/10 flex justify-start items-center z-10"
        style={{ transformOrigin: 'right' }}
      >
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent" />
      </div>

      {/* Cinematic Center Content */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6"
      >
        {/* Terminal Logs (top left/center relative to screen) */}
        {!showMainTitle && (
          <div className="w-full max-w-md font-mono text-[11px] text-cream-muted/70 leading-relaxed text-left">
            {logs.map((log, index) => (
              <div
                key={index}
                className={index === logs.length - 1 ? 'text-gold' : ''}
              >
                {log}
              </div>
            ))}
            <span className="inline-block w-1.5 h-3 bg-gold ml-1 animate-pulse" />
          </div>
        )}

        {/* Master Exhibition Title Card */}
        {showMainTitle && (
          <div className="text-center flex flex-col items-center">
            <span className="loader-subtitle font-mono text-[10px] tracking-[0.4em] uppercase text-gold-muted mb-4 opacity-0">
              Welcome to the Exhibition
            </span>
            <h1 className="loader-title font-serif text-3xl md:text-5xl lg:text-6xl font-black text-cream tracking-[0.2em] leading-tight uppercase opacity-0">
              MUSEUM OF
              <span className="block mt-1 gold-text">THIRUTHAVACHELVAN</span>
            </h1>
            <div className="w-16 h-px bg-[#c9a84c]/30 my-8" />
          </div>
        )}

        {/* Enter Trigger */}
        {showEnterBtn && (
          <button
            onClick={handleEnterExhibition}
            className="loader-enter-btn opacity-0 cursor-pointer relative group px-10 py-5 overflow-hidden transition-all duration-300"
            style={{
              background: 'rgba(201, 168, 76, 0.03)',
              border: '1px solid rgba(201, 168, 76, 0.3)',
            }}
          >
            {/* Hover sliding bg */}
            <span className="absolute inset-0 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            {/* Magnetic/interactive text label */}
            <span className="relative z-10 font-mono text-xs tracking-[0.3em] text-gold group-hover:text-black uppercase font-bold transition-colors duration-300">
              ENTER EXHIBITION
            </span>

            {/* Corner brackets */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/60 group-hover:border-black/60 transition-colors" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/60 group-hover:border-black/60 transition-colors" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/60 group-hover:border-black/60 transition-colors" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/60 group-hover:border-black/60 transition-colors" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Loader;
