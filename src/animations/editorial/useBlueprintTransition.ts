'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RefObject } from 'react';
import { createEditorialReveal } from '@/animations/editorial/EditorialReveal';

export const useBlueprintTransition = (sectionRef: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const q = gsap.utils.selector(sectionRef);
    
    // Elements to animate
    const blueprintOverlay = q('.projects-blueprint-overlay');
    const typography = q('.projects-title-line');
    const caption = q('.projects-caption');
    const featuredImage = q('.ed-image');
    const featuredTitle = q('.editorial-title');
    const featuredMeta = q('.editorial-meta-text');
    const featuredAnnotations = q('.editorial-metadata, .coordinate-label, .vertical-annotation');

    // 1. Wind Down About Section (Phase 1)
    // We bind a ScrollTrigger specifically for fading out the previous section
    const aboutMission = Array.from(document.querySelectorAll('#about .about-mission'));
    const aboutGhostText = Array.from(document.querySelectorAll('#about .about-ghost-text'));
    const aboutMeta = Array.from(document.querySelectorAll('#about .editorial-metadata, #about .coordinate-label, #about .vertical-annotation'));

    // Check if there's anything to wind down before creating the ScrollTrigger
    if (aboutMission.length > 0 || aboutGhostText.length > 0 || aboutMeta.length > 0) {
      const windDownTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 20%',
          scrub: 1.5,
        }
      });
      if (aboutMission.length > 0) windDownTl.to(aboutMission, { opacity: 0.85, ease: 'none' }, 0);
      if (aboutGhostText.length > 0) windDownTl.to(aboutGhostText, { y: -20, ease: 'none' }, 0);
      if (aboutMeta.length > 0) windDownTl.to(aboutMeta, { opacity: 0.2, ease: 'none' }, 0);
    }

    // 2. Blueprint Sheet Drop (Phase 2 & 3)
    if (blueprintOverlay.length > 0) {
      gsap.set(blueprintOverlay, { x: 100, y: -100, opacity: 0 });
      
      gsap.to(blueprintOverlay, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'top 20%',
          scrub: 1, // Phase 6: Blueprint lock when scrub finishes
        },
        x: 0,
        y: 0,
        opacity: 1,
        ease: 'power2.out'
      });
    }

    // 3. Projects Typography & Assembly (Phase 4 & 5)
    const assembleTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%', 
        once: true,
      }
    });

    // Phase 4: Typography
    if (typography.length > 0) {
      assembleTl.add(createEditorialReveal(typography, { direction: 'up', distance: 20, duration: 0.8, stagger: 0.15 }), 0);
    }
    if (caption.length > 0) {
      assembleTl.add(createEditorialReveal(caption, { direction: 'up', distance: 8, duration: 0.8 }), 0.2);
    }

  }, { scope: sectionRef });
};
