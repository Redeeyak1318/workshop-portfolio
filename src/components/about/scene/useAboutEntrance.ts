'use client';
// hook for about entrance

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RefObject } from 'react';
import { createEditorialReveal } from '@/animations/editorial';

export const useAboutEntrance = (sectionRef: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const q = gsap.utils.selector(sectionRef);
    const headerLines = q('.about-header-line');
    const dashboardModules = q('.about-dashboard-module');

    // Create a timeline that starts while Hero is still occupying the viewport
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        // Trigger earlier so it overlaps the Hero exit
        start: 'top 85%',
        once: true,
      }
    });

    // 1. SYSTEM PROFILE
    if (headerLines.length) {
      tl.add(createEditorialReveal(headerLines, { direction: 'up', distance: 20, duration: 0.8, stagger: 0.15 }), 0);
    }

    // 2. Dashboard Modules (Begins only after header is fully readable)
    if (dashboardModules.length) {
      // Begin 0.6s after the header starts (so header is ~80% complete and readable)
      tl.add(
        createEditorialReveal(dashboardModules, { 
          direction: 'up', 
          distance: 12, 
          duration: 0.8,
          stagger: 0.1
        }), 
        0.8 // Wait for header
      );
    }

  }, { scope: sectionRef });
};
