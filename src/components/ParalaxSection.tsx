'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();

  // camadas
  const yBg = useTransform(scrollY, [0, 1000], [0, -120]);
  const scaleBg = useTransform(scrollY, [0, 1000], [1, 1.1]);

  const yContent = useTransform(scrollY, [0, 1000], [0, -80]);

  //   const opacity = useTransform(scrollY, [0, 400], [1, 0.6]);

  return (
    <div className="relative">
      {/* background layer */}
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0 z-0" />

      {/* content layer */}
      <motion.div style={{ y: yContent }} className="relative z-10">
        {children}
      </motion.div>
    </div>
  );
}
