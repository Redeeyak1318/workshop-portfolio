'use client';

import { useRef } from 'react';
import { useBlueprintRoll } from '@/animations/editorial/useBlueprintRoll';
import { GrainOverlay, BlueprintOverlay } from '@/components/editorial';

export const ExperienceScene = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Attach the blueprint roll transition to the boundary between Projects and Experience
  useBlueprintRoll(sectionRef);

  return (
    <section ref={sectionRef} id="experience" className="relative w-full min-h-screen bg-[#050505] text-neutral-200 py-32 z-20 border-t border-neutral-900/50 flex flex-col overflow-x-clip">

      {/* Blueprint Roll Transition Layer (Phase 2) */}
      {/* Anchored to the top of Experience, extending downward. As it rolls, we translate it upwards */}
      <div className="blueprint-roll-layer absolute top-0 left-0 w-full h-[150vh] bg-[#050505] z-50 pointer-events-none origin-bottom">
        {/* We use mask-image to fade the bottom edge naturally into darkness as it rolls up */}
        <div
          className="absolute inset-0 w-full h-full bg-[#070707]"
          style={{
            maskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 100%)'
          }}
        >
          {/* Subtle blueprint grid/grain on the rolling sheet */}
          <div className="absolute inset-0 opacity-20"><BlueprintOverlay opacity={0.1} /></div>
          <GrainOverlay opacity={0.06} />

          {/* Technical marks that move with the sheet (Phase 4) */}
          <div className="absolute bottom-[20%] left-12 flex flex-col gap-1 opacity-30">
            <span className="font-mono text-[8px] tracking-[0.4em] text-neutral-400">ARCHIVE SHEET REV. A</span>
            <div className="w-24 h-[1px] bg-neutral-500"></div>
          </div>
          <div className="absolute bottom-[30%] right-12 w-[1px] h-48 bg-neutral-800"></div>
          <div className="absolute bottom-[35%] right-8 rotate-90 font-mono text-[8px] tracking-widest text-neutral-600">
            ROLLING-Z:50
          </div>
        </div>
      </div>

      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-40">
        <BlueprintOverlay opacity={0.03} />
        <GrainOverlay opacity={0.05} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12 flex flex-col gap-24 h-full flex-grow mt-16">

        {/* Section Heading */}
        <div className="flex flex-col gap-4 max-w-2xl exp-heading">
          <h2 className="text-4xl md:text-6xl font-thin tracking-widest uppercase">
            Professional<br />Experience
          </h2>
          <p className="text-neutral-400 font-light text-sm tracking-wide max-w-md mt-4 leading-relaxed">
            A chronological timeline of engineering and design roles, structured as an ongoing architectural build.
          </p>
        </div>

        {/* Timeline Axis & Entries */}
        <div className="relative pl-6 md:pl-12 flex-grow exp-timeline">
          {/* Timeline Axis */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-800 exp-axis"></div>

          {/* Entries Container */}
          <div className="flex flex-col gap-24 exp-entries">
            {/* Entry 1 Placeholder */}
            <div className="relative flex flex-col gap-4 exp-entry">
              <div className="absolute -left-6 md:-left-12 top-2 w-[1px] h-4 bg-neutral-500"></div>
              <div className="absolute -left-6 md:-left-12 top-2 w-3 h-[1px] bg-neutral-500"></div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">2023 — Present</span>
                <h3 className="text-2xl font-light tracking-wider">Senior Engineer</h3>
                <span className="text-neutral-400 text-sm">Technology Co.</span>
              </div>
              <p className="text-neutral-400 font-light text-sm max-w-xl leading-relaxed mt-2">
                Led frontend architecture for enterprise applications. Established comprehensive design systems and optimized rendering performance across complex dashboards.
              </p>
            </div>

            {/* Entry 2 Placeholder */}
            <div className="relative flex flex-col gap-4 exp-entry">
              <div className="absolute -left-6 md:-left-12 top-2 w-[1px] h-4 bg-neutral-700"></div>
              <div className="absolute -left-6 md:-left-12 top-2 w-3 h-[1px] bg-neutral-700"></div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">2020 — 2023</span>
                <h3 className="text-2xl font-light tracking-wider">Frontend Developer</h3>
                <span className="text-neutral-400 text-sm">Design Agency</span>
              </div>
              <p className="text-neutral-400 font-light text-sm max-w-xl leading-relaxed mt-2">
                Developed interactive experiences and bespoke editorial websites using React, GSAP, and Next.js.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Metadata */}
      <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2 exp-metadata opacity-30 pointer-events-none">
        <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-neutral-500">DOC.REV</span>
        <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-neutral-400">EXP-001</span>
      </div>

    </section>
  );
};
