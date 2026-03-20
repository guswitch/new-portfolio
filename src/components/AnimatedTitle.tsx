'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function AnimatedTitle({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, -60]);
  const letterSpacing = useTransform(scrollY, [0, 300], ['0em', '0.1em']);

  return (
    <motion.h1
      style={{ y, letterSpacing }}
      className="mb-8 text-8xl tracking-tight font-anton uppercase"
    >
      {children}
    </motion.h1>
  );
}
