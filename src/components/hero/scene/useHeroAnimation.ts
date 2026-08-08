import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject, MutableRefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

export interface HeroAnimationRefs {
  containerRef: RefObject<HTMLElement | null>;
  overlaysRef: RefObject<HTMLDivElement | null>;
  guidelinesRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  bgJpRef: RefObject<HTMLDivElement | null>;
  buildRef: RefObject<HTMLHeadingElement | null>;
  nameFirstRef: RefObject<HTMLSpanElement | null>;
  nameLastRef: RefObject<HTMLSpanElement | null>;
  subtitleRef: RefObject<HTMLDivElement | null>;
  portraitOuterRef: RefObject<HTMLDivElement | null>;
  portraitInnerRef: RefObject<HTMLDivElement | null>;
  portraitMarkRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  navRef: RefObject<HTMLDivElement | null>;
  marqueeRef: RefObject<HTMLDivElement | null>;
  marqueeTrackRef: RefObject<HTMLDivElement | null>;
  jpRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  metadataRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

export const useHeroAnimation = (refs: HeroAnimationRefs) => {
  const {
    containerRef,
    overlaysRef,
    guidelinesRefs,
    bgJpRef,
    buildRef,
    nameFirstRef,
    nameLastRef,
    subtitleRef,
    portraitOuterRef,
    portraitInnerRef,
    portraitMarkRefs,
    navRef,
    marqueeRef,
    marqueeTrackRef,
    jpRefs,
    metadataRefs
  } = refs;

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Accessibility: Reduced Motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Filter out nulls from array refs
    const validGuidelines = guidelinesRefs.current.filter(Boolean);
    const validMarks = portraitMarkRefs.current.filter(Boolean);
    const validJp = jpRefs.current.filter(Boolean);
    const validMetadata = metadataRefs.current.filter(Boolean);

    // =========================================
    // 1. Master Entrance Timeline
    // =========================================
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    tl.from([overlaysRef.current, ...validGuidelines, bgJpRef.current], {
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power2.out',
    }, 0)
    .from(buildRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.98,
      duration: 0.8,
    }, 0.2)
    .from([nameFirstRef.current, nameLastRef.current], {
      opacity: 0,
      y: 15,
      duration: 0.6,
      stagger: 0.1,
    }, 0.3)
    .from(subtitleRef.current, {
      opacity: 0,
      x: -10,
      duration: 0.6,
    }, 0.4)
    .from([portraitOuterRef.current, portraitInnerRef.current, ...validMarks], {
      opacity: 0,
      y: 10,
      duration: 0.6,
      stagger: 0.05,
    }, 0.5)
    .from([navRef.current, marqueeRef.current], {
      opacity: 0,
      y: -5,
      duration: 0.6,
      stagger: 0.1,
    }, 0.6)
    .from([...validJp, ...validMetadata], {
      opacity: 0,
      duration: 0.5,
      stagger: 0.02,
    }, 0.7);

    // =========================================
    // 2. Cinematic Scroll Choreography
    // =========================================
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2, // Smooth interpolation
      },
    });

    // BUILD: Translates 15-20% upwards, subtle opacity drop
    scrollTl.to(buildRef.current, {
      y: '-18vh',
      opacity: 0.3,
      ease: 'none',
    }, 0);

    // Portrait: Slower parallax (approx 40-60% of BUILD)
    scrollTl.to(portraitOuterRef.current, {
      y: '-9vh',
      ease: 'none',
    }, 0);

    // Japanese Typography: Very slow parallax
    scrollTl.to(bgJpRef.current, {
      y: '-4vh',
      ease: 'none',
    }, 0);
    if (validJp.length > 0) {
      scrollTl.to(validJp, {
        y: '-2vh',
        ease: 'none',
      }, 0);
    }

    // Background grid: Subtle parallax (applied to overlays)
    scrollTl.to(overlaysRef.current, {
      y: '-6vh',
      ease: 'none',
    }, 0);

    // Metadata: Almost static
    if (validMetadata.length > 0) {
      scrollTl.to(validMetadata, {
        y: '-1vh',
        ease: 'none',
      }, 0);
    }

    // =========================================
    // 3. Infinite Marquee on Scroll
    // =========================================
    const marqueeTl = gsap.to(marqueeTrackRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 40,
      ease: 'none',
      paused: true,
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      onEnter: () => marqueeTl.play(),
      onLeaveBack: () => marqueeTl.pause(),
    });

    // =========================================
    // 4. Subtle Mouse Parallax
    // =========================================
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 2;
      const yPos = (clientY / window.innerHeight - 0.5) * 2;

      gsap.to(buildRef.current, { x: xPos * 2, y: yPos * 2, duration: 1.2, ease: 'power2.out' });
      gsap.to(portraitOuterRef.current, { x: xPos * -4, y: yPos * -4, duration: 1.2, ease: 'power2.out' });
      gsap.to(bgJpRef.current, { x: xPos * 8, y: yPos * 8, duration: 1.2, ease: 'power2.out' });
      gsap.to(overlaysRef.current, { x: xPos * -2, y: yPos * -2, duration: 1.2, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, { scope: containerRef });
};
