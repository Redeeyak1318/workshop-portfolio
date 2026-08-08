import { BaseModule } from './BaseModule';

export const MissionModule = () => {
  return (
    <BaseModule label="CURRENT MISSION" className="about-mission h-full border-none bg-transparent p-0 hover:-translate-y-0 hover:border-transparent">
      <h3 className="text-3xl font-light leading-snug tracking-wide text-neutral-300 md:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
        <span className="about-mission-block inline-block">I engineer <span className="text-neutral-100">structures</span>, not pages.</span>{' '}
        <span className="about-mission-block inline-block">True engineering dissolves into the background,</span>{' '}
        <span className="about-mission-block inline-block">leaving only a <span className="italic text-neutral-500">calm, invisible system</span> that amplifies human focus.</span>
      </h3>
    </BaseModule>
  );
};
