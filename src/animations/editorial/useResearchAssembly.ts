'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RefObject } from 'react';

export const useResearchAssembly = (sectionRef: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!sectionRef.current) return;

    const q = gsap.utils.selector(sectionRef);
    
    // Elements in Research Scene
    const notebookLayer = q('.notebook-layer');
    const mathMarks = q('.math-mark');
    const fragments = q('.research-fragment');
    const fragment1 = q('.fragment-1');
    const fragment2 = q('.fragment-2');
    const fragment3 = q('.fragment-3');
    const fragment4 = q('.fragment-4');
    const content = q('.research-content');
    const metadata = q('.research-metadata');

    // Elements in Experience Scene (Phase 1: Experience Quiets)
    const expQuiets = Array.from(document.querySelectorAll('#experience .exp-axis, #experience .exp-metadata, #experience .exp-entry span'));

    // Safely resolve arrays
    const notebookArr = gsap.utils.toArray(notebookLayer);
    const mathArr = gsap.utils.toArray(mathMarks);
    const frag1Arr = gsap.utils.toArray(fragment1);
    const frag2Arr = gsap.utils.toArray(fragment2);
    const frag3Arr = gsap.utils.toArray(fragment3);
    const frag4Arr = gsap.utils.toArray(fragment4);
    const contentArr = gsap.utils.toArray(content);
    const metaArr = gsap.utils.toArray(metadata);

    if (prefersReducedMotion) {
      // If reduced motion is preferred, immediately show final states and exit
      if (notebookArr.length > 0) gsap.set(notebookArr, { opacity: 0 }); // Hide transition layer
      return;
    }

    // --- INITIAL STATES ---
    
    // Notebook layer starts slightly lower to slide in
    if (notebookArr.length > 0) gsap.set(notebookArr, { y: 100, opacity: 0 });
    
    // Math marks hidden
    if (mathArr.length > 0) gsap.set(mathArr, { opacity: 0, scale: 0.95 });
    
    // Heading fragments scrambled
    if (frag1Arr.length > 0) gsap.set(frag1Arr, { opacity: 0, y: -40, x: -20 });
    if (frag2Arr.length > 0) gsap.set(frag2Arr, { opacity: 0, y: 40, x: 50 });
    if (frag3Arr.length > 0) gsap.set(frag3Arr, { scaleX: 0, transformOrigin: 'left center' });
    if (frag4Arr.length > 0) gsap.set(frag4Arr, { scaleX: 0, transformOrigin: 'right center' });
    
    // Content hidden
    if (contentArr.length > 0) gsap.set(contentArr, { opacity: 0, y: 20 });
    if (metaArr.length > 0) gsap.set(metaArr, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%', // Starts as soon as Research is visible
        end: 'top 10%',   // Ends when Research fills the screen
        scrub: 1.5,       // Smooth scrubbing
      }
    });

    // Phase 1: Experience Quiets (Fade out distracting elements from previous section)
    if (expQuiets.length > 0) {
      tl.to(expQuiets, { opacity: 0.05, duration: 2, ease: 'power2.inOut' }, 0);
    }

    // Phase 2: Notebook Paper enters
    if (notebookArr.length > 0) {
      tl.to(notebookArr, { y: 0, opacity: 1, duration: 2, ease: 'power2.out' }, 0);
      
      // Phase 7: Notebook layer visually dissolves into the environment by the end of transition
      tl.to(notebookArr, { opacity: 0, duration: 1, ease: 'power2.inOut' }, 4);
    }

    // Phase 3 & 6: Mathematical Atmosphere (Decorative marks fade in)
    if (mathArr.length > 0) {
      tl.to(mathArr, { opacity: 0.15, scale: 1, duration: 2, stagger: 0.2, ease: 'power1.inOut' }, 0.5);
    }

    // Phase 4: Scrambled Research Assembly (Fragments align into place)
    // Aligning happens over time, resolving perfectly at timestamp 3
    if (frag1Arr.length > 0) tl.to(frag1Arr, { opacity: 1, y: 0, x: 0, duration: 2, ease: 'power3.out' }, 1);
    if (frag2Arr.length > 0) tl.to(frag2Arr, { opacity: 1, y: 0, x: 0, duration: 2, ease: 'power3.out' }, 1.2);
    if (frag3Arr.length > 0) tl.to(frag3Arr, { scaleX: 1, duration: 1.5, ease: 'power2.inOut' }, 1.5);
    if (frag4Arr.length > 0) tl.to(frag4Arr, { scaleX: 1, duration: 1.5, ease: 'power2.inOut' }, 1.8);

    // Phase 5: Content Reveal
    if (contentArr.length > 0) {
      tl.to(contentArr, { opacity: 1, y: 0, duration: 2, ease: 'power2.out' }, 2.5);
    }

    if (metaArr.length > 0) {
      tl.to(metaArr, { opacity: 0.3, duration: 1, ease: 'none' }, 3.5);
    }

  }, { scope: sectionRef });
};
