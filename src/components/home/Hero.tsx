'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center pt-16 md:pt-0"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="text-pink-500 text-sm tracking-widest uppercase font-mono">Stanford University</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-display leading-none text-6xl md:text-7xl lg:text-8xl tracking-tighter mb-8"
            >
              UI/UX Designer &<br className="hidden md:block" />
              Frontend Developer
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mt-6 mb-12"
            >
              Creating thoughtful, engaging digital experiences.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center mt-10"
            >
              <Link 
                href="/projects" 
                className="mx-auto sm:mx-0 btn btn-primary"
              >
                View My Work
              </Link>
              <Link 
                href="/contact"
                className="mx-auto sm:mx-0 btn btn-outline"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Fixed scroll arrow at bottom of viewport */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.8, 0.3], 
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-pink-500"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}