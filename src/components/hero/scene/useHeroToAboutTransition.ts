'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RefObject } from 'react';

export const useHeroToAboutTransition = (sectionRef: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const q = gsap.utils.selector(sectionRef);
    const build = q('.hero-build');
    const portrait = q('.hero-portrait-container');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top', // Finishes exactly when Hero leaves viewport
        scrub: true,
      }
    });

    // 0-20% scroll (0.0 to 0.2): Do nothing (Hero remains stable)
    
    // 20-60% scroll (0.2 to 0.6): BUILD loses emphasis, Portrait shifts slightly
    if (build.length) {
      tl.to(build, {
        opacity: 0.75,
        y: -24, // Micro parallax upward
        duration: 0.4,
        ease: 'none' // Linear to match scroll perfectly
      }, 0.2);
    }

    if (portrait.length) {
      tl.to(portrait, {
        y: -6, // Micro parallax upward
        duration: 0.4,
        ease: 'none'
      }, 0.2);
    }

    // 60-100% scroll (0.6 to 1.0): Maintain state
    // We add an empty tween to stretch the timeline to 1.0 duration total
    tl.to({}, { duration: 0.4 }, 0.6);

  }, { scope: sectionRef });
};
