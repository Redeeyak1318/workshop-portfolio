import { BaseModule } from './BaseModule';

export const LocationModule = () => {
  return (
    <BaseModule label="CURRENT LOCATION" className="h-full">
      <div className="flex h-full flex-col justify-end gap-2 pb-2 mt-12 md:mt-0">
        <span className="text-3xl font-light tracking-widest text-neutral-200 uppercase">
          ASSAM, INDIA
        </span>
        <span className="font-mono text-[8px] tracking-[0.3em] text-neutral-500">
          26.2006° N, 92.9376° E
        </span>
      </div>
    </BaseModule>
  );
};
