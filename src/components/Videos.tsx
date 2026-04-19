import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Videos() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // MatchMedia for mobile/desktop different behaviors
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      // Desktop stagger 3 phones
      gsap.fromTo(
        '.phone-frame',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );
    });

    mm.add('(max-width: 767px)', () => {
      // Mobile - single phone visible
      gsap.fromTo(
        '.phone-frame',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    });

  }, { scope: sectionRef });

  return (
    <section id="videos" ref={sectionRef} className="bg-near-black py-[120px] px-6 w-full text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="font-accent italic text-dusty-blue text-[16px] mb-4">
            04 — Momentos
          </div>
          <h2 className="font-display text-[52px] md:text-[64px] leading-[1]">
            Así se vive BISOU
          </h2>
        </div>

        {/* Phones Layout */}
        <div className="flex justify-center items-center gap-6">
          
          {/* Phone 1 (Hidden on mobile) */}
          <div className="phone-frame hidden md:flex flex-col items-center justify-center w-[220px] aspect-[9/16] rounded-[32px] border-[3px] border-white/15 bg-white/[0.04] shadow-[0_24px_60px_rgba(0,0,0,0.5)] -rotate-[4deg] translate-y-[20px] transition-all duration-[400ms] hover:scale-104 hover:rotate-0 hover:border-white/40 cursor-pointer overflow-hidden relative group">
            <Play className="w-10 h-10 text-white/50 mb-2 group-hover:scale-110 group-hover:text-white transition-all" />
            <span className="font-body font-light text-[11px] text-white/30">Video próximamente</span>
            {/* Replace with <video> tag: autoplay muted loop playsInline */}
          </div>

          {/* Phone 2 (Centered, visible on all) */}
          <div className="phone-frame flex flex-col items-center justify-center w-[280px] md:w-[220px] aspect-[9/16] rounded-[32px] border-[3px] border-white/15 bg-white/[0.04] shadow-[0_24px_60px_rgba(0,0,0,0.5)] rotate-0 -translate-y-[10px] transition-all duration-[400ms] hover:scale-104 hover:border-white/40 cursor-pointer overflow-hidden relative group">
            <Play className="w-10 h-10 text-white/50 mb-2 group-hover:scale-110 group-hover:text-white transition-all" />
            <span className="font-body font-light text-[11px] text-white/30">Video próximamente</span>
            {/* Replace with <video> tag: autoplay muted loop playsInline */}
          </div>

          {/* Phone 3 (Hidden on mobile) */}
          <div className="phone-frame hidden md:flex flex-col items-center justify-center w-[220px] aspect-[9/16] rounded-[32px] border-[3px] border-white/15 bg-white/[0.04] shadow-[0_24px_60px_rgba(0,0,0,0.5)] rotate-[3deg] translate-y-[15px] transition-all duration-[400ms] hover:scale-104 hover:rotate-0 hover:border-white/40 cursor-pointer overflow-hidden relative group">
            <Play className="w-10 h-10 text-white/50 mb-2 group-hover:scale-110 group-hover:text-white transition-all" />
            <span className="font-body font-light text-[11px] text-white/30">Video próximamente</span>
            {/* Replace with <video> tag: autoplay muted loop playsInline */}
          </div>

        </div>
      </div>
    </section>
  );
}
