import { BaseModule } from './BaseModule';

export const PhilosophyModule = () => {
  return (
    <BaseModule label="Engineering Philosophy" className="about-philosophy border-t border-neutral-900 md:border-none md:pt-0">
      <div className="flex flex-col gap-6 max-w-xl">
        <h3 className="text-2xl font-light leading-tight tracking-wide text-neutral-300 md:text-3xl">
          Systems should be designed with the precision of physical architecture. Every abstraction has weight, every component casts a shadow.
        </h3>
        <p className="text-sm font-light leading-relaxed text-neutral-500">
          I build scalable applications by minimizing cognitive load. Architecture must be predictable, constraints must be explicit, and the resulting experience must feel utterly calm.
        </p>
      </div>
    </BaseModule>
  );
};
