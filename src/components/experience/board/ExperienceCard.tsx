import Image from 'next/image';
import { ExperienceData } from '../data/experienceData';
import { ExperiencePin } from './ExperiencePin';

interface ExperienceCardProps {
  data: ExperienceData;
  onClick: (data: ExperienceData) => void;
}

export const ExperienceCard = ({ data, onClick }: ExperienceCardProps) => {
  const renderCardContent = () => {
    switch (data.variant) {
      case 'photograph':
        return (
          <div className="bg-[#f0ece1] p-3 shadow-lg flex flex-col gap-3 w-full h-full border border-neutral-300">
            {data.image && (
              <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-400">
                <Image 
                  src={data.image} 
                  alt={data.title} 
                  fill 
                  className="object-cover grayscale-[40%] contrast-110 sepia-[20%]" 
                  sizes="(max-width: 768px) 100vw, 300px" 
                />
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
              </div>
            )}
            <div className="px-2 pb-1">
              <h4 className="text-neutral-900 font-mono text-[10px] md:text-xs tracking-wider uppercase font-bold">{data.title}</h4>
              <p className="text-neutral-600 font-mono text-[8px] md:text-[9px] uppercase tracking-widest mt-1">{data.role}</p>
            </div>
          </div>
        );

      case 'polaroid':
        return (
          <div className="bg-[#f8f5ee] p-4 pb-10 md:pb-12 shadow-lg flex flex-col gap-2 w-full h-full border border-neutral-200">
            {data.image && (
              <div className="relative w-full aspect-square overflow-hidden bg-neutral-900 border border-neutral-300">
                <Image 
                  src={data.image} 
                  alt={data.title} 
                  fill 
                  className="object-cover grayscale-[30%] sepia-[10%]" 
                  sizes="(max-width: 768px) 100vw, 300px" 
                />
              </div>
            )}
            <div className="pt-2 flex flex-col items-center text-center">
              <span className="text-neutral-800 text-[10px] md:text-xs uppercase font-mono tracking-widest border-b border-neutral-300 pb-1 inline-block">{data.timeline}</span>
              <span className="text-neutral-600 font-serif italic text-xs mt-2 leading-tight px-2">{data.title}</span>
            </div>
          </div>
        );

      case 'document':
        return (
          <div className="bg-[#e8e4d9] p-5 md:p-6 shadow-md flex flex-col gap-4 w-full h-full border border-neutral-300 bg-[linear-gradient(transparent_95%,rgba(0,0,0,0.05)_95%)] bg-[length:100%_20px]">
            <div className="border-b-2 border-neutral-400 pb-2 flex justify-between items-end">
              <h4 className="text-neutral-900 font-mono text-sm md:text-base uppercase tracking-widest font-bold">{data.title}</h4>
              <span className="text-neutral-500 font-mono text-[8px] tracking-[0.2em]">{data.id}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-neutral-800 font-mono text-[9px] uppercase tracking-wider font-bold">Category: {data.category}</span>
              <span className="text-neutral-800 font-mono text-[9px] uppercase tracking-wider font-bold">Status: {data.status}</span>
            </div>
            <p className="text-neutral-700 font-mono text-[10px] leading-relaxed">
              {data.desc}
            </p>
          </div>
        );

      case 'note':
        return (
          <div className="bg-[#dcd7c5] p-4 md:p-5 shadow-sm flex flex-col gap-3 w-full h-full border-l-[3px] border-l-red-800/60 border-y border-r border-neutral-300 relative">
            <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-transparent via-transparent to-black/5 opacity-50"></div>
            <h4 className="text-neutral-900 font-serif text-sm md:text-base font-bold italic">{data.title}</h4>
            <p className="text-neutral-700 font-mono text-[9px] md:text-[10px] leading-relaxed">
              {data.desc}
            </p>
            <span className="text-red-900/80 font-mono text-[8px] uppercase tracking-widest mt-auto border-t border-red-900/20 pt-2">{data.timeline}</span>
          </div>
        );

      case 'label':
        return (
          <div className="bg-[#e4ddcc] px-4 py-2 shadow-sm border border-neutral-300 flex items-center justify-center">
            <span className="text-neutral-800 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
              {data.title}
            </span>
          </div>
        );
    }
  };

  return (
    <div 
      className="absolute group/card cursor-pointer outline-none w-[200px] md:w-[260px] lg:w-[300px] transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform z-[var(--base-z)] hover:z-[50] focus-visible:z-[50]"
      style={{
        top: data.pos.top,
        left: data.pos.left,
        '--base-z': data.pos.zIndex,
        transform: `translate(-50%, -50%) rotate(${data.pos.rotate})`,
      } as React.CSSProperties}
      tabIndex={0}
      onClick={() => onClick(data)}
      onKeyDown={(e) => e.key === 'Enter' && onClick(data)}
    >
      {/* Physical Hover Container */}
      <div className="relative w-full h-full transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/card:-translate-y-2 group-hover/card:scale-[1.04] group-focus-visible/card:-translate-y-2 group-focus-visible/card:scale-[1.04] shadow-lg group-hover/card:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
        
        {/* The Card Render */}
        {renderCardContent()}

        {/* The Pushpin */}
        <div 
          className="absolute z-30 transition-transform duration-[600ms] group-hover/card:scale-[0.97]"
          style={{
            top: data.pos.pinTop || '5%',
            left: data.pos.pinLeft || '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <ExperiencePin />
        </div>

      </div>
    </div>
  );
};
