'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isNavigating, setIsNavigating] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Simple scroll handler that works
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setShow(true);
      } else if (currentScrollY > lastScrollY && !mobileMenuOpen) {
        setShow(false);
      } else {
        setShow(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Navigation handler with immediate loading
  const handleNavigation = (path: string) => {
    if (pathname === path) {
      setMobileMenuOpen(false);
      return;
    }
    
    setIsNavigating(true);
    setMobileMenuOpen(false);
    router.push(path);
  }

  // Reset navigation state after page loads completely
  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 900);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, isNavigating]);

  const navItems = [
    { name: 'WORK', path: '/projects' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ]

  return (
    <>
      {/* Loading Overlay */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[rgb(var(--background))]/90 backdrop-blur-sm flex items-center justify-center"
            role="status"
            aria-live="polite"
            aria-label="Page is loading"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-12 h-12 mb-4" aria-hidden="true">
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-[rgb(var(--accent))]"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-1 rounded-full border border-[rgb(var(--secondary-accent))]"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    delay: 0.2,
                    ease: "easeInOut"
                  }}
                />
                <div className="absolute inset-2 rounded-full bg-[rgb(var(--accent))]/20 backdrop-blur-sm flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-2 h-2 bg-[rgb(var(--accent))] rounded-full"
                  />
                </div>
              </div>
              <motion.p 
                className="text-[rgb(var(--foreground))]/70 font-medium text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Loading...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-[rgb(var(--background))]/80 border-b border-[rgb(var(--foreground))]/10 transition-all duration-500 ease-out"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100%)'
        }}
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo with hover effect */}
            <Link 
              href="/" 
              className="text-2xl font-display font-bold text-[rgb(var(--foreground))] transition-all duration-300 hover:text-[rgb(var(--accent))] group relative z-50"
              aria-label="Logo - Return to homepage"
            >
              <span className="relative">
                HT
                {/* Dot animation on hover */}
                <motion.span 
                  className="absolute -right-2 top-0 w-1.5 h-1.5 bg-[rgb(var(--secondary-accent))] rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                />
              </span>
            </Link>

            {/* Desktop Navigation with enhanced hover effects */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                    pathname === item.path 
                      ? 'text-[rgb(var(--accent))]' 
                      : 'text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))]'
                  }`}
                  aria-current={pathname === item.path ? 'page' : undefined}
                  aria-label={`Navigate to ${item.name.toLowerCase()} page${pathname === item.path ? ' (current page)' : ''}`}
                >
                  <span className="relative">
                    {item.name}
                    
                    {/* Active/hover underline with proper alignment */}
                    <span 
                      className={`absolute left-0 -bottom-1 h-0.5 bg-[rgb(var(--accent))] transition-all duration-300 ease-out ${
                        pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      aria-hidden="true"
                    />
                    
                    {/* Secondary accent dot on hover (only when not active) */}
                    {pathname !== item.path && (
                      <motion.span
                        className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-[rgb(var(--secondary-accent))] rounded-full opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0, x: -5 }}
                        whileHover={{ scale: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </button>
              ))}
            </nav>

            {/* Desktop Theme Toggle with hover effect */}
            <div className="hidden md:flex items-center">
              <div className="group">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button with better animation */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2 rounded-lg hover:bg-[rgb(var(--foreground))]/5 transition-all duration-300 z-50 group"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[rgb(var(--foreground))] transition-transform duration-300 group-hover:scale-110"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.g
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M6 6L18 18" />
                      <path d="M6 18L18 6" />
                    </motion.g>
                  ) : (
                    <motion.g
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M3 12h18" />
                      <path d="M3 6h18" />
                      <path d="M3 18h18" />
                    </motion.g>
                  )}
                </AnimatePresence>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - FIXED: Removed redundant "Menu" heading */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu panel - FIXED: Positioned below header */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="md:hidden fixed right-0 top-[64px] h-[calc(100vh-64px)] w-[80%] max-w-sm bg-[rgb(var(--background))] border-l border-[rgb(var(--foreground))]/10 z-40 overflow-y-auto"
            >
              <div className="flex flex-col h-full">

                {/* Navigation items - NO HEADER, starts at top */}
                <nav 
                  id="mobile-navigation"
                  className="flex-1 p-6 pt-8" 
                  role="navigation" 
                  aria-label="Mobile navigation"
                >
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleNavigation(item.path)}
                        className={`w-full text-left py-3 px-4 rounded-lg transition-all relative group ${
                          pathname === item.path 
                            ? 'bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))]' 
                            : 'text-[rgb(var(--foreground))]/70 hover:bg-[rgb(var(--foreground))]/5 hover:text-[rgb(var(--foreground))]'
                        }`}
                        aria-current={pathname === item.path ? 'page' : undefined}
                      >
                        <span className="text-lg font-medium flex items-center justify-between">
                          {item.name}
                          {/* Active indicator */}
                          {pathname === item.path && (
                            <motion.span 
                              className="w-2 h-2 bg-[rgb(var(--accent))] rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                              aria-hidden="true"
                            />
                          )}
                        </span>
                        
                        {/* Animated underline on hover (mobile) */}
                        <span 
                          className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[rgb(var(--accent))]/30 transition-all duration-300 ${
                            pathname !== item.path ? 'scale-x-0 group-hover:scale-x-100' : 'scale-x-0'
                          }`}
                          aria-hidden="true"
                        />
                      </motion.button>
                    ))}
                  </div>
                </nav>

                {/* Mobile menu footer */}
                <div className="p-6 border-t border-[rgb(var(--foreground))]/10 space-y-6">
                  {/* Theme toggle */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[rgb(var(--foreground))]/70">Theme</span>
                    <ThemeToggle />
                  </div>
                  
                  {/* Social links with hover effects */}
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-[rgb(var(--foreground))]/50 mr-3">Connect:</span>
                    <a 
                      href="https://github.com/houstontaylor" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-[rgb(var(--foreground))]/50 hover:text-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/10 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/houston-taylor/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-[rgb(var(--foreground))]/50 hover:text-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/10 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}