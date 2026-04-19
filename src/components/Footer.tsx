import React from 'react';
import { IconInstagram } from './icons/IconInstagram';
import { IconTikTok } from './icons/IconTikTok';
import { IconWaze } from './icons/IconWaze';

export function Footer() {
  return (
    <footer className="bg-near-black pt-[100px] pb-8 px-6 text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-20 gap-12 md:gap-8 gap-x-20">
          
          {/* Column 1: Brand Base */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <div className="relative block h-8 w-32 mb-4">
              <img src="/logo-blanco.png" alt="BISOU" className="h-full w-full object-contain object-left relative z-10" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
            <p className="font-body font-light text-white/50 text-[14px] mb-1">
              Munchies · Coffee · Desserts
            </p>
            <p className="font-body font-light text-white/50 text-[14px]">
              Managua, Nicaragua
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col">
            <h4 className="font-body font-medium uppercase text-dusty-blue text-[11px] tracking-widest mb-6">
              Navegar
            </h4>
            <nav className="flex flex-col space-y-4">
              {['Nosotros', 'Menú', 'Galería', 'Ubicación'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="font-body text-white/70 text-[14px] leading-2 hover:text-cream relative w-max rounded-none group transition-colors"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 top-6 w-0 h-[1.5px] bg-burgundy transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col">
            <h4 className="font-body font-medium uppercase text-dusty-blue text-[11px] tracking-widest mb-6">
              Síguenos
            </h4>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-burgundy transition-colors" aria-label="Instagram">
                <IconInstagram className="w-[22px] h-[22px]" />
              </a>
              <a href="#" className="text-white hover:text-burgundy transition-colors" aria-label="TikTok">
                <IconTikTok className="w-[22px] h-[22px]" />
              </a>
              <a href="#" className="text-white hover:text-burgundy transition-colors" aria-label="Waze">
                <IconWaze className="w-[22px] h-[22px]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body font-light text-white/30 text-[12px] text-center md:text-left">
            © 2025 BISOU. Todos los derechos reservados.
          </p>
          <p className="font-body font-light text-white/30 text-[12px] text-center md:text-right">
            Creada con cariño por{' '}
            <a 
              href="https://tuwebsv.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-white transition-colors relative inline-block group"
            >
              Acevedo
              <span className="absolute left-0 bottom-0 top-4 w-full h-[1px] bg-burgundy scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
