import { RefObject, MutableRefObject, useRef } from 'react';
import { EditorialImage, EditorialInteraction } from '@/components/editorial';
import { useFeaturedProjectDevelopment } from '@/animations/editorial/useFeaturedProjectDevelopment';

export interface FeaturedProjectProps {
  bgTextRef: RefObject<HTMLDivElement | null>;
  imageRef: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  philosophyRef: RefObject<HTMLParagraphElement | null>;
  metadataRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

export const FeaturedProject = ({ bgTextRef, imageRef, titleRef, philosophyRef, metadataRefs }: FeaturedProjectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const setMetadataRef = (el: HTMLDivElement | null) => {
    if (el && !metadataRefs.current.includes(el)) {
      metadataRefs.current.push(el);
    }
  };

  useFeaturedProjectDevelopment(containerRef);

  return (
    <EditorialInteraction className="relative flex w-full flex-col mt-16 md:mt-32 mb-16 md:mb-32">
      <div ref={containerRef} className="relative w-full">
      
      {/* Massive Background Typography */}
      <div 
        ref={bgTextRef} 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full text-center mix-blend-screen opacity-10"
      >
        <span 
          className="text-[25vw] font-medium leading-[0.8] tracking-widest text-transparent"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
        >
          SYSTEM
        </span>
      </div>

      {/* Main Composition Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 w-full">
        
        {/* Left Column: Typography & Metadata */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-end pb-12 order-2 md:order-1 relative z-20">
          <div className="flex flex-col gap-6 bg-[#050505]/60 backdrop-blur-sm p-4 -ml-4 md:bg-transparent md:backdrop-blur-none md:p-0 md:m-0">
            <span ref={setMetadataRef} className="font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-500">
              FEATURED / 01
            </span>
            
            <h3 ref={titleRef} className="editorial-title text-5xl font-thin uppercase leading-[0.9] tracking-widest text-neutral-100 md:text-7xl lg:text-[6rem] drop-shadow-lg transition-all duration-300">
              WORKSHOP<br />PORTFOLIO
            </h3>

            <p ref={philosophyRef} className="editorial-description max-w-md text-sm font-light leading-relaxed tracking-wide text-neutral-400 mt-6 mb-8 drop-shadow-md">
              A deeply architectural portfolio system constructed with rigid adherence to Japanese techno-editorial principles. It explores tension between structural emptiness and dense typography.
            </p>

            {/* Technical Metadata Columns */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-800/40 editorial-meta-text">
              <div ref={setMetadataRef} className="flex flex-col gap-2">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Role</span>
                <span className="text-xs font-light text-neutral-300">Design & Engineering</span>
              </div>
              <div ref={setMetadataRef} className="flex flex-col gap-2">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Stack</span>
                <span className="text-xs font-light text-neutral-300">Next.js / GSAP</span>
              </div>
              <div ref={setMetadataRef} className="flex flex-col gap-2">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Timeline</span>
                <span className="text-xs font-light text-neutral-300">Q3 2026</span>
              </div>
              <div ref={setMetadataRef} className="flex flex-col gap-2">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-600">Status</span>
                <span className="text-xs font-light text-neutral-300">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Advanced Image Composition */}
        <div ref={imageRef} className="col-span-1 md:col-span-7 order-1 md:order-2 relative z-10 flex justify-end">
          <div className="w-full relative overflow-visible">
            {/* The Image Wrapper using mask-image for gradient fading */}
            <div className="w-full relative">
              <EditorialImage 
                src={null} 
                alt="Workshop Portfolio Architectural Concept" 
                aspectRatio="aspect-[4/5] md:aspect-square"
                maskStyle="photographic-development"
                withBlueprint={true}
                withGrain={true}
                verticalAnnotation="ワークショップポートフォリオ"
                coordinates={{ lat: 35.6762, lng: 139.6503 }}
                assetId="SYS-ART-01"
                revision="REV.FINAL"
                overlayIntensity={0.06}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </EditorialInteraction>
  );
};
