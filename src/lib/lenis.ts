import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function initLenis() {
  if (typeof window === 'undefined') return;

  if (!lenis) {
    lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      wheelMultiplier: 2,
      touchMultiplier: 1.4,
      infinite: false,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  return lenis;
}

export function getLenis() {
  return lenis;
}
