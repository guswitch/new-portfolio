'use client';

import { useEffect } from 'react';
import { initLenis } from '@/src/lib/lenis';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initLenis();
  }, []);

  return children;
}
