'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ResearchData } from '../data/researchData';

interface ResearchDetailOverlayProps {
  research: ResearchData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchDetailOverlay = ({ research, isOpen, onClose }: ResearchDetailOverlayProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const displayData = research;

  if (!mounted) return null;

  return createPortal(
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 transition-all duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-[#020202]/95 backdrop-blur-md transition-opacity duration-[700ms]" 
        onClick={onClose}
      ></div>
      
      {/* Detail Panel */}
      <div 
        className={`relative w-full max-w-[1000px] min-h-[500px] bg-[#020202]/90 backdrop-blur-2xl border-t border-neutral-800/40 shadow-2xl flex flex-col md:flex-row transition-all duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-75 ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-12 opacity-0'}`}
      >
        <button 
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 text-neutral-500 hover:text-[#fce7c8] transition-colors outline-none focus-visible:text-[#fce7c8] focus-visible:ring-1 focus-visible:ring-neutral-500 p-2"
        >
          <span className="font-mono text-xs tracking-widest uppercase">Close [X]</span>
        </button>
        
        {displayData && (
          <>
            {/* Left/Top: Research Visual Area */}
            <div className="w-full md:w-2/5 relative min-h-[250px] md:min-h-full overflow-hidden flex flex-col items-center justify-center bg-[#010101]">
              <img 
                src="/images/placeholders/architectural-01.png"
                alt={displayData.title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-screen grayscale"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#020202]/90 to-transparent pointer-events-none"></div>
              
              {/* Markings */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-2 z-20 pointer-events-none">
                <span className="font-mono text-[8px] tracking-[0.4em] text-neutral-400 uppercase">NODE_{displayData.id}</span>
                <span className="font-mono text-[8px] tracking-[0.4em] text-neutral-600 uppercase">RES_ARCHIVE</span>
              </div>
            </div>

            {/* Right: Info Side */}
            <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-[url('/images/textures/grain.png')] bg-repeat mix-blend-screen">
              <span className="font-mono text-[9px] tracking-[0.4em] text-[#d8b080] uppercase mb-6">
                {displayData.researchArea}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-thin tracking-wide uppercase text-neutral-100 mb-6 leading-[1.3]">
                {displayData.title}
              </h3>
              
              <p className="text-neutral-400 font-light text-sm md:text-base leading-[1.8] tracking-wide mb-12 max-w-lg">
                {displayData.description}
              </p>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 pt-8 border-t border-neutral-800/50">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Type</span>
                  <span className="text-xs font-light text-neutral-300 tracking-wider">{displayData.type}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Status</span>
                  <span className="text-xs font-light text-[#fce7c8] tracking-wider">{displayData.status}</span>
                </div>
                {displayData.role && (
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Role</span>
                    <span className="text-xs font-light text-neutral-300 tracking-wider">{displayData.role}</span>
                  </div>
                )}
                {displayData.timeline && (
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Timeline</span>
                    <span className="text-xs font-light text-neutral-300 tracking-wider">{displayData.timeline}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};
