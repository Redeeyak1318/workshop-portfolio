'use client';

import Image from 'next/image';
import { ALL_PROJECTS, ProjectData } from '../data/projectsData';

interface FeaturedProjectProps {
  onOpenProject: (project: ProjectData) => void;
}

export const FeaturedProject = ({ onOpenProject }: FeaturedProjectProps) => {
  // Only show the ones that have a defined position for the scattered layout
  const featuredProjects = ALL_PROJECTS.filter(p => p.pos);

  return (
    <div className="relative w-full">
      {/* Visual Archive - Scattered Photographic Frames */}
      <div className="group/archive relative w-full flex flex-col md:block md:h-[900px] gap-12 md:gap-0 mt-8 mb-16 z-10">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            tabIndex={0}
            onClick={() => onOpenProject(project)}
            onKeyDown={(e) => e.key === 'Enter' && onOpenProject(project)}
            className="
              group/frame
              relative md:absolute w-full max-w-[340px] lg:max-w-[380px] mx-auto md:mx-0
              bg-[#0a0a0a] border border-neutral-800/80 p-3 lg:p-4 shadow-xl
              cursor-pointer outline-none
              transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)]
              
              md:top-[var(--top)] md:left-[var(--left)]
              md:[transform:scale(1)_rotate(var(--base-rotate))]
              md:group-hover/archive:opacity-40
              md:group-hover/archive:[transform:scale(0.96)_rotate(var(--base-rotate))]
              md:group-hover/archive:z-0
              md:hover:!opacity-100
              md:hover:![transform:scale(1.06)_rotate(0deg)]
              md:hover:!z-40
              md:hover:!shadow-[0_40px_80px_rgba(0,0,0,0.9)]
              md:hover:!border-neutral-600/60
              md:hover:!bg-[#111]
              
              focus-visible:!opacity-100
              focus-visible:![transform:scale(1.06)_rotate(0deg)]
              focus-visible:!z-40
              focus-visible:!border-neutral-500
            "
            style={{
              '--top': project.pos?.top,
              '--left': project.pos?.left,
              '--base-rotate': project.pos?.rotate,
              zIndex: project.pos?.zIndex,
            } as React.CSSProperties}
          >
            {/* Photographic Image Area */}
            <div className="relative w-full aspect-[4/3] bg-neutral-900 mb-4 overflow-hidden border border-neutral-800/50">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover grayscale contrast-110 opacity-70 transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] md:group-hover/frame:opacity-100 md:group-hover/frame:grayscale-0 md:group-hover/frame:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-900 mix-blend-overlay opacity-30 pointer-events-none"></div>
            </div>
            
            {/* Frame Identity / Metadata */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center border-b border-neutral-800/60 pb-3 mb-3">
                <span className="font-mono text-[10px] text-neutral-500">{project.id}</span>
                <span className="font-mono text-[8px] tracking-[0.2em] text-neutral-500 uppercase">{project.category}</span>
              </div>
              <h4 className="font-light text-sm tracking-[0.15em] text-neutral-300 uppercase transition-colors duration-[600ms] md:group-hover/frame:text-white">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
