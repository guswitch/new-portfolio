'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MorphBackground() {
  const size = 1000;
  const spacing = 50;

  const horizontalLines = Array.from({ length: size / spacing }, (_, i) => i);
  const verticalLines = Array.from({ length: size / spacing }, (_, i) => i);

  const [activeLines, setActiveLines] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLines = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * (horizontalLines.length + verticalLines.length))
      );
      setActiveLines(randomLines);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen absolute top-0 left-0 overflow-hidden repeat-0 pointer-events-none inset-0">
      <motion.svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 w-screen h-screen">
        {/* Horizontais */}
        {horizontalLines.map((i) => {
          const y = i * spacing;
          const index = i;

          return (
            <motion.line
              key={`h-${i}`}
              x1="0"
              x2={size}
              y1={y}
              y2={y}
              className="stroke-black dark:stroke-white opacity-[0.08] dark:opacity-[0.08]"
              strokeWidth="1"
              initial={{ strokeDasharray: size, strokeDashoffset: size }}
              animate={
                activeLines.includes(index) ? { strokeDashoffset: 0 } : { strokeDashoffset: size }
              }
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
                delay: Math.random() * 0.3,
              }}
              style={{ opacity: 0.08 }}
            />
          );
        })}

        {/* Verticais */}
        {verticalLines.map((i) => {
          const x = i * spacing;
          const index = i + horizontalLines.length;

          return (
            <motion.line
              key={`v-${i}`}
              x1={x}
              x2={x}
              y1="0"
              y2={size}
              className="stroke-black dark:stroke-white opacity-[0.08] dark:opacity-[0.08]"
              strokeWidth="1"
              initial={{ strokeDasharray: size, strokeDashoffset: size }}
              animate={
                activeLines.includes(index) ? { strokeDashoffset: 0 } : { strokeDashoffset: size }
              }
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
                delay: Math.random() * 0.3,
              }}
              style={{ opacity: 0.08 }}
            />
          );
        })}
      </motion.svg>
    </div>
  );
}
