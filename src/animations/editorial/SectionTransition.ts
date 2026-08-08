import gsap from 'gsap';
import { createEditorialReveal } from './EditorialReveal';
import { createWindTransition } from './WindTransition';
import { createGrainAnimator } from './GrainAnimator';

export interface SectionTransitionOptions {
  aboutTarget: gsap.DOMTarget | null;
  projectsTitle: gsap.DOMTarget;
  projectsCaption: gsap.DOMTarget;
  archiveLabel: gsap.DOMTarget;
  blueprintTarget: gsap.DOMTarget;
  grainTarget: gsap.DOMTarget;
  windTarget: gsap.DOMTarget;
  duration?: number;
}

export const createSectionTransition = (
  options: SectionTransitionOptions
): gsap.core.Timeline => {
  const { 
    aboutTarget, 
    projectsTitle, 
    projectsCaption, 
    archiveLabel, 
    blueprintTarget, 
    grainTarget, 
    windTarget, 
    duration = 1.2 
  } = options;
  
  const masterTl = gsap.timeline();

  // 1. Wind Sweep Layer (approx 800ms)
  masterTl.add(createWindTransition(windTarget, { duration: 0.8 }), 0);

  // 2. Grain Movement (subtle intensity increase)
  masterTl.add(createGrainAnimator(grainTarget, { duration: 0.4 }), 0.2);

  // 3. Blueprint Grid Drift (6-10px left, 100% -> 92% opacity)
  const resolvedBlueprint = gsap.utils.toArray(blueprintTarget);
  if (resolvedBlueprint.length > 0) {
    masterTl.to(resolvedBlueprint, {
      x: -8,
      opacity: 0.92,
      duration: duration,
      ease: 'power1.inOut'
    }, 0);
  }

  // 4. Section Hand-off: SYSTEM PROFILE loses emphasis
  if (aboutTarget) {
    const resolvedAbout = gsap.utils.toArray(aboutTarget);
    if (resolvedAbout.length > 0) {
      masterTl.to(resolvedAbout, {
        opacity: 0.9,
        y: -6,
        duration: 1,
        ease: 'power2.out'
      }, 0.1);
    }
  }

  // 5. Section Hand-off: Archive Label enters
  masterTl.add(createEditorialReveal(archiveLabel, { direction: 'left', distance: 10, duration: 0.6, stagger: 0.1 }), 0.3);

  // 6. Section Hand-off: SELECTED PROJECTS begins entering (after sweep starts)
  masterTl.add(createEditorialReveal(projectsTitle, { direction: 'up', distance: 20, duration: 1, stagger: 0.15 }), 0.5);

  // 7. Editorial Caption (250ms after title)
  masterTl.add(createEditorialReveal(projectsCaption, { direction: 'up', distance: 6, duration: 0.8 }), 0.5 + 0.25);

  return masterTl;
};
