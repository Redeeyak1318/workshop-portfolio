export const TimelineModule = () => {
  const timeline = [
    { text: '2025', sub: 'Started Engineering' },
    { text: '↓' },
    { text: 'IEEE' },
    { text: '↓' },
    { text: 'Research' },
    { text: '↓' },
    { text: 'Workshop' },
    { text: '↓' },
    { text: 'Portfolio' },
  ];

  return (
    <div className="about-timeline flex flex-col h-full pl-6 border-l border-neutral-800/30 py-4">
      <div className="mb-16 flex items-center gap-3">
        <div className="h-[2px] w-[2px] bg-neutral-600"></div>
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-500">
          LOG
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {timeline.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <span className={`font-mono text-[9px] tracking-[0.4em] ${item.text === '↓' ? 'text-neutral-700/50' : 'text-neutral-300 uppercase'}`}>
              {item.text}
            </span>
            {item.sub && (
              <span className="font-light text-[8px] tracking-[0.2em] text-neutral-600 uppercase">
                {item.sub}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
