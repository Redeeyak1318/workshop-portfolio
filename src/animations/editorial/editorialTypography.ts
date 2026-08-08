import gsap from 'gsap';

export const editorialTypography = (tl: gsap.core.Timeline, q: gsap.utils.SelectorFunc) => {
  const elements = q('.ed-typography');
  
  if (!elements.length) return;

  // Typeset typography assembly (No bounce, strictly structural < 20px)
  gsap.set(elements, {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    y: 15, // less than 20px
    opacity: 1
  });

  tl.to(elements, {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    y: 0,
    duration: 1.5,
    ease: 'power2.out',
    stagger: 0.1
  }, 0.3);
};
