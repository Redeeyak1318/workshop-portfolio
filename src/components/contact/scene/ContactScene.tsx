'use client';

import { useRef } from 'react';
import { GrainOverlay } from '@/components/editorial';

export const ContactScene = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Attach the final dissolution transition
  // useResearchToContact(sectionRef);

  return (
    <section ref={sectionRef} id="contact" className="relative w-full min-h-screen bg-[#010101] text-neutral-200 py-48 z-40 flex flex-col justify-center items-center overflow-x-clip">

      {/* Background Atmosphere - Extremely Quiet */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <GrainOverlay opacity={0.05} />
      </div>

      {/* Phase 6: Embedded Atmospheric Image (Radial Fade) */}
      <div
        className="contact-image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] z-0 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 60%)',
          maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)'
        }}
      ></div>

      {/* Main Content Container - Centered and confident */}
      <div className="relative z-10 mx-auto w-full max-w-[1000px] px-6 md:px-12 flex flex-col items-center text-center gap-16 contact-content">

        {/* Phase 4: Emergence Order 1 & 2 */}
        <div className="flex flex-col items-center gap-2 contact-meta">
          <div className="w-[1px] h-12 bg-neutral-800 mb-4 contact-line"></div>
          <span className="font-mono text-[10px] tracking-[0.5em] text-neutral-500 uppercase contact-marker">End of Document</span>
          <span className="font-mono text-[8px] tracking-widest text-neutral-600 contact-location">40°42'46"N 74°00'21"W</span>
        </div>

        {/* Emergence Order 3 & 4 */}
        <div className="flex flex-col items-center gap-8 contact-statement">
          <h2 className="text-6xl md:text-8xl font-thin tracking-widest uppercase contact-heading">
            Contact
          </h2>
          <p className="text-neutral-400 font-light text-lg md:text-xl tracking-wide max-w-lg leading-relaxed contact-text">
            Available for architectural software systems, spatial interfaces, and creative engineering commissions.
          </p>
        </div>

        {/* Emergence Order 5 */}
        <div className="flex items-center gap-12 mt-8 contact-links">
          <a href="mailto:hello@example.com" className="group flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase transition-colors group-hover:text-neutral-300">Email</span>
            <div className="w-0 h-[1px] bg-neutral-500 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a href="https://github.com" className="group flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase transition-colors group-hover:text-neutral-300">GitHub</span>
            <div className="w-0 h-[1px] bg-neutral-500 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a href="https://twitter.com" className="group flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase transition-colors group-hover:text-neutral-300">X (Twitter)</span>
            <div className="w-0 h-[1px] bg-neutral-500 transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>

      </div>

    </section>
  );
};
