'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = [
  'Audio Software Engineer',
  'DSP Developer',
  'Audio Systems Engineer',
  'Real-time Audio Engineer',
  'Audio Infrastructure Engineer',
];

export function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 border border-gray-900 dark:border-gray-300 text-sm tracking-wide w-auto inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 10, color: '#9CA3AF' }} // gray-400
          animate={{ opacity: 1, y: 0, color: '#111827' }} // gray-900
          exit={{ opacity: 0, y: -10, color: '#6B7280' }} // gray-500
          transition={{
            duration: 0.4,
            ease: 'easeOut',
          }}
          className="
            text-left
            text-lg md:text-xl 
            leading-relaxed 
            max-w-2xl 
            font-space-grotesk
            dark:text-gray-400
          "
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
