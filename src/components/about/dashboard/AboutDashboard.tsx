import Image from 'next/image';
import { MissionModule } from '../modules/MissionModule';
import { PhilosophyModule } from '../modules/PhilosophyModule';
import { BuildModule } from '../modules/BuildModule';
import { CapabilitiesModule } from '../modules/CapabilitiesModule';
import { TimelineModule } from '../modules/TimelineModule';
import { LocationModule } from '../modules/LocationModule';
import { CoordinateLabel, VerticalAnnotation } from '@/components/editorial';

export const AboutDashboard = () => {
  return (
    <div className="relative mt-12 md:mt-16 w-full editorial-fade-layer">
      
      {/* Background Layers - Visual Depth */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Massive Ghost Typography */}
        <div className="about-ghost-text absolute top-0 right-0 opacity-0 mix-blend-screen select-none">
          <span className="text-[20vw] font-medium leading-[0.8] tracking-widest text-neutral-100" style={{ writingMode: 'vertical-rl' }}>
            PROFILE
          </span>
        </div>
        
        <div className="absolute top-1/3 left-0 opacity-[0.03] select-none">
          <span className="text-[15vw] font-bold tracking-tighter text-neutral-100">
            01
          </span>
        </div>

        {/* Structural Metadata */}
        <div className="absolute top-12 right-0 hidden md:block">
          <CoordinateLabel lat={35.6762} lng={139.6503} className="opacity-40" />
        </div>
        
        <div className="absolute bottom-1/4 -left-6 hidden xl:block">
          <VerticalAnnotation className="opacity-30 text-[8px]">
            システムプロファイル
          </VerticalAnnotation>
        </div>
      </div>

      {/* Foreground Content Flow */}
      <div className="relative z-10 flex flex-col gap-24 md:gap-32 lg:gap-40 transition-sweep-target">
        
        {/* Top Section: Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 w-full">
          
          {/* Left Column: Core Statements */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-16 md:gap-24">
            <div className="w-full about-dashboard-module">
              <MissionModule />
            </div>

            <div className="w-full md:w-5/6 about-dashboard-module">
              <PhilosophyModule />
            </div>
          </div>

          {/* Right Column: Formal Portrait */}
          <div className="col-span-1 lg:col-span-5 about-dashboard-module flex flex-col justify-start lg:items-end lg:mt-4">
            <div className="w-full max-w-[440px]">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900/20">
                <Image 
                  src="/images/profile/raktim-formal.jpg"
                  alt="Raktim Sonowal - Formal Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top grayscale-[40%] contrast-110 opacity-90 brightness-[0.85] transition-all duration-700 hover:grayscale-0 hover:opacity-100"
                />
                <div className="absolute inset-0 bg-[#050505]/10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(5,5,5,0.8)] pointer-events-none" />
              </div>
              <div className="mt-4 flex w-full items-center justify-between border-t border-neutral-800/40 pt-3">
                <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-600 uppercase">FIG_01</span>
                <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-600 uppercase">PORTRAIT / RECORD</span>
              </div>
            </div>
          </div>

        </div>

        {/* Row 3: Current Build & Capabilities (Split Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-12 w-full pt-16 border-t border-neutral-900/50 about-dashboard-module">
          <div className="col-span-1 md:col-span-6 lg:col-span-7">
            <BuildModule />
          </div>
          <div className="col-span-1 md:col-span-6 lg:col-span-5 border-t border-neutral-900/50 pt-8 md:border-none md:pt-0">
            <CapabilitiesModule />
          </div>
        </div>

        {/* Row 4: Timeline & Location (Deep Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-12 w-full about-dashboard-module">
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <TimelineModule />
          </div>
          
          <div className="col-span-1 md:col-span-8 lg:col-span-9 flex items-end justify-end border-t border-neutral-900/50 pt-8 md:border-none md:pt-0">
            <LocationModule />
          </div>
        </div>

        {/* Row 5: Casual Portrait (Editorial Offset) */}
        <div className="w-full flex justify-center md:justify-end mt-8 md:mt-16 about-dashboard-module">
          <div className="w-full md:w-3/4 lg:w-7/12 flex flex-col md:pr-12">
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-neutral-900/20">
              <Image 
                src="/images/profile/raktim-casual.jpg"
                alt="Raktim Sonowal - Casual Portrait"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 60vw"
                className="object-cover object-center grayscale-[30%] contrast-105 opacity-85 brightness-[0.9] transition-all duration-700 hover:grayscale-0 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[#050505]/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(5,5,5,0.7)] pointer-events-none" />
            </div>
            <div className="mt-4 flex w-full items-center justify-between border-t border-neutral-800/40 pt-3">
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-600 uppercase">FIG_02</span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-600 uppercase">FIELD / CANDID</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
