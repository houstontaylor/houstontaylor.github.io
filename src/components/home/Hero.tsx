'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Hi, I'm <span className="text-accent">Houston&nbsp;Taylor</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl text-foreground/80 mb-10 max-w-xl mx-auto md:mx-0"
            >
              UI/UX Designer & Frontend Developer creating thoughtful, engaging digital experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
            >
              <Link 
                href="/projects" 
                className="btn-primary"
              >
                View My Work
              </Link>
              <Link 
                href="/contact"
                className="btn-outline"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-foreground/50"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </motion.div>
    </section>
  );
}