import gsap from 'gsap';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface EditorialRevealOptions {
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
}

export const createEditorialReveal = (
  target: gsap.DOMTarget,
  options: EditorialRevealOptions = {}
): gsap.core.Timeline => {
  const {
    direction = 'up',
    distance = 30,
    duration = 1,
    stagger = 0.1,
    delay = 0,
  } = options;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Safe target resolution pattern
  const resolvedTargets = gsap.utils.toArray(target);
  if (resolvedTargets.length === 0) {
    return tl;
  }

  let x = 0;
  let y = 0;

  switch (direction) {
    case 'up':
      y = distance;
      break;
    case 'down':
      y = -distance;
      break;
    case 'left':
      x = distance;
      break;
    case 'right':
      x = -distance;
      break;
    case 'none':
    default:
      break;
  }

  tl.fromTo(
    resolvedTargets,
    {
      opacity: 0,
      x,
      y,
      filter: 'blur(4px)',
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      duration,
      stagger,
      delay,
    }
  );

  return tl;
};
