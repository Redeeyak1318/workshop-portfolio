"use client";
import { AboutHeader } from '../header/AboutHeader';
import { AboutDashboard } from '../dashboard/AboutDashboard';
import { useRef } from 'react';
import { useAboutAnimation } from './useAboutAnimation';

export const AboutScene = () => {
  const containerRef = useRef<HTMLElement>(null);
  useAboutAnimation(containerRef);

  return (
    <section ref={containerRef} id="about" className="relative w-full bg-[#050505] text-neutral-200 selection:bg-neutral-800 py-32 md:py-48 z-10 border-t border-neutral-900/50">
      {/* Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-screen"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
        <AboutHeader />
        <AboutDashboard />
      </div>
    </section>
  );
};
