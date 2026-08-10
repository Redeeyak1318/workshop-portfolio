'use client';

import { ResearchData } from '../data/researchData';

interface ResearchAnnotationProps {
  data: ResearchData;
  isActive: boolean;
}

export const ResearchAnnotation = ({ data, isActive }: ResearchAnnotationProps) => {
  return (
    <div 
      className={`absolute top-1/2 left-1/2 flex flex-col pointer-events-none transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${isActive ? 'opacity-100 translate-y-0 scale-100 blur-none' : 'opacity-0 translate-y-2 scale-95 blur-sm'}`}
      style={{
        // Match the end of the connector line: width is 24/32 depending on breakpoint. 
        // We'll use a fixed transform approximation to place it nicely.
        transform: 'translate(30px, -40px)',
        minWidth: '200px'
      }}
    >
      <div className="flex items-end gap-2 mb-1">
        <span className="font-mono text-[9px] text-[#fce7c8] tracking-[0.2em]">{data.id}</span>
      </div>
      
      <h4 className="text-xs md:text-sm font-bold tracking-widest uppercase text-neutral-200 leading-tight mb-2">
        {data.shortTitle}
      </h4>
      
      <div className="flex flex-col gap-1 border-l border-neutral-700/50 pl-2">
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#d8b080]">
          {data.type}
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-500">
          {data.status}
        </span>
      </div>
    </div>
  );
};
