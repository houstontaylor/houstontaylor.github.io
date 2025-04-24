'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'py-3 bg-background/80 backdrop-blur-md' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-display font-medium hover:text-accent transition-colors"
        >
          Houston Taylor
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <NavLink 
              key={item.path}
              href={item.path}
              active={pathname === item.path}
              delay={index * 0.1}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="relative inline-flex h-10 w-20 items-center border border-red-500">
            <ThemeToggle />
          </div>
        </nav>

        <MobileNav items={navItems} />
      </div>
    </header>
  );
}

function NavLink({ href, active, children, delay }: { 
  href: string; 
  active: boolean; 
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      className="relative"
    >
      <Link 
        href={href}
        className={`px-4 py-2 text-sm font-medium transition-colors hover:text-accent ${
          active ? 'text-accent' : 'text-foreground'
        }`}
      >
        {children}
      </Link>
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </motion.div>
  );
}

function MobileNav({ items }: { items: { name: string; path: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 flex flex-col items-center justify-center gap-1.5"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-foreground transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-foreground transition-all ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-foreground transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-background z-40 flex flex-col"
          >
            <div className="flex flex-col items-center justify-center gap-6 py-8 mx-auto">
              {items.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={`text-2xl font-medium ${
                      pathname === item.path ? 'text-accent' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: items.length * 0.1 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}