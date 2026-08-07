export const HeroTypography = () => {
  return (
    <div className="flex flex-col relative md:-ml-8 lg:-ml-12">
      {/* The huge BUILD text */}
      <h1 className="relative z-20 text-[26vw] font-thin uppercase leading-[0.85] tracking-wide text-neutral-100 md:text-[18vw] lg:-mr-48 lg:text-[20vw] xl:text-[260px] pb-4">
        BUILD
      </h1>
      
      <div className="mt-16 flex flex-col space-y-8 pl-1 md:mt-24 md:pl-8 lg:pl-16 relative z-30">
        <div className="flex flex-col leading-none">
          <span className="text-4xl font-light tracking-wide text-neutral-400 md:text-5xl lg:text-6xl">
            Raktim
          </span>
          <span className="text-5xl font-medium tracking-[0.2em] text-neutral-100 md:text-6xl lg:text-7xl mt-2">
            SONOWAL
          </span>
        </div>
        
        <div className="flex items-center gap-6 pt-4">
          <div className="h-[1px] w-12 bg-neutral-700 md:w-20"></div>
          <p className="text-[10px] font-light uppercase tracking-[0.4em] text-neutral-400 md:text-xs">
            Computer Science Engineer
          </p>
        </div>
      </div>
    </div>
  );
};
