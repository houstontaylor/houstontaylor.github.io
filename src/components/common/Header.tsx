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
      setScrolled(window.scrollY > 80);
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
          ? 'py-3 bg-background/90 backdrop-blur-md shadow-sm' 
          : 'py-4 bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link 
          href="/" 
          className="text-lg font-medium hover:text-pink-500 transition-colors"
        >
          Houston Taylor
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              href={item.path}
              className={`relative uppercase text-xs tracking-widest font-mono text-foreground hover:text-pink-500 transition-colors`}
            >
              <span className="hover-link">{item.name}</span>
              {pathname === item.path && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-500"
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
            className="flex flex-col items-center justify-center w-12 h-12 transition-transform hover:scale-105"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 bg-foreground"
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-8 h-0.5 mt-1 bg-foreground"
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 mt-1 bg-foreground"
              transition={{ duration: 0.3 }}
            />
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 mt-2 min-w-[220px] bg-background border border-muted/30 rounded-lg shadow-lg py-6 px-6 z-30"
              >
                <div className="flex flex-col items-start space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`text-sm font-medium ${
                        pathname === item.path 
                          ? 'text-pink-500' 
                          : 'text-foreground hover:text-pink-500'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <ThemeToggle />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}