import gsap from 'gsap';

export const editorialSectionReveal = (tl: gsap.core.Timeline, sectionRef: React.RefObject<HTMLElement | null>) => {
  if (!sectionRef.current) return;
  
  // Set initial atmospheric state (faint, blurred, low contrast)
  gsap.set(sectionRef.current, {
    opacity: 0.05,
    filter: 'blur(8px) contrast(0.8) brightness(0.7)'
  });

  // Animate to full presence (illumination effect)
  tl.to(sectionRef.current, {
    opacity: 1,
    filter: 'blur(0px) contrast(1) brightness(1)',
    duration: 2,
    ease: 'power2.inOut',
  }, 0);
};
