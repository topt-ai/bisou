import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Galeria() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Reveal all gallery items using stagger
    gsap.fromTo(
      '.gallery-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="galeria" ref={sectionRef} className="bg-cream py-[120px] px-6 w-full">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-accent italic text-burgundy text-[16px] mb-4">
            03 — Galería
          </div>
          <h2 className="font-display text-near-black text-[52px] md:text-[64px] leading-[1]">
            Cada detalle importa
          </h2>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Row 1 */}
          <div className="gallery-item md:col-span-7 h-[350px] md:h-[500px] bg-cream border border-dashed border-dusty-blue/40 rounded flex items-center justify-center hover:border-burgundy hover:border-solid hover:border-[2px] transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
            {/* Replace bg placeholder with <img src="..." /> */}
            <p className="font-body font-light text-dusty-blue text-[12px] uppercase z-10 transition-opacity duration-300 group-hover:opacity-0">
              [ imagen ]
            </p>
          </div>
          <div className="gallery-item md:col-span-5 h-[400px] md:h-[600px] md:translate-y-10 bg-cream border border-dashed border-dusty-blue/40 rounded flex items-center justify-center hover:border-burgundy hover:border-solid hover:border-[2px] transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
            {/* Replace bg placeholder with <img src="..." /> */}
            <p className="font-body font-light text-dusty-blue text-[12px] uppercase z-10 transition-opacity duration-300 group-hover:opacity-0">
              [ imagen ]
            </p>
          </div>

          {/* Row 2 */}
          <div className="gallery-item md:col-span-4 h-[350px] md:h-[400px] bg-cream border border-dashed border-dusty-blue/40 rounded flex items-center justify-center hover:border-burgundy hover:border-solid hover:border-[2px] transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group mt-6 md:mt-0">
            {/* Replace bg placeholder with <img src="..." /> */}
            <p className="font-body font-light text-dusty-blue text-[12px] uppercase z-10 transition-opacity duration-300 group-hover:opacity-0">
              [ imagen ]
            </p>
          </div>
          <div className="gallery-item md:col-span-8 h-[300px] md:h-[350px] md:-translate-y-[30px] bg-cream border border-dashed border-dusty-blue/40 rounded flex items-center justify-center hover:border-burgundy hover:border-solid hover:border-[2px] transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group mb-6 md:mb-0">
            {/* Replace bg placeholder with <img src="..." /> */}
            <p className="font-body font-light text-dusty-blue text-[12px] uppercase z-10 transition-opacity duration-300 group-hover:opacity-0">
              [ imagen ]
            </p>
          </div>

          {/* Row 3 */}
          <div className="gallery-item md:col-span-3 h-[300px] md:h-[380px] bg-cream border border-dashed border-dusty-blue/40 rounded flex items-center justify-center hover:border-burgundy hover:border-solid hover:border-[2px] transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
            {/* Replace bg placeholder with <img src="..." /> */}
            <p className="font-body font-light text-dusty-blue text-[12px] uppercase z-10 transition-opacity duration-300 group-hover:opacity-0">
              [ imagen ]
            </p>
          </div>
          <div className="gallery-item md:col-span-6 h-[300px] md:h-[420px] bg-cream border border-dashed border-dusty-blue/40 rounded flex items-center justify-center hover:border-burgundy hover:border-solid hover:border-[2px] transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
            {/* Replace bg placeholder with <img src="..." /> */}
            <p className="font-body font-light text-dusty-blue text-[12px] uppercase z-10 transition-opacity duration-300 group-hover:opacity-0">
              [ imagen ]
            </p>
          </div>
          <div className="gallery-item md:col-span-3 h-[300px] md:h-[350px] md:rotate-1 md:translate-y-4 bg-cream border border-dashed border-dusty-blue/40 rounded flex items-center justify-center hover:border-burgundy hover:border-solid hover:border-[2px] transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
            {/* Replace bg placeholder with <img src="..." /> */}
            <p className="font-body font-light text-dusty-blue text-[12px] uppercase z-10 transition-opacity duration-300 group-hover:opacity-0">
              [ imagen ]
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
