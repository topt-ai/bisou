import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px threshold to trigger morph effect
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    if (menuOpen) {
      gsap.fromTo(
        '.mobile-link',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 w-full h-[60px] pointer-events-none">
        <div
          className={cn(
            'flex items-center justify-between pointer-events-auto w-full max-w-[800px] transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[100px] bg-white/[0.03] backdrop-blur-[12px] border border-white/20 h-[60px] pl-[32px] pr-[10px]'
          )}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="relative block">
              <img src="/logo-negro.png" alt="bisou" className="h-[28px] object-contain logo-filter" />
            </a>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-[32px]">
            {['Nosotros', 'Menú', 'Galería', 'Ubicación'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className={cn(
                  'font-body uppercase tracking-[0.15em] text-[11px] font-medium opacity-80 transition-colors text-white hover:text-white/70'
                )}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right CTA / Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="#menu"
              className="hidden md:flex items-center justify-center bg-burgundy text-white font-body font-semibold text-[11px] uppercase tracking-[0.1em] rounded-[100px] px-[24px] py-[12px] max-h-[40px] hover:opacity-90 transition-opacity"
            >
              Ver Menú
            </a>
            
            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className={cn("w-6 h-6 text-white")} />
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-near-black text-white p-6 flex flex-col justify-center pointer-events-auto">
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <nav className="flex flex-col space-y-8">
            {['Nosotros', 'Menú', 'Galería', 'Ubicación'].map((item) => (
              <div key={item} className="overflow-hidden">
                <a
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="mobile-link block font-display text-5xl hover:text-burgundy transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </div>
            ))}
          </nav>

          <div className="overflow-hidden mt-16">
            <a
              href="#menu"
              className="mobile-link inline-flex items-center justify-center bg-burgundy text-white font-body font-medium text-[15px] tracking-wide rounded-full px-8 h-14"
              onClick={() => setMenuOpen(false)}
            >
              Ver el Menú
            </a>
          </div>
        </div>
      )}
    </>
  );
}
