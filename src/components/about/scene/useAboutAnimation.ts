import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useAboutAnimation = (containerRef: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    if (!containerRef.current) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Timeline for About Reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%', // Trigger when top of section hits 75% down the viewport
        once: true,       // Only play once
      },
      defaults: {
        ease: 'power3.out',
        duration: 0.9,
      }
    });

    // Fade in Header
    tl.fromTo('.about-header', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0 },
      0
    )
    // Reveal Mission Statement elegantly
    .fromTo('.about-mission',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2 },
      0.2
    )
    // Reveal Timeline from top to bottom
    .fromTo('.about-timeline',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1 },
      0.4
    )
    // Stagger Cards
    .fromTo('.about-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1 },
      0.6
    );

  }, { scope: containerRef });
};
