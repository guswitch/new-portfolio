'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  index: number;
}

export function AnimatedSection({ children, index }: Props) {
  return (
    <motion.section
      data-index={index}
      className="h-screen sticky top-0 flex items-center justify-center"
      initial={{ scale: 0.98, opacity: 0.9 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      }}
      viewport={{ amount: 0.6 }}
      style={{
        zIndex: index + 10,
      }}
    >
      {children}
    </motion.section>
  );
}
