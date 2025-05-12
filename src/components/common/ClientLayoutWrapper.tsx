'use client';

import { useEffect, useState } from 'react';
import CustomCursor from '@/components/ui/Cursor';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
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

  // Simulate brief loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Initial loading animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="w-12 h-12 rounded-full border border-pink-500"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom cursor only on desktop */}
      {!isMobile && <CustomCursor />}
      
      {/* Main content with page transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <SmoothScroll>
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </motion.div>
      </AnimatePresence>
    </>
  );
}