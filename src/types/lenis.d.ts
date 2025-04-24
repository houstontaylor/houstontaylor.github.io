declare module '@studio-freight/lenis' {
    interface LenisOptions {
      duration?: number;
      easing?: (t: number) => number;
      direction?: 'vertical' | 'horizontal';
      gestureDirection?: 'vertical' | 'horizontal';
      smooth?: boolean;
      mouseMultiplier?: number;
      smoothTouch?: boolean;
      touchMultiplier?: number;
      infinite?: boolean;
      // Add any other options Lenis supports
    }
    
    export default class Lenis {
      constructor(options?: LenisOptions);
      raf(time: number): void;
      destroy(): void;
      // Add any other methods Lenis supports
    }
  }