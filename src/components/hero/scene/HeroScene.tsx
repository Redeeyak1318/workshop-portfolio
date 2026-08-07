'use client';

import { useRef } from 'react';
import { HeroBackground } from '../background/HeroBackground';
import { HeroTypography } from '../typography/HeroTypography';
import { HeroPortrait } from '../portrait/HeroPortrait';
import { HeroMarquee } from '../marquee/HeroMarquee';
import { HeroScrollCue } from '../scroll-cue/HeroScrollCue';
import { Navigation } from '@/components/navigation';
import { useHeroAnimation } from './useHeroAnimation';

export const HeroScene = () => {
  const containerRef = useRef<HTMLElement>(null);
  useHeroAnimation(containerRef);

  return (
    <main ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-neutral-200 selection:bg-neutral-800">
      <div className="hero-nav">
        <Navigation />
      </div>
      
      {/* Refined CSS Noise Texture */}
      <div 
        className="hero-noise pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-screen" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      {/* Subtle Blueprint Grid */}
      <div 
        className="hero-blueprint pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
      />
      
      <HeroBackground />
      
      {/* Editorial Guide Lines */}
      <div className="hero-guidelines pointer-events-none absolute inset-0 z-0 mx-auto flex max-w-[1400px] justify-between px-6 md:px-12">
        <div className="h-full w-[1px] bg-neutral-800/20"></div>
        <div className="hidden h-full w-[1px] bg-neutral-800/20 md:block"></div>
        <div className="h-full w-[1px] bg-neutral-800/20"></div>
        <div className="hidden h-full w-[1px] bg-neutral-800/20 lg:block"></div>
        <div className="h-full w-[1px] bg-neutral-800/20"></div>
      </div>

      {/* Grid Coordinates & Subtle Metadata */}
      <div className="hero-metadata pointer-events-none absolute left-6 top-32 z-10 hidden font-mono text-[8px] tracking-[0.3em] text-neutral-600 md:block">
        35°40'59"N 139°44'06"E
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col justify-between px-6 py-24 md:px-12 md:py-32 lg:py-40">
        
        {/* Top spacer / structural metadata */}
        <div className="flex w-full max-w-[150px] flex-col gap-3 pt-6 md:pt-0">
          <div className="hero-guidelines h-[1px] w-full bg-neutral-800/30"></div>
          <span className="hero-metadata font-mono text-[8px] tracking-[0.4em] text-neutral-600">ARCHIVE_01</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 relative flex-1 items-center mt-12 md:mt-0">
          <div className="col-span-1 md:col-span-7 lg:col-span-7 z-20">
            <HeroTypography />
          </div>
          
          <div className="col-span-1 mt-16 flex justify-start md:col-span-5 lg:col-span-5 md:mt-0 md:justify-end z-10">
            <HeroPortrait />
          </div>
        </div>
        
        {/* Lower Section Balance */}
        <div className="hero-guidelines mt-24 flex w-full items-end justify-between pb-24 md:mt-12 md:pb-16 border-t border-neutral-800/20 pt-8">
          <div className="hero-metadata">
            <HeroScrollCue />
          </div>
          <div className="hero-jp hidden font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-600 md:block" style={{ writingMode: 'vertical-rl' }}>
            PROJECT CASE STUDY
          </div>
        </div>
      </div>

      <div className="hero-marquee">
        <HeroMarquee />
      </div>
    </main>
  );
};
