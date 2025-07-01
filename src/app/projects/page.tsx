'use client';

import ProjectsList from '@/components/projects/ProjectsList';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <>
      {/* Magazine-style Header */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Elements - Fixed with inline styles */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgb(var(--background)), rgba(var(--accent), 0.03), rgba(var(--secondary-accent), 0.03))'
          }}
        />
        <div 
          className="absolute top-20 right-20 w-32 h-32 rounded-full blur-3xl"
          style={{
            backgroundColor: 'rgb(var(--accent))',
            opacity: 0.8
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-24 h-24 rounded-full blur-2xl"
          style={{
            backgroundColor: 'rgb(var(--secondary-accent))',
            opacity: 0.5
          }}
        />
        
        {/* Decorative grid pattern - Fixed with inline styles */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `linear-gradient(rgba(var(--foreground), 0.02) 1px, transparent 1px), linear-gradient(to right, rgba(var(--foreground), 0.02) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            {/* Magazine-style label */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-px"
                  style={{ backgroundColor: 'rgb(var(--accent))' }}
                />
                <span className="text-[rgb(var(--accent))] font-mono text-sm tracking-[0.2em] uppercase">
                  Portfolio 2025
                </span>
                <div 
                  className="w-12 h-px"
                  style={{ backgroundColor: 'rgb(var(--accent))' }}
                />
              </div>
            </motion.div>
            
            {/* Magazine-style title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6 tracking-tight">
                <span className="block text-[rgb(var(--foreground))]">Selected</span>
                <span className="block text-[rgb(var(--accent))] relative">
                  Works
                  {/* Decorative underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-2 left-0 w-full h-1 origin-left"
                    style={{ backgroundColor: 'rgb(var(--secondary-accent))' }}
                  />
                </span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl text-[rgb(var(--foreground))]/70 max-w-2xl mx-auto leading-relaxed"
              >
                A curated collection of design and development projects showcasing my approach to solving complex user challenges.
              </motion.p>
            </motion.div>

            {/* Stats or additional info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center items-center space-x-12 mt-12 text-center"
            >
              <div>
                <div className="text-2xl font-display font-bold text-[rgb(var(--accent))]">15+</div>
                <div className="text-sm font-mono text-[rgb(var(--foreground))]/60 uppercase tracking-wide">Projects</div>
              </div>
              <div className="w-px h-8 bg-[rgb(var(--foreground))]/20"></div>
              <div>
                <div className="text-2xl font-display font-bold text-[rgb(var(--secondary-accent))]">5</div>
                <div className="text-sm font-mono text-[rgb(var(--foreground))]/60 uppercase tracking-wide">Years</div>
              </div>
              <div className="w-px h-8 bg-[rgb(var(--foreground))]/20"></div>
              <div>
                <div className="text-2xl font-display font-bold text-[rgb(var(--accent))]">∞</div>
                <div className="text-sm font-mono text-[rgb(var(--foreground))]/60 uppercase tracking-wide">Ideas</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <ProjectsList />
        </div>
      </section>
    </>
  );
}