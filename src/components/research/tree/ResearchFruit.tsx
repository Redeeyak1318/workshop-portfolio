'use client';

import { ResearchData } from '../data/researchData';
import Image from 'next/image';

interface ResearchFruitProps {
  data: ResearchData;
  isActive: boolean;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  onClick: (data: ResearchData) => void;
}

export const ResearchFruit = ({
  data,
  isActive,
  isHovered,
  onHover,
  onClick
}: ResearchFruitProps) => {

  // If another fruit is active/hovered, this one becomes slightly subdued.
  // If NO fruit is active, it stays at 100%.
  const isSubdued = !isActive && isHovered;

  return (
    <div
      className={`absolute z-30 group/fruit focus-visible:outline-none transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform ${isActive ? 'z-50' : 'z-30'}`}
      style={{
        top: data.pos.top,
        left: data.pos.left,
        transform: 'translate(-50%, -50%)',
      }}
      tabIndex={0}
      onMouseEnter={() => onHover(data.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(data.id)}
      onBlur={() => onHover(null)}
      onClick={() => onClick(data)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(data);
        }
      }}
      aria-label={`Research: ${data.title}`}
    >

      {/* 
        The Breathing & Breeze Container 
        Applies a continuous subtle float (breathing) and occasional breeze sway.
        Uses CSS animation defined in the parent Tree component.
        Hover Target & Apple Container
        We use mix-blend-screen to perfectly blend the black background of the apple asset into the scene.
      */}
      <div 
        className={`relative flex items-center justify-center cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]
          ${isActive 
            ? 'scale-110 drop-shadow-[0_0_30px_rgba(220,38,38,0.4)]' 
            : isSubdued 
              ? 'opacity-40 scale-95' 
              : 'opacity-90 drop-shadow-[0_0_10px_rgba(220,38,38,0.2)] hover:drop-shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-[1.03]'
          }`}
        style={{
          // Use the provided delays to offset the animation phases per fruit
          animation: `sway 8s ease-in-out infinite alternate`,
          animationDelay: data.breezeDelay
        }}
      >

        {/* The Cinematic Apple Asset */}
        <div className="relative w-7 h-7 md:w-9 md:h-9 pointer-events-none transition-transform duration-[800ms]">
          <Image
            src="/images/research/apple-node.png"
            alt="Research Node"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 28px, 36px"
          />
        </div>

        {/* Expanded Invisible Hitbox for Touch/Mouse */}
        <div className="absolute inset-[-30px] rounded-full z-20"></div>
      </div>

      {/* Connector Line mapping from Fruit to Annotation */}
      <div 
        className={`absolute top-[60%] left-1/2 w-[1px] h-8 md:h-12 bg-gradient-to-b from-[#ffb347]/40 to-transparent pointer-events-none transition-all duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] origin-top
          opacity-0 scale-y-0
          group-hover/fruit:opacity-100 group-hover/fruit:scale-y-100
          group-focus-within/fruit:opacity-100 group-focus-within/fruit:scale-y-100
          ${isActive ? 'opacity-100 scale-y-100' : ''}`}
      ></div>

      {/* Detail Label Below Fruit */}
      <div 
        className={`absolute top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none transition-all duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] w-max max-w-[200px] text-center
          opacity-0 translate-y-2 scale-95
          group-hover/fruit:opacity-100 group-hover/fruit:translate-y-0 group-hover/fruit:scale-100
          group-focus-within/fruit:opacity-100 group-focus-within/fruit:translate-y-0 group-focus-within/fruit:scale-100
          ${isActive ? 'opacity-100 translate-y-0 scale-100' : ''}`}
      >
        <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-[#ffb347]/80 uppercase mb-1 drop-shadow-[0_0_5px_rgba(255,179,71,0.5)]">
          Node_{data.id}
        </span>
        <span className="text-xs md:text-sm font-light tracking-wide text-white/90 drop-shadow-md">
          {data.shortTitle}
        </span>
      </div>
    </div>
  );
};
