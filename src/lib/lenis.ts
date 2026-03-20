import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function initLenis() {
  if (typeof window === 'undefined') return;

  if (!lenis) {
    lenis = new Lenis({
      duration: 5,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      wheelMultiplier: 0.1,
      touchMultiplier: 0.1,
      infinite: false,
      anchors: true,
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
