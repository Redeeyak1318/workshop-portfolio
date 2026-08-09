'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ProjectData } from '../data/projectsData';

interface ProjectDetailOverlayProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailOverlay = ({ project, isOpen, onClose }: ProjectDetailOverlayProps) => {
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

  // Use a fallback project if null during transition
  const displayProject = project;

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
          aria-label="Close project details"
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 text-neutral-500 hover:text-white transition-colors outline-none focus-visible:text-white focus-visible:ring-1 focus-visible:ring-neutral-500 p-2"
        >
          <span className="font-mono text-xs tracking-widest uppercase">Close [X]</span>
        </button>
        
        {displayProject && (
          <>
            {/* Left: Image Side */}
            <div className="w-full md:w-1/2 relative aspect-video md:aspect-auto md:min-h-[600px] bg-neutral-900 border-b md:border-b-0 md:border-r border-neutral-800/60 overflow-hidden">
              <Image 
                src={displayProject.image} 
                alt={displayProject.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale-[20%] contrast-110 opacity-90" 
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)] pointer-events-none"></div>
              
              {/* Architectural Markings */}
              <div className="absolute bottom-6 left-6 flex items-center gap-4 z-20 pointer-events-none">
                <span className="font-mono text-[8px] tracking-[0.4em] text-neutral-400 uppercase">FIG_{displayProject.id}</span>
                <div className="w-8 h-[1px] bg-neutral-700"></div>
                <span className="font-mono text-[8px] tracking-[0.4em] text-neutral-500 uppercase">ARCHIVE_SYS</span>
              </div>
            </div>

            {/* Right: Info Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-500 uppercase mb-8">
                PROJECT {displayProject.id}
              </span>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-widest uppercase text-neutral-100 mb-8 leading-[1.1]">
                {displayProject.title}
              </h3>
              
              <p className="text-neutral-400 font-light text-sm md:text-base leading-[1.8] tracking-wide mb-12 max-w-lg">
                {displayProject.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 pt-8 border-t border-neutral-800/50">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Role</span>
                  <span className="text-xs font-light text-neutral-300 uppercase tracking-wider">{displayProject.role}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Stack</span>
                  <span className="text-xs font-light text-neutral-300 uppercase tracking-wider">{displayProject.stack}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Timeline</span>
                  <span className="text-xs font-light text-neutral-300 uppercase tracking-wider">{displayProject.timeline}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Status</span>
                  <span className="text-xs font-light text-neutral-300 uppercase tracking-wider">{displayProject.status}</span>
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
