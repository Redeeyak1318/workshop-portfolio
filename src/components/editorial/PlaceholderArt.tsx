export const PlaceholderArt = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center opacity-80">
      
      {/* Structural Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
      
      <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.02)_49%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.02)_51%,transparent_55%)] -translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="absolute bottom-0 right-0 w-[150%] h-[150%] bg-[linear-gradient(-45deg,transparent_45%,rgba(255,255,255,0.01)_49%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.01)_51%,transparent_55%)] translate-x-1/4 translate-y-1/4"></div>

      {/* Abstract Structural Lines */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700/30 to-transparent"></div>
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-neutral-700/30 to-transparent"></div>
      
      <div className="absolute bottom-1/3 left-1/4 w-1/2 h-[1px] bg-neutral-600/20"></div>
      <div className="absolute top-1/4 right-1/4 w-[1px] h-1/2 bg-neutral-600/20"></div>

      {/* Center Reticle */}
      <div className="relative z-10 w-32 h-32 border border-neutral-700/20 rounded-full flex items-center justify-center">
        <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-4 bg-neutral-600/40"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1px] h-4 bg-neutral-600/40"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-4 h-[1px] bg-neutral-600/40"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-4 h-[1px] bg-neutral-600/40"></div>
      </div>
      
      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-neutral-700/40"></div>
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-neutral-700/40"></div>

      <div className="absolute bottom-6 left-8 flex flex-col gap-1">
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-600">Pending</span>
        <span className="font-mono text-[6px] tracking-[0.2em] text-neutral-700">AWAITING_ASSET_INJECTION</span>
      </div>
    </div>
  );
};
