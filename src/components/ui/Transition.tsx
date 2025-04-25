'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isInitialRender, setIsInitialRender] = useState(true);

  // Set isInitialRender to false after initial render
  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  // Different variants for initial page load vs subsequent navigations
  const initialVariants = {
    hidden: { opacity: 0 },
    enter: { 
      opacity: 1,
      transition: { 
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={isInitialRender ? initialVariants : variants}
        className="min-h-screen"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}