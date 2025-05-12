'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-[rgb(var(--background))/90 backdrop-blur-md border-b border-[rgb(var(--accent))/10' 
          : 'py-5 bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link 
          href="/" 
          className="relative z-20 text-lg font-medium overflow-hidden group"
        >
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-100%]">Houston</span>
          <span className="absolute left-0 top-0 inline-block translate-y-[100%] text-[rgb(var(--accent))] transition-transform duration-300 group-hover:translate-y-0">Houston</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-100%]"> Taylor</span>
          <span className="absolute right-0 top-0 inline-block translate-y-[100%] text-[rgb(var(--accent))] transition-transform duration-300 group-hover:translate-y-0"> Taylor</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              href={item.path}
              className={`relative text-sm uppercase tracking-widest font-mono text-[rgb(var(--foreground))] transition-colors`}
            >
              <span className="hover-link">{item.name}</span>
              {pathname === item.path && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[rgb(var(--accent))]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-6">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="relative md:hidden">
          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center justify-center w-12 h-12 z-30 relative"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-7 h-0.5 bg-[rgb(var(--foreground))]"
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-7 h-0.5 mt-1.5 bg-[rgb(var(--foreground))]"
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-7 h-0.5 mt-1.5 bg-[rgb(var(--foreground))]"
              transition={{ duration: 0.3 }}
            />
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
                animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 3rem) 3rem)" }}
                exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 bg-[rgb(var(--background))] z-20"
              >
                <div className="h-full flex flex-col items-center justify-center">
                  <motion.nav className="flex flex-col items-center space-y-8">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Link
                          href={item.path}
                          className={`text-2xl font-display ${
                            pathname === item.path 
                              ? 'text-[rgb(var(--accent))]' 
                              : 'text-[rgb(var(--foreground))]'
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.nav>
                  
                  <motion.div 
                    className="mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <ThemeToggle />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}