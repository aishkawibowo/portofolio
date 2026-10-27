'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  stagger?: number;
  variant?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left';
}

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  variant = 'fade-up',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : variant === 'slide-left' ? -24 : 24,
      scale: shouldReduceMotion ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once, margin: '-30px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
