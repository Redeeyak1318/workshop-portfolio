'use client';

import { useState } from 'react';
import { GrainOverlay, BlueprintOverlay } from '@/components/editorial';
import { ExperienceBoard } from '../board/ExperienceBoard';
import { ExperienceDetailOverlay } from './ExperienceDetailOverlay';
import { ExperienceData } from '../data/experienceData';

export const ExperienceScene = () => {
  const [activeExp, setActiveExp] = useState<ExperienceData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleOpenExperience = (exp: ExperienceData) => {
    setActiveExp(exp);
    setIsDetailOpen(true);
  };

  const handleCloseExperience = () => {
    setIsDetailOpen(false);
  };

  return (
    <section id="experience" className="relative w-full min-h-screen bg-[#050505] text-neutral-200 py-32 z-20 border-t border-neutral-900/50 flex flex-col overflow-hidden">

      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <BlueprintOverlay opacity={0.02} />
        <GrainOverlay opacity={0.04} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12 flex flex-col gap-12 h-full flex-grow mt-8">

        {/* Section Heading */}
        <div className="flex flex-col gap-4 max-w-2xl exp-heading relative z-20">
          <h2 className="text-4xl md:text-5xl font-thin tracking-widest uppercase">
            System<br />Log
          </h2>
          <p className="text-neutral-400 font-light text-sm tracking-wide max-w-md mt-4 leading-relaxed">
            A chronological mapping of projects, research, and technical milestones. Structured as a physical engineering archive.
          </p>
        </div>

        {/* The Physical Board Canvas */}
        <ExperienceBoard onOpenExperience={handleOpenExperience} />

      </div>

      {/* Detail Overlay Modal */}
      <ExperienceDetailOverlay 
        experience={activeExp}
        isOpen={isDetailOpen}
        onClose={handleCloseExperience}
      />

    </section>
  );
};
