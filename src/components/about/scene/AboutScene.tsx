"use client";
import { AboutHeader } from '../header/AboutHeader';
import { AboutDashboard } from '../dashboard/AboutDashboard';
import { useRef } from 'react';
import { useAboutEntrance } from './useAboutEntrance';
import { GrainOverlay, BlueprintOverlay } from '@/components/editorial';

export const AboutScene = () => {
  const containerRef = useRef<HTMLElement>(null);
  useAboutEntrance(containerRef);

  return (
    <section ref={containerRef} id="about" className="relative w-full overflow-hidden bg-[#050505] text-neutral-200 selection:bg-neutral-800 pb-32 md:pb-48 pt-16 md:pt-24 z-10">

      {/* Drafting Lines - Extended down from Hero */}
      <div className="pointer-events-none absolute inset-0 z-0 mx-auto flex max-w-[1400px] justify-between px-6 md:px-12">
        <div className="h-full w-[1px] bg-neutral-800/20"></div>
        <div className="hidden h-full w-[1px] bg-neutral-800/20 md:block"></div>
        <div className="h-full w-[1px] bg-neutral-800/20"></div>
        <div className="hidden h-full w-[1px] bg-neutral-800/20 lg:block"></div>
        <div className="h-full w-[1px] bg-neutral-800/20"></div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-neutral-600"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-neutral-600"></div>
      </div>

      {/* Design System Overlays - completely static */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-100">
        <BlueprintOverlay opacity={0.02} />
      </div>
      <GrainOverlay opacity={0.03} />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
        <AboutHeader />
        <AboutDashboard />
      </div>
    </section>
  );
};
