import gsap from 'gsap';

export interface GrainAnimatorOptions {
  duration?: number;
  delay?: number;
}

export const createGrainAnimator = (
  target: gsap.DOMTarget,
  options: GrainAnimatorOptions = {}
): gsap.core.Timeline => {
  const { duration = 0.4, delay = 0 } = options;
  const tl = gsap.timeline();

  // Momentarily increase grain intensity. Very subtle. Duration 300-500ms. Then restore.
  tl.fromTo(
    target,
    {
      opacity: 0.03, // Base opacity from UI
    },
    {
      opacity: 0.08,
      duration: duration / 2,
      ease: 'sine.out',
      yoyo: true,
      repeat: 1,
      delay,
    }
  );

  return tl;
};
