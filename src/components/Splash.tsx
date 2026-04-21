import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

type SplashProps = {
  /** Called once the intro is fully done so the site can start animating in. */
  onComplete: () => void;
};

/**
 * Brand intro: cream backdrop, isotipo eases in, holds, eases out,
 * then the backdrop fades to reveal the site. Choreographed with a
 * GSAP timeline so each phase composes cleanly.
 *
 * Total runtime ~1.7s (or instant if the user prefers reduced motion).
 */
export function Splash({ onComplete }: SplashProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLImageElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll while the splash is up.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      // Snap straight through for users who opted out of motion.
      document.body.style.overflow = prevOverflow;
      onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = prevOverflow;
        onComplete();
      },
    });

    // Phase 1 — mark eases in (fade + soft scale-up)
    tl.fromTo(
      markRef.current,
      { opacity: 0, scale: 0.86, y: 8 },
      { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: 'power3.out' },
      0
    );

    // Phase 1b — accent ring expands behind the mark
    tl.fromTo(
      ringRef.current,
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, duration: 1.0, ease: 'power3.out' },
      0.05
    );

    // Phase 2 — hold so the brand registers
    tl.to({}, { duration: 0.45 });

    // Phase 3 — mark + ring lift slightly and fade out together
    tl.to(
      [markRef.current, ringRef.current],
      { opacity: 0, scale: 1.08, y: -4, duration: 0.5, ease: 'power2.inOut' },
      '>'
    );

    // Phase 4 — backdrop curtain fades, revealing the site underneath
    tl.to(
      containerRef.current,
      { opacity: 0, duration: 0.45, ease: 'power2.inOut' },
      '-=0.25'
    );

    return () => {
      tl.kill();
      document.body.style.overflow = prevOverflow;
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-cream"
    >
      {/* Soft expanding ring behind the mark */}
      <div
        ref={ringRef}
        className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-burgundy/20"
      />
      <img
        ref={markRef}
        src="/isotipo-rojo.webp"
        alt=""
        width={256}
        height={300}
        decoding="async"
        fetchPriority="high"
        className="relative w-[160px] md:w-[200px] h-auto"
      />
    </div>
  );
}
