'use client';

import { useRef } from 'react';
import { GrainOverlay } from '@/components/editorial';

export const ResearchScene = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="research" className="relative w-full min-h-screen bg-[#020202] text-neutral-200 py-32 z-30 flex flex-col overflow-x-clip">

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12 flex flex-col gap-24 h-full flex-grow mt-32">

        {/* Phase 4: Scrambled Research Heading */}
        <div className="relative flex flex-col max-w-3xl research-heading-container">
          <div className="relative overflow-visible h-32 md:h-48">
            {/* The heading is broken into fragments to assemble dynamically */}
            <h2 className="absolute top-0 left-0 text-5xl md:text-7xl font-thin tracking-widest uppercase research-fragment fragment-1">
              Applied
            </h2>
            <h2 className="absolute top-12 left-24 text-5xl md:text-7xl font-thin tracking-widest uppercase research-fragment fragment-2">
              Research
            </h2>
            <div className="absolute top-8 left-0 w-32 h-[1px] bg-neutral-600 research-fragment fragment-3"></div>
            <div className="absolute top-24 left-12 w-64 h-[1px] bg-neutral-700 research-fragment fragment-4"></div>
          </div>
        </div>

        {/* Phase 5: Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 research-content">
          <div className="col-span-1 md:col-span-5 flex flex-col gap-8">
            <p className="text-neutral-400 font-light text-sm tracking-wide leading-relaxed">
              Explorations into human-computer interaction, spatial interfaces, and deterministic motion systems. These ongoing studies bridge the gap between architectural rigidness and organic digital fluidity.
            </p>

            <div className="flex flex-col gap-4 pt-8 border-t border-neutral-900/50">
              <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">Focus Areas</span>
              <ul className="flex flex-col gap-2 text-sm font-light text-neutral-400">
                <li>01 — Typography as Interface</li>
                <li>02 — Performant Rendering Architectures</li>
                <li>03 — Non-linear Narrative Assembly</li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 md:col-span-7 border border-neutral-900/30 bg-neutral-900/10 p-8 min-h-[400px] flex items-center justify-center">
            <span className="font-mono text-xs text-neutral-600 tracking-widest">FIGURE 1.0 (PENDING)</span>
          </div>
        </div>

      </div>

      {/* Floating Metadata */}
      <div className="absolute bottom-12 left-12 flex items-center gap-4 research-metadata opacity-30 pointer-events-none">
        <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-neutral-500">LAB NOTEBOOK</span>
        <div className="w-12 h-[1px] bg-neutral-800"></div>
        <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-neutral-400">VOL. 02</span>
      </div>

    </section>
  );
};
