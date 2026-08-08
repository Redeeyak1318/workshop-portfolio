'use client';

import { ReactNode, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface EditorialInteractionProps {
  children: ReactNode;
  className?: string;
}

export const EditorialInteraction = ({ children, className = '' }: EditorialInteractionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Store the timelines so they can be played/reversed
  const hoverTl = useRef<gsap.core.Timeline | null>(null);
  const sweepTl = useRef<gsap.core.Timeline | null>(null);

  const { contextSafe } = useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const q = gsap.utils.selector(containerRef);

    // Timeline for stateful hover responses (brightness, opacity, etc)
    // Paused by default.
    hoverTl.current = gsap.timeline({ paused: true, defaults: { ease: 'power2.out', duration: 0.8 } });
    
    // Typography
    const title = q('.editorial-title');
    if (title.length) {
      hoverTl.current.to(title, { filter: 'brightness(1.15)', letterSpacing: '-0.02em' }, 0);
    }

    const textElements = q('.editorial-description, .editorial-meta-text');
    if (textElements.length) {
      hoverTl.current.to(textElements, { opacity: 1 }, 0);
    }

    // Blueprint & Metadata Activation
    const blueprints = q('.editorial-blueprint, .editorial-frame-metadata, .editorial-metadata');
    if (blueprints.length) {
      hoverTl.current.to(blueprints, { opacity: 0.8 }, 0); 
    }

    // Image Response
    const img = q('.editorial-artwork img');
    if (img.length) {
      // Very slight contrast/brightness bump
      hoverTl.current.to(img, { filter: 'brightness(1.05) contrast(1.1)' }, 0);
    }
    
    const grain = q('.grain-overlay');
    if (grain.length) {
      hoverTl.current.to(grain, { opacity: 0.03 }, 0);
    }

  }, { scope: containerRef });

  const handleMouseEnter = contextSafe(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Play the stateful hover timeline
    hoverTl.current?.play();

    // Trigger the sweep independently
    const q = gsap.utils.selector(containerRef);
    const sweep = q('.editorial-sweep');
    if (sweep.length) {
      // Kill any ongoing sweep animation to prevent overlapping glitches
      if (sweepTl.current) sweepTl.current.kill();
      
      sweepTl.current = gsap.timeline();
      sweepTl.current.fromTo(sweep, 
        { xPercent: -100, opacity: 0 }, 
        { xPercent: 100, opacity: 0.15, duration: 2.2, ease: 'power1.inOut' }
      );
    }
  });

  const handleMouseLeave = contextSafe(() => {
    // Reverse the stateful hover timeline
    hoverTl.current?.reverse();

    // Stop the sweep smoothly
    if (sweepTl.current) {
      const q = gsap.utils.selector(containerRef);
      gsap.to(q('.editorial-sweep'), { opacity: 0, duration: 0.5 });
    }
  });

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full cursor-crosshair ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
