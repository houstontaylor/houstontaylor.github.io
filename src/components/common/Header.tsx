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

  // Close menu when route changes
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
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'py-4 bg-background/80 backdrop-blur-md' : 'py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-medium hover:text-accent transition-colors"
        >
          Houston Taylor
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              href={item.path}
              active={pathname === item.path}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 z-50"
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-foreground"
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-foreground"
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-foreground"
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center space-y-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Link
                      href={item.path}
                      className={`text-2xl font-medium ${
                        pathname === item.path ? 'text-accent' : 'text-foreground'
                      } hover:text-accent transition-colors`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 + 0.2 }}
                >
                  <ThemeToggle />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link 
      href={href}
      className="relative group"
    >
      <span className={`${
        active ? 'text-accent' : 'text-foreground'
      } hover:text-accent transition-colors`}>
        {children}
      </span>
      {active && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute -bottom-1 left-0 w-full h-px bg-accent"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"/>
    </Link>
  );
}