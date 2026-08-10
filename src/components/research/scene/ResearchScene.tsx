'use client';

import { useRef, useState } from 'react';
import { GrainOverlay } from '@/components/editorial';
import { ResearchTree } from '../tree/ResearchTree';
import { ResearchDetailOverlay } from './ResearchDetailOverlay';
import { ResearchData } from '../data/researchData';

export const ResearchScene = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeResearch, setActiveResearch] = useState<ResearchData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleOpenDetail = (data: ResearchData) => {
    setActiveResearch(data);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <section ref={sectionRef} id="research" className="relative w-full min-h-screen bg-[#020202] text-neutral-200 py-32 z-30 flex flex-col overflow-hidden">

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12 flex flex-col gap-16 h-full flex-grow mt-16 md:mt-24">

        {/* Section Heading & Intro */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-thin tracking-widest uppercase text-neutral-200">
            Applied<br />Research
          </h2>
          <p className="text-neutral-400 font-light text-sm tracking-wide leading-relaxed">
            Applied research sits at the intersection of mathematical reasoning, computational systems, signal analysis, and practical engineering problems. Some of these works are published, some are being revised, and others are still taking shape.
          </p>
        </div>

        {/* The Research Tree Architecture */}
        <ResearchTree onOpenDetail={handleOpenDetail} />

      </div>

      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <GrainOverlay opacity={0.06} />
      </div>

      {/* Floating Metadata */}
      <div className="absolute bottom-12 left-12 flex items-center gap-4 research-metadata opacity-30 pointer-events-none z-10">
        <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-neutral-500">LAB NOTEBOOK</span>
        <div className="w-12 h-[1px] bg-neutral-800"></div>
        <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-neutral-400">ARCHIVE_SYS</span>
      </div>

      {/* Detail Overlay */}
      <ResearchDetailOverlay 
        research={activeResearch} 
        isOpen={isDetailOpen} 
        onClose={handleCloseDetail} 
      />

    </section>
  );
};
