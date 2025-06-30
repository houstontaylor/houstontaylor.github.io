'use client';

import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import About from '@/components/home/About';
import Contact from '@/components/contact/ContactPage';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <main className="-mt-16">
        <Hero />
        
        {/* Projects section */}
        <Projects />
        
        {/* Divider with animation */}
        <div className="container mx-auto my-4">
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent))] to-transparent opacity-30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        
        {/* About section */}
        <About />
        
        {/* Contact section */}
        <Contact />
      </main>
    </>
  );
}