import { EXPERIENCE_DATA, ExperienceData } from '../data/experienceData';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceString } from './ExperienceString';

interface ExperienceBoardProps {
  onOpenExperience: (exp: ExperienceData) => void;
}

export const ExperienceBoard = ({ onOpenExperience }: ExperienceBoardProps) => {
  return (
    <div className="relative w-full aspect-[3/4] md:aspect-square lg:aspect-[16/10] max-w-6xl mx-auto my-12 overflow-hidden bg-neutral-950/40 border border-neutral-800/40 shadow-[inset_0_40px_100px_rgba(0,0,0,0.8)]">
      
      {/* Background Texture for the "Board" */}
      <div className="absolute inset-0 bg-[#080808]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,30,0.3)_0%,transparent_100%)] pointer-events-none"></div>
      
      {/* Central Title Note (Simulating the torn paper title in the reference, but dark) */}
      <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-0 flex flex-col items-center justify-center pointer-events-none w-full max-w-sm lg:max-w-md">
        <div className="bg-[#111111] p-8 md:p-12 w-full border border-neutral-800/60 shadow-2xl flex flex-col items-center rotate-[-1deg]">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-300 uppercase text-center leading-[0.85] mb-6 drop-shadow-lg">
            EXPERIENCE<br/>LOG
          </h2>
          <span className="font-mono text-[10px] md:text-xs tracking-[0.5em] text-blue-500/80 uppercase font-bold mix-blend-screen">ARCHIVE_SYS</span>
        </div>
      </div>

      {/* The String */}
      <ExperienceString />

      {/* The Cards */}
      {EXPERIENCE_DATA.map((exp) => (
        <ExperienceCard 
          key={exp.id} 
          data={exp} 
          onClick={onOpenExperience} 
        />
      ))}
    </div>
  );
};
