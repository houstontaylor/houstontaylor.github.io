'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle theme toggle with proper type safety
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(var(--accent),0.1)] hover:bg-[rgba(var(--accent),0.15)] transition-colors relative overflow-hidden"
      whileTap={{ scale: 0.9 }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div 
        className="absolute inset-0 bg-[rgb(var(--accent))]"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="text-[rgb(var(--accent))]"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="text-[rgb(var(--accent))]"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}