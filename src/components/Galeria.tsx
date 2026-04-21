import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Stamp } from './Stamp';

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
    <section id="galeria" ref={sectionRef} className="relative bg-cream py-[120px] px-6 w-full">
      <div className="relative max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-accent italic text-burgundy text-[16px] mb-4">
              03 — Galería
            </div>
            <h2 className="font-display text-near-black text-[52px] md:text-[64px] leading-[1]">
              Cada detalle importa
            </h2>
          </div>
          <Stamp
            size={130}
            mark="rojo"
            color="#620608"
            text="HECHO CON CARIÑO · BISOU · MANAGUA · "
            className="hidden md:block shrink-0 opacity-90"
          />
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Row 1 */}
          <div className="gallery-item md:col-span-7 h-[350px] md:h-[500px] bg-cream rounded border-0 relative overflow-hidden group">
            <img src="/bisou1.webp" alt="Galeria 1" width={1024} height={1024} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="gallery-item md:col-span-5 h-[400px] md:h-[600px] md:translate-y-10 bg-cream rounded border-0 relative overflow-hidden group">
            <img src="/bisou2.webp" alt="Galeria 2" width={1536} height={1024} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* Row 2 */}
          <div className="gallery-item md:col-span-4 h-[350px] md:h-[400px] bg-cream rounded border-0 relative overflow-hidden group mt-6 md:mt-0">
            <img src="/bisou3.webp" alt="Galeria 3" width={1024} height={1024} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="gallery-item md:col-span-8 h-[300px] md:h-[350px] md:-translate-y-[30px] bg-cream rounded border-0 relative overflow-hidden group mb-6 md:mb-0">
            <img src="/bisou4.webp" alt="Galeria 4" width={1024} height={1536} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* Row 3 */}
          <div className="gallery-item md:col-span-3 h-[300px] md:h-[380px] bg-cream rounded border-0 relative overflow-hidden group">
            <img src="/bisou5.webp" alt="Galeria 5" width={1024} height={1024} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="gallery-item md:col-span-6 h-[300px] md:h-[420px] bg-cream rounded border-0 relative overflow-hidden group">
            <img src="/bisou6.webp" alt="Galeria 6" width={1536} height={1024} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="gallery-item md:col-span-3 h-[300px] md:h-[350px] md:rotate-1 md:translate-y-4 bg-cream rounded border-0 relative overflow-hidden group">
            <img src="/bisou7.webp" alt="Galeria 7" width={1600} height={2400} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* Row 4 */}
          <div className="gallery-item md:col-span-5 h-[300px] md:h-[450px] bg-cream rounded border-0 relative overflow-hidden group mt-6 md:mt-0">
            <img src="/bisou9.webp" alt="Galeria 9" width={1600} height={2400} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="gallery-item md:col-span-4 h-[350px] md:h-[380px] md:-translate-y-8 bg-cream rounded border-0 relative overflow-hidden group mb-6 md:mb-0">
            <img src="/bisou10.webp" alt="Galeria 10" width={1600} height={1067} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="gallery-item md:col-span-3 h-[300px] md:h-[400px] md:translate-y-4 bg-cream rounded border-0 relative overflow-hidden group">
            <img src="/bisou11.webp" alt="Galeria 11" width={1600} height={1689} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

        </div>
      </div>
    </section>
  );
}
