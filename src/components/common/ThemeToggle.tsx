'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
        isDark ? 'bg-accent/30' : 'bg-muted'
      } focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Toggle thumb */}
      <motion.div
        className={`h-4 w-4 rounded-full bg-background shadow transition-transform`}
        layout
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          transform: isDark ? 'translateX(1.25rem)' : 'translateX(0.25rem)',
        }}
      />

      <span className="absolute left-1 text-xs">☀️</span>
      <span className="absolute right-1 text-xs">🌙</span>
    </button>
  );
}