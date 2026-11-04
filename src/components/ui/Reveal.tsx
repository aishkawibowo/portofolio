'use client';

import { motion, type Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  stagger?: number;
  variant?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left';
}

const variants: Record<string, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  },
  'slide-left': {
    hidden: { opacity: 0, y: -24, scale: 0.95 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  },
  'scale-up': {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  variant = 'fade-up',
}: RevealProps) {
  const currentVariant = variants[variant] || variants['fade-up'];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-30px' }}
      variants={currentVariant}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
