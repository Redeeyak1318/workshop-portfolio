export const ExperiencePin = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative w-4 h-4 md:w-5 md:h-5 z-20 ${className}`}>
      {/* Pin Shadow - cast down and right */}
      <div className="absolute top-2 left-1 w-full h-full bg-black/50 rounded-full blur-[2px] scale-y-75 -rotate-[15deg]"></div>
      
      {/* Pin Needle (tiny metallic hint pointing into the paper) */}
      <div className="absolute -bottom-2 left-1/2 w-[1.5px] h-3 bg-gradient-to-b from-neutral-400 to-neutral-700 shadow-sm -translate-x-1/2 rotate-[20deg] origin-top"></div>
      
      {/* Pin Head - red plastic dome with lighting */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ef4444_0%,#b91c1c_50%,#7f1d1d_100%)] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.6),0_3px_5px_rgba(0,0,0,0.5)] border border-red-950/80">
        {/* Specular Highlight - curved reflection */}
        <div className="absolute top-[15%] left-[20%] w-[35%] h-[35%] rounded-full bg-white/50 blur-[0.5px] rotate-45 transform-gpu scale-y-75"></div>
      </div>
    </div>
  );
};
