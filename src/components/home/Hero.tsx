'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Hi, I'm <span className="text-accent">Houston Taylor</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80">
            UI/UX Designer & Frontend Developer creating thoughtful, engaging digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects" 
              className="px-8 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 border border-foreground/20 rounded-md font-medium hover:bg-foreground/5 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}