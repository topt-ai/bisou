import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Phone, Map } from 'lucide-react';
import { IconInstagram } from './icons/IconInstagram';
import { IconTikTok } from './icons/IconTikTok';
import { IconWaze } from './icons/IconWaze';

gsap.registerPlugin(ScrollTrigger);

export function Ubicacion() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Left Content Fade Up
    gsap.fromTo(
      leftColRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    );

    // Right Map Fade In
    gsap.fromTo(
      rightColRef.current,
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
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
    <section id="ubicacion" ref={sectionRef} className="bg-cream py-[120px] px-6 w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 md:gap-20">
        
        {/* Left Column */}
        <div ref={leftColRef} className="w-full md:w-1/2 flex flex-col items-start pt-4">
          <div className="font-accent italic text-burgundy text-[16px] mb-4">
            05 — Ubicación
          </div>
          <h2 className="font-display text-near-black text-[48px] md:text-[56px] leading-[1] mb-12">
            Ven a visitarnos
          </h2>
          
          <div className="flex flex-col space-y-8 mb-12">
            {/* Address */}
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-burgundy mr-4 shrink-0 mt-0.5" />
              <p className="font-body text-[16px] text-near-black">
                Managua, Nicaragua
                <br />
                <span className="text-sm opacity-60">(Dirección exacta próximamente)</span>
              </p>
            </div>

            {/* Hours */}
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-burgundy mr-4 shrink-0 mt-0.5" />
              <div className="font-body text-[16px] text-near-black space-y-1">
                <p>Lunes a Viernes: 8:00am – 9:00pm</p>
                <p>Sábados y Domingos: 9:00am – 10:00pm</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-burgundy mr-4 shrink-0 mt-0.5" />
              <p className="font-body text-[16px] text-near-black">
                (505) 0000-0000
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-near-black hover:text-burgundy transition-colors" aria-label="Instagram">
              <IconInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-near-black hover:text-burgundy transition-colors" aria-label="TikTok">
              <IconTikTok className="w-6 h-6" />
            </a>
            <a href="#" className="text-near-black hover:text-dusty-blue transition-colors" aria-label="Waze">
              <IconWaze className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Column (Map Placeholder) */}
        <div ref={rightColRef} className="w-full md:w-1/2">
          <div className="w-full h-[400px] bg-cream border border-solid border-dusty-blue/30 rounded-lg flex flex-col items-center justify-center p-6 shadow-sm overflow-hidden relative">
            <Map className="w-10 h-10 text-dusty-blue mb-4 opacity-50" />
            <span className="font-body font-light text-dusty-blue text-[15px]">Mapa próximamente</span>
            {/* Replace with Google Maps <iframe> embed */}
          </div>
        </div>

      </div>
    </section>
  );
}
