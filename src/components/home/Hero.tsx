'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import useMousePosition from '@/hooks/useMousePosition';
import { useEffect, useState } from 'react';

export default function Hero() {
  const mousePosition = useMousePosition();
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  // Parallax movement calculation
  const calcParallax = (factor: number): number => {
    return scrollY * factor;
  };
  
  // Mouse follow effect for decorative elements
  const calcMouseMove = (factor: number): { x: number; y: number } => {
    if (!mousePosition.x || !mousePosition.y) return { x: 0, y: 0 };
    return {
      x: (mousePosition.x - window.innerWidth / 2) * factor,
      y: (mousePosition.y - window.innerHeight / 2) * factor
    };
  };

  const mouseMovement = calcMouseMove(0.02);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 md:pt-40 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Dots pattern top right */}
        <motion.div 
          className="absolute top-[10%] right-[15%] w-64 h-64 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          style={{ 
            backgroundImage: 'radial-gradient(rgb(var(--accent)) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            transform: `translate(${mouseMovement.x * -1}px, ${mouseMovement.y * -1}px)`
          }}
        />
        
        {/* Sage green blob */}
        <motion.div 
          className="absolute w-96 h-96 rounded-full filter blur-[80px] bg-[rgb(var(--accent))] opacity-10 top-0 left-[20%]"
          animate={{ 
            y: [0, 20, 0], 
            x: [0, -10, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: 'mirror' 
          }}
          style={{
            translateY: calcParallax(-0.1)
          }}
        />
        
        {/* Secondary accent blob */}
        <motion.div 
          className="absolute w-80 h-80 rounded-full filter blur-[80px] bg-[rgb(var(--secondary-accent))] opacity-10 bottom-[10%] right-[10%]"
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 10, 0],
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            repeatType: 'mirror',
            delay: 1
          }}
          style={{
            translateY: calcParallax(-0.15)
          }}
        />
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--foreground),0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(var(--foreground),0.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Main content */}
      <div className="container relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="text-center space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center bg-[rgba(var(--accent),0.1)] px-4 py-2 rounded-full text-[rgb(var(--accent))] mb-6 font-mono text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-[rgb(var(--accent))] mr-2"></span>
            Stanford University
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight max-w-5xl mx-auto relative"
          >
            <span className="relative inline-block">
              <span className="text-[rgb(var(--accent))]">UI/UX</span> Designer
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-[rgb(var(--accent))]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>{" "}
            <span className="text-[rgb(var(--foreground))]">&</span>{" "}
            <span className="relative inline-block">
              <span className="text-[rgb(var(--secondary-accent))]">Frontend</span> Developer
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-[rgb(var(--secondary-accent))]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
              />
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-[rgb(var(--foreground))/70] max-w-2xl mx-auto mt-8"
          >
            Crafting elegant, intuitive digital experiences that connect, delight, and inspire.
          </motion.p>

          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10"
          >
            <Link 
              href="/projects" 
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 px-8 py-3 block bg-[rgb(var(--accent))] text-white rounded-lg font-medium transition-all duration-300 group-hover:bg-[rgb(var(--accent))] group-hover:shadow-lg">
                <span className="flex items-center">
                  View My Work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white/20 w-0 transition-all duration-300 group-hover:w-full z-0"></span>
              </span>
            </Link>

            <Link 
              href="/contact" 
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 px-8 py-3 block border-2 border-[rgb(var(--secondary-accent))] text-[rgb(var(--secondary-accent))] rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                <span className="flex items-center group-hover:text-white transition-colors duration-300">
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[rgb(var(--secondary-accent))] w-0 transition-all duration-300 group-hover:w-full z-0"></span>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[rgb(var(--foreground))/40 text-sm font-mono mb-2">Scroll to explore</span>
        <motion.div 
          className="w-6 h-10 border-2 border-[rgb(var(--accent))/30 rounded-full flex justify-center"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-[rgb(var(--accent))] rounded-full"
            animate={{ 
              y: [2, 15, 2] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}