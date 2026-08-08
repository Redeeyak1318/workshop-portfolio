import gsap from 'gsap';

export const editorialBlueprintReveal = (tl: gsap.core.Timeline, q: gsap.utils.SelectorFunc) => {
  const elements = q('.ed-blueprint');
  
  if (!elements.length) return;

  // Set initial state for structural drawing (using clip-path instead of opacity)
  gsap.set(elements, {
    clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
    opacity: 1 // Rely on intrinsic opacity
  });

  // Construct lines physically
  tl.to(elements, {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    duration: 1.8,
    ease: 'power2.inOut',
    stagger: 0.1
  }, 0.2);
};
