import { RefObject } from 'react';

export interface HeroTypographyProps {
  buildRef: RefObject<HTMLHeadingElement | null>;
  nameFirstRef: RefObject<HTMLSpanElement | null>;
  nameLastRef: RefObject<HTMLSpanElement | null>;
  subtitleRef: RefObject<HTMLDivElement | null>;
}

export const HeroTypography = ({ buildRef, nameFirstRef, nameLastRef, subtitleRef }: HeroTypographyProps) => {
  return (
    <div className="flex flex-col relative md:-ml-8 lg:-ml-12">
      {/* The cinematic KISEKI / 軌跡 text */}
      <h1 ref={buildRef} className="hero-build relative z-20 flex flex-col gap-2 md:gap-4 lg:-mr-48 pb-4 pt-10">
        <span className="text-[22vw] md:text-[18vw] lg:text-[14vw] xl:text-[180px] font-light leading-[0.85] tracking-widest text-neutral-100">
          軌跡
        </span>
        <span className="font-mono text-[10px] md:text-xs lg:text-sm tracking-[0.8em] text-neutral-500 pl-1 md:pl-2 uppercase">
          KISEKI
        </span>
      </h1>
      
      <div className="mt-16 flex flex-col space-y-8 pl-1 md:mt-24 md:pl-8 lg:pl-16 relative z-30">
        <div className="flex flex-col leading-none">
          <span ref={nameFirstRef} className="text-4xl font-light tracking-wide text-neutral-400 md:text-5xl lg:text-6xl">
            Raktim
          </span>
          <span ref={nameLastRef} className="text-5xl font-medium tracking-[0.2em] text-neutral-100 md:text-6xl lg:text-7xl mt-2">
            SONOWAL
          </span>
        </div>
        
        <div ref={subtitleRef} className="flex items-center gap-6 pt-4">
          <div className="h-[1px] w-12 bg-neutral-700 md:w-20"></div>
          <p className="text-[10px] font-light uppercase tracking-[0.4em] text-neutral-400 md:text-xs">
            Computer Science Engineer
          </p>
        </div>
      </div>
    </div>
  );
};
