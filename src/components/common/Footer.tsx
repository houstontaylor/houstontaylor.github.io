'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4c-1.16.52-2.42.87-3.72 1.02A6.452 6.452 0 0 0 21.5 1.89a12.76 12.76 0 0 1-4.06 1.56 6.38 6.38 0 0 0-10.93 4.38v1.43C2.4 9.05 1 4 1 4s-6 5.8 4 12c-2.13 1.42-4.65 2.16-7 2 8 4.42 18 0 18-10.29 0-.24-.03-.5-.05-.73A9.03 9.03 0 0 0 22 4Z"></path>
        </svg>
      )
    }
  ];

  return (
    <footer className="pt-20 pb-10 border-t border-[rgb(var(--muted))]/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dotted-pattern bg-dotted-md opacity-10 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="block">
              <h2 className="text-2xl font-display">Houston Taylor</h2>
            </Link>
            
            <p className="text-[rgb(var(--foreground))]/70 max-w-md">
              UI/UX Designer & Frontend Developer crafting elegant, intuitive digital experiences 
              at Stanford University, specializing in human-centered design.
            </p>

            <motion.div 
              className="space-y-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-sm text-[rgb(var(--foreground))]/50 font-mono">
                San Francisco · California
              </div>
              <motion.a 
                href="mailto:hctaylor@stanford.edu"
                className="text-[rgb(var(--accent))] hover:underline inline-flex items-center text-sm"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                hctaylor@stanford.edu
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Navigation</h3>
            
            <nav className="flex flex-col space-y-3">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className="text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--accent))] transition-colors relative group w-fit"
                >
                  <span>{link.name}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[rgb(var(--accent))] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Connect</h3>
            
            <div className="flex flex-col space-y-3">
              {socialLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--accent))] transition-colors flex items-center group"
                >
                  <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-10 border-t border-[rgb(var(--muted))]/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[rgb(var(--foreground))]/50">
            &copy; {currentYear} Houston Taylor. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-[rgb(var(--foreground))]/50 hover:text-[rgb(var(--accent))] transition-colors inline-flex items-center group"
            >
              <span>Back to top</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2 transform rotate-90 group-hover:-translate-y-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}