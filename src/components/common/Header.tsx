'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Header () {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Simple scroll handler that works
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Navigation handler with immediate loading
  const handleNavigation = (path: string) => {
    if (pathname === path) return;
    
    setIsNavigating(true);
    router.push(path);
  }

  // Reset navigation state after page loads completely
  useEffect(() => {
    if (isNavigating) {
      // Wait longer to ensure ClientLayoutWrapper animations complete
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
      {isNavigating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-[rgb(var(--background))]/90 backdrop-blur-sm flex items-center justify-center"
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

      <header
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-[rgb(var(--background))]/80 border-b border-[rgb(var(--foreground))]/10 transition-all duration-500 ease-out"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100%)'
        }}
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-display font-bold text-[rgb(var(--foreground))] hover:text-[rgb(var(--accent))] transition-colors"
              aria-label="Houston Taylor - Return to homepage"
            >
              HT
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-[rgb(var(--accent))] relative group ${
                    pathname === item.path 
                      ? 'text-[rgb(var(--accent))]' 
                      : 'text-[rgb(var(--foreground))]/70'
                  }`}
                  aria-current={pathname === item.path ? 'page' : undefined}
                  aria-label={`Navigate to ${item.name.toLowerCase()} page${pathname === item.path ? ' (current page)' : ''}`}
                >
                  {item.name}
                  
                  {/* Active indicator */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[rgb(var(--accent))] transition-all duration-300 ${
                      pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </nav>

            {/* Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}