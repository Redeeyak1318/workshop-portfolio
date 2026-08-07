export const HeroMarquee = () => {
  return (
    <div className="absolute bottom-0 left-0 z-20 flex w-full items-center justify-between border-t border-neutral-900/40 bg-[#050505] px-6 py-3 md:px-12 md:py-4">
      <div className="flex w-full items-center justify-between text-[8px] font-light uppercase tracking-[0.5em] text-neutral-600 md:text-[9px]">
        <span>Engineering</span>
        <span className="hidden sm:inline">&bull;</span>
        <span className="hidden sm:inline">Design</span>
        <span className="hidden md:inline">&bull;</span>
        <span className="hidden md:inline">Systems</span>
        <span className="hidden lg:inline">&bull;</span>
        <span className="hidden lg:inline">AI</span>
        <span className="hidden xl:inline">&bull;</span>
        <span className="hidden xl:inline">Research</span>
        <span>&bull;</span>
        <span>Storytelling</span>
      </div>
    </div>
  );
};
