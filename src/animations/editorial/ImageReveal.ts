import gsap from 'gsap';

export interface ImageRevealOptions {
  duration?: number;
  delay?: number;
}

export const createImageReveal = (
  target: gsap.DOMTarget,
  options: ImageRevealOptions = {}
): gsap.core.Timeline => {
  const { duration = 1.4, delay = 0 } = options;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Prepare animation placeholders for clip-path, mask, opacity, grain overlay, and future light sweep
  tl.fromTo(
    target,
    {
      opacity: 0,
      clipPath: 'inset(10% 0 10% 0)',
    },
    {
      opacity: 1,
      clipPath: 'inset(0% 0 0% 0)',
      duration,
      delay,
    }
  );

  return tl;
};
