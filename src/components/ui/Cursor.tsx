'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import useMousePosition from '@/hooks/useMousePosition';

export default function CustomCursor() {
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { x, y } = useMousePosition();

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const hoverable = document.querySelectorAll('a, button, [data-hoverable]');
    hoverable.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      hoverable.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorVariants: Variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'rgba(var(--foreground) / 0.1)',
      border: '1px solid rgba(var(--foreground) / 0.15)',
      x: x ? x - 16 : -100,
      y: y ? y - 16 : -100,
      mixBlendMode: 'difference',
      borderRadius: '50%',
    },
    hover: {
      height: 48,
      width: 48,
      backgroundColor: 'rgba(var(--accent) / 0.2)',
      border: '1px solid rgba(var(--accent) / 0.3)',
      x: x ? x - 24 : -100,
      y: y ? y - 24 : -100,
      borderRadius: '50%',
    },
    click: {
      height: 24,
      width: 24,
      backgroundColor: 'rgba(var(--accent) / 0.4)',
      x: x ? x - 12 : -100,
      y: y ? y - 12 : -100,
      borderRadius: '50%',
    },
  };

  const dotVariants: Variants = {
    default: {
      height: 6,
      width: 6,
      backgroundColor: 'rgb(var(--foreground))',
      x: x ? x - 3 : -100,
      y: y ? y - 3 : -100,
      mixBlendMode: 'difference',
      borderRadius: '50%',
    },
    hover: {
      height: 10,
      width: 10,
      backgroundColor: 'rgb(var(--accent))',
      x: x ? x - 5 : -100,
      y: y ? y - 5 : -100,
      borderRadius: '50%',
    },
    click: {
      height: 0,
      width: 0,
      x: x || -100,
      y: y || -100,
      borderRadius: '50%',
    },
  };

  const cursorState = isClicking ? 'click' : isHovering ? 'hover' : 'default';

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <motion.div
        className="fixed rounded-full"
        variants={cursorVariants}
        animate={cursorState}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        style={{ opacity: 1 }}
      />
      <motion.div
        className="fixed rounded-full"
        variants={dotVariants}
        animate={cursorState}
        transition={{ duration: 0.1 }}
        style={{ opacity: 1 }}
      />
    </div>
  );
}
