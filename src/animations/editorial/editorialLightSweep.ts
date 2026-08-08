import gsap from 'gsap';

export const editorialLightSweep = (tl: gsap.core.Timeline, q: gsap.utils.SelectorFunc) => {
  const sweeps = q('.ed-sweep');
  
  if (!sweeps.length) return;

  // Extremely subtle diagonal light sweep across the entire section.
  gsap.set(sweeps, {
    xPercent: -100,
    opacity: 0
  });

  // Only happens once during section entrance
  tl.to(sweeps, {
    xPercent: 100,
    opacity: 0.08, // Very low opacity
    duration: 3,
    ease: 'power1.inOut',
  }, 0.5);
};
