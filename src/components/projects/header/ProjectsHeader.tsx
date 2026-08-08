export const ProjectsHeader = () => {
  return (
    <div className="flex w-full flex-col gap-8 pb-16 md:pb-24 border-b border-neutral-800/40">
      <div className="flex items-center gap-4">
        <div className="h-[1px] w-8 bg-neutral-600 md:w-16 projects-archive-label"></div>
        <span className="font-mono text-[8px] tracking-[0.4em] text-neutral-500 uppercase projects-archive-label">
          Archive 02
        </span>
      </div>
      
      <div className="flex flex-col gap-8 md:gap-12 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="text-4xl font-thin uppercase leading-[0.9] tracking-widest text-neutral-100 md:text-6xl lg:text-[7rem]">
          <div className="overflow-hidden"><span className="projects-title-line block ed-typography">SELECTED</span></div>
          <div className="overflow-hidden"><span className="projects-title-line block ed-typography">PROJECTS</span></div>
        </h2>
        
        <p className="projects-caption max-w-md text-sm font-light leading-relaxed tracking-wide text-neutral-400 lg:text-base lg:mb-2 ed-typography">
          A curated index of engineered systems and architectural explorations.
        </p>
      </div>
    </div>
  );
};
