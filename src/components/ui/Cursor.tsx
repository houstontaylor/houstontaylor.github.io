'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import useMousePosition from '@/hooks/useMousePosition';

export default function CustomCursor() {
  const mousePosition = useMousePosition();
  const [cursorVariant, setCursorVariant] = useState<'default' | 'link' | 'button'>('default');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show cursor only when mouse has moved
    if (mousePosition.x !== null || mousePosition.y !== null) {
      setIsVisible(true);
    }
    
    // Add event listeners for interactive elements
    const handleMouseEnterLink = () => setCursorVariant('link');
    const handleMouseLeaveLink = () => setCursorVariant('default');
    const handleMouseEnterButton = () => setCursorVariant('button');
    const handleMouseLeaveButton = () => setCursorVariant('default');
    
    // Identify all interactive elements
    const links = document.querySelectorAll('a, .cursor-link');
    const buttons = document.querySelectorAll('button, .cursor-button');
    
    // Add event listeners
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleMouseEnterButton);
      button.addEventListener('mouseleave', handleMouseLeaveButton);
    });
    
    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
      
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleMouseEnterButton);
        button.removeEventListener('mouseleave', handleMouseLeaveButton);
      });
    };
  }, [mousePosition]);
  
  // Hide the default cursor
  useEffect(() => {
    document.documentElement.classList.add('custom-cursor-enabled');
    
    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, []);
  
  // Cursor variants for different states with proper TypeScript typing
  const variants: Variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'rgb(var(--accent))',
      mixBlendMode: 'normal',
      opacity: 0.5,
      x: mousePosition.x !== null ? mousePosition.x - 6 : 0,
      y: mousePosition.y !== null ? mousePosition.y - 6 : 0,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 30,
        duration: 0.1
      }
    },
    link: {
      width: 24,
      height: 24,
      backgroundColor: 'transparent',
      borderWidth: '2px',
      borderColor: 'rgb(var(--accent))',
      borderStyle: 'solid',
      mixBlendMode: 'normal',
      opacity: 0.8,
      x: mousePosition.x !== null ? mousePosition.x - 12 : 0,
      y: mousePosition.y !== null ? mousePosition.y - 12 : 0,
      transition: {
        type: 'spring',
        mass: 0.3,
        stiffness: 800,
        damping: 40,
        duration: 0.1
      }
    },
    button: {
      width: 30,
      height: 30,
      backgroundColor: 'rgb(var(--secondary-accent))',
      mixBlendMode: 'difference',
      opacity: 0.4,
      x: mousePosition.x !== null ? mousePosition.x - 15 : 0,
      y: mousePosition.y !== null ? mousePosition.y - 15 : 0,
      transition: {
        type: 'spring',
        mass: 0.3,
        stiffness: 800,
        damping: 40,
        duration: 0.1
      }
    }
  };
  
  // Only render on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }
  
  return (
    <div>
      {/* Main cursor */}
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      
      {/* Cursor dot */}
      <motion.div
        animate={{
          x: mousePosition.x !== null ? mousePosition.x - 3 : 0,
          y: mousePosition.y !== null ? mousePosition.y - 3 : 0,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: 'spring',
          mass: 0.05,
          stiffness: 1000,
          damping: 20,
          duration: 0.1
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))] pointer-events-none z-[9999]"
      />
    </div>
  );
}