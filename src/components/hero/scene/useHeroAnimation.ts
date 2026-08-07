import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { RefObject } from 'react';

export const useHeroAnimation = (containerRef: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Accessibility: Reduced Motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Master Timeline
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    });

    // Scene 1: Background fades from black. Noise texture slowly appears. (0.4-0.6s)
    tl.from(containerRef.current, {
      backgroundColor: '#000000',
      duration: 0.6,
    })
    .from('.hero-noise', {
      opacity: 0,
      duration: 0.6,
    }, '<');

    // Scene 2: Editorial grid fades in. Very subtle. Opacity only.
    tl.from('.hero-blueprint', {
      opacity: 0,
      duration: 0.6,
    }, '-=0.2');

    // Scene 3: Construction lines reveal. Small upward movement.
    tl.from('.hero-guidelines', {
      y: 10,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power2.out',
    }, '-=0.3');

    // Scene 4: Portrait frame appears. Outer frame -> Inner frame -> Corner marks
    tl.from('.hero-portrait-outer', {
      opacity: 0,
      y: 10,
      duration: 0.5,
    }, '-=0.3')
    .from('.hero-portrait-inner', {
      opacity: 0,
      duration: 0.4,
    }, '-=0.2')
    .from('.hero-portrait-mark', {
      opacity: 0,
      duration: 0.2,
      stagger: 0.05,
    }, '-=0.1');

    // Scene 5: Large BUILD typography appears (y: 40, opacity: 0, ease: power3.out)
    tl.from('.hero-build', {
      y: 40,
      opacity: 0,
      duration: 1.0,
      ease: 'power3.out',
    }, '-=0.4');

    // Scene 6: Japanese vertical typography appears (Fade only, tiny movement)
    tl.from('.hero-jp', {
      y: 5,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    }, '-=0.6')
    .from('.hero-bg-jp', {
      y: 10,
      opacity: 0,
      duration: 0.8,
    }, '<');

    // Scene 7: Name block (Raktim -> SONOWAL -> Subtitle)
    tl.from('.hero-name-first', {
      opacity: 0,
      y: 10,
      duration: 0.6,
    }, '-=0.6')
    .from('.hero-name-last', {
      opacity: 0,
      y: 10,
      duration: 0.6,
    }, '-=0.4')
    .from('.hero-subtitle', {
      opacity: 0,
      y: 10,
      duration: 0.6,
    }, '-=0.4');

    // Scene 8: Metadata appears one by one
    tl.from('.hero-metadata', {
      opacity: 0,
      y: 5,
      duration: 0.4,
      stagger: 0.05,
    }, '-=0.4');

    // Scene 9: Navigation fades in
    tl.from('.hero-nav', {
      opacity: 0,
      duration: 0.6,
    }, '-=0.2');

    // Scene 10: Bottom editorial footer appears
    tl.from('.hero-marquee', {
      opacity: 0,
      duration: 0.6,
    }, '-=0.4');

  }, { scope: containerRef });
};
