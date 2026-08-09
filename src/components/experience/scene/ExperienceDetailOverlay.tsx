'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ExperienceData } from '../data/experienceData';

interface ExperienceDetailOverlayProps {
  experience: ExperienceData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ExperienceDetailOverlay = ({ experience, isOpen, onClose }: ExperienceDetailOverlayProps) => {
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

  const displayExp = experience;

  if (!mounted) return null;

  return createPortal(
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 transition-all duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md transition-opacity duration-[700ms]" 
        onClick={onClose}
      ></div>
      
      {/* Detail Panel */}
      <div 
        className={`relative w-full max-w-5xl bg-[#080808] border border-neutral-800 shadow-[0_40px_100px_rgba(0,0,0,0.9)] flex flex-col md:flex-row transition-all duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-75 ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-12 opacity-0'}`}
      >
        <button 
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 text-neutral-500 hover:text-white transition-colors outline-none focus-visible:text-white focus-visible:ring-1 focus-visible:ring-neutral-500 p-2"
        >
          <span className="font-mono text-xs tracking-widest uppercase">Close [X]</span>
        </button>
        
        {displayExp && (
          <>
            {/* Left: Image Side (if photograph/polaroid), otherwise abstract graphic */}
            <div className="w-full md:w-1/2 relative aspect-video md:aspect-auto md:min-h-[600px] bg-neutral-900 border-b md:border-b-0 md:border-r border-neutral-800/60 overflow-hidden">
              {displayExp.image ? (
                <Image 
                  src={displayExp.image} 
                  alt={displayExp.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale-[20%] contrast-110 opacity-90" 
                />
              ) : (
                <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center opacity-30">
                  <span className="font-mono text-[8px] tracking-[1em] text-neutral-500 uppercase rotate-90 whitespace-nowrap">DOCUMENT_EVIDENCE</span>
                </div>
              )}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)] pointer-events-none"></div>
              
              {/* Architectural Markings */}
              <div className="absolute bottom-6 left-6 flex items-center gap-4 z-20 pointer-events-none">
                <span className="font-mono text-[8px] tracking-[0.4em] text-neutral-400 uppercase">LOG_{displayExp.id}</span>
                <div className="w-8 h-[1px] bg-neutral-700"></div>
                <span className="font-mono text-[8px] tracking-[0.4em] text-neutral-500 uppercase">ARCHIVE_EXP</span>
              </div>
            </div>

            {/* Right: Info Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-500 uppercase mb-8">
                {displayExp.category}
              </span>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-thin tracking-widest uppercase text-neutral-100 mb-8 leading-[1.2]">
                {displayExp.title}
              </h3>
              
              <p className="text-neutral-400 font-light text-sm md:text-base leading-[1.8] tracking-wide mb-12 max-w-lg">
                {displayExp.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 pt-8 border-t border-neutral-800/50">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Role</span>
                  <span className="text-xs font-light text-neutral-300 uppercase tracking-wider">{displayExp.role}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Timeline</span>
                  <span className="text-xs font-light text-neutral-300 uppercase tracking-wider">{displayExp.timeline}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Status</span>
                  <span className="text-xs font-light text-neutral-300 uppercase tracking-wider">{displayExp.status}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};
