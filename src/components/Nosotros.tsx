import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Nosotros() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Left column animation
    gsap.fromTo(
      leftColRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    );

    // Right column photo animation
    gsap.fromTo(
      rightColRef.current,
      { x: 30, opacity: 0, rotation: 4 },
      {
        x: 0,
        opacity: 1,
        rotation: 1.5,
        duration: 1.2,
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
    <section id="nosotros" ref={sectionRef} className="bg-cream py-[120px] px-6 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
        
        {/* Left Column (55%) */}
        <div ref={leftColRef} className="w-full md:w-[55%] flex flex-col items-start">
          <div className="w-[60px] h-[2px] bg-burgundy mb-6"></div>
          <div className="font-accent italic text-burgundy text-[16px] mb-4">
            01 — Nuestra historia
          </div>
          
          <h2 className="font-display text-near-black text-[52px] md:text-[64px] leading-[1] mb-8">
            Más que <br /> un café.
          </h2>

          <div className="font-body text-near-black/80 text-[17px] leading-[1.8] max-w-[480px] space-y-6">
            <p>
              BISOU nació como un punto de encuentro donde el buen café, los sabores reconfortantes y un
              ambiente cuidado conviven con la creatividad y la productividad.
            </p>
            <p>
              No es solo un lugar para comer postres. Es un espacio al que se viene a trabajar, a reunirse,
              a desconectarse. Una cafetería con espíritu de coworking, pensada para quienes valoran la
              experiencia completa.
            </p>
            <p>
              Diseño, sabor y funcionalidad, integrados en un solo lugar que se siente propio.
            </p>
          </div>
        </div>

        {/* Right Column (45%) */}
        <div className="w-full md:w-[45%] flex flex-col items-center">
          <div 
            ref={rightColRef}
            className="w-full max-w-[420px] aspect-[4/5] bg-cream rounded-lg relative flex items-center justify-center -rotate-2 overflow-hidden border-0 shadow-xl"
          >
            <img src="/bisou12.webp" alt="Interior BISOU" width={1024} height={1536} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
          
          <div className="font-accent italic text-burgundy text-[15px] mt-8 text-center">
            Managua, Nicaragua
          </div>
        </div>

      </div>
    </section>
  );
}
