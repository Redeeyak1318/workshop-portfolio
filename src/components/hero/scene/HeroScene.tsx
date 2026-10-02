'use client';

import { useRef, MutableRefObject } from 'react';
import { HeroBackground } from '../background/HeroBackground';
import { HeroTypography } from '../typography/HeroTypography';
import { HeroPortrait } from '../portrait/HeroPortrait';
import { HeroMarquee } from '../marquee/HeroMarquee';
import { HeroScrollCue } from '../scroll-cue/HeroScrollCue';
import { useHeroAnimation } from './useHeroAnimation';
import { GrainOverlay, BlueprintOverlay } from '@/components/editorial';

export const HeroScene = () => {
  const containerRef = useRef<HTMLElement>(null);
  const overlaysRef = useRef<HTMLDivElement>(null);
  const guidelinesRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgJpRef = useRef<HTMLDivElement>(null);
  const buildRef = useRef<HTMLHeadingElement>(null);
  const nameFirstRef = useRef<HTMLSpanElement>(null);
  const nameLastRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const portraitOuterRef = useRef<HTMLDivElement>(null);
  const portraitInnerRef = useRef<HTMLDivElement>(null);
  const portraitMarkRefs = useRef<(HTMLDivElement | null)[]>([]);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const jpRefs = useRef<(HTMLDivElement | null)[]>([]);
  const metadataRefs = useRef<(HTMLDivElement | null)[]>([]);

  useHeroAnimation({
    containerRef,
    overlaysRef,
    guidelinesRefs,
    bgJpRef,
    buildRef,
    nameFirstRef,
    nameLastRef,
    subtitleRef,
    portraitOuterRef,
    portraitInnerRef,
    portraitMarkRefs,
    marqueeRef,
    marqueeTrackRef,
    jpRefs,
    metadataRefs
  });

  const setGuidelineRef = (el: HTMLDivElement | null) => {
    if (el && !guidelinesRefs.current.includes(el)) guidelinesRefs.current.push(el);
  };

  const setJpRef = (el: HTMLDivElement | null) => {
    if (el && !jpRefs.current.includes(el)) jpRefs.current.push(el);
  };

  const setMetadataRef = (el: HTMLDivElement | null) => {
    if (el && !metadataRefs.current.includes(el)) metadataRefs.current.push(el);
  };

  return (
    <main ref={containerRef} className="relative min-h-[100dvh] lg:h-[100dvh] w-full overflow-hidden bg-[#050505] text-neutral-200 selection:bg-neutral-800">
      {/* Design System Overlays */}
      <div ref={overlaysRef}>
        <GrainOverlay opacity={0.03} />
        <BlueprintOverlay opacity={0.02} />
      </div>
      
      <HeroBackground bgJpRef={bgJpRef} />
      
      {/* Editorial Guide Lines */}
      <div ref={setGuidelineRef} className="pointer-events-none absolute inset-0 z-0 mx-auto flex max-w-[1400px] justify-between px-6 md:px-12">
        <div className="h-full w-[1px] bg-neutral-800/20"></div>
        <div className="hidden h-full w-[1px] bg-neutral-800/20 md:block"></div>
        <div className="h-full w-[1px] bg-neutral-800/20"></div>
        <div className="hidden h-full w-[1px] bg-neutral-800/20 lg:block"></div>
        <div className="h-full w-[1px] bg-neutral-800/20"></div>
      </div>

      {/* Grid Coordinates & Subtle Metadata */}
      <div ref={setMetadataRef} className="pointer-events-none absolute left-6 top-32 z-10 hidden font-mono text-[8px] tracking-[0.3em] text-neutral-600 md:block">
        35°40'59"N 139°44'06"E
      </div>

      <div className="relative z-10 mx-auto flex h-full min-h-[100dvh] lg:min-h-0 w-full max-w-[1400px] flex-col justify-between px-6 py-24 md:px-12 md:py-32 lg:py-40">
        
        {/* Top spacer / structural metadata */}
        <div className="flex w-full max-w-[150px] flex-col gap-3 pt-6 md:pt-0">
          <div ref={setGuidelineRef} className="h-[1px] w-full bg-neutral-800/30"></div>
          <span ref={setMetadataRef} className="font-mono text-[8px] tracking-[0.4em] text-neutral-600">ARCHIVE_01</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 relative flex-1 items-center mt-12 md:mt-0">
          <div className="col-span-1 md:col-span-7 lg:col-span-7 z-20">
            <HeroTypography 
              buildRef={buildRef}
              nameFirstRef={nameFirstRef}
              nameLastRef={nameLastRef}
              subtitleRef={subtitleRef}
            />
          </div>
          
          <div className="col-span-1 mt-16 flex justify-start md:col-span-5 lg:col-span-5 md:mt-0 md:justify-end z-10">
            <HeroPortrait 
              portraitOuterRef={portraitOuterRef}
              portraitInnerRef={portraitInnerRef}
              portraitMarkRefs={portraitMarkRefs}
              metadataRefs={metadataRefs}
              jpRefs={jpRefs}
            />
          </div>
        </div>
        
        {/* Lower Section Balance */}
        <div ref={setGuidelineRef} className="mt-24 flex w-full items-end justify-between pb-24 md:mt-12 md:pb-16 border-t border-neutral-800/20 pt-8">
          <div ref={setMetadataRef}>
            <HeroScrollCue />
          </div>
          <div className="flex items-end gap-10 z-20">
            <div ref={setJpRef} className="hidden font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-600 md:block" style={{ writingMode: 'vertical-rl' }}>
              PROJECT CASE STUDY
            </div>
          </div>
        </div>
      </div>

      <HeroMarquee marqueeRef={marqueeRef} marqueeTrackRef={marqueeTrackRef} />
    </main>
  );
};
