"use client";
import { useEffect, useState, type RefObject } from 'react';

/**
 * Returns a value in [0, 1] representing how far the referenced element has
 * travelled through the viewport. 0 = element's top hits the bottom of the
 * viewport, 1 = element's bottom hits the top of the viewport.
 * Uses IntersectionObserver to gate work + a passive scroll listener while
 * intersecting, so it costs nothing when off-screen.
 */
export function useScrollProgress(ref: RefObject<HTMLElement>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setProgress(0.5);
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setProgress(0);
      return;
    }

    let isIntersecting = false;
    let rafId: number | null = null;

    const compute = () => {
      rafId = null;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const total = vh + rect.height;
      const travelled = vh - rect.top;
      const ratio = Math.min(1, Math.max(0, travelled / total));
      setProgress(ratio);
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(compute);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isIntersecting = entry.isIntersecting;
          if (isIntersecting) {
            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('resize', onScroll, { passive: true });
            compute();
          } else {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            // Snap to terminal state so cards scrolled past keep their reveal,
            // and cards above the viewport stay un-revealed.
            const rect = node.getBoundingClientRect();
            setProgress(rect.top < 0 ? 1 : 0);
          }
        }
      },
      { threshold: [0, 0.01, 0.5, 0.99, 1] }
    );

    observer.observe(node);
    compute();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [ref]);

  return progress;
}
