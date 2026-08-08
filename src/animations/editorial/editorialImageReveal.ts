import gsap from 'gsap';

export const editorialImageReveal = (tl: gsap.core.Timeline, q: gsap.utils.SelectorFunc) => {
  const images = q('.ed-image');
  
  if (!images.length) return;

  // Darkroom development effect
  // Begin with higher grain, darker, lower contrast, slight blur
  gsap.set(images, {
    filter: 'blur(5px) contrast(0.6) brightness(0.6)',
    opacity: 0.5
  });

  tl.to(images, {
    filter: 'blur(0px) contrast(1) brightness(1)',
    opacity: 1,
    duration: 2.5,
    ease: 'power2.inOut',
  }, 0.2);
};
