import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VIDEOS = [
  { src: '/videobisou1.mp4', poster: '/videobisou1-poster.webp' },
  { src: '/videobisou2.mp4', poster: '/videobisou2-poster.webp' },
  { src: '/videobisou3.mp4', poster: '/videobisou3-poster.webp' },
];

const PHONE_FRAME_BASE =
  'phone-frame shrink-0 snap-center flex flex-col items-center justify-center w-[280px] md:w-[220px] aspect-[9/16] rounded-[32px] border-[3px] border-white/15 bg-white/[0.04] shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-all duration-[400ms] hover:scale-104 hover:border-white/40 cursor-pointer overflow-hidden relative group';

const FRAME_OFFSETS = [
  'md:-rotate-[4deg] md:translate-y-[20px] hover:rotate-0',
  'rotate-0 md:-translate-y-[10px]',
  'md:rotate-[3deg] md:translate-y-[15px] hover:rotate-0',
];

export function Videos() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useGSAP(() => {
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
  }, { scope: sectionRef });

  // Lazy-attach video sources only when the section is near viewport,
  // so the page load doesn't pay for ~6MB per video upfront.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const attachSources = () => {
      videoRefs.current.forEach((video, i) => {
        if (!video || video.dataset.loaded === '1') return;
        video.src = VIDEOS[i].src;
        video.dataset.loaded = '1';
        video.load();
        const playPromise = video.play();
        if (playPromise) playPromise.catch(() => {});
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      attachSources();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          attachSources();
          io.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section id="videos" ref={sectionRef} className="bg-near-black py-[120px] px-6 w-full text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">

        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <div className="font-accent italic text-dusty-blue text-[16px] mb-4">
            04 — Momentos
          </div>
          <h2 className="font-display text-[52px] md:text-[64px] leading-[1]">
            Así se vive BISOU
          </h2>
        </div>

        {/* Phones Layout - horizontally scrollable on mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:justify-center items-center gap-6 py-8 px-[10vw] md:px-0 mx-[-24px] md:mx-0 w-[calc(100%+48px)] md:w-full">
          {VIDEOS.map((v, i) => (
            <div key={v.src} className={`${PHONE_FRAME_BASE} ${FRAME_OFFSETS[i]}`}>
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                className="absolute inset-0 w-full h-full object-cover z-0"
                poster={v.poster}
                preload="none"
                muted
                loop
                playsInline
                autoPlay
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
