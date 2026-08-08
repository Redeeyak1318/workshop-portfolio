import gsap from 'gsap';

export const editorialDepth = (tl: gsap.core.Timeline, q: gsap.utils.SelectorFunc) => {
  // Editorial Depth (Phase 7)
  // Background blueprint layers move slower
  // Content moves slightly faster
  // Images remain almost fixed.
  // Maximum movement 3-6px.
  
  const blueprints = q('.ed-blueprint');
  const content = q('.ed-content');
  const images = q('.ed-image');

  // We tie this to the same scrubbed timeline so it moves as the user scrolls
  if (blueprints.length) {
    gsap.set(blueprints, { yPercent: -2 }); // start slightly up
    tl.to(blueprints, { yPercent: 2, ease: 'none', duration: 3 }, 0); // moves down slowly
  }
  
  if (content.length) {
    gsap.set(content, { y: 15 }); // start slightly down
    tl.to(content, { y: -10, ease: 'none', duration: 3 }, 0); // moves up faster
  }
  
  if (images.length) {
    gsap.set(images, { y: 3 }); 
    tl.to(images, { y: -3, ease: 'none', duration: 3 }, 0); // almost fixed
  }
};
