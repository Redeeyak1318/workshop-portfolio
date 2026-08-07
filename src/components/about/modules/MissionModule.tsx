import { BaseModule } from './BaseModule';

export const MissionModule = () => {
  return (
    <BaseModule label="CURRENT MISSION" className="about-mission h-full border-none bg-transparent p-0 hover:-translate-y-0 hover:border-transparent">
      <h3 className="text-3xl font-light leading-snug tracking-wide text-neutral-300 md:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
        Build scalable, <span className="text-neutral-100">calm architectures</span> that respect the user's focus and elevate the <span className="italic text-neutral-500">aesthetic experience</span> of software.
      </h3>
    </BaseModule>
  );
};
