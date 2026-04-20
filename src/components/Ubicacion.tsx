import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock } from 'lucide-react';
import { IconInstagram } from './icons/IconInstagram';
import { IconTikTok } from './icons/IconTikTok';
import { IconFacebook } from './icons/IconFacebook';
import { IconWhatsApp } from './icons/IconWhatsApp';
import { SOCIALS } from '../lib/socials';

gsap.registerPlugin(ScrollTrigger);

export function Ubicacion() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
    <section id="contacto" ref={sectionRef} className="bg-cream py-[120px] px-6 w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 md:gap-20">

        {/* Left Column */}
        <div ref={leftColRef} className="w-full md:w-1/2 flex flex-col items-start pt-4">
          <div className="font-accent italic text-burgundy text-[16px] mb-4">
            05 — Contáctanos
          </div>
          <h2 className="font-display text-near-black text-[48px] md:text-[56px] leading-[1] mb-8">
            Ordena por WhatsApp
          </h2>
          <p className="font-body text-near-black/80 text-[17px] leading-[1.7] max-w-[460px] mb-12">
            Puedes hacer tu pedido directamente por WhatsApp. Muy pronto podrás visitarnos en nuestro nuevo local.
          </p>

          <div className="flex flex-col space-y-8 mb-12">
            {/* Address */}
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-burgundy mr-4 shrink-0 mt-0.5" />
              <p className="font-body text-[16px] text-near-black">
                Las Colinas, Managua
                <br />
                <span className="text-sm opacity-60">Nuevo local próximamente</span>
              </p>
            </div>

            {/* Hours */}
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-burgundy mr-4 shrink-0 mt-0.5" />
              <div className="font-body text-[16px] text-near-black space-y-1">
                <p>Lunes a Viernes: 8:00am – 9:00pm</p>
                <p>Sábados y Domingos: 9:00am – 12:00pm</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="text-near-black hover:text-burgundy transition-colors" aria-label="Instagram">
              <IconInstagram className="w-6 h-6" />
            </a>
            <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" className="text-near-black hover:text-burgundy transition-colors" aria-label="TikTok">
              <IconTikTok className="w-6 h-6" />
            </a>
            <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="text-near-black hover:text-burgundy transition-colors" aria-label="Facebook">
              <IconFacebook className="w-6 h-6" />
            </a>
            <a href={SOCIALS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-near-black hover:text-burgundy transition-colors" aria-label="WhatsApp">
              <IconWhatsApp className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Column — WhatsApp CTA */}
        <div ref={rightColRef} className="w-full md:w-1/2">
          <div className="w-full h-full min-h-[400px] bg-near-black text-white rounded-lg flex flex-col items-start justify-center p-10 md:p-12 shadow-xl relative overflow-hidden">
            <div className="font-accent italic text-dusty-blue text-[14px] mb-4">
              Pedidos
            </div>
            <h3 className="font-display text-[40px] md:text-[48px] leading-[1] mb-6">
              ¿Qué te gustaría<br />probar hoy?
            </h3>
            <p className="font-body font-light text-white/70 text-[15px] leading-[1.7] mb-10 max-w-[360px]">
              Escríbenos para tomar tu pedido, reservar o resolver cualquier duda. Te respondemos lo antes posible.
            </p>
            <a
              href={SOCIALS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-burgundy text-white font-body font-semibold text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              <IconWhatsApp className="w-5 h-5" />
              Ordena acá
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
