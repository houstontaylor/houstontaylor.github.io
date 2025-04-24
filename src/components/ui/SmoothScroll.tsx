'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  // Use a ref to store the Lenis instance
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Create a new Lenis instance with smoother settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease out
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    
    // Store the instance in the ref
    lenisRef.current = lenis;

    // Create the animation frame loop function
    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Clean up the Lenis instance when component unmounts
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return <>{children}</>;
}