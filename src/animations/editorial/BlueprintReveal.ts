import gsap from 'gsap';

export interface BlueprintRevealOptions {
  delay?: number;
  duration?: number;
}

export const createBlueprintReveal = (
  target: gsap.DOMTarget,
  options: BlueprintRevealOptions = {}
): gsap.core.Timeline => {
  const { delay = 0, duration = 1.2 } = options;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo(
    target,
    {
      opacity: 0,
      clipPath: 'inset(100% 0 0 0)',
      y: 30,
      filter: 'blur(8px)',
    },
    {
      opacity: 1, 
      clipPath: 'inset(0% 0 0 0)',
      y: 0,
      filter: 'blur(0px)',
      duration,
      delay,
    }
  );

  return tl;
};
