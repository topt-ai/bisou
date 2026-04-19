import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const TABS = ['Tartas de Queso', 'Café', 'Munchies', 'Postres'];

const CHEESECAKE_MENU = [
  { name: 'Original', sm: 'C$220', md: 'C$950', lg: 'C$1,850' },
  { name: 'Nutella y Nueces', sm: 'C$250', md: 'C$980', lg: 'C$1,920' },
  { name: 'Caramelo Salado', sm: 'C$250', md: 'C$980', lg: 'C$1,920' },
  { name: 'Pistacho', sm: 'C$250', md: 'C$980', lg: 'C$1,920' },
  { name: 'Café', sm: 'C$220', md: 'C$950', lg: 'C$1,850' },
  { name: 'Frutos Rojos', sm: 'C$250', md: 'C$980', lg: 'C$1,920' },
  { name: 'Fresa', sm: 'C$220', md: 'C$950', lg: 'C$1,850' },
  { name: 'Maracuyá', sm: 'C$220', md: 'C$950', lg: 'C$1,850' },
  { name: 'Pitahaya', sm: 'C$220', md: 'C$950', lg: 'C$1,850' },
];

const ESPECIALES = [
  { name: 'Azúcar Flameada', md: 'C$980', lg: 'C$1,920' },
  { name: 'Pistacho Cremoso', md: 'C$1,000', lg: 'C$2,000' },
  { name: 'Cacao Artesanal', md: 'C$1,000', lg: 'C$2,000' },
];

// Placeholders for other tabs
const PLACEHOLDER_ITEMS = [
  { name: 'Item Clásico', price: 'C$150' },
  { name: 'Variedad Especial', price: 'C$180' },
  { name: 'Selección Premium', price: 'C$210' },
  { name: 'Opción Ligera', price: 'C$140' },
];

export function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(TABS[0]);

  useGSAP(() => {
    // Header Reveal
    gsap.fromTo(
      headerRef.current?.children as unknown as Element[],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  // Animate tab content smoothly on switch
  useGSAP(() => {
    gsap.fromTo(
      tabContentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: 'all' }
    );
  }, [activeTab]);

  return (
    <section id="menu" ref={sectionRef} className="bg-near-black py-[120px] px-6 w-full text-white">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="font-accent italic text-dusty-blue text-[16px] mb-4">
            02 — Nuestro menú
          </div>
          <h2 className="font-display text-[52px] md:text-[72px] leading-tight">
            Para todos los antojos
          </h2>
        </div>

        {/* Horizontal Tab Navigation */}
        <div className="overflow-x-auto no-scrollbar mb-16 border-b border-white/[0.08]">
          <div className="flex justify-center md:space-x-12 min-w-max px-4">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'font-body uppercase tracking-[0.12em] text-[13px] pb-4 px-4 transition-all duration-300 relative whitespace-nowrap',
                  activeTab === tab ? 'text-white' : 'text-white/40 hover:text-white/70'
                )}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-burgundy" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div ref={tabContentRef} className="w-full">
          {activeTab === 'Tartas de Queso' ? (
            <div className="flex flex-col gap-16">
              
              {/* Main Sizes Table */}
              <div>
                <div className="text-center mb-8">
                  <p className="font-body font-light text-dusty-blue italic">
                    Mediano (6 porciones) · Grande (12 Porciones)
                  </p>
                </div>

                <div className="w-full text-left max-w-[800px] mx-auto">
                  <div className="grid grid-cols-4 md:grid-cols-5 gap-4 mb-4 pb-4 border-b border-white/[0.08] font-body font-medium uppercase text-[11px] tracking-widest text-dusty-blue text-right pr-2">
                    <div className="col-span-2 text-left pl-2">Variedad</div>
                    <div>Individual</div>
                    <div className="hidden md:block">Mediano</div>
                    <div>Grande</div>
                  </div>

                  {CHEESECAKE_MENU.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-4 md:grid-cols-5 gap-4 py-4 border-b border-white/[0.08] items-center hover:bg-white/[0.04] transition-colors group px-2 rounded-sm">
                      <div className="col-span-2 font-accent italic text-[18px] group-hover:text-dusty-blue transition-colors">{item.name}</div>
                      <div className="font-body text-[16px] text-cream text-right">{item.sm}</div>
                      <div className="hidden md:block font-body text-[16px] text-cream text-right">{item.md}</div>
                      <div className="font-body text-[16px] text-cream text-right">{item.lg}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Especiales & Cremoso Split */}
              <div className="border-t border-burgundy/50 max-w-[800px] mx-auto w-full pt-16 flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
                
                {/* Especiales */}
                <div className="flex-1">
                  <h3 className="font-display text-[32px] md:text-[36px] mb-8">Especiales</h3>
                  
                  <div className="grid grid-cols-3 gap-2 pb-4 border-b border-white/[0.08] font-body font-medium uppercase text-[11px] tracking-widest text-dusty-blue text-right pr-2">
                    <div className="text-left pl-2"></div>
                    <div>Mediano</div>
                    <div>Grande</div>
                  </div>

                  {ESPECIALES.map((item, idx) => (
                    <div key={`esp-${idx}`} className="grid grid-cols-3 gap-2 py-4 border-b border-white/[0.08] items-center px-2 group hover:bg-white/[0.04]">
                      <div className="font-accent italic text-[17px] group-hover:text-dusty-blue transition-colors">{item.name}</div>
                      <div className="font-body text-[15px] text-cream text-right">{item.md}</div>
                      <div className="font-body text-[15px] text-cream text-right">{item.lg}</div>
                    </div>
                  ))}
                </div>

                {/* Cremoso al Punto */}
                <div className="md:w-[300px] flex flex-col pt-2 md:pt-0">
                   <h3 className="font-display text-[32px] md:text-[36px] mb-2 leading-none">Cremoso al Punto</h3>
                   <p className="font-body font-light italic text-dusty-blue mb-6">(Para compartir 2)</p>
                   
                   <p className="font-accent italic text-[17px] text-white/90 leading-relax mb-6">
                     Original · Azúcar Flameada · Pistacho Cremoso · Cacao Artesanal
                   </p>
                   
                   <div className="mt-auto">
                     <span className="font-body font-medium text-[24px] text-cream">C$400</span>
                   </div>
                </div>

              </div>

            </div>
          ) : (
            <div className="max-w-[600px] mx-auto py-8">
              {/* PLACEHOLDER — replace with real menu items */}
              {PLACEHOLDER_ITEMS.map((item, idx) => (
                <div key={idx} className="flex justify-between py-5 border-b border-white/[0.08] group hover:bg-white/[0.04] px-4 transition-colors">
                  <div className="font-accent italic text-[20px] group-hover:text-dusty-blue">{item.name}</div>
                  <div className="font-body text-[18px] text-cream">{item.price}</div>
                </div>
              ))}
              
              <div className="text-center mt-16 pb-8">
                <p className="font-body font-light text-dusty-blue italic">
                  Menú completo próximamente
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
