'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RefObject } from 'react';

export const useResearchToContact = (sectionRef: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!sectionRef.current) return;

    // Contact Scene Targets
    const q = gsap.utils.selector(sectionRef);
    const line = q('.contact-line');
    const marker = q('.contact-marker');
    const location = q('.contact-location');
    const heading = q('.contact-heading');
    const text = q('.contact-text');
    const links = q('.contact-links');
    const image = q('.contact-image');

    const contactTargets = [line, marker, location, heading, text, links, image].map(t => gsap.utils.toArray(t));

    if (prefersReducedMotion) {
      return; // Elements remain at native opacity/position
    }

    // Set Initial Contact States (Hidden)
    gsap.set(contactTargets[0], { scaleY: 0, transformOrigin: 'top center' }); // line
    gsap.set(contactTargets[1], { opacity: 0, y: 10 }); // marker
    gsap.set(contactTargets[2], { opacity: 0, y: 10 }); // location
    gsap.set(contactTargets[3], { opacity: 0, y: 30 }); // heading
    gsap.set(contactTargets[4], { opacity: 0, y: 20 }); // text
    gsap.set(contactTargets[5], { opacity: 0, y: 20 }); // links
    gsap.set(contactTargets[6], { opacity: 0, scale: 0.95 }); // image

    // Research Scene Targets (Phase 1 & 2: Dissolution)
    const getSafeArray = (selector: string) => Array.from(document.querySelectorAll(selector));
    
    const mathMarks = getSafeArray('#research .math-mark');
    const annotationLines = getSafeArray('#research .fragment-3, #research .fragment-4');
    const metadata = getSafeArray('#research .research-metadata');
    const imagery = getSafeArray('#research .research-content .col-span-7, #research .notebook-layer');
    const secondaryTypo = getSafeArray('#research .research-content p, #research .research-content ul, #research .research-content span');
    const primaryHeading = getSafeArray('#research .research-heading-container');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 95%', // Contact top touches near bottom of screen
        end: 'top 20%',   // Contact top reaches 20% from top
        scrub: 1.5,
      }
    });

    // --- PHASE 1 & 2: INK / DATA DISSOLUTION ---
    // Dissolve order: math -> lines -> metadata -> imagery -> secondary -> primary
    
    if (mathMarks.length) {
      tl.to(mathMarks, { opacity: 0, scaleX: 1.1, letterSpacing: '0.1em', duration: 1, ease: 'power2.inOut' }, 0);
    }
    
    if (annotationLines.length) {
      tl.to(annotationLines, { opacity: 0, scaleX: 1.2, duration: 1, ease: 'power2.inOut' }, 0.5);
    }

    if (metadata.length) {
      tl.to(metadata, { opacity: 0, y: -5, duration: 1, ease: 'power2.inOut' }, 1);
    }

    if (imagery.length) {
      tl.to(imagery, { opacity: 0, duration: 1.5, ease: 'power2.inOut' }, 1.5);
    }

    if (secondaryTypo.length) {
      tl.to(secondaryTypo, { opacity: 0, filter: 'blur(2px)', y: -10, duration: 1.5, ease: 'power2.inOut' }, 2);
    }

    if (primaryHeading.length) {
      tl.to(primaryHeading, { opacity: 0, letterSpacing: '0.05em', y: -20, duration: 1.5, ease: 'power2.inOut' }, 2.5);
    }

    // --- PHASE 3: OPEN SPACE ---
    // There is a deliberate gap between timestamp 4.0 and 5.0 where nothing is visible.

    // --- PHASE 4 & 5: CONTACT EMERGENCE ---
    const emergeStart = 5.0;

    if (contactTargets[0].length) {
      tl.to(contactTargets[0], { scaleY: 1, duration: 1, ease: 'power3.inOut' }, emergeStart);
    }
    
    if (contactTargets[1].length) {
      tl.to(contactTargets[1], { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, emergeStart + 0.5);
    }

    if (contactTargets[2].length) {
      tl.to(contactTargets[2], { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, emergeStart + 0.7);
    }

    if (contactTargets[3].length) {
      tl.to(contactTargets[3], { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }, emergeStart + 1.2);
    }

    if (contactTargets[4].length) {
      tl.to(contactTargets[4], { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }, emergeStart + 1.5);
    }

    if (contactTargets[5].length) {
      tl.to(contactTargets[5], { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, emergeStart + 2.0);
    }

    // Phase 6: Final Atmospheric Image
    if (contactTargets[6].length) {
      tl.to(contactTargets[6], { opacity: 0.1, scale: 1, duration: 3, ease: 'power1.inOut' }, emergeStart + 1.0);
    }

  }, { scope: sectionRef });
};
