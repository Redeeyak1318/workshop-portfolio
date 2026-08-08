export const TimelineModule = () => {
  const timeline = [
    { id: '01', text: '2025', sub: 'SYS.INIT / STARTED ENG' },
    { id: '02', text: 'IEEE', sub: 'HARDWARE ARCH' },
    { id: '03', text: 'Research', sub: 'ALGORITHMS' },
    { id: '04', text: 'Workshop', sub: 'UI SYSTEM' },
    { id: '05', text: 'Portfolio', sub: 'LIVE ARCHITECTURE' },
  ];

  return (
    <div className="about-timeline flex flex-col h-full pl-6 border-l border-neutral-800/30 py-4">
      <div className="mb-16 flex items-center gap-3">
        <div className="h-[2px] w-[2px] bg-neutral-600"></div>
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-500">
          INDEX / LOG
        </span>
      </div>

      <div className="flex flex-col gap-8">
        {timeline.map((item, idx) => (
          <div key={idx} className="about-timeline-entry flex gap-4 items-baseline">
            <span className="font-mono text-[8px] text-neutral-600 opacity-60">{item.id}</span>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-300 uppercase">
                {item.text}
              </span>
              <span className="font-light text-[8px] tracking-[0.2em] text-neutral-600 uppercase">
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
