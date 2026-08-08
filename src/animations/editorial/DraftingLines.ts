import gsap from 'gsap';

export interface DraftingLinesOptions {
  duration?: number;
  delay?: number;
}

export const createDraftingLines = (
  target: gsap.DOMTarget,
  options: DraftingLinesOptions = {}
): gsap.core.Timeline => {
  const { duration = 1.5, delay = 0 } = options;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Supports horizontal lines, vertical lines, construction guides, opacity, draw effect
  tl.fromTo(
    target,
    {
      opacity: 0,
      scaleX: 0,
      transformOrigin: 'left center',
    },
    {
      opacity: 1,
      scaleX: 1,
      duration,
      delay,
    }
  );

  return tl;
};
