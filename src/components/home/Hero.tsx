'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { allProjects } from '@/data/projectsData';

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 md:pt-40 relative overflow-hidden">
        {/* Background animated shapes */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <motion.div 
            className="absolute w-72 h-72 bg-pink-500/10 rounded-full top-10 left-1/4 blur-3xl" 
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute w-60 h-60 bg-green-400/10 rounded-full bottom-20 right-1/3 blur-3xl" 
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        </div>

        {/* Main Hero content */}
        <div className="relative z-10 max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="space-y-8"
          >
            <motion.span variants={fadeInUp} className="text-pink-500 text-sm tracking-widest uppercase font-mono">
              Stanford University
            </motion.span>

            <motion.h1 
              variants={fadeInUp}
              className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight text-gradient leading-tight"
            >
              UI/UX Designer &<br className="hidden md:block" /> Frontend Developer
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto"
            >
              Designing digital experiences that connect, delight, and inspire.
            </motion.p>

            <motion.div 
              variants={fadeInUp} 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10"
            >
              <Link href="/projects" className="relative group inline-flex items-center font-mono text-lg hover:-translate-y-1 transition-transform">
                <span className="relative z-10 px-6 py-3 border border-pink-500 text-pink-500 rounded-full transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">
                  View My Work
                </span>
              </Link>

              <Link href="/contact" className="relative group inline-flex items-center font-mono text-lg hover:-translate-y-1 transition-transform">
                <span className="relative z-10 px-6 py-3 border border-green-400 text-green-400 rounded-full transition-all duration-300 group-hover:bg-green-400 group-hover:text-white">
                  Get In Touch
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Arrow bottom center */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
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
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section className="mt-40 mb-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Selected Projects</h2>
          <p className="text-foreground/70 max-w-xl mx-auto text-lg">
            A glimpse into my recent work in UI/UX design and frontend development.
          </p>
        </div>

        <div className="space-y-10">
          {allProjects.slice(0, 4).map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={project.id} className="flex items-center gap-6 group hover:bg-pink-100 rounded-lg p-6 transition-colors">
              <span className="text-4xl font-mono text-foreground/40 group-hover:text-pink-500">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              <div className="flex-1">
                <h3 className="text-2xl font-display group-hover:text-pink-500 transition-colors">{project.title}</h3>
                <p className="text-foreground/70 mt-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/projects" className="relative group inline-flex items-center font-mono text-lg hover:-translate-y-1 transition-transform">
            <span className="relative z-10 px-6 py-3 border border-pink-500 text-pink-500 rounded-full transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">
              View All Projects
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
