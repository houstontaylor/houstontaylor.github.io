'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import useMousePosition from '@/hooks/useMousePosition';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const mousePosition = useMousePosition();
  
  // Create spring-animated values for smoother cursor movement
  const cursorX = useSpring(useMotionValue(0), { stiffness: 700, damping: 50 });
  const cursorY = useSpring(useMotionValue(0), { stiffness: 700, damping: 50 });
  const dotX = useSpring(useMotionValue(0), { stiffness: 800, damping: 40 });
  const dotY = useSpring(useMotionValue(0), { stiffness: 800, damping: 40 });

  useEffect(() => {
    if (mousePosition.x !== null && mousePosition.y !== null) {
      cursorX.set(mousePosition.x - 16);
      cursorY.set(mousePosition.y - 16);
      dotX.set(mousePosition.x - 3);
      dotY.set(mousePosition.y - 3);
    }
  }, [mousePosition, cursorX, cursorY, dotX, dotY]);

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const interactiveElements = document.querySelectorAll('a, button, [data-hover]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Main cursor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          height: isHovering ? 48 : isClicking ? 24 : 32,
          width: isHovering ? 48 : isClicking ? 24 : 32,
          borderRadius: '50%',
          opacity: 0.3,
          border: isHovering 
            ? '1px solid rgba(var(--accent) / 0.5)' 
            : '1px solid rgba(var(--foreground) / 0.3)',
          backgroundColor: isHovering 
            ? 'rgba(var(--accent) / 0.05)' 
            : isClicking 
              ? 'rgba(var(--foreground) / 0.1)' 
              : 'transparent',
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed rounded-full mix-blend-difference"
      />
      
      {/* Dot cursor */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          height: isHovering ? 10 : isClicking ? 0 : 6,
          width: isHovering ? 10 : isClicking ? 0 : 6,
          opacity: isClicking ? 0 : 1,
          backgroundColor: isHovering 
            ? 'rgba(var(--accent) / 1)' 
            : 'rgba(var(--foreground) / 1)',
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="fixed rounded-full mix-blend-difference"
      />
    </div>
  );
}