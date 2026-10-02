'use client';

import { RefObject, useEffect, useRef } from 'react';

export interface HeroBackgroundProps {
  bgJpRef: RefObject<HTMLDivElement | null>;
}

export const HeroBackground = ({ bgJpRef }: HeroBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Respect reduced motion preference: do not autoplay video if enabled
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* Video Background Layer */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        aria-hidden="true"
      >
        <source src="/videos/hero-walk.mp4" type="video/mp4" />
      </video>

      {/* Dark atmospheric overlay - ensures typography and portrait remain legible */}
      <div className="absolute inset-0 z-10 bg-[#050505]/25" />

      {/* Huge Outlined Japanese Text */}
      <div ref={bgJpRef} className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full flex-col items-center justify-center pointer-events-none opacity-10 mix-blend-screen z-20">
        <span 
          className="text-[45vw] font-medium leading-[0.8] tracking-widest text-transparent md:text-[40vw]"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
        >
          創造
        </span>
        <span className="mt-4 text-3xl font-thin uppercase tracking-[1em] text-neutral-600 md:text-5xl lg:text-7xl lg:tracking-[1.2em]">
          Create
        </span>
      </div>
    </div>
  );
};
