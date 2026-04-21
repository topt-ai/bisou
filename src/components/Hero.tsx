import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from './SplitText';
import { Stamp } from './Stamp';

export function Hero({ isLoaded = true }: { isLoaded?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Always pre-hide hero content so nothing flashes before the splash clears.
    gsap.set('.hero-eyebrow, .hero-sub, .hero-cta', { y: 20, opacity: 0 });
    gsap.set('.split-headline .char', { y: 50, opacity: 0 });
    gsap.set('.hero-stamp', { opacity: 0, scale: 0.9 });

    if (!isLoaded) return;
    const tl = gsap.timeline({ delay: 0.1 });

    tl.fromTo(
      '.hero-eyebrow',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        '.split-headline .char',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.02,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .fromTo(
        '.hero-sub',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        '.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.7'
      )
      .to(
        '.hero-stamp',
        { opacity: 0.9, scale: 1, duration: 0.9, ease: 'power3.out' },
        '-=0.6'
      );
  }, { scope: containerRef, dependencies: [isLoaded] });

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] bg-near-black overflow-hidden flex items-center md:items-end px-[20px] md:px-[80px] pb-[40px] md:pb-[80px]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.webp"
          alt=""
          width={2400}
          height={1600}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradients to match HTML */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0acc] via-[#0a0a0a00] to-transparent bg-[length:100%_60%] bg-bottom bg-no-repeat"></div>
      </div>

      <div className="location-tag absolute top-[120px] left-[80px] font-accent italic text-dusty-blue text-[14px] uppercase tracking-[0.2em] -rotate-90 origin-top-left -translate-x-full hidden md:block">Managua, Nicaragua</div>

      {/* Branded quality stamp */}
      <div className="hero-stamp absolute top-[110px] right-[60px] z-10 hidden md:block opacity-90">
        <Stamp size={150} mark="crema" color="#e7dcd1" text="BISOU · MUNCHIES · COFFEE · DESSERTS · " />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[600px] text-left">
        {/* Eyebrow Label */}
        <div className="hero-eyebrow font-accent italic text-dusty-blue text-[18px] tracking-[0.05em] mb-[12px]">
          munchies · coffee · desserts
        </div>

        {/* Main Headline */}
        <h1 className="split-headline font-display text-white text-[52px] md:text-[92px] leading-[1.1] tracking-normal mb-[24px] whitespace-pre-wrap">
          <SplitText text="Un lugar" className="block" />
          <SplitText text="para quedarse." className="block" />
        </h1>

        {/* Sub Line */}
        <p className="hero-sub font-body font-light text-white/70 text-[16px] max-w-[380px] mb-[32px] leading-[1.6]">
          Repostería artesanal, café de especialidad y un espacio diseñado para disfrutar en el corazón de Managua.
        </p>

        {/* CTA Button */}
        <a
          href="#menu"
          className="hero-cta bg-burgundy text-white font-body font-semibold text-[13px] uppercase tracking-[0.1em] px-[40px] py-[16px] rounded-[100px] inline-flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          Descubrir BISOU
        </a>
      </div>

      {/* Featured Section (Nosotros Peek) */}
      <div className="nosotros-peek absolute bottom-[80px] right-[80px] w-[340px] bg-cream p-[40px] rounded-[4px] text-near-black rotate-[1.5deg] shadow-[0_40px_80px_rgba(0,0,0,0.3)] hidden md:block z-10 transition-transform hover:rotate-0 duration-500">
        <div className="w-[40px] h-[2px] bg-burgundy mb-[16px]"></div>
        <span className="block font-accent italic text-burgundy text-[12px] mb-[8px]">01 — Nuestra historia</span>
        <h3 className="font-display text-[32px] leading-none mb-[16px]">Más que<br/>un café.</h3>
        <p className="font-body text-[14px] leading-[1.6] opacity-80 mb-[20px]">
          Un espacio de coworking y encuentro donde el diseño y el sabor se integran para crear una experiencia única.
        </p>
        <div className="font-accent italic text-burgundy text-[11px] cursor-pointer hover:opacity-80 transition-opacity">
          [ Ver más sobre nosotros ]
        </div>
      </div>

      {/* Scroll indicator - CSS animated */}
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div className="w-[1px] h-[40px] bg-gradient-to-b from-white to-transparent overflow-hidden relative">
          <div className="w-full h-full bg-white/50 animate-[pulseDown_2s_infinite]"></div>
        </div>
      </div>

      {/* Embedded style for pulseDown animation */}
      <style>{`
        @keyframes pulseDown {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
