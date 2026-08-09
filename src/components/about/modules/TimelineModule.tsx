import { BaseModule } from './BaseModule';

export const TimelineModule = () => {
  const timeline = [
    { id: '01', text: 'FOUNDATION', sub: 'SYSTEMS / 2025' },
    { id: '02', text: 'ENGINEERING', sub: 'IEEE / HARDWARE' },
    { id: '03', text: 'RESEARCH', sub: 'METHODS / ALGORITHMS' },
    { id: '04', text: 'BUILD LAB', sub: 'UI / SYSTEMS' },
    { id: '05', text: 'REDEEYAK', sub: 'LIVE / ARCHITECTURE' },
  ];

  return (
    <BaseModule variant="transparent" padding="none" label="INDEX / LOG" className="w-full">
      {/* Group container for hover state orchestration */}
      <div className="group/timeline grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-neutral-900 border-y border-neutral-800/50 relative">
        {timeline.map((item, idx) => (
          <div 
            key={idx} 
            tabIndex={0}
            className="
              relative z-10 flex flex-col p-6 bg-[#030303] 
              transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)]
              cursor-default outline-none
              lg:group-hover/timeline:scale-[0.96] lg:group-hover/timeline:opacity-40 lg:group-hover/timeline:bg-[#020202] lg:group-hover/timeline:z-0
              lg:hover:!scale-[1.05] lg:hover:!opacity-100 lg:hover:!bg-[#0a0a0a] lg:hover:!z-30 
              lg:hover:!shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_20px_40px_rgba(0,0,0,0.8)]
              focus-visible:!scale-[1.05] focus-visible:!opacity-100 focus-visible:!bg-[#0a0a0a] focus-visible:!z-30 
              focus-visible:!shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_20px_40px_rgba(0,0,0,0.8)]
            "
          >
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-[10px] text-neutral-500 transition-colors duration-[600ms] lg:group-hover/timeline:text-neutral-700 lg:hover:!text-neutral-300">
                {item.id}
              </span>
              <span className="font-mono text-[10px] text-neutral-400 opacity-0 -translate-x-2 transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] lg:hover:!opacity-100 lg:hover:!translate-x-0">
                →
              </span>
            </div>
            
            <div className="flex flex-col gap-2 mt-auto">
              <span className="font-mono text-[11px] tracking-[0.25em] text-neutral-300 uppercase transition-colors duration-[600ms] lg:group-hover/timeline:text-neutral-500 lg:hover:!text-neutral-100">
                {item.text}
              </span>
              <span className="font-light text-[9px] tracking-[0.2em] text-neutral-500 uppercase transition-colors duration-[600ms] lg:group-hover/timeline:text-neutral-600 lg:hover:!text-neutral-400">
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </BaseModule>
  );
};
