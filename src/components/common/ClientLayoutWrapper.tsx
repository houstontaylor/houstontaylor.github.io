'use client';

import { ReactNode, useEffect, useState } from 'react';
import CustomCursor from '@/components/ui/Cursor';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

export default function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simulate initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Initial loading animation */}
      {/* Initial loading animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[rgb(var(--background))] flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-16 h-16">
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-[rgb(var(--accent))]"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 1.2, 1],
                    opacity: [0, 1, 0, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.2
                  }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-full border border-[rgb(var(--secondary-accent))]"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 1.1, 1],
                    opacity: [0, 1, 0, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.3,
                    repeatDelay: 0.2
                  }}
                />
                <div className="absolute inset-2 rounded-full bg-[rgb(var(--accent))]/20 backdrop-blur-sm flex items-center justify-center text-[rgb(var(--accent))] font-medium">
                  HT
                </div>
              </div>
              <motion.p 
                className="mt-4 text-[rgb(var(--foreground))]/70 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Loading...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom cursor only on desktop */}
      {!isMobile && <CustomCursor />}
      
      {/* Main content with page transitions */}
      <SmoothScroll>
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-8"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </SmoothScroll>
    </>
  );
}