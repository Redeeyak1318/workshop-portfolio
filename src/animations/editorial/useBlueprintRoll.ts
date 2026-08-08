'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RefObject } from 'react';

export const useBlueprintRoll = (sectionRef: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!sectionRef.current) return;

    const q = gsap.utils.selector(sectionRef);
    const rollLayer = q('.blueprint-roll-layer');
    const expHeading = q('.exp-heading');
    const expAxis = q('.exp-axis');
    const expEntries = q('.exp-entry');
    const expMetadata = q('.exp-metadata');

    const rollArr = gsap.utils.toArray(rollLayer);
    const headingArr = gsap.utils.toArray(expHeading);
    const axisArr = gsap.utils.toArray(expAxis);
    const entriesArr = gsap.utils.toArray(expEntries);
    const metaArr = gsap.utils.toArray(expMetadata);

    if (prefersReducedMotion) {
      if (rollArr.length > 0) gsap.set(rollArr, { display: 'none' });
      return;
    }

    // Set initial states for Experience timeline (hidden until rolled over)
    if (headingArr.length > 0) gsap.set(headingArr, { opacity: 0, y: 30 });
    if (axisArr.length > 0) gsap.set(axisArr, { scaleY: 0, transformOrigin: 'top center' });
    if (entriesArr.length > 0) gsap.set(entriesArr, { opacity: 0, y: 20 });
    if (metaArr.length > 0) gsap.set(metaArr, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        // Start when the top of Experience is 80% down the viewport
        start: 'top 80%',
        // End when the top of Experience reaches 10% from the top
        end: 'top 10%',
        scrub: 1, 
      }
    });

    // Phase 3: Roll Motion (translateY and scaleY)
    if (rollArr.length > 0) {
      // The layer rolls upward, moving faster than the scroll, and squishes slightly to simulate a physical roll
      tl.to(rollArr, {
        yPercent: -100, // Move it up entirely out of its bounding box
        scaleY: 0.7, // Squish to simulate rolling perspective
        opacity: 0, // Fades out completely by the end
        ease: 'power2.inOut',
      }, 0);
    }

    // Phase 5 & 6: Reveal Experience Assembly
    // This happens while the roll is occurring (start at 0.3 to wait for sheet to lift)
    if (headingArr.length > 0) {
      tl.to(headingArr, { opacity: 1, y: 0, ease: 'power2.out' }, 0.3);
    }

    if (axisArr.length > 0) {
      tl.to(axisArr, { scaleY: 1, ease: 'power2.inOut' }, 0.4);
    }

    if (entriesArr.length > 0) {
      tl.to(entriesArr, { opacity: 1, y: 0, stagger: 0.1, ease: 'power2.out' }, 0.5);
    }

    if (metaArr.length > 0) {
      tl.to(metaArr, { opacity: 0.3, ease: 'power1.inOut' }, 0.8);
    }

  }, { scope: sectionRef });
};
