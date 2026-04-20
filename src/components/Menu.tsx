import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header Reveal
    gsap.fromTo(
      headerRef.current?.children as unknown as Element[],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="menu" ref={sectionRef} className="bg-near-black py-[120px] px-6 w-full text-white">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="font-accent italic text-dusty-blue text-[16px] mb-4">
            02 — Nuestro menú
          </div>
          <h2 className="font-display text-[52px] md:text-[72px] leading-tight">
            Para todos los antojos
          </h2>
        </div>

        {/* Menu Image Content */}
        <div ref={contentRef} className="w-full flex justify-center">
          <img
            src="/bisou-menu-1.webp"
            alt="Menú Bisou"
            width={1132}
            height={1600}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[800px] h-auto object-contain rounded-sm"
          />
        </div>

      </div>
    </section>
  );
}
