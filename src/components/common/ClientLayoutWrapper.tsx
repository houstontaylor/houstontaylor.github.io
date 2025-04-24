'use client';

import CustomCursor from '@/components/ui/Cursor';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageTransition from '@/components/ui/Transition';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <CustomCursor />
      <SmoothScroll>
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </SmoothScroll>
    </>
  );
}