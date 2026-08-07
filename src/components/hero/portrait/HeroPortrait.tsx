export const HeroPortrait = () => {
  return (
    <div className="relative">
      {/* Editorial framing - thin double border effect via outline + border */}
      <div className="hero-portrait-outer relative p-5 border border-neutral-800/40 outline outline-1 outline-offset-4 outline-neutral-800/20 bg-[#050505] transition-all duration-500 hover:border-neutral-600/50 hover:outline-neutral-600/30">
        {/* Portrait container scaled up ~20% */}
        <div className="hero-portrait-inner relative aspect-[3/4] w-full min-w-[260px] max-w-[320px] shrink-0 bg-[#0a0a0a] md:max-w-[360px] lg:max-w-[430px]">
          
          {/* Subtle inner frame */}
          <div className="absolute inset-2 border border-neutral-800/30"></div>
          
          {/* Architectural crop marks / corner registration */}
          <div className="hero-portrait-mark absolute -left-1 -top-1 h-3 w-[1px] bg-neutral-600"></div>
          <div className="hero-portrait-mark absolute -left-1 -top-1 h-[1px] w-3 bg-neutral-600"></div>
          
          <div className="hero-portrait-mark absolute -right-1 -top-1 h-3 w-[1px] bg-neutral-600"></div>
          <div className="hero-portrait-mark absolute -right-1 -top-1 h-[1px] w-3 bg-neutral-600"></div>
          
          <div className="hero-portrait-mark absolute -bottom-1 -left-1 h-3 w-[1px] bg-neutral-600"></div>
          <div className="hero-portrait-mark absolute -bottom-1 -left-1 h-[1px] w-3 bg-neutral-600"></div>
          
          <div className="hero-portrait-mark absolute -bottom-1 -right-1 h-3 w-[1px] bg-neutral-600"></div>
          <div className="hero-portrait-mark absolute -bottom-1 -right-1 h-[1px] w-3 bg-neutral-600"></div>
          
          {/* Tiny Identification Code */}
          <div className="hero-metadata absolute bottom-4 left-4 font-mono text-[8px] tracking-[0.2em] text-neutral-700">
            ID: P-001
          </div>
        </div>
      </div>
      
      {/* Caption */}
      <div className="absolute -bottom-12 right-0 flex flex-col items-end gap-2">
        <span className="hero-metadata text-[9px] font-light uppercase tracking-[0.5em] text-neutral-500">
          Portrait
        </span>
        <span className="hero-metadata font-mono text-[8px] tracking-widest text-neutral-700">TOKYO . VOL 01</span>
      </div>
      
      {/* Vertical Japanese Label */}
      <div className="hero-jp absolute -left-12 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="text-[10px] tracking-[0.5em] text-neutral-600" style={{ writingMode: 'vertical-rl' }}>
          プロジェクト
        </span>
      </div>
    </div>
  );
};
