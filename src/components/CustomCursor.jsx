import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [hoverState, setHoverState] = useState('default'); // 'default', 'hover', 'click'
  const cursorRef = useRef(null);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Update global CSS variables for background radial lighting/spotlight
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      document.documentElement.style.setProperty('--mouse-viewport-x', `${e.clientX / window.innerWidth}`);
      document.documentElement.style.setProperty('--mouse-viewport-y', `${e.clientY / window.innerHeight}`);
    };

    const handleMouseOver = (e) => {
      // Find closest interactive element
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.museum-card') ||
        target.closest('.interactive-target') ||
        target.style.cursor === 'pointer';

      if (isInteractive) {
        setHoverState('hover');
      } else {
        setHoverState('default');
      }
    };

    const handleMouseDown = () => setHoverState('click');
    const handleMouseUp = () => setHoverState('default');

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Determine size & color based on hover states
  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: '#c9a84c',
      border: '0px solid rgba(201, 168, 76, 0.4)',
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(201, 168, 76, 0.05)',
      border: '1.5px solid #c9a84c',
      boxShadow: '0 0 16px rgba(201, 168, 76, 0.3)',
    },
    click: {
      width: 8,
      height: 8,
      backgroundColor: '#f0d060',
      border: '0px solid rgba(201, 168, 76, 0.4)',
    }
  };

  return (
    <>
      {/* Dynamic light ring (Spotlight Cursor) */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen hidden md:block"
        animate={hoverState}
        variants={variants}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      {/* Center Pinpoint */}
      <motion.div
        className="fixed pointer-events-none z-[9999] w-2 h-2 bg-[#f0d060] rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        transition={{ type: 'just' }}
      />
    </>
  );
};

export default CustomCursor;
