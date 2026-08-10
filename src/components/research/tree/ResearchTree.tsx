'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { RESEARCH_DATA, ResearchData } from '../data/researchData';
import { ResearchFruit } from './ResearchFruit';
import { ResearchWind } from './ResearchWind';

interface ResearchTreeProps {
  onOpenDetail: (data: ResearchData) => void;
}

export const ResearchTree = ({ onOpenDetail }: ResearchTreeProps) => {
  const [hoveredFruit, setHoveredFruit] = useState<string | null>(null);
  const [breezeActive, setBreezeActive] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const triggerBreeze = () => {
      setBreezeActive(true);
      // Breeze event lasts 8s total
      setTimeout(() => setBreezeActive(false), 8000);
      
      // Schedule next breeze with natural variability (12-22s)
      const nextDelay = 12000 + Math.random() * 10000;
      timeoutId = setTimeout(triggerBreeze, nextDelay);
    };

    // Organic initial start after hydration
    const initialDelay = 4000 + Math.random() * 3000;
    timeoutId = setTimeout(triggerBreeze, initialDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden">
      
      {/* 
        Global Styles for the Tree Animations 
        Implemented inline to avoid polluting global CSS.
        Respects prefers-reduced-motion.
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (prefers-reduced-motion: no-preference) {
          @keyframes research-breathe {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          @keyframes research-breeze {
            0%, 60%, 100% { transform: translateX(0) rotate(0deg); }
            70% { transform: translateX(3px) rotate(1deg); }
            85% { transform: translateX(-1px) rotate(-0.5deg); }
          }
          
          .research-node-animator {
            animation: 
              research-breathe 4s ease-in-out infinite var(--pulse-delay, 0s),
              research-breeze 12s ease-in-out infinite var(--breeze-delay, 0s);
          }
        }
      `}} />

      {/* Background Environment Mask */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,#020202_100%)] pointer-events-none"></div>

      <div className="absolute inset-0 z-0 mask-image-[radial-gradient(ellipse_at_center,black_30%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)]">
        <Image 
          src="/images/research/research-tree-bg.png" 
          alt="Research Tree Architecture"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-center opacity-80 mix-blend-lighten"
        />
      </div>

      {/* Environmental Particle Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-10 mix-blend-screen bg-[url('/images/textures/grain.png')] bg-repeat" style={{ animation: 'research-breeze 20s linear infinite' }}></div>

      {/* Cinematic Visible Wind Sweep */}
      <ResearchWind isActive={breezeActive} />

      {/* Interactive Fruit Overlay Layer */}
      <div className="absolute inset-0 z-20">
        {RESEARCH_DATA.map((fruit) => (
          <ResearchFruit
            key={fruit.id}
            data={fruit}
            isActive={hoveredFruit === fruit.id}
            isHovered={hoveredFruit !== null}
            breezeActive={breezeActive}
            onHover={setHoveredFruit}
            onClick={onOpenDetail}
          />
        ))}
      </div>

    </div>
  );
};
