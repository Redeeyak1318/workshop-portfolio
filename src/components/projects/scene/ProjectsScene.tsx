'use client';

import { useRef } from 'react';
import { ProjectsHeader } from '../header/ProjectsHeader';
import { FeaturedProject } from '../featured/FeaturedProject';
import { ProjectsArchive } from '../archive/ProjectsArchive';
import { ProjectsMetadata } from '../metadata/ProjectsMetadata';
import { GrainOverlay, BlueprintOverlay } from '@/components/editorial';
import { useBlueprintTransition } from '@/animations/editorial/useBlueprintTransition';

export const ProjectsScene = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Define strict refs for the Featured Project 
  const featuredBgTextRef = useRef<HTMLDivElement>(null);
  const featuredImageRef = useRef<HTMLDivElement>(null);
  const featuredTitleRef = useRef<HTMLHeadingElement>(null);
  const featuredPhilosophyRef = useRef<HTMLParagraphElement>(null);
  const featuredMetadataRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Architectural blueprint transition
  useBlueprintTransition(containerRef);

  return (
    <section ref={containerRef} id="projects" className="relative w-full overflow-hidden bg-[#050505] text-neutral-200 selection:bg-neutral-800 py-24 md:py-32 z-10 border-t border-neutral-900/50">
      
      {/* Architectural Workspace Layer */}
      <div className="projects-blueprint-overlay absolute inset-0 z-10 pointer-events-none opacity-0">
        {/* Light Sweep Layer */}
        <div className="ed-sweep absolute inset-0 z-20 mix-blend-screen bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] opacity-0"></div>

        {/* Design System Overlays */}
        <div className="ed-blueprint absolute inset-0 z-10 opacity-100">
          <BlueprintOverlay opacity={0.02} />
        </div>
        <GrainOverlay opacity={0.03} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12 flex flex-col gap-24 md:gap-32 lg:gap-40">
        <ProjectsHeader />
        
        <div className="flex flex-col gap-32 md:gap-48 ed-content">
          <div>
            <FeaturedProject 
              bgTextRef={featuredBgTextRef}
              imageRef={featuredImageRef}
              titleRef={featuredTitleRef}
              philosophyRef={featuredPhilosophyRef}
              metadataRefs={featuredMetadataRefs}
            />
          </div>
          
          <ProjectsArchive />
        </div>

      </div>
    </section>
  );
};
