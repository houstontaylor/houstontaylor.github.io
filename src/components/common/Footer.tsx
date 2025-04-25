'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Dribbble', url: 'https://dribbble.com/yourusername' },
  ];

  return (
    <footer className="py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-display">
              Houston Taylor
            </Link>
            <p className="text-foreground/70 max-w-xs">
              UI/UX Designer & Frontend Developer creating thoughtful, engaging digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-foreground/70 hover:text-[rgb(var(--accent))] transition-colors w-fit">
                Home
              </Link>
              <Link href="/projects" className="text-foreground/70 hover:text-[rgb(var(--accent))] transition-colors w-fit">
                Projects
              </Link>
              <Link href="/about" className="text-foreground/70 hover:text-[rgb(var(--accent))] transition-colors w-fit">
                About
              </Link>
              <Link href="/contact" className="text-foreground/70 hover:text-[rgb(var(--accent))] transition-colors w-fit">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Connect</h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground/70 hover:text-[rgb(var(--accent))] transition-colors w-fit flex items-center group"
                >
                  <span>{link.name}</span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              ))}
            </div>
            
            <motion.a 
              href="mailto:hctaylor@stanford.edu"
              className="inline-block text-[rgb(var(--accent))] mt-6 group flex items-center"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              hctaylor@stanford.edu
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="ml-2 transform group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-foreground/50">
            © {currentYear} Houston Taylor. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm text-foreground/50">
            <span>Stanford University</span>
            <span className="hidden md:inline">•</span>
            <span>Human-Computer Interaction</span>
          </div>
        </div>
      </div>
    </footer>
  );
}