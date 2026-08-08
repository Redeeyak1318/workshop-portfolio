'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RefObject } from 'react';
import {
  editorialSectionReveal,
  editorialBlueprintReveal,
  editorialTypography,
  editorialImageReveal,
  editorialLightSweep,
  editorialDepth
} from '@/animations/editorial';

// Register ScrollTrigger globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useEditorialSectionAnimation = (sectionRef: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const q = gsap.utils.selector(sectionRef);

    // --------------------------------------------------
    // ENTRANCE & ASSEMBLY TIMELINE
    // --------------------------------------------------
    const assembleTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 95%',  // Start assembling as soon as it enters viewport
        end: 'top 20%',    // Fully assembled when it dominates the screen
        scrub: 1.2,        // Smooth scrubbing
      }
    });

    // 1. Core ambient section reveal
    editorialSectionReveal(assembleTl, sectionRef);

    // 2. Blueprint Construction
    editorialBlueprintReveal(assembleTl, q);

    // 3. Typography Assembly
    editorialTypography(assembleTl, q);

    // 4. Image Emergence
    editorialImageReveal(assembleTl, q);

    // 5. Ambient Light Sweep
    editorialLightSweep(assembleTl, q);


    // --------------------------------------------------
    // CONTINUOUS DEPTH TIMELINE
    // --------------------------------------------------
    const depthTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // 6. Editorial Depth (Parallax)
    editorialDepth(depthTl, q);


    // --------------------------------------------------
    // EXIT TIMELINE (Losing contrast as it leaves)
    // --------------------------------------------------
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'bottom 80%', 
        end: 'bottom 0%',
        scrub: 1.2,
      }
    }).to(sectionRef.current, {
      opacity: 0.1,
      filter: 'blur(5px) contrast(0.8) brightness(0.5)',
      ease: 'power2.inOut'
    });

  }, { scope: sectionRef });
};
