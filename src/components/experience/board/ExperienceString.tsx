export const ExperienceString = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none opacity-80">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="stringShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0.5" dy="1.5" stdDeviation="1" floodColor="#000000" floodOpacity="0.8" />
          </filter>
        </defs>
        <path 
          d="
            M 22 17
            Q 14 32, 16 45
            Q 16 64, 26 73
            Q 42 86, 55 77
            Q 70 82, 80 69
            Q 88 61, 84 49
            Q 86 32, 78 19
            Q 50 12, 22 17
          " 
          fill="none" 
          stroke="#b91c1c" 
          strokeWidth="1.5" 
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'url(#stringShadow)' }}
        />
      </svg>
    </div>
  );
};
