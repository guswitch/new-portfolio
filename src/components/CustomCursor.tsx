'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setHover(true);
    const handleLeave = () => setHover(false);

    window.addEventListener('mousemove', move);

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: pos.x - 8,
        y: pos.y - 8,
        scale: hover ? 1.5 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
      className="fixed top-0 left-0 w-4 h-4 border border-black dark:border-white pointer-events-none z-[9999] dark:mix-blend-difference"
    />
  );
}
