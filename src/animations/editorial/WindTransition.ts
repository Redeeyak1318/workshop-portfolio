import gsap from 'gsap';

export interface WindTransitionOptions {
  duration?: number;
  delay?: number;
}

export const createWindTransition = (
  target: gsap.DOMTarget,
  options: WindTransitionOptions = {}
): gsap.core.Timeline => {
  const { duration = 0.8, delay = 0 } = options;
  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

  tl.fromTo(
    target,
    {
      xPercent: -100,
    },
    {
      xPercent: 200, // Move across the screen
      duration,
      delay,
    }
  );

  return tl;
};
