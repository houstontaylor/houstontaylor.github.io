'use client';

import CustomCursor from '@/components/ui/Cursor';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Header from './Header';
import Footer from './Footer';
import PageTransition from '@/components/ui/Transition';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
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
