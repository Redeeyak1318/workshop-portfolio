import { ALL_PROJECTS, ProjectData } from '../data/projectsData';

interface ProjectsArchiveProps {
  onOpenProject: (project: ProjectData) => void;
}

export const ProjectsArchive = ({ onOpenProject }: ProjectsArchiveProps) => {
  // Grouping projects logically based on their nature in the data
  const coreSystems = ALL_PROJECTS.slice(0, 3);
  const researchEngineering = ALL_PROJECTS.slice(3, 6);
  const experimental = ALL_PROJECTS.slice(6, 9);

  const renderArchiveGroup = (title: string, projects: ProjectData[]) => (
    <div className="mb-24 last:mb-0">
      <div className="flex items-center gap-4 mb-16 opacity-70">
        <div className="h-[1px] w-6 bg-neutral-600"></div>
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-neutral-400">
          {title}
        </span>
      </div>

      <div className="flex flex-col">
        {projects.map((project) => {
          const isPending = project.status === 'IN PROGRESS' || project.status === 'CONCEPT';
          
          return (
            <div 
              key={project.id} 
              tabIndex={0}
              onClick={() => onOpenProject(project)}
              onKeyDown={(e) => e.key === 'Enter' && onOpenProject(project)}
              className={`
                group relative flex flex-col lg:flex-row lg:items-start lg:justify-between 
                border-t border-neutral-800/40 py-10 px-4 -mx-4
                cursor-pointer outline-none transition-all duration-[400ms] ease-out
                hover:bg-white/[0.02] hover:translate-x-1
                focus-visible:bg-white/[0.02] focus-visible:translate-x-1
                ${isPending ? 'opacity-60 grayscale' : 'opacity-100'}
              `}
            >
              {/* Left Column: Number & Title */}
              <div className="w-full lg:w-1/3 flex flex-col gap-4 mb-8 lg:mb-0 lg:pr-8">
                <div className="flex items-center">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-600 transition-colors duration-[400ms] group-hover:text-neutral-400 group-focus-visible:text-neutral-400">
                    {project.id}
                  </span>
                  <span className="opacity-0 -translate-x-2 transition-all duration-[400ms] ease-out group-hover:opacity-100 group-hover:translate-x-3 group-focus-visible:opacity-100 group-focus-visible:translate-x-3 text-neutral-500 font-mono text-[9px]">
                    →
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-light tracking-widest uppercase text-neutral-300 transition-colors duration-[400ms] group-hover:text-neutral-100 group-focus-visible:text-neutral-100">
                  {project.title}
                </h4>
              </div>
              
              {/* Middle Column: Description & Stack */}
              <div className="w-full lg:w-5/12 flex flex-col gap-6 lg:pr-8 mb-8 lg:mb-0">
                <p className="font-light text-sm text-neutral-500 leading-relaxed tracking-wide transition-colors duration-[400ms] group-hover:text-neutral-300 group-focus-visible:text-neutral-300">
                  {project.desc}
                </p>
                {project.stack !== '-' && project.stack !== 'N/A' && (
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-neutral-600 transition-colors duration-[400ms] group-hover:text-neutral-500">
                      {project.category}
                    </span>
                    <div className="h-[2px] w-[2px] bg-neutral-800"></div>
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-neutral-600 transition-colors duration-[400ms] group-hover:text-neutral-500">
                      {project.stack}
                    </span>
                  </div>
                )}
                {(project.stack === '-' || project.stack === 'N/A') && (
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-neutral-600 transition-colors duration-[400ms] group-hover:text-neutral-500">
                      {project.category}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Right Column: Metadata Grid */}
              <div className="w-full lg:w-1/4 grid grid-cols-2 lg:flex lg:flex-col gap-y-4 gap-x-4 lg:text-right">
                <div className="flex flex-col gap-1 lg:items-end">
                  <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-neutral-600">Role</span>
                  <span className="text-[10px] font-light tracking-widest uppercase text-neutral-400 transition-colors duration-[400ms] group-hover:text-neutral-200 group-focus-visible:text-neutral-200">
                    {project.role}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1 lg:items-end">
                  <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-neutral-600">Timeline</span>
                  <span className="text-[10px] font-light tracking-widest uppercase text-neutral-400 transition-colors duration-[400ms] group-hover:text-neutral-200 group-focus-visible:text-neutral-200">
                    {project.timeline}
                  </span>
                </div>

                <div className="flex flex-col gap-1 col-span-2 lg:items-end lg:mt-4">
                  <span className={`font-mono text-[9px] tracking-[0.4em] uppercase ${isPending ? 'text-neutral-600' : 'text-neutral-500'} transition-colors duration-[400ms] group-hover:text-neutral-300 group-focus-visible:text-neutral-300`}>
                    {isPending ? `[${project.status}]` : project.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex w-full flex-col border-t border-neutral-800/40 pt-24 md:pt-32">
      <div className="mb-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-thin uppercase tracking-[0.2em] text-neutral-200">
            Complete Index
          </h2>
          <p className="text-sm font-light tracking-widest text-neutral-500 uppercase max-w-xl leading-relaxed">
            Technical archive containing complete engineering records, systems architecture, and research publications.
          </p>
        </div>
        <div className="hidden md:block w-32 h-[1px] bg-neutral-800/60"></div>
      </div>

      <div className="flex flex-col">
        {renderArchiveGroup('Active Systems & Platforms', coreSystems)}
        {renderArchiveGroup('Research & Engineering', researchEngineering)}
        {renderArchiveGroup('Experimental / Future', experimental)}
      </div>
      
      <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800/40 to-transparent"></div>
    </div>
  );
};
