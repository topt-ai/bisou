import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Nosotros } from './components/Nosotros';
import { Menu } from './components/Menu';
import { Galeria } from './components/Galeria';
import { Videos } from './components/Videos';
import { Ubicacion } from './components/Ubicacion';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Setup native smooth scroll for anchor links so Lenis takes over
    const documentLinks = document.querySelectorAll('a[href^="#"]');
    
    // Minimal custom smooth scrolling to anchor if not handled natively 
    const handleAnchorClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (target && target.startsWith('#') && target.length > 1) {
        lenis.scrollTo(target, { offset: 0 });
      }
    };
    
    documentLinks.forEach(link => link.addEventListener('click', handleAnchorClick as EventListener));

    return () => {
      documentLinks.forEach(link => link.removeEventListener('click', handleAnchorClick as EventListener));
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-near-black">
      <Navbar />
      <Hero />
      <Nosotros />
      <Menu />
      <Galeria />
      <Videos />
      <Ubicacion />
      <Footer />
    </div>
  );
}
