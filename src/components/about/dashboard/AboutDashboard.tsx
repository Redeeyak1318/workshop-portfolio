import Image from 'next/image';
import { BaseModule } from '../modules/BaseModule';

import { BuildModule } from '../modules/BuildModule';
import { CapabilitiesModule } from '../modules/CapabilitiesModule';
import { TimelineModule } from '../modules/TimelineModule';
import { LocationModule } from '../modules/LocationModule';

export const AboutDashboard = () => {
  return (
    <div className="relative mt-8 md:mt-16 w-full pb-24">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 w-full">
        
        {/* MODULE A: SYSTEM PROFILE (Physical Paper) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-8 relative min-h-[400px]">
          
          {/* LAYER 2: Minimal Architectural Paper Base */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none bg-[#0a0a0c] border border-white/[0.02] shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            style={{ 
              transform: 'translateZ(0)', // Hardware acceleration
              // Extremely subtle noise and gentle physical gradient to suggest dark archival paper
              backgroundImage: `
                linear-gradient(135deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.4) 100%),
                url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E")
              `,
              backgroundSize: '100% 100%, 150px 150px',
            }}
          ></div>

          {/* LAYER 3: Existing Typography & Content (Safely isolated at z-10) */}
          <div className="relative z-10 h-full flex flex-col justify-between p-10 md:p-14 lg:p-16">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-[1px] w-8 bg-neutral-600 md:w-16"></div>
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-400 uppercase">
                System Overview
              </span>
            </div>
            
            <h2 className="text-[clamp(3rem,10vw,6.5rem)] font-thin uppercase leading-[0.85] tracking-widest text-neutral-100">
              <div className="overflow-hidden mb-2">
                <span className="block drop-shadow-lg">SYSTEM</span>
              </div>
              <div className="overflow-hidden">
                <span className="block text-neutral-400 drop-shadow-lg">PROFILE</span>
              </div>
            </h2>
            
            <div className="mt-12 flex items-center justify-between border-t border-neutral-700/40 pt-6 opacity-70">
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-400 uppercase">ARCHIVE_SYS</span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-400 uppercase">VER_4.6</span>
            </div>
          </div>
        </div>

        {/* MODULE B: FORMAL PORTRAIT */}
        <div className="col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-2 flex flex-col">
          <BaseModule variant="dark" padding="sm" className="h-full">
            <div className="relative w-full h-full min-h-[350px] aspect-[4/5] md:aspect-auto overflow-hidden bg-neutral-900/20">
              <Image 
                src="/images/profile/raktim-formal.jpg"
                alt="Raktim Sonowal - Formal Portrait"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top grayscale-[20%] contrast-110 opacity-90 brightness-[0.85] transition-all duration-700 hover:grayscale-0 hover:opacity-100"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(3,3,3,0.8)] pointer-events-none" />
            </div>
            <div className="mt-4 flex w-full items-center justify-between border-t border-neutral-800/40 pt-3 px-2">
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-500 uppercase">FIG_01</span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-500 uppercase">PORTRAIT / RECORD</span>
            </div>
          </BaseModule>
        </div>

        {/* MODULE C: CURRENT MISSION (Snippets) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-4 flex flex-col">
          <BaseModule variant="glass" padding="lg" label="Current Mission" className="h-full justify-center">
            <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-neutral-200">
              I engineer <br/>
              <span className="text-neutral-500">structures,</span><br/>
              not pages.
            </h3>
          </BaseModule>
        </div>

        {/* MODULE D: MISSION DESCRIPTION */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col">
          <BaseModule variant="outline" padding="lg" className="h-full justify-center bg-neutral-950">
            <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
              "True engineering dissolves into the background, leaving only a calm, invisible system that amplifies human focus."
            </p>
          </BaseModule>
        </div>

        {/* MODULE E: ENGINEERING PHILOSOPHY */}
        <div className="col-span-1 md:col-span-2 lg:col-span-8">
          <BaseModule variant="solid" padding="xl" label="Engineering Philosophy">
            <div className="flex flex-col gap-10 h-full justify-center">
              <h3 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-light tracking-[0.05em] leading-[1.4] text-neutral-200 uppercase max-w-3xl">
                "Systems should be designed with the precision of physical architecture. Every abstraction has weight, every component casts a shadow."
              </h3>
              <p className="text-neutral-500 font-light text-sm md:text-base leading-[1.7] tracking-wide max-w-2xl">
                I build scalable applications by minimizing cognitive load. Architecture must be predictable, constraints must be explicit, and the resulting experience must feel utterly calm.
              </p>
            </div>
          </BaseModule>
        </div>

        {/* MODULE J: CURRENT LOCATION */}
        <div className="col-span-1 md:col-span-1 lg:col-span-4">
          <LocationModule />
        </div>

        {/* MODULE F: CURRENT BUILD */}
        <div className="col-span-1 md:col-span-1 lg:col-span-3">
          <BuildModule />
        </div>

        {/* MODULE G: CURRENT CAPABILITIES */}
        <div className="col-span-1 md:col-span-2 lg:col-span-6">
          <CapabilitiesModule />
        </div>

        {/* MODULE H: CASUAL PORTRAIT */}
        <div className="col-span-1 md:col-span-1 lg:col-span-3 flex flex-col">
          <BaseModule variant="dark" padding="sm" className="h-full">
            <div className="relative w-full h-full min-h-[250px] aspect-[4/3] md:aspect-auto overflow-hidden bg-neutral-900/20">
              <Image 
                src="/images/profile/raktim-casual.jpg"
                alt="Raktim Sonowal - Casual Portrait"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 30vw, 25vw"
                className="object-cover object-center grayscale-[30%] contrast-105 opacity-85 brightness-[0.9] transition-all duration-700 hover:grayscale-0 hover:opacity-100"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(3,3,3,0.8)] pointer-events-none" />
            </div>
            <div className="mt-4 flex w-full items-center justify-between border-t border-neutral-800/40 pt-3 px-2">
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-500 uppercase">FIG_02</span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-500 uppercase">FIELD / CANDID</span>
            </div>
          </BaseModule>
        </div>

        {/* MODULE I: INDEX / LOG */}
        <div className="col-span-1 md:col-span-2 lg:col-span-12">
          <TimelineModule />
        </div>

      </div>
    </div>
  );
};
