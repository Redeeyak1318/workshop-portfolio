'use client';

import { useRef } from 'react';
import { useResearchAssembly } from '@/animations/editorial/useResearchAssembly';
import { GrainOverlay } from '@/components/editorial';

export const ResearchScene = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Attach the notebook assembly transition
  useResearchAssembly(sectionRef);

  return (
    <section ref={sectionRef} id="research" className="relative w-full min-h-screen bg-[#020202] text-neutral-200 py-32 z-30 flex flex-col overflow-x-clip">

      {/* Notebook Transition Layer (Phase 2) */}
      {/* Acts as an irregular sheet covering the boundary. */}
      <div className="notebook-layer absolute top-0 left-0 w-full h-[150vh] bg-[#030303] z-50 pointer-events-none origin-bottom">
        <div
          className="absolute inset-0 w-full h-full bg-[#030303]"
          style={{
            // Irregular, torn-paper-like edge using combined gradients
            maskImage: 'radial-gradient(ellipse at 50% 10%, black 30%, transparent 70%), linear-gradient(to top, transparent 0%, black 15%, black 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 10%, black 30%, transparent 70%), linear-gradient(to top, transparent 0%, black 15%, black 100%)',
            WebkitMaskComposite: 'add',
            maskComposite: 'add'
          }}
        >
          <GrainOverlay opacity={0.06} />

          {/* Phase 3 & 6: Mathematical Atmosphere (Decorative only) */}
          <div className="absolute top-[10%] right-[10%] opacity-20 flex flex-col items-end gap-1 font-mono text-[8px] text-neutral-500 tracking-widest math-mark">
            <span>ƒ(x,y) = ∫(∇·v)</span>
            <div className="w-16 h-[1px] bg-neutral-600"></div>
            <span>λ 0.998</span>
          </div>

          <div className="absolute top-[25%] left-[5%] opacity-20 math-mark">
            <svg width="40" height="40" viewBox="0 0 40 40" stroke="currentColor" strokeWidth="0.5" fill="none">
              <circle cx="20" cy="20" r="15" />
              <line x1="20" y1="5" x2="20" y2="35" />
              <line x1="5" y1="20" x2="35" y2="20" />
            </svg>
          </div>

          <div className="absolute top-[35%] right-[20%] opacity-10 font-mono text-[6px] tracking-[0.5em] math-mark">
            [SYS-VAR: 0x4F]
          </div>
        </div>
      </div>

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
