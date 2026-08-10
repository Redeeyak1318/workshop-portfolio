'use client';

import { useEffect, useState } from 'react';

interface ResearchWindProps {
  isActive: boolean;
}

export const ResearchWind = ({ isActive }: ResearchWindProps) => {
  const [renderKey, setRenderKey] = useState(0);

  // Force re-render of SVG animations by incrementing key when breeze becomes active
  useEffect(() => {
    if (isActive) {
      setRenderKey(k => k + 1);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
      {/* 
        SVG Layer containing the wind wisps.
        We use a viewBox of 0 0 100 100 with preserveAspectRatio="none" 
        so the curves stretch organically across any screen size.
      */}
      <svg 
        key={renderKey}
        className="absolute w-[120%] h-[120%] left-[-10%] top-[-10%] opacity-0 animate-wind-fade-in-out" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wind-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(255, 255, 255, 0.02)" />
            <stop offset="50%" stopColor="rgba(220, 230, 255, 0.12)" />
            <stop offset="70%" stopColor="rgba(255, 255, 255, 0.02)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Strand 1: Primary long curved wisp */}
        <path 
          d="M -10 110 C 15 95, 30 105, 50 70 S 80 30, 110 -10" 
          fill="none" 
          stroke="url(#wind-gradient)" 
          strokeWidth="1.2"
          strokeLinecap="round"
          filter="url(#soft-glow)"
          className="animate-wind-flow"
          style={{ strokeDasharray: '200', strokeDashoffset: '200', animationDelay: '0s', animationDuration: '4.5s' }}
        />

        {/* Strand 2: Medium length, slightly higher entry */}
        <path 
          d="M -10 90 C 20 85, 25 65, 50 50 S 90 20, 110 5" 
          fill="none" 
          stroke="url(#wind-gradient)" 
          strokeWidth="0.6"
          strokeLinecap="round"
          className="animate-wind-flow"
          style={{ strokeDasharray: '160', strokeDashoffset: '160', animationDelay: '0.4s', animationDuration: '3.8s', opacity: 0.8 }}
        />

        {/* Strand 3: Lower entry, drifts more horizontally before curving up */}
        <path 
          d="M 0 115 C 30 110, 45 95, 65 75 S 95 40, 110 25" 
          fill="none" 
          stroke="url(#wind-gradient)" 
          strokeWidth="0.8"
          strokeLinecap="round"
          filter="url(#soft-glow)"
          className="animate-wind-flow"
          style={{ strokeDasharray: '180', strokeDashoffset: '180', animationDelay: '0.8s', animationDuration: '4.2s', opacity: 0.9 }}
        />

        {/* Strand 4: Delicate fast micro-wisp */}
        <path 
          d="M -15 105 C 10 100, 35 60, 70 40 S 95 20, 115 0" 
          fill="none" 
          stroke="rgba(255,255,255,0.06)" 
          strokeWidth="0.3"
          strokeLinecap="round"
          className="animate-wind-flow"
          style={{ strokeDasharray: '120', strokeDashoffset: '120', animationDelay: '0.2s', animationDuration: '3.2s' }}
        />

        {/* Strand 5: Slow atmospheric very thin under-layer */}
        <path 
          d="M -20 120 C 10 100, 40 90, 70 50 S 100 10, 120 -20" 
          fill="none" 
          stroke="url(#wind-gradient)" 
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#soft-glow)"
          className="animate-wind-flow"
          style={{ strokeDasharray: '250', strokeDashoffset: '250', animationDelay: '0.5s', animationDuration: '5.5s', opacity: 0.15 }}
        />
      </svg>

      {/* Atmospheric Particles (Tiny glowing dust) traveling roughly bottom-left to top-right */}
      <div key={`particles-${renderKey}`} className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white/40 rounded-full blur-[0.3px] animate-wind-particle opacity-0"
            style={{
              left: `${15 + i * 20}%`,
              bottom: `${-5 - (i % 2) * 10}%`,
              animationDelay: `${0.4 + i * 0.5}s`,
              animationDuration: `${3.5 + (i % 2)}s`
            }}
          ></div>
        ))}
      </div>

    </div>
  );
};
