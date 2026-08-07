import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = (containerRef: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Accessibility: Reduced Motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.8,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // =========================================
    // 1. Master Entrance Timeline
    // =========================================
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    tl.from(['.hero-noise', '.hero-blueprint', '.hero-guidelines', '.hero-bg-jp'], {
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power2.out',
    }, 0)
    .from('.hero-build', {
      opacity: 0,
      y: 30,
      scale: 0.98,
      duration: 0.8,
    }, 0.2)
    .from(['.hero-name-first', '.hero-name-last'], {
      opacity: 0,
      y: 15,
      duration: 0.6,
      stagger: 0.1,
    }, 0.3)
    .from('.hero-subtitle', {
      opacity: 0,
      x: -10,
      duration: 0.6,
    }, 0.4)
    .from(['.hero-portrait-outer', '.hero-portrait-inner', '.hero-portrait-mark'], {
      opacity: 0,
      y: 10,
      duration: 0.6,
      stagger: 0.05,
    }, 0.5)
    .from(['.hero-nav', '.hero-marquee'], {
      opacity: 0,
      y: -5,
      duration: 0.6,
      stagger: 0.1,
    }, 0.6)
    .from(['.hero-jp', '.hero-metadata'], {
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
    scrollTl.to('.hero-build', {
      y: '-18vh',
      opacity: 0.3,
      ease: 'none',
    }, 0);

    // Portrait: Slower parallax (approx 40-60% of BUILD)
    scrollTl.to('.hero-portrait-outer', {
      y: '-9vh',
      ease: 'none',
    }, 0);

    // Japanese Typography: Very slow parallax
    scrollTl.to('.hero-bg-jp', {
      y: '-4vh',
      ease: 'none',
    }, 0);
    scrollTl.to('.hero-jp', {
      y: '-2vh',
      ease: 'none',
    }, 0);

    // Background grid: Subtle parallax
    scrollTl.to('.hero-blueprint', {
      y: '-6vh',
      ease: 'none',
    }, 0);

    // Metadata: Almost static
    scrollTl.to('.hero-metadata', {
      y: '-1vh',
      ease: 'none',
    }, 0);

    // =========================================
    // 3. Infinite Marquee on Scroll
    // =========================================
    // Uses xPercent: -50 on a duplicated text string for infinite seamless loop
    const marqueeTl = gsap.to('.hero-marquee-track', {
      xPercent: -50,
      repeat: -1,
      duration: 40, // Extremely slow
      ease: 'none',
      paused: true,
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      onEnter: () => marqueeTl.play(),
      onLeaveBack: () => marqueeTl.pause(), // Pause when at top
    });

    // =========================================
    // 4. Subtle Mouse Parallax
    // =========================================
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 2;
      const yPos = (clientY / window.innerHeight - 0.5) * 2;

      gsap.to('.hero-build', { x: xPos * 2, y: yPos * 2, duration: 1.2, ease: 'power2.out' });
      gsap.to('.hero-portrait-outer', { x: xPos * -4, y: yPos * -4, duration: 1.2, ease: 'power2.out' });
      gsap.to('.hero-bg-jp', { x: xPos * 8, y: yPos * 8, duration: 1.2, ease: 'power2.out' });
      gsap.to('.hero-blueprint', { x: xPos * -2, y: yPos * -2, duration: 1.2, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      lenis.destroy();
    };

  }, { scope: containerRef });
};
