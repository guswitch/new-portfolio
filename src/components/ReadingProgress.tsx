'use client';

import { motion, useScroll } from 'framer-motion';

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      className="bg-gray-900 dark:bg-gray-100"
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        zIndex: 1000,
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        originX: 0,
      }}
    />
  );
}
