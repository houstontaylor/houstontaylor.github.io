'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Function to handle cursor position
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Function to handle cursor visibility
    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);
    
    // Mouse down/up handlers
    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    
    // Interactive elements handler
    const handleElementHover = () => setHovering(true);
    const handleElementLeave = () => setHovering(false);

    // Add event listeners
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add cursor-ready class to body after a delay
    setTimeout(() => {
      document.body.classList.add('cursor-ready');
    }, 500);
    
    // Find all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementHover);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    // Clean up event listeners
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
      
      document.body.classList.remove('cursor-ready');
    };
  }, []);

  // Don't render on small screens
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div className="custom-cursor">
      {/* Main cursor circle */}
      <motion.div
        className="fixed rounded-full mix-blend-difference pointer-events-none z-[9999]"
        style={{
          left: position.x,
          top: position.y,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          width: hovering ? 50 : clicking ? 20 : 30,
          height: hovering ? 50 : clicking ? 20 : 30,
          border: hovering 
            ? "1px solid rgba(236, 72, 153, 0.8)" 
            : "1px solid rgba(255, 255, 255, 0.5)",
          backgroundColor: hovering 
            ? "rgba(236, 72, 153, 0.05)"
            : clicking 
              ? "rgba(255, 255, 255, 0.2)"
              : "transparent",
          opacity: visible ? 1 : 0
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
      
      {/* Cursor dot */}
      <motion.div
        className="fixed rounded-full bg-pink-500 mix-blend-difference pointer-events-none z-[9999]"
        style={{
          left: position.x,
          top: position.y,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          width: hovering ? 8 : clicking ? 0 : 5,
          height: hovering ? 8 : clicking ? 0 : 5,
          opacity: clicking ? 0 : (visible ? 1 : 0)
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}