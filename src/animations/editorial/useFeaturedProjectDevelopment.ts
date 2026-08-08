'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RefObject } from 'react';

export const useFeaturedProjectDevelopment = (containerRef: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If reduced motion is requested, leave everything in its default CSS state (fully visible)
    if (prefersReducedMotion || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);
    const featuredImage = q('.ed-image');
    const imageMask = q('.editorial-mask');
    const featuredTitle = q('.editorial-title');
    const featuredMeta = q('.editorial-meta-text');
    const featuredAnnotations = q('.editorial-metadata, .coordinate-label, .vertical-annotation');

    // Safe target resolution
    const imgArr = gsap.utils.toArray(featuredImage);
    const maskArr = gsap.utils.toArray(imageMask);
    const titleArr = gsap.utils.toArray(featuredTitle);
    const metaArr = gsap.utils.toArray(featuredMeta);
    const annotationArr = gsap.utils.toArray(featuredAnnotations);

    // Initial Photographic Negative State (Phase 1)
    if (imgArr.length > 0) {
      gsap.set(imgArr, { 
        filter: 'blur(12px) contrast(0.4) brightness(0.2) grayscale(0.2)',
        opacity: 0.2
      });
    }
    
    // Initial Mask State (Completely hidden center)
    if (maskArr.length > 0) {
      gsap.set(maskArr, { 
        '--mask-size': '0%'
      });
    }

    if (titleArr.length > 0) gsap.set(titleArr, { opacity: 0, y: 15 });
    if (metaArr.length > 0) gsap.set(metaArr, { opacity: 0, y: 10 });
    if (annotationArr.length > 0) gsap.set(annotationArr, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 10%',
        scrub: 1.5, 
      }
    });

    // Phase 2, 3, 4: Image Development (Dark Negative -> Exposed Print)
    if (imgArr.length > 0 && maskArr.length > 0) {
      // Expose the ink spread (mask size expands)
      tl.to(maskArr, {
        '--mask-size': '120%', // Expands the radial mask out to the edges
        ease: 'power2.inOut',
      }, 0);

      // Develop the photograph (blur clears, contrast normalizes)
      tl.to(imgArr, {
        filter: 'blur(0px) contrast(1) brightness(1) grayscale(0)',
        opacity: 1,
        ease: 'power1.inOut',
      }, 0);
    }

    // Phase 6: Project Title (becomes readable slightly before full clarity)
    if (titleArr.length > 0) {
      tl.to(titleArr, { opacity: 1, y: 0, ease: 'power2.out' }, 0.4);
    }

    // Phase 5: Technical Marks (Asset ID, coordinates, metadata)
    if (metaArr.length > 0) {
      tl.to(metaArr, { opacity: 1, y: 0, stagger: 0.05, ease: 'power2.out' }, 0.6);
    }

    if (annotationArr.length > 0) {
      tl.to(annotationArr, { opacity: 1, ease: 'power1.inOut' }, 0.7);
    }

  }, { scope: containerRef });
};
